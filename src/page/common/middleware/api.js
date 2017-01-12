// ajax 
import net from 'net';
import merge from 'lodash.merge';
import CGI_PATH from '../constants/cgiPath';

export default store => next => action => {

    let API_OPT = action['API'];

    if (!API_OPT) {
        return next(action);
    }

    // let ACTION_TYPE = action['type'];
    let { cgiName, params, opts = {} } = API_OPT;

    let { onSuccess, onError, ajaxType = 'GET', param, localData } = params;

    // 触发下一个action
    let nextAction = function(type, param, opts) {
        action['type'] = type;
        action['opts'] = opts;
        delete param['onSuccess'];
        delete param['onError'];
        const nextRequestAction = merge({}, action, param);
        return nextRequestAction;
    };

    params.data = null;
    // 触发正在请求的action
    let result = next(nextAction(cgiName + '_ON', params, opts));

    net.ajaxInit({
        dataReturnSuccessCondition: function(data) {
            return !data.ret || !data.retcode;
        }
    });

    net.ajax({
        url: CGI_PATH[cgiName],
        ajaxType: ajaxType,
        param,
        localData,
        success: data => {
            onSuccess && onSuccess(data);
            params.data = data;
            //  触发请求成功的action
            return next(nextAction(cgiName + '_SUCCESS', params, opts));
        },
        error: data => {
            onError && onError(data);
            //  触发请求失败的action
            return next(nextAction(cgiName + '_ERROR', params, opts));
        }
    });

    return result;
};

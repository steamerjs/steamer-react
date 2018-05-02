// ajax for mobx, not a middleware actually, but for convinience, we put it here
import net from 'net';
import CGI_PATH from '../constants/cgiPath';

export default function request(cgiName, params, opts = {}) {
    let {
        onSuccess,
        onError,
        ajaxType = 'GET',
        param,
        localData
    } = params;

    net.ajax({
        url: params.url || CGI_PATH[cgiName],
        ajaxType: ajaxType,
        param,
        localData,
        success: data => {
            onSuccess && onSuccess(data);
        },
        error: data => {
            onError && onError(data);
        }
    });
}

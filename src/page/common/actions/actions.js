import { API_REQUEST } from '../constants/cgiPath';


export function request(cgiName, params, opts = {}, requiredFields = []) {
    return (dispatch, getState) => {
        var action = {
            'API': {
                cgiName: cgiName,
                params: params,
                opts: opts
            },
            type: API_REQUEST
        };
        return dispatch(action);
    };
}
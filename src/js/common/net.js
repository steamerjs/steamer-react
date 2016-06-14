/* @example
    net.ajax({
        url: baseUrl + "get_material_info.fcg",
        param: data,
        type: 'GET',
        success: function(data){
            // alert(data);
        },
        error: function(xhr){
        }
    });

**/

function ajax(options) {
    let xhr = new XMLHttpRequest(),
        url = options.url,
        paramObj = options.param,
        success_cb = options.success,
        error_cb = options.error,
        uploadProgress = options.uploadProgress,
        method = options.type || 'GET';
        method = method.toUpperCase();

    let cgiSt = Date.now();

    let onDataReturn = data => {
        if(data.ret === 0 || data.ret === -1) {
            success_cb && success_cb(data);
        } 
        else {
            error_cb && error_cb(data);
        }
    };

    // 如果本地已经从别的地方获取到数据，就不用请求了
    if(options.localData) {
        onDataReturn(options.localData);
        return;
    }

    try{
        xhr.onreadystatechange=function() {
            if (xhr.readyState==4) {
                if(xhr.status==200) {
                    let data = JSON.parse(xhr.responseText);
                    onDataReturn(data);
                    
                }
                else {
                    error_cb && error_cb({
                        retcode: xhr.status
                    });

                }
            }
        };

        let paramArray = [], paramString = '';
        for(let key in paramObj){
            paramArray.push(key + '=' + encodeURIComponent(paramObj[key]));
        }

        if (method === 'FORM') {
            let formData = new FormData();
    　　　　formData.append('file', paramObj['file']);
    　　　　formData.append('bkn', bkn);
            xhr.upload.onprogress = function(e) {
                if (e.lengthComputable) {
                    uploadProgress(e.loaded, e.total);
                }
            };
            xhr.open('POST', url);
            xhr.withCredentials = true;
    　　　　 xhr.send(formData);
        } 
        else if (method === 'JSONP') {
            method = 'GET';

            if (!paramObj['callback']) {
                error_cb && error_cb({ret: -1});
            }

            window[paramObj['callback']] = function(data) {
                onDataReturn(data);
            };
            url += (url.indexOf('?') > -1 ? '&' : '?') + paramArray.join('&');
            var script = document.createElement("script");
            var head = document.getElementsByTagName("head")[0];
            script.src = url;
            head.appendChild(script);
        }
        else {
            
            if(method === 'GET'){
                url += (url.indexOf('?') > -1 ? '&' : '?') + paramArray.join('&');
            }

            xhr.open(method,url,true);
            xhr.withCredentials = true;
            xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
            xhr.send(method === 'POST' ? paramArray.join('&') : '');
        }
       
    } catch (e){
        console.error(e);
    }
}

let net = {
    ajax   
};

export default net;

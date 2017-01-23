/**
 * steamer-browserutils
 * github: https://github.com/SteamerTeam/steamer-browserutils
 * npm: https://www.npmjs.com/package/steamer-browserutils
 * version: 1.0.0
 * date: 2016.01.10
 */

/**
 * @common functions
 * @author heyli
 * @date 2016.07.30
 */

/**
 * stringify value
 * @param  {String} val [value]
 * @return {String}     [stringified value]
 */
export function _stringify(val) {
	var returnVal = isObject(val) ? JSON.stringify(val) : val;
	return returnVal;
}

/**
 * parse string
 * @param  {String} val [value]
 * @return {String}     [object value]
 */
export function _parse(val) {
	var returnVal = isObject(val) ? val : JSON.parse(val);
	return returnVal;
}
/**
 * @class features
 * @author heyli
 * @date 2016.07.30
 */


/**
 * [extend object]
 * @param  {Object} src [src object]
 * @param  {Object} des [extended object]
 * @param  {Integer} d   [depth]
 */
export function extend(src, des, d) {
	var depth = (d) ? d : 0;
	for (var key in src) {
		var isObjectVal = isObject(src[key]);
		var isArrayVal = isArray(src[key]);
		if (isObjectVal || isArrayVal) {
			if (depth) {
				if (isObjectVal) {
	    			des[key] = {};
	    			extend(src[key], des[key], depth - 1);
	    		}
	    		else if (isArrayVal) {
	    			des[key] = [];
	    			extend(src[key], des[key], depth - 1);
	    		}
    		}
		}
		else {
			des[key] = src[key];
		}
	} 
}
/**
 * @description Browser cookie processing
 * @author heyli
 * @date 2016.07.30
 * 正则表达式网站  http://www.regexr.com/
 */

/**
 * set cookie
 * @param {String} key    [key]
 * @param {String} val    [value]
 * @param {String} days   [days]
 * @param {String} path   [path]
 * @param {String} domain [domain]
 */
export function setCookie(key, val, days, path, domain) {
	var expire = new Date();
	expire.setTime(expire.getTime() + (days ? 3600000 * 24 * days : 30 * 24 * 60 * 60 * 1000)); // 默认1个月
	document.cookie = key + '=' + encodeURIComponent(_stringify(val)) + ';expires=' + expire.toGMTString() + ';path=' + (path ? path : '/') + ';' + (domain ? ('domain=' + domain + ';') : '');
}

/**
 * del cookie
 * @param  {String} key    [key]
 * @param  {String} path   [path]
 * @param  {String} domain [domain]
 */
export function delCookie(key, path, domain) {
	var expires = new Date(0);
	document.cookie = key + '=;expires=' + expires.toUTCString() + ';path=' + (path ? path : '/') + ';' + (domain ? ('domain=' + domain + ';') : '');
}

/**
 * get cookie
 * @param  {[type]} key [key]
 * @return {String}     [cookie value]
 */
export function getCookie(key) {
	var r = new RegExp("(?:^|;+|\\s+)" + key + "=([^;]*)");
        var m = window.document.cookie.match(r);
        return (!m ? "" : m[1]) || null;
}
/**
 * @date functions
 * @author heyli
 * @date 2016.07.30
 */


/**      
 * 对Date的扩展，将 Date 转化为指定格式的String      
 * 月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(q) 可以用 1-2 个占位符      
 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)      
 * eg:      
 * formatDate(new Date(),'yyyy-MM-dd') ==> 2014-03-02
 * formatDate(new Date(),'yyyy-MM-dd hh:mm') ==> 2014-03-02 05:04
 * formatDate(new Date(),'yyyy-MM-dd HH:mm') ==> 2014-03-02 17:04
 * formatDate(new Date(),'yyyy-MM-dd hh:mm:ss.S') ==> 2006-07-02 08:09:04.423      
 * formatDate(new Date(),'yyyy-MM-dd E HH:mm:ss') ==> 2009-03-10 二 20:09:04      
 * formatDate(new Date(),'yyyy-MM-dd EE hh:mm:ss') ==> 2009-03-10 周二 08:09:04      
 * formatDate(new Date(),'yyyy-MM-dd EEE hh:mm:ss') ==> 2009-03-10 星期二 08:09:04      
 * formatDate(new Date(),'yyyy-M-d h:m:s.S') ==> 2006-7-2 8:9:4.18      
*/   

var formatDate = function(dt, fmt) { 

    if (!dt) {
        return;
    }

    var date = isDate(dt) ? dt : new Date(dt);

    var o = {         
        "M+" : date.getMonth() + 1, //月份         
        "d+" : date.getDate(), //日         
        "h+" : date.getHours() % 12 === 0 ? 12 : date.getHours() % 12, //小时         
        "H+" : date.getHours(), //小时         
        "m+" : date.getMinutes(), //分         
        "s+" : date.getSeconds(), //秒         
        "q+" : Math.floor((date.getMonth() + 3) / 3), //季度         
        "S" : date.getMilliseconds() //毫秒         
    };         
    
    var week = {         
        "0" : "\u65e5",         
        "1" : "\u4e00",         
        "2" : "\u4e8c",         
        "3" : "\u4e09",         
        "4" : "\u56db",         
        "5" : "\u4e94",         
        "6" : "\u516d"        
    };      

    if (/(y+)/.test(fmt)) {         
        fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));   
    }         

    if (/(E+)/.test(fmt)) {    
        fmt=fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "\u661f\u671f" : "\u5468") : "")+week[date.getDay()+""]);         
    }         
    
    for (var k in o) {         
        if (new RegExp("("+ k +")").test(fmt)) {         
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));         
        }         
    }         
    
    return fmt;         
};

export {formatDate};
/**
 * @browser localstorage processing
 * @author heyli
 * @date 2016.07.30
 */

/**
 * set localstorage
 * @param {String} key [key]
 * @param {String} val [value]
 */
export function setItem(key, val){
    val = _stringify(val);
    if (typeof(window.Storage) !== 'undefined') {
        localStorage.setItem(key,val);
    } 
    else {
        setCookie(key,val);
    }
}

/**
 * get localstorage
 * @param  {String} key [key]
 * @return {String}     [value]
 */
export function getItem(key){
    if (typeof(window.Storage) !== 'undefined') {
        return localStorage.getItem(key);
    } 
    else {
        return getCookie(key);
    }
}

/**
 * delete localstorage
 * @param  {String} key [key]
 * @return {String}     [value]
 */
export function delItem(key) {
    if (typeof(window.Storage) !== 'undefined') {
        delete localStorage[key];
    } 
    else {
        delCookie(key);
    }
}
/**
 * @call native api
 * @author heyli
 * @date 2016.07.30
 */

export function callApi(url) {
	var iframe = document.createElement('iframe');
	iframe.src = url;
	iframe.height = 0;
	iframe.width = 0;
	iframe.style.cssText = "display: none";

	document.body.appendChild(iframe);
	
	setTimeout(function() {
		document.body.removeChild(iframe);
		iframe = null;
	}, 2000);
}


/**
 * @browser safe functions
 * @author heyli
 * @date 2016.07.30
 */

/**
 * html实体编码
 * @param  {String} str html文本
 * @return {String}     经html实体编码后的html文本
 */
export function encodeHTML(str) {
    //&gt; 实体标签
    //&#34; Unicode 编码（可以用charCodeAt方法查看某字符对应的unicode编码）
    var s = "";
    if(!str || str.length == 0) return "";
    s = str.replace(/&/g, "&#38;");
    s = s.replace(/</g, "&lt;");
    s = s.replace(/>/g, "&gt;");
    s = s.replace(/\'/g, "&#39;");
    s = s.replace(/\"/g, "&quot;");
    //空格和换行其实可以不转
    s = s.replace(/ /g, "&nbsp;");
    s = s.replace(/\n/g, "<br>");
    return s;
}

/**
 * html实体编码转义
 * @param  {String} str html文本
 * @return {String}     经html实体编码转义后的html文本
 */
export function decodeHTML(str) {
    var s = "";
    if (str.length == 0) return "";
    s = str.replace(/&#38;/g, "&");
    s = s.replace(/&lt;/g, "<");
    s = s.replace(/&gt;/g, ">");
    s = s.replace(/&#39;/g, "\'");
    s = s.replace(/&quot;/g, "\"");
    s = s.replace(/&nbsp;/g, " ");
    s = s.replace(/<br>/g, "\n");
    return s;
}
/**
 * @description JS Type Checking
 * @author heyli
 * @date 2016.07.30
 */

export function isType(type, obj) {
	return Object.prototype.toString.call(obj) === '[object ' + type + ']';
}

export function isBoolean(obj) {
	return isType('Boolean', obj);
}

export function isNumber(obj) {
	return isType('Number', obj);
}

export function isString(obj) {
	return isType('String', obj);
}

export function isFunction(obj) {
	return isType('Function', obj);
}

export function isArray(obj) {
	return isType('Array', obj);
}

export function isDate(obj) {
	return isType('Date', obj);
}

export function isRegExp(obj) {
	return isType('RegExp', obj);
}

export function isObject(obj) {
	return isType('Object', obj);
}

export function isError(obj) {
	return isType('Error', obj);
}



/**
 * @description JS url processing
 * @author heyli
 * @date 2016.07.30
 */

/**
 * get hash param
 * @param  {String} key [key]
 * @return {String}     [value]
 */
export function getHash(key) {
    var m = window.location.hash.match(new RegExp('(#|&)' + key + '=([^&#]*)(#|&|$)'));
    return !m ? "" : decodeURIComponent(m[2]);
}

/**
 * get query param
 * @param  {String} key [key]
 * @return {String}     [value]
 */
export function getQuery(key) {
    var m = window.location.search.match(new RegExp('(\\?|&)'+ key + '=([^&]*)(#|&|$)'));
    return !m ? "":decodeURIComponent(m[2]);
}

/**
 * get query or hash param
 * @param  {String} key [key]
 * @return {String}     [value]
 */
export function getUrlParam(key) {
	var m = window.location.search.match(new RegExp('(\\?|#|&)'+ key + '=([^&]*)(#|&|$)'));
    
    if (!m) {
    	m = window.location.hash.match(new RegExp('(#|&)' + key + '=([^&#]*)(#|&|$)'));
    }

    return !m ? "":decodeURIComponent(m[2]);
}
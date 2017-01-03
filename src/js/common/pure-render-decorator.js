/**
 * pure render 非immutable版
 */

'use strict';

var maxDep = 6; // 比较的最大深度

/**
 * [type utils]
 * @type {Array}
 */
var jsType = ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object", "Error"];
var dUtil = {};

for (var i = 0; i < jsType.length; i++) {
    (function(k) {
            dUtil['is' + jsType[k]] = function(obj) {
                return Object.prototype.toString.call(obj) === '[object ' + jsType[k] + ']';
            };
        }
    )(i);
}

var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * [value compare]
 * @param  {[type]} valA  [description]
 * @param  {[type]} valB  [description]
 * @param  {[type]} depth [description]
 * @return {[type]}       [description]
 */
function valCompare(valA, valB, depth) {
    
    if (dUtil.isFunction(valA)) {
        if (valA.hasOwnProperty('name') && valB.hasOwnProperty('name') 
            && valA.name === valB.name) {
                return true;
        }
        return false;
    }

    if (dUtil.isString(valA) || dUtil.isNumber(valA) || dUtil.isBoolean(valA) || dUtil.isDate(valA)) {
        if (valA !== valB) {
            return false;
        }
        return true;
    }

    if (dUtil.isObject(valA) || dUtil.isArray(valA)) {
        return deepEqual(valA, valB, depth);
    }

    if (valA !== valB) {
        return false;
    }

    return true;
}

/**
 * [Not to be compared properties]
 * @param  {[type]} key [description]
 * @return {[type]}     [description]
 */
function skipKeys(key) {
    var keyMaps = {
        '$$typeof': 1,
        '_owner': 1,
        '_store': 1,
        '_self': 1,
        '_source': 1,
    };

    if (keyMaps[key]) {
        return true;
    }
}


/**
 * [test whether two values are equal]
 * @param  {[type]} objA  [description]
 * @param  {[type]} objB  [description]
 * @param  {[type]} depth [description]
 * @return {[type]}       [description]
 */
function deepEqual(objA, objB, depth) {

    if (depth > maxDep) {
        return false;
    }

    ++depth;

    if (!dUtil.isObject(objA) && !dUtil.isArray(objB)) {
        if (!valCompare(objA, objB)) {
            return false;
        }
    }

    var keysA = Object.keys(objA || {});
    var keysB = Object.keys(objB || {});

    if (keysA.length !== keysB.length) {
        return false;
    }
   
    for (var i = 0; i < keysA.length; i++) {
        
        var comPareValA = objA[keysA[i]],
            comPareValB = objB[keysB[i]];

        if (keysA[0] === '$$typeof' && keysA[i] === 'children') {
            return true;
        }
        else if (keysA[0] === '$$typeof' && skipKeys(keysA[i])) {
            continue;
        }

        var bHasOwnProperty = hasOwnProperty.bind(objB);
        if (!bHasOwnProperty(keysA[i])) {
            return false;
        }

        if (!valCompare(comPareValA, comPareValB, depth)) {
            return false;
        }

    }

    return true;
}

/**
 * [compare props and state]
 * @param  {[type]} instance  [description]
 * @param  {[type]} nextProps [description]
 * @param  {[type]} nextState [description]
 * @return {[type]}           [description]
 */
function deepCompare(instance, nextProps, nextState) {
    var result = !deepEqual(instance.props, nextProps, 1) || !deepEqual(instance.state, nextState, 1);
    return result;
}

/**
 * [rewite shouldComponentUpdate]
 * @param  {[type]} nextProps [description]
 * @param  {[type]} nextState [description]
 * @return {[type]}           [description]
 */
function shouldComponentUpdate(nextProps, nextState) {
    return deepCompare(this, nextProps, nextState);
}

/**
 * [decorator wrapper]
 * @param  {[type]} component [description]
 * @return {[type]}           [description]
 */
function pureRenderDecorator(component) {
    component.prototype.shouldComponentUpdate = shouldComponentUpdate;
}


module.exports = pureRenderDecorator;
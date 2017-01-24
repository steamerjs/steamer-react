/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "//localhost:9000/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(111);


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to match `RegExp` flags from their coerced string values. */
	var reFlags = /\w*$/;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;

	/** Used to identify `toStringTag` values supported by `_.clone`. */
	var cloneableTags = {};
	cloneableTags[argsTag] = cloneableTags[arrayTag] =
	cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
	cloneableTags[boolTag] = cloneableTags[dateTag] =
	cloneableTags[float32Tag] = cloneableTags[float64Tag] =
	cloneableTags[int8Tag] = cloneableTags[int16Tag] =
	cloneableTags[int32Tag] = cloneableTags[mapTag] =
	cloneableTags[numberTag] = cloneableTags[objectTag] =
	cloneableTags[regexpTag] = cloneableTags[setTag] =
	cloneableTags[stringTag] = cloneableTags[symbolTag] =
	cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
	cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	cloneableTags[errorTag] = cloneableTags[funcTag] =
	cloneableTags[weakMapTag] = false;

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    return freeProcess && freeProcess.binding('util');
	  } catch (e) {}
	}());

	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

	/**
	 * Adds the key-value `pair` to `map`.
	 *
	 * @private
	 * @param {Object} map The map to modify.
	 * @param {Array} pair The key-value pair to add.
	 * @returns {Object} Returns `map`.
	 */
	function addMapEntry(map, pair) {
	  // Don't return `map.set` because it's not chainable in IE 11.
	  map.set(pair[0], pair[1]);
	  return map;
	}

	/**
	 * Adds `value` to `set`.
	 *
	 * @private
	 * @param {Object} set The set to modify.
	 * @param {*} value The value to add.
	 * @returns {Object} Returns `set`.
	 */
	function addSetEntry(set, value) {
	  // Don't return `set.add` because it's not chainable in IE 11.
	  set.add(value);
	  return set;
	}

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array ? array.length : 0;

	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	/**
	 * A specialized version of `_.reduce` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @param {boolean} [initAccum] Specify using the first element of `array` as
	 *  the initial value.
	 * @returns {*} Returns the accumulated value.
	 */
	function arrayReduce(array, iteratee, accumulator, initAccum) {
	  var index = -1,
	      length = array ? array.length : 0;

	  if (initAccum && length) {
	    accumulator = array[++index];
	  }
	  while (++index < length) {
	    accumulator = iteratee(accumulator, array[index], index, array);
	  }
	  return accumulator;
	}

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	/** Used for built-in method references. */
	var arrayProto = Array.prototype,
	    funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined,
	    Symbol = root.Symbol,
	    Uint8Array = root.Uint8Array,
	    getPrototype = overArg(Object.getPrototypeOf, Object),
	    objectCreate = Object.create,
	    propertyIsEnumerable = objectProto.propertyIsEnumerable,
	    splice = arrayProto.splice;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols,
	    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
	    nativeKeys = overArg(Object.keys, Object),
	    nativeMax = Math.max;

	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView'),
	    Map = getNative(root, 'Map'),
	    Promise = getNative(root, 'Promise'),
	    Set = getNative(root, 'Set'),
	    WeakMap = getNative(root, 'WeakMap'),
	    nativeCreate = getNative(Object, 'create');

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	}

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  return this.has(key) && delete this.__data__[key];
	}

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	}

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	}

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  return true;
	}

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  return getMapData(this, key)['delete'](key);
	}

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  getMapData(this, key).set(key, value);
	  return this;
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  this.__data__ = new ListCache(entries);
	}

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	}

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  return this.__data__['delete'](key);
	}

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var cache = this.__data__;
	  if (cache instanceof ListCache) {
	    var pairs = cache.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      return this;
	    }
	    cache = this.__data__ = new MapCache(pairs);
	  }
	  cache.set(key, value);
	  return this;
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  // Safari 9 makes `arguments.length` enumerable in strict mode.
	  var result = (isArray(value) || isArguments(value))
	    ? baseTimes(value.length, String)
	    : [];

	  var length = result.length,
	      skipIndexes = !!length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * This function is like `assignValue` except that it doesn't assign
	 * `undefined` values.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignMergeValue(object, key, value) {
	  if ((value !== undefined && !eq(object[key], value)) ||
	      (typeof key == 'number' && value === undefined && !(key in object))) {
	    object[key] = value;
	  }
	}

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    object[key] = value;
	  }
	}

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	/**
	 * The base implementation of `_.assign` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return object && copyObject(source, keys(source), object);
	}

	/**
	 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
	 * traversed objects.
	 *
	 * @private
	 * @param {*} value The value to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @param {boolean} [isFull] Specify a clone including symbols.
	 * @param {Function} [customizer] The function to customize cloning.
	 * @param {string} [key] The key of `value`.
	 * @param {Object} [object] The parent object of `value`.
	 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
	 * @returns {*} Returns the cloned value.
	 */
	function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
	  var result;
	  if (customizer) {
	    result = object ? customizer(value, key, object, stack) : customizer(value);
	  }
	  if (result !== undefined) {
	    return result;
	  }
	  if (!isObject(value)) {
	    return value;
	  }
	  var isArr = isArray(value);
	  if (isArr) {
	    result = initCloneArray(value);
	    if (!isDeep) {
	      return copyArray(value, result);
	    }
	  } else {
	    var tag = getTag(value),
	        isFunc = tag == funcTag || tag == genTag;

	    if (isBuffer(value)) {
	      return cloneBuffer(value, isDeep);
	    }
	    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
	      if (isHostObject(value)) {
	        return object ? value : {};
	      }
	      result = initCloneObject(isFunc ? {} : value);
	      if (!isDeep) {
	        return copySymbols(value, baseAssign(result, value));
	      }
	    } else {
	      if (!cloneableTags[tag]) {
	        return object ? value : {};
	      }
	      result = initCloneByTag(value, tag, baseClone, isDeep);
	    }
	  }
	  // Check for circular references and return its corresponding clone.
	  stack || (stack = new Stack);
	  var stacked = stack.get(value);
	  if (stacked) {
	    return stacked;
	  }
	  stack.set(value, result);

	  if (!isArr) {
	    var props = isFull ? getAllKeys(value) : keys(value);
	  }
	  arrayEach(props || value, function(subValue, key) {
	    if (props) {
	      key = subValue;
	      subValue = value[key];
	    }
	    // Recursively populate clone (susceptible to call stack limits).
	    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
	  });
	  return result;
	}

	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} prototype The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	function baseCreate(proto) {
	  return isObject(proto) ? objectCreate(proto) : {};
	}

	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}

	/**
	 * The base implementation of `getTag`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  return objectToString.call(value);
	}

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
	}

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeysIn(object) {
	  if (!isObject(object)) {
	    return nativeKeysIn(object);
	  }
	  var isProto = isPrototype(object),
	      result = [];

	  for (var key in object) {
	    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * The base implementation of `_.merge` without support for multiple sources.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {number} srcIndex The index of `source`.
	 * @param {Function} [customizer] The function to customize merged values.
	 * @param {Object} [stack] Tracks traversed source values and their merged
	 *  counterparts.
	 */
	function baseMerge(object, source, srcIndex, customizer, stack) {
	  if (object === source) {
	    return;
	  }
	  if (!(isArray(source) || isTypedArray(source))) {
	    var props = baseKeysIn(source);
	  }
	  arrayEach(props || source, function(srcValue, key) {
	    if (props) {
	      key = srcValue;
	      srcValue = source[key];
	    }
	    if (isObject(srcValue)) {
	      stack || (stack = new Stack);
	      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
	    }
	    else {
	      var newValue = customizer
	        ? customizer(object[key], srcValue, (key + ''), object, source, stack)
	        : undefined;

	      if (newValue === undefined) {
	        newValue = srcValue;
	      }
	      assignMergeValue(object, key, newValue);
	    }
	  });
	}

	/**
	 * A specialized version of `baseMerge` for arrays and objects which performs
	 * deep merges and tracks traversed objects enabling objects with circular
	 * references to be merged.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {string} key The key of the value to merge.
	 * @param {number} srcIndex The index of `source`.
	 * @param {Function} mergeFunc The function to merge values.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @param {Object} [stack] Tracks traversed source values and their merged
	 *  counterparts.
	 */
	function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
	  var objValue = object[key],
	      srcValue = source[key],
	      stacked = stack.get(srcValue);

	  if (stacked) {
	    assignMergeValue(object, key, stacked);
	    return;
	  }
	  var newValue = customizer
	    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
	    : undefined;

	  var isCommon = newValue === undefined;

	  if (isCommon) {
	    newValue = srcValue;
	    if (isArray(srcValue) || isTypedArray(srcValue)) {
	      if (isArray(objValue)) {
	        newValue = objValue;
	      }
	      else if (isArrayLikeObject(objValue)) {
	        newValue = copyArray(objValue);
	      }
	      else {
	        isCommon = false;
	        newValue = baseClone(srcValue, true);
	      }
	    }
	    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
	      if (isArguments(objValue)) {
	        newValue = toPlainObject(objValue);
	      }
	      else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
	        isCommon = false;
	        newValue = baseClone(srcValue, true);
	      }
	      else {
	        newValue = objValue;
	      }
	    }
	    else {
	      isCommon = false;
	    }
	  }
	  if (isCommon) {
	    // Recursively merge objects and arrays (susceptible to call stack limits).
	    stack.set(srcValue, newValue);
	    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
	    stack['delete'](srcValue);
	  }
	  assignMergeValue(object, key, newValue);
	}

	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = array;
	    return apply(func, this, otherArgs);
	  };
	}

	/**
	 * Creates a clone of  `buffer`.
	 *
	 * @private
	 * @param {Buffer} buffer The buffer to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Buffer} Returns the cloned buffer.
	 */
	function cloneBuffer(buffer, isDeep) {
	  if (isDeep) {
	    return buffer.slice();
	  }
	  var result = new buffer.constructor(buffer.length);
	  buffer.copy(result);
	  return result;
	}

	/**
	 * Creates a clone of `arrayBuffer`.
	 *
	 * @private
	 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */
	function cloneArrayBuffer(arrayBuffer) {
	  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
	  return result;
	}

	/**
	 * Creates a clone of `dataView`.
	 *
	 * @private
	 * @param {Object} dataView The data view to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned data view.
	 */
	function cloneDataView(dataView, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
	  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
	}

	/**
	 * Creates a clone of `map`.
	 *
	 * @private
	 * @param {Object} map The map to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned map.
	 */
	function cloneMap(map, isDeep, cloneFunc) {
	  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
	  return arrayReduce(array, addMapEntry, new map.constructor);
	}

	/**
	 * Creates a clone of `regexp`.
	 *
	 * @private
	 * @param {Object} regexp The regexp to clone.
	 * @returns {Object} Returns the cloned regexp.
	 */
	function cloneRegExp(regexp) {
	  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
	  result.lastIndex = regexp.lastIndex;
	  return result;
	}

	/**
	 * Creates a clone of `set`.
	 *
	 * @private
	 * @param {Object} set The set to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned set.
	 */
	function cloneSet(set, isDeep, cloneFunc) {
	  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
	  return arrayReduce(array, addSetEntry, new set.constructor);
	}

	/**
	 * Creates a clone of the `symbol` object.
	 *
	 * @private
	 * @param {Object} symbol The symbol object to clone.
	 * @returns {Object} Returns the cloned symbol object.
	 */
	function cloneSymbol(symbol) {
	  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
	}

	/**
	 * Creates a clone of `typedArray`.
	 *
	 * @private
	 * @param {Object} typedArray The typed array to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned typed array.
	 */
	function cloneTypedArray(typedArray, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;

	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];

	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;

	    assignValue(object, key, newValue === undefined ? source[key] : newValue);
	  }
	  return object;
	}

	/**
	 * Copies own symbol properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbols(source, object) {
	  return copyObject(source, getSymbols(source), object);
	}

	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return baseRest(function(object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;

	    customizer = (assigner.length > 3 && typeof customizer == 'function')
	      ? (length--, customizer)
	      : undefined;

	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}

	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return baseGetAllKeys(object, keys, getSymbols);
	}

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	/**
	 * Creates an array of the own enumerable symbol properties of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;

	// Fallback for data views, maps, sets, and weak maps in IE 11,
	// for data views in Edge < 14, and promises in Node.js.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = objectToString.call(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : undefined;

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}

	/**
	 * Initializes an array clone.
	 *
	 * @private
	 * @param {Array} array The array to clone.
	 * @returns {Array} Returns the initialized clone.
	 */
	function initCloneArray(array) {
	  var length = array.length,
	      result = array.constructor(length);

	  // Add properties assigned by `RegExp#exec`.
	  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
	    result.index = array.index;
	    result.input = array.input;
	  }
	  return result;
	}

	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneObject(object) {
	  return (typeof object.constructor == 'function' && !isPrototype(object))
	    ? baseCreate(getPrototype(object))
	    : {};
	}

	/**
	 * Initializes an object clone based on its `toStringTag`.
	 *
	 * **Note:** This function only supports cloning values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @param {string} tag The `toStringTag` of the object to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneByTag(object, tag, cloneFunc, isDeep) {
	  var Ctor = object.constructor;
	  switch (tag) {
	    case arrayBufferTag:
	      return cloneArrayBuffer(object);

	    case boolTag:
	    case dateTag:
	      return new Ctor(+object);

	    case dataViewTag:
	      return cloneDataView(object, isDeep);

	    case float32Tag: case float64Tag:
	    case int8Tag: case int16Tag: case int32Tag:
	    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
	      return cloneTypedArray(object, isDeep);

	    case mapTag:
	      return cloneMap(object, isDeep, cloneFunc);

	    case numberTag:
	    case stringTag:
	      return new Ctor(object);

	    case regexpTag:
	      return cloneRegExp(object);

	    case setTag:
	      return cloneSet(object, isDeep, cloneFunc);

	    case symbolTag:
	      return cloneSymbol(object);
	  }
	}

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}

	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike(object) && isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq(object[index], value);
	  }
	  return false;
	}

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	  return value === proto;
	}

	/**
	 * This function is like
	 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * except that it includes inherited enumerable properties.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function nativeKeysIn(object) {
	  var result = [];
	  if (object != null) {
	    for (var key in Object(object)) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) ||
	      objectToString.call(value) != objectTag || isHostObject(value)) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return (typeof Ctor == 'function' &&
	    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
	}

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

	/**
	 * Converts `value` to a plain object flattening inherited enumerable string
	 * keyed properties of `value` to own properties of the plain object.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {Object} Returns the converted plain object.
	 * @example
	 *
	 * function Foo() {
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.assign({ 'a': 1 }, new Foo);
	 * // => { 'a': 1, 'b': 2 }
	 *
	 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
	 * // => { 'a': 1, 'b': 2, 'c': 3 }
	 */
	function toPlainObject(value) {
	  return copyObject(value, keysIn(value));
	}

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
	}

	/**
	 * This method is like `_.assign` except that it recursively merges own and
	 * inherited enumerable string keyed properties of source objects into the
	 * destination object. Source properties that resolve to `undefined` are
	 * skipped if a destination value exists. Array and plain object properties
	 * are merged recursively. Other objects and value types are overridden by
	 * assignment. Source objects are applied from left to right. Subsequent
	 * sources overwrite property assignments of previous sources.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.5.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * var object = {
	 *   'a': [{ 'b': 2 }, { 'd': 4 }]
	 * };
	 *
	 * var other = {
	 *   'a': [{ 'c': 3 }, { 'e': 5 }]
	 * };
	 *
	 * _.merge(object, other);
	 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
	 */
	var merge = createAssigner(function(object, source, srcIndex) {
	  baseMerge(object, source, srcIndex);
	});

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	module.exports = merge;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(13)(module)))

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;

	var _CGI_PATH;

	var API_REQUEST = exports.API_REQUEST = 'API_REQUEST';
	var GET_NEWS_LIST = exports.GET_NEWS_LIST = 'GET_NEWS_LIST';
	var GET_TOP_NEWS = exports.GET_TOP_NEWS = 'GET_TOP_NEWS';
	var GET_COMMENT_LIST = exports.GET_COMMENT_LIST = 'GET_COMMENT_LIST';
	var GET_NEWS_DETAIL = exports.GET_NEWS_DETAIL = 'GET_NEWS_DETAIL';

	var baseUrl = 'http://openapi.inews.qq.com/',
	    baseUrl1 = 'http://view.inews.qq.com/',
	    baseUrl2 = 'http://localhost:9000/api/';

	var CGI_PATH = (_CGI_PATH = {}, _CGI_PATH[GET_TOP_NEWS] = baseUrl + 'getQQNewsIndexAndItems', _CGI_PATH[GET_NEWS_LIST] = baseUrl + 'getQQNewsNormalContent', _CGI_PATH[GET_COMMENT_LIST] = baseUrl1 + 'getQQNewsComment', _CGI_PATH[GET_NEWS_DETAIL] = baseUrl2 + 'getQQNewsDetail', _CGI_PATH);

	exports.default = CGI_PATH;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (true) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;


/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	 * pure render 非immutable版
	 */

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.deepCompare = deepCompare;
	var maxDep = 6; // 比较的最大深度

	/**
	 * [type utils]
	 * @type {Array}
	 */
	var jsType = ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object", "Error"];
	var dUtil = {};

	for (var i = 0; i < jsType.length; i++) {
	    (function (k) {
	        dUtil['is' + jsType[k]] = function (obj) {
	            return Object.prototype.toString.call(obj) === '[object ' + jsType[k] + ']';
	        };
	    })(i);
	}

	/**
	 * [value compare]
	 * @param  {[type]} valA  [description]
	 * @param  {[type]} valB  [description]
	 * @param  {[type]} depth [description]
	 * @return {[type]}       [description]
	 */
	function valCompare(valA, valB, depth) {

	    if (dUtil.isFunction(valA)) {
	        if (valA.hasOwnProperty('name') && valB.hasOwnProperty('name') && valA.name === valB.name) {
	            return true;
	        }
	        return false;
	    }

	    if (dUtil.isString(valA) || dUtil.isNumber(valA) || dUtil.isBoolean(valA)) {
	        if (valA !== valB) {
	            return false;
	        }
	        return true;
	    }

	    if (dUtil.isDate(valA)) {
	        if (valA.getTime() !== valB.getTime()) {
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
	        '_source': 1
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
	        } else if (keysA[0] === '$$typeof' && skipKeys(keysA[i])) {
	            continue;
	        }

	        if (!objB.hasOwnProperty(keysA[i])) {
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
	    // console.log(instance.props, nextProps);
	    // console.log(instance.state,  nextState);
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

	exports.default = pureRenderDecorator;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Redux=e():t.Redux=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0,e.compose=e.applyMiddleware=e.bindActionCreators=e.combineReducers=e.createStore=void 0;var o=n(2),u=r(o),i=n(7),c=r(i),a=n(6),f=r(a),s=n(5),d=r(s),l=n(1),p=r(l),y=n(3);r(y);e.createStore=u["default"],e.combineReducers=c["default"],e.bindActionCreators=f["default"],e.applyMiddleware=d["default"],e.compose=p["default"]},function(t,e){"use strict";function n(){for(var t=arguments.length,e=Array(t),n=0;t>n;n++)e[n]=arguments[n];if(0===e.length)return function(t){return t};if(1===e.length)return e[0];var r=e[e.length-1],o=e.slice(0,-1);return function(){return o.reduceRight(function(t,e){return e(t)},r.apply(void 0,arguments))}}e.__esModule=!0,e["default"]=n},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e,n){function r(){b===h&&(b=h.slice())}function u(){return v}function c(t){if("function"!=typeof t)throw Error("Expected listener to be a function.");var e=!0;return r(),b.push(t),function(){if(e){e=!1,r();var n=b.indexOf(t);b.splice(n,1)}}}function s(t){if(!(0,i["default"])(t))throw Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===t.type)throw Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(m)throw Error("Reducers may not dispatch actions.");try{m=!0,v=y(v,t)}finally{m=!1}for(var e=h=b,n=0;e.length>n;n++)e[n]();return t}function d(t){if("function"!=typeof t)throw Error("Expected the nextReducer to be a function.");y=t,s({type:f.INIT})}function l(){var t,e=c;return t={subscribe:function(t){function n(){t.next&&t.next(u())}if("object"!=typeof t)throw new TypeError("Expected the observer to be an object.");n();var r=e(n);return{unsubscribe:r}}},t[a["default"]]=function(){return this},t}var p;if("function"==typeof e&&void 0===n&&(n=e,e=void 0),void 0!==n){if("function"!=typeof n)throw Error("Expected the enhancer to be a function.");return n(o)(t,e)}if("function"!=typeof t)throw Error("Expected the reducer to be a function.");var y=t,v=e,h=[],b=h,m=!1;return s({type:f.INIT}),p={dispatch:s,subscribe:c,getState:u,replaceReducer:d},p[a["default"]]=l,p}e.__esModule=!0,e.ActionTypes=void 0,e["default"]=o;var u=n(4),i=r(u),c=n(12),a=r(c),f=e.ActionTypes={INIT:"@@redux/INIT"}},function(t,e){"use strict";function n(t){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(t);try{throw Error(t)}catch(e){}}e.__esModule=!0,e["default"]=n},function(t,e,n){function r(t){if(!i(t)||p.call(t)!=c||u(t))return!1;var e=o(t);if(null===e)return!0;var n=d.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&s.call(n)==l}var o=n(8),u=n(9),i=n(11),c="[object Object]",a=Function.prototype,f=Object.prototype,s=a.toString,d=f.hasOwnProperty,l=s.call(Object),p=f.toString;t.exports=r},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(){for(var t=arguments.length,e=Array(t),n=0;t>n;n++)e[n]=arguments[n];return function(t){return function(n,r,o){var i=t(n,r,o),a=i.dispatch,f=[],s={getState:i.getState,dispatch:function(t){return a(t)}};return f=e.map(function(t){return t(s)}),a=c["default"].apply(void 0,f)(i.dispatch),u({},i,{dispatch:a})}}}e.__esModule=!0;var u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e["default"]=o;var i=n(1),c=r(i)},function(t,e){"use strict";function n(t,e){return function(){return e(t.apply(void 0,arguments))}}function r(t,e){if("function"==typeof t)return n(t,e);if("object"!=typeof t||null===t)throw Error("bindActionCreators expected an object or a function, instead received "+(null===t?"null":typeof t)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var r=Object.keys(t),o={},u=0;r.length>u;u++){var i=r[u],c=t[i];"function"==typeof c&&(o[i]=n(c,e))}return o}e.__esModule=!0,e["default"]=r},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){var n=e&&e.type,r=n&&'"'+n+'"'||"an action";return"Given action "+r+', reducer "'+t+'" returned undefined. To ignore an action, you must explicitly return the previous state.'}function u(t){Object.keys(t).forEach(function(e){var n=t[e],r=n(void 0,{type:c.ActionTypes.INIT});if(void 0===r)throw Error('Reducer "'+e+'" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');var o="@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".");if(void 0===n(void 0,{type:o}))throw Error('Reducer "'+e+'" returned undefined when probed with a random type. '+("Don't try to handle "+c.ActionTypes.INIT+' or other actions in "redux/*" ')+"namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")})}function i(t){for(var e=Object.keys(t),n={},r=0;e.length>r;r++){var i=e[r];"function"==typeof t[i]&&(n[i]=t[i])}var c,a=Object.keys(n);try{u(n)}catch(f){c=f}return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments[1];if(c)throw c;for(var r=!1,u={},i=0;a.length>i;i++){var f=a[i],s=n[f],d=t[f],l=s(d,e);if(void 0===l){var p=o(f,e);throw Error(p)}u[f]=l,r=r||l!==d}return r?u:t}}e.__esModule=!0,e["default"]=i;var c=n(2),a=n(4),f=(r(a),n(3));r(f)},function(t,e,n){var r=n(10),o=r(Object.getPrototypeOf,Object);t.exports=o},function(t,e){function n(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(n){}return e}t.exports=n},function(t,e){function n(t,e){return function(n){return t(e(n))}}t.exports=n},function(t,e){function n(t){return!!t&&"object"==typeof t}t.exports=n},function(t,e,n){t.exports=n(13)},function(t,e,n){(function(t){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(14),u=r(o),i=void 0;void 0!==t?i=t:"undefined"!=typeof window&&(i=window);var c=(0,u["default"])(i);e["default"]=c}).call(e,function(){return this}())},function(t,e){"use strict";function n(t){var e,n=t.Symbol;return"function"==typeof n?n.observable?e=n.observable:(e=n("observable"),n.observable=e):e="@@observable",e}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=n}])});

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports._stringify = _stringify;
	exports._parse = _parse;
	exports.extend = extend;
	exports.setCookie = setCookie;
	exports.delCookie = delCookie;
	exports.getCookie = getCookie;
	exports.setItem = setItem;
	exports.getItem = getItem;
	exports.delItem = delItem;
	exports.callApi = callApi;
	exports.encodeHTML = encodeHTML;
	exports.decodeHTML = decodeHTML;
	exports.isType = isType;
	exports.isBoolean = isBoolean;
	exports.isNumber = isNumber;
	exports.isString = isString;
	exports.isFunction = isFunction;
	exports.isArray = isArray;
	exports.isDate = isDate;
	exports.isRegExp = isRegExp;
	exports.isObject = isObject;
	exports.isError = isError;
	exports.getHash = getHash;
	exports.getQuery = getQuery;
	exports.getUrlParam = getUrlParam;
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
	function _stringify(val) {
	  var returnVal = isObject(val) ? JSON.stringify(val) : val;
	  return returnVal;
	}

	/**
	 * parse string
	 * @param  {String} val [value]
	 * @return {String}     [object value]
	 */
	function _parse(val) {
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
	function extend(src, des, d) {
	  var depth = d ? d : 0;
	  for (var key in src) {
	    var isObjectVal = isObject(src[key]);
	    var isArrayVal = isArray(src[key]);
	    if (isObjectVal || isArrayVal) {
	      if (depth) {
	        if (isObjectVal) {
	          des[key] = {};
	          extend(src[key], des[key], depth - 1);
	        } else if (isArrayVal) {
	          des[key] = [];
	          extend(src[key], des[key], depth - 1);
	        }
	      }
	    } else {
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
	function setCookie(key, val, days, path, domain) {
	  var expire = new Date();
	  expire.setTime(expire.getTime() + (days ? 3600000 * 24 * days : 30 * 24 * 60 * 60 * 1000)); // 默认1个月
	  document.cookie = key + '=' + encodeURIComponent(_stringify(val)) + ';expires=' + expire.toGMTString() + ';path=' + (path ? path : '/') + ';' + (domain ? 'domain=' + domain + ';' : '');
	}

	/**
	 * del cookie
	 * @param  {String} key    [key]
	 * @param  {String} path   [path]
	 * @param  {String} domain [domain]
	 */
	function delCookie(key, path, domain) {
	  var expires = new Date(0);
	  document.cookie = key + '=;expires=' + expires.toUTCString() + ';path=' + (path ? path : '/') + ';' + (domain ? 'domain=' + domain + ';' : '');
	}

	/**
	 * get cookie
	 * @param  {[type]} key [key]
	 * @return {String}     [cookie value]
	 */
	function getCookie(key) {
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

	var formatDate = function formatDate(dt, fmt) {

	  if (!dt) {
	    return;
	  }

	  var date = isDate(dt) ? dt : new Date(dt);

	  var o = {
	    "M+": date.getMonth() + 1, //月份         
	    "d+": date.getDate(), //日         
	    "h+": date.getHours() % 12 === 0 ? 12 : date.getHours() % 12, //小时         
	    "H+": date.getHours(), //小时         
	    "m+": date.getMinutes(), //分         
	    "s+": date.getSeconds(), //秒         
	    "q+": Math.floor((date.getMonth() + 3) / 3), //季度         
	    "S": date.getMilliseconds() //毫秒         
	  };

	  var week = {
	    "0": '\u65E5',
	    "1": '\u4E00',
	    "2": '\u4E8C',
	    "3": '\u4E09',
	    "4": '\u56DB',
	    "5": '\u4E94',
	    "6": '\u516D'
	  };

	  if (/(y+)/.test(fmt)) {
	    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
	  }

	  if (/(E+)/.test(fmt)) {
	    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length > 1 ? RegExp.$1.length > 2 ? '\u661F\u671F' : '\u5468' : "") + week[date.getDay() + ""]);
	  }

	  for (var k in o) {
	    if (new RegExp("(" + k + ")").test(fmt)) {
	      fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
	    }
	  }

	  return fmt;
	};

	exports.formatDate = formatDate;
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

	function setItem(key, val) {
	  val = _stringify(val);
	  if (typeof window.Storage !== 'undefined') {
	    localStorage.setItem(key, val);
	  } else {
	    setCookie(key, val);
	  }
	}

	/**
	 * get localstorage
	 * @param  {String} key [key]
	 * @return {String}     [value]
	 */
	function getItem(key) {
	  if (typeof window.Storage !== 'undefined') {
	    return localStorage.getItem(key);
	  } else {
	    return getCookie(key);
	  }
	}

	/**
	 * delete localstorage
	 * @param  {String} key [key]
	 * @return {String}     [value]
	 */
	function delItem(key) {
	  if (typeof window.Storage !== 'undefined') {
	    delete localStorage[key];
	  } else {
	    delCookie(key);
	  }
	}
	/**
	 * @call native api
	 * @author heyli
	 * @date 2016.07.30
	 */

	function callApi(url) {
	  var iframe = document.createElement('iframe');
	  iframe.src = url;
	  iframe.height = 0;
	  iframe.width = 0;
	  iframe.style.cssText = "display: none";

	  document.body.appendChild(iframe);

	  setTimeout(function () {
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
	function encodeHTML(str) {
	  //&gt; 实体标签
	  //&#34; Unicode 编码（可以用charCodeAt方法查看某字符对应的unicode编码）
	  var s = "";
	  if (!str || str.length == 0) return "";
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
	function decodeHTML(str) {
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

	function isType(type, obj) {
	  return Object.prototype.toString.call(obj) === '[object ' + type + ']';
	}

	function isBoolean(obj) {
	  return isType('Boolean', obj);
	}

	function isNumber(obj) {
	  return isType('Number', obj);
	}

	function isString(obj) {
	  return isType('String', obj);
	}

	function isFunction(obj) {
	  return isType('Function', obj);
	}

	function isArray(obj) {
	  return isType('Array', obj);
	}

	function isDate(obj) {
	  return isType('Date', obj);
	}

	function isRegExp(obj) {
	  return isType('RegExp', obj);
	}

	function isObject(obj) {
	  return isType('Object', obj);
	}

	function isError(obj) {
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
	function getHash(key) {
	  var m = window.location.hash.match(new RegExp('(#|&)' + key + '=([^&#]*)(#|&|$)'));
	  return !m ? "" : decodeURIComponent(m[2]);
	}

	/**
	 * get query param
	 * @param  {String} key [key]
	 * @return {String}     [value]
	 */
	function getQuery(key) {
	  var m = window.location.search.match(new RegExp('(\\?|&)' + key + '=([^&]*)(#|&|$)'));
	  return !m ? "" : decodeURIComponent(m[2]);
	}

	/**
	 * get query or hash param
	 * @param  {String} key [key]
	 * @return {String}     [value]
	 */
	function getUrlParam(key) {
	  var m = window.location.search.match(new RegExp('(\\?|#|&)' + key + '=([^&]*)(#|&|$)'));

	  if (!m) {
	    m = window.location.hash.match(new RegExp('(#|&)' + key + '=([^&#]*)(#|&|$)'));
	  }

	  return !m ? "" : decodeURIComponent(m[2]);
	}

/***/ },
/* 8 */,
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.createPath = exports.parsePath = exports.getQueryStringValueFromPath = exports.stripQueryStringValueFromPath = exports.addQueryStringValueToPath = undefined;

	var _warning = __webpack_require__(12);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var addQueryStringValueToPath = exports.addQueryStringValueToPath = function addQueryStringValueToPath(path, key, value) {
	  var _parsePath = parsePath(path);

	  var pathname = _parsePath.pathname;
	  var search = _parsePath.search;
	  var hash = _parsePath.hash;


	  return createPath({
	    pathname: pathname,
	    search: search + (search.indexOf('?') === -1 ? '?' : '&') + key + '=' + value,
	    hash: hash
	  });
	};

	var stripQueryStringValueFromPath = exports.stripQueryStringValueFromPath = function stripQueryStringValueFromPath(path, key) {
	  var _parsePath2 = parsePath(path);

	  var pathname = _parsePath2.pathname;
	  var search = _parsePath2.search;
	  var hash = _parsePath2.hash;


	  return createPath({
	    pathname: pathname,
	    search: search.replace(new RegExp('([?&])' + key + '=[a-zA-Z0-9]+(&?)'), function (match, prefix, suffix) {
	      return prefix === '?' ? prefix : suffix;
	    }),
	    hash: hash
	  });
	};

	var getQueryStringValueFromPath = exports.getQueryStringValueFromPath = function getQueryStringValueFromPath(path, key) {
	  var _parsePath3 = parsePath(path);

	  var search = _parsePath3.search;

	  var match = search.match(new RegExp('[?&]' + key + '=([a-zA-Z0-9]+)'));
	  return match && match[1];
	};

	var extractPath = function extractPath(string) {
	  var match = string.match(/^(https?:)?\/\/[^\/]*/);
	  return match == null ? string : string.substring(match[0].length);
	};

	var parsePath = exports.parsePath = function parsePath(path) {
	  var pathname = extractPath(path);
	  var search = '';
	  var hash = '';

	   true ? (0, _warning2.default)(path === pathname, 'A path must be pathname + search + hash only, not a full URL like "%s"', path) : void 0;

	  var hashIndex = pathname.indexOf('#');
	  if (hashIndex !== -1) {
	    hash = pathname.substring(hashIndex);
	    pathname = pathname.substring(0, hashIndex);
	  }

	  var searchIndex = pathname.indexOf('?');
	  if (searchIndex !== -1) {
	    search = pathname.substring(searchIndex);
	    pathname = pathname.substring(0, searchIndex);
	  }

	  if (pathname === '') pathname = '/';

	  return {
	    pathname: pathname,
	    search: search,
	    hash: hash
	  };
	};

	var createPath = exports.createPath = function createPath(location) {
	  if (location == null || typeof location === 'string') return location;

	  var basename = location.basename;
	  var pathname = location.pathname;
	  var search = location.search;
	  var hash = location.hash;

	  var path = (basename || '') + pathname;

	  if (search && search !== '?') path += search;

	  if (hash) path += hash;

	  return path;
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.isReactChildren = isReactChildren;
	exports.createRouteFromReactElement = createRouteFromReactElement;
	exports.createRoutesFromReactChildren = createRoutesFromReactChildren;
	exports.createRoutes = createRoutes;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isValidChild(object) {
	  return object == null || _react2.default.isValidElement(object);
	}

	function isReactChildren(object) {
	  return isValidChild(object) || Array.isArray(object) && object.every(isValidChild);
	}

	function createRoute(defaultProps, props) {
	  return _extends({}, defaultProps, props);
	}

	function createRouteFromReactElement(element) {
	  var type = element.type;
	  var route = createRoute(type.defaultProps, element.props);

	  if (route.children) {
	    var childRoutes = createRoutesFromReactChildren(route.children, route);

	    if (childRoutes.length) route.childRoutes = childRoutes;

	    delete route.children;
	  }

	  return route;
	}

	/**
	 * Creates and returns a routes object from the given ReactChildren. JSX
	 * provides a convenient way to visualize how routes in the hierarchy are
	 * nested.
	 *
	 *   import { Route, createRoutesFromReactChildren } from 'react-router'
	 *
	 *   const routes = createRoutesFromReactChildren(
	 *     <Route component={App}>
	 *       <Route path="home" component={Dashboard}/>
	 *       <Route path="news" component={NewsFeed}/>
	 *     </Route>
	 *   )
	 *
	 * Note: This method is automatically used when you provide <Route> children
	 * to a <Router> component.
	 */
	function createRoutesFromReactChildren(children, parentRoute) {
	  var routes = [];

	  _react2.default.Children.forEach(children, function (element) {
	    if (_react2.default.isValidElement(element)) {
	      // Component classes may have a static create* method.
	      if (element.type.createRouteFromReactElement) {
	        var route = element.type.createRouteFromReactElement(element, parentRoute);

	        if (route) routes.push(route);
	      } else {
	        routes.push(createRouteFromReactElement(element));
	      }
	    }
	  });

	  return routes;
	}

	/**
	 * Creates and returns an array of routes from the given object which
	 * may be a JSX route, a plain object route, or an array of either.
	 */
	function createRoutes(routes) {
	  if (isReactChildren(routes)) {
	    routes = createRoutesFromReactChildren(routes);
	  } else if (routes && !Array.isArray(routes)) {
	    routes = [routes];
	  }

	  return routes;
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = function() {};

	if (true) {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }

	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }

	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}

	module.exports = warning;


/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _lodash = __webpack_require__(2);

	var _lodash2 = _interopRequireDefault(_lodash);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ua = navigator.userAgent.toLowerCase();
	var _platform = function _platform(os) {
	    var ver = ('' + (new RegExp(os + '(\\d+((\\.|_)\\d+)*)').exec(ua) || [, 0])[1]).replace(/_/g, '.');
	    // undefined < 3 === false, but null < 3 === true
	    return parseFloat(ver) || undefined;
	};
	var os = {
	    ios: _platform('os '),
	    android: _platform('android[/ ]'),
	    pc: !_platform('os ') && !_platform('android[/ ]')
	};

	var Touch = function (_Component) {
	    _inherits(Touch, _Component);

	    function Touch(props, context) {
	        _classCallCheck(this, Touch);

	        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	        _this.state = {};

	        _this.touchInfo = {
	            x: null,
	            y: null,
	            x2: null,
	            y2: null,
	            start: 0,
	            last: 0,
	            isDoubleTap: false,
	            touchTimeout: null,
	            tapTimeout: null,
	            swipeTimeout: null,
	            longTapTimeout: null
	        };

	        _this.devicePixelRatio = window.devicePixelRatio || 1;

	        _this.longTapDelay = 750;
	        _this.maxTapAbsX = 30;
	        _this.maxTapAbsY = os.android ? 5 : 30;

	        _this.getDefaultTouchInfo = _this.getDefaultTouchInfo.bind(_this);
	        _this.longTap = _this.longTap.bind(_this);
	        _this.cancelLongTap = _this.cancelLongTap.bind(_this);
	        _this.cancelAll = _this.cancelAll.bind(_this);

	        _this.calculatePos = _this.calculatePos.bind(_this);
	        _this.touchStart = _this.touchStart.bind(_this);
	        _this.touchMove = _this.touchMove.bind(_this);
	        _this.touchEnd = _this.touchEnd.bind(_this);
	        return _this;
	    }

	    Touch.prototype.componentWillReceiveProps = function componentWillReceiveProps() {};

	    Touch.prototype.componentDidMount = function componentDidMount() {
	        window.addEventListener('scroll', this.cancelAll, false);
	    };

	    Touch.prototype.componentWillUnmount = function componentWillUnmount() {
	        window.removeEventListener('scroll', this.cancelAll, false);
	    };

	    Touch.prototype.getDefaultTouchInfo = function getDefaultTouchInfo() {
	        return {
	            x: null,
	            y: null,
	            x2: null,
	            y2: null,
	            start: 0,
	            last: 0,
	            isDoubleTap: false,
	            touchTimeout: null,
	            tapTimeout: null,
	            swipeTimeout: null,
	            longTapTimeout: null
	        };
	    };

	    Touch.prototype.longTap = function longTap() {
	        this.touchInfo.longTapTimeout = null;

	        if (this.touchInfo.last) {
	            this.props.onLongTap && this.props.onLongTap();
	            this.touchInfo = this.getDefaultTouchInfo();
	        }
	    };

	    Touch.prototype.cancelLongTap = function cancelLongTap() {
	        this.touchInfo.longTapTimeout && clearTimeout(this.touchInfo.longTapTimeout);

	        this.touchInfo.longTapTimeout = null;
	    };

	    Touch.prototype.cancelAll = function cancelAll() {
	        this.touchInfo.touchTimeout && clearTimeout(this.touchInfo.touchTimeout);
	        this.touchInfo.tapTimeout && clearTimeout(this.touchInfo.tapTimeout);
	        this.touchInfo.swipeTimeout && clearTimeout(this.touchInfo.swipeTimeout);
	        this.touchInfo.longTapTimeout && clearTimeout(this.touchInfo.longTapTimeout);

	        this.touchInfo = this.getDefaultTouchInfo();
	    };

	    Touch.prototype.calculatePos = function calculatePos(e) {
	        var x = e ? e.touches[0].pageX : this.touchInfo.x2;
	        var y = e ? e.touches[0].pageY : this.touchInfo.y2;

	        if (x === null && y === null) {
	            return {
	                deltaX: 0,
	                deltaY: 0,
	                absX: 0,
	                absY: 0
	            };
	        }

	        var xd = this.touchInfo.x - x;
	        var yd = this.touchInfo.y - y;

	        var axd = Math.abs(xd);
	        var ayd = Math.abs(yd);

	        return {
	            deltaX: xd,
	            deltaY: yd,
	            absX: axd,
	            absY: ayd
	        };
	    };

	    Touch.prototype.touchStart = function touchStart(e) {
	        if (e.touches.length > 1) {
	            return;
	        }

	        var firstTouch = e.touches[0];

	        if (e.touches && e.touches.length === 1 && this.touchInfo.x2) {
	            // Clear out touch movement data if we have it sticking around
	            // This can occur if touchcancel doesn't fire due to preventDefault, etc.
	            (0, _lodash2.default)(this.touchInfo, {
	                x2: null,
	                y2: null
	            });
	        }

	        var now = Date.now(),
	            delta = now - (this.touchInfo.last || now);

	        this.touchInfo.touchTimeout && clearTimeout(this.touchInfo.touchTimeout);

	        if (delta > 0 && delta <= 250) {
	            (0, _lodash2.default)(this.touchInfo, {
	                isDoubleTap: true
	            });
	        }

	        (0, _lodash2.default)(this.touchInfo, {
	            start: now,
	            last: now,
	            x: firstTouch.pageX,
	            y: firstTouch.pageY,
	            longTapTimeout: setTimeout(this.longTap, this.longTapDelay)
	        });
	    };

	    Touch.prototype.touchMove = function touchMove(e) {
	        this.cancelLongTap();

	        (0, _lodash2.default)(this.touchInfo, {
	            x2: e.touches[0].pageX,
	            y2: e.touches[0].pageY
	        });

	        var pos = this.calculatePos(e);

	        if (pos.absX > Math.round(20 / this.devicePixelRatio) && pos.absX > pos.absY) {
	            e.preventDefault();
	        }
	    };

	    Touch.prototype.touchEnd = function touchEnd(e) {
	        var _this2 = this;

	        this.cancelLongTap();

	        var pos = this.calculatePos();

	        // swipe
	        if (this.touchInfo.x2 && pos.absX > this.maxTapAbsX || this.touchInfo.y2 && pos.absY > this.maxTapAbsY) {
	            (function () {
	                var time = Date.now() - _this2.touchInfo.start,
	                    velocity = Math.sqrt(pos.absX * pos.absX + pos.absY * pos.absY) / time,
	                    isFlick = velocity > _this2.props.flickThreshold;

	                e.persist();
	                (0, _lodash2.default)(_this2.touchInfo, {
	                    swipeTimeout: setTimeout(function () {
	                        _this2.props.onSwipe && _this2.props.onSwipe(e, pos.deltaX, pos.deltaY, isFlick);

	                        if (pos.absX > pos.absY) {
	                            if (pos.deltaX > 0) {
	                                _this2.props.onSwipeLeft && _this2.props.onSwipeLeft(e, pos.deltaX, isFlick);
	                            } else {
	                                _this2.props.onSwipeRight && _this2.props.onSwipeRight(e, pos.deltaX, isFlick);
	                            }
	                        } else {
	                            if (pos.deltaY > 0) {
	                                _this2.props.onSwipeUp && _this2.props.onSwipeUp(e, pos.deltaY, isFlick);
	                            } else {
	                                _this2.props.onSwipeDown && _this2.props.onSwipeDown(e, pos.deltaY, isFlick);
	                            }
	                        }

	                        _this2.touchInfo = _this2.getDefaultTouchInfo();
	                    }, 0)
	                });
	            })();
	        }
	        // normal tap
	        else if (this.touchInfo.last) {
	                // don't fire tap when delta position changed by more than 30 pixels,
	                // for instance when moving to a point and back to origin
	                if (pos.absX < this.maxTapAbsX && pos.absY < this.maxTapAbsY) {
	                    // delay by one tick so we can cancel the 'tap' event if 'scroll' fires
	                    // ('tap' fires before 'scroll')
	                    e.persist();
	                    (0, _lodash2.default)(this.touchInfo, {
	                        tapTimeout: setTimeout(function () {
	                            // trigger universal 'tap' with the option to cancelTouch()
	                            // (cancelTouch cancels processing of single vs double taps for faster 'tap' response)
	                            _this2.props.onTap && _this2.props.onTap(e);

	                            // trigger double tap immediately
	                            if (_this2.touchInfo.isDoubleTap) {
	                                _this2.props.onDoubleTap && _this2.props.onDoubleTap(e);
	                                _this2.touchInfo = _this2.getDefaultTouchInfo();
	                            }

	                            // trigger single tap after 250ms of inactivity
	                            else {
	                                    (0, _lodash2.default)(_this2.touchInfo, {
	                                        touchTimeout: setTimeout(function () {
	                                            (0, _lodash2.default)(_this2.touchInfo, {
	                                                touchTimeout: null
	                                            });
	                                            _this2.props.onSingleTap && _this2.props.onSingleTap(e);
	                                            _this2.touchInfo = _this2.getDefaultTouchInfo();
	                                        }, 250)
	                                    });
	                                }
	                        }, 0)
	                    });
	                } else {
	                    this.touchInfo = this.getDefaultTouchInfo();
	                }
	            }
	    };

	    Touch.prototype.render = function render() {
	        return _react2.default.createElement(
	            'div',
	            _extends({}, this.props, {
	                onTouchStart: this.touchStart,
	                onTouchMove: this.touchMove,
	                onTouchEnd: this.touchEnd,
	                onTouchCancel: this.cancelAll }),
	            this.props.children
	        );
	    };

	    return Touch;
	}(_react.Component);

	exports.default = Touch;


	Touch.propTypes = {
	    onTap: _react.PropTypes.func,
	    onSingleTap: _react.PropTypes.func,
	    onDoubleTap: _react.PropTypes.func,
	    onLongTap: _react.PropTypes.func,
	    onSwipe: _react.PropTypes.func,
	    onSwipeUp: _react.PropTypes.func,
	    onSwipeRight: _react.PropTypes.func,
	    onSwipeDown: _react.PropTypes.func,
	    onSwipeLeft: _react.PropTypes.func
	};
	Touch.defaultProps = {
	    flickThreshold: 0.6
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.locationsAreEqual = exports.statesAreEqual = exports.createLocation = exports.createQuery = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _invariant = __webpack_require__(4);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _warning = __webpack_require__(12);

	var _warning2 = _interopRequireDefault(_warning);

	var _PathUtils = __webpack_require__(10);

	var _Actions = __webpack_require__(31);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var createQuery = exports.createQuery = function createQuery(props) {
	  return _extends(Object.create(null), props);
	};

	var createLocation = exports.createLocation = function createLocation() {
	  var input = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
	  var action = arguments.length <= 1 || arguments[1] === undefined ? _Actions.POP : arguments[1];
	  var key = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

	  var object = typeof input === 'string' ? (0, _PathUtils.parsePath)(input) : input;

	   true ? (0, _warning2.default)(!object.path, 'Location descriptor objects should have a `pathname`, not a `path`.') : void 0;

	  var pathname = object.pathname || '/';
	  var search = object.search || '';
	  var hash = object.hash || '';
	  var state = object.state;

	  return {
	    pathname: pathname,
	    search: search,
	    hash: hash,
	    state: state,
	    action: action,
	    key: key
	  };
	};

	var isDate = function isDate(object) {
	  return Object.prototype.toString.call(object) === '[object Date]';
	};

	var statesAreEqual = exports.statesAreEqual = function statesAreEqual(a, b) {
	  if (a === b) return true;

	  var typeofA = typeof a === 'undefined' ? 'undefined' : _typeof(a);
	  var typeofB = typeof b === 'undefined' ? 'undefined' : _typeof(b);

	  if (typeofA !== typeofB) return false;

	  !(typeofA !== 'function') ?  true ? (0, _invariant2.default)(false, 'You must not store functions in location state') : (0, _invariant2.default)(false) : void 0;

	  // Not the same object, but same type.
	  if (typeofA === 'object') {
	    !!(isDate(a) && isDate(b)) ?  true ? (0, _invariant2.default)(false, 'You must not store Date objects in location state') : (0, _invariant2.default)(false) : void 0;

	    if (!Array.isArray(a)) {
	      var keysofA = Object.keys(a);
	      var keysofB = Object.keys(b);
	      return keysofA.length === keysofB.length && keysofA.every(function (key) {
	        return statesAreEqual(a[key], b[key]);
	      });
	    }

	    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
	      return statesAreEqual(item, b[index]);
	    });
	  }

	  // All other serializable types (string, number, boolean)
	  // should be strict equal.
	  return false;
	};

	var locationsAreEqual = exports.locationsAreEqual = function locationsAreEqual(a, b) {
	  return a.key === b.key &&
	  // a.action === b.action && // Different action !== location change.
	  a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && statesAreEqual(a.state, b.state);
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.compilePattern = compilePattern;
	exports.matchPattern = matchPattern;
	exports.getParamNames = getParamNames;
	exports.getParams = getParams;
	exports.formatPattern = formatPattern;

	var _invariant = __webpack_require__(4);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function escapeRegExp(string) {
	  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	}

	function _compilePattern(pattern) {
	  var regexpSource = '';
	  var paramNames = [];
	  var tokens = [];

	  var match = void 0,
	      lastIndex = 0,
	      matcher = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|\*\*|\*|\(|\)|\\\(|\\\)/g;
	  while (match = matcher.exec(pattern)) {
	    if (match.index !== lastIndex) {
	      tokens.push(pattern.slice(lastIndex, match.index));
	      regexpSource += escapeRegExp(pattern.slice(lastIndex, match.index));
	    }

	    if (match[1]) {
	      regexpSource += '([^/]+)';
	      paramNames.push(match[1]);
	    } else if (match[0] === '**') {
	      regexpSource += '(.*)';
	      paramNames.push('splat');
	    } else if (match[0] === '*') {
	      regexpSource += '(.*?)';
	      paramNames.push('splat');
	    } else if (match[0] === '(') {
	      regexpSource += '(?:';
	    } else if (match[0] === ')') {
	      regexpSource += ')?';
	    } else if (match[0] === '\\(') {
	      regexpSource += '\\(';
	    } else if (match[0] === '\\)') {
	      regexpSource += '\\)';
	    }

	    tokens.push(match[0]);

	    lastIndex = matcher.lastIndex;
	  }

	  if (lastIndex !== pattern.length) {
	    tokens.push(pattern.slice(lastIndex, pattern.length));
	    regexpSource += escapeRegExp(pattern.slice(lastIndex, pattern.length));
	  }

	  return {
	    pattern: pattern,
	    regexpSource: regexpSource,
	    paramNames: paramNames,
	    tokens: tokens
	  };
	}

	var CompiledPatternsCache = Object.create(null);

	function compilePattern(pattern) {
	  if (!CompiledPatternsCache[pattern]) CompiledPatternsCache[pattern] = _compilePattern(pattern);

	  return CompiledPatternsCache[pattern];
	}

	/**
	 * Attempts to match a pattern on the given pathname. Patterns may use
	 * the following special characters:
	 *
	 * - :paramName     Matches a URL segment up to the next /, ?, or #. The
	 *                  captured string is considered a "param"
	 * - ()             Wraps a segment of the URL that is optional
	 * - *              Consumes (non-greedy) all characters up to the next
	 *                  character in the pattern, or to the end of the URL if
	 *                  there is none
	 * - **             Consumes (greedy) all characters up to the next character
	 *                  in the pattern, or to the end of the URL if there is none
	 *
	 *  The function calls callback(error, matched) when finished.
	 * The return value is an object with the following properties:
	 *
	 * - remainingPathname
	 * - paramNames
	 * - paramValues
	 */
	function matchPattern(pattern, pathname) {
	  // Ensure pattern starts with leading slash for consistency with pathname.
	  if (pattern.charAt(0) !== '/') {
	    pattern = '/' + pattern;
	  }

	  var _compilePattern2 = compilePattern(pattern),
	      regexpSource = _compilePattern2.regexpSource,
	      paramNames = _compilePattern2.paramNames,
	      tokens = _compilePattern2.tokens;

	  if (pattern.charAt(pattern.length - 1) !== '/') {
	    regexpSource += '/?'; // Allow optional path separator at end.
	  }

	  // Special-case patterns like '*' for catch-all routes.
	  if (tokens[tokens.length - 1] === '*') {
	    regexpSource += '$';
	  }

	  var match = pathname.match(new RegExp('^' + regexpSource, 'i'));
	  if (match == null) {
	    return null;
	  }

	  var matchedPath = match[0];
	  var remainingPathname = pathname.substr(matchedPath.length);

	  if (remainingPathname) {
	    // Require that the match ends at a path separator, if we didn't match
	    // the full path, so any remaining pathname is a new path segment.
	    if (matchedPath.charAt(matchedPath.length - 1) !== '/') {
	      return null;
	    }

	    // If there is a remaining pathname, treat the path separator as part of
	    // the remaining pathname for properly continuing the match.
	    remainingPathname = '/' + remainingPathname;
	  }

	  return {
	    remainingPathname: remainingPathname,
	    paramNames: paramNames,
	    paramValues: match.slice(1).map(function (v) {
	      return v && decodeURIComponent(v);
	    })
	  };
	}

	function getParamNames(pattern) {
	  return compilePattern(pattern).paramNames;
	}

	function getParams(pattern, pathname) {
	  var match = matchPattern(pattern, pathname);
	  if (!match) {
	    return null;
	  }

	  var paramNames = match.paramNames,
	      paramValues = match.paramValues;

	  var params = {};

	  paramNames.forEach(function (paramName, index) {
	    params[paramName] = paramValues[index];
	  });

	  return params;
	}

	/**
	 * Returns a version of the given pattern with params interpolated. Throws
	 * if there is a dynamic segment of the pattern for which there is no param.
	 */
	function formatPattern(pattern, params) {
	  params = params || {};

	  var _compilePattern3 = compilePattern(pattern),
	      tokens = _compilePattern3.tokens;

	  var parenCount = 0,
	      pathname = '',
	      splatIndex = 0,
	      parenHistory = [];

	  var token = void 0,
	      paramName = void 0,
	      paramValue = void 0;
	  for (var i = 0, len = tokens.length; i < len; ++i) {
	    token = tokens[i];

	    if (token === '*' || token === '**') {
	      paramValue = Array.isArray(params.splat) ? params.splat[splatIndex++] : params.splat;

	      !(paramValue != null || parenCount > 0) ?  true ? (0, _invariant2.default)(false, 'Missing splat #%s for path "%s"', splatIndex, pattern) : (0, _invariant2.default)(false) : void 0;

	      if (paramValue != null) pathname += encodeURI(paramValue);
	    } else if (token === '(') {
	      parenHistory[parenCount] = '';
	      parenCount += 1;
	    } else if (token === ')') {
	      var parenText = parenHistory.pop();
	      parenCount -= 1;

	      if (parenCount) parenHistory[parenCount - 1] += parenText;else pathname += parenText;
	    } else if (token === '\\(') {
	      pathname += '(';
	    } else if (token === '\\)') {
	      pathname += ')';
	    } else if (token.charAt(0) === ':') {
	      paramName = token.substring(1);
	      paramValue = params[paramName];

	      !(paramValue != null || parenCount > 0) ?  true ? (0, _invariant2.default)(false, 'Missing "%s" parameter for path "%s"', paramName, pattern) : (0, _invariant2.default)(false) : void 0;

	      if (paramValue == null) {
	        if (parenCount) {
	          parenHistory[parenCount - 1] = '';

	          var curTokenIdx = tokens.indexOf(token);
	          var tokensSubset = tokens.slice(curTokenIdx, tokens.length);
	          var nextParenIdx = -1;

	          for (var _i = 0; _i < tokensSubset.length; _i++) {
	            if (tokensSubset[_i] == ')') {
	              nextParenIdx = _i;
	              break;
	            }
	          }

	          !(nextParenIdx > 0) ?  true ? (0, _invariant2.default)(false, 'Path "%s" is missing end paren at segment "%s"', pattern, tokensSubset.join('')) : (0, _invariant2.default)(false) : void 0;

	          // jump to ending paren
	          i = curTokenIdx + nextParenIdx - 1;
	        }
	      } else if (parenCount) parenHistory[parenCount - 1] += encodeURIComponent(paramValue);else pathname += encodeURIComponent(paramValue);
	    } else {
	      if (parenCount) parenHistory[parenCount - 1] += token;else pathname += token;
	    }
	  }

	  !(parenCount <= 0) ?  true ? (0, _invariant2.default)(false, 'Path "%s" is missing end paren', pattern) : (0, _invariant2.default)(false) : void 0;

	  return pathname.replace(/\/+/g, '/');
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = routerWarning;
	exports._resetWarned = _resetWarned;

	var _warning = __webpack_require__(12);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var warned = {};

	function routerWarning(falseToWarn, message) {
	  // Only issue deprecation warnings once.
	  if (message.indexOf('deprecated') !== -1) {
	    if (warned[message]) {
	      return;
	    }

	    warned[message] = true;
	  }

	  message = '[react-router] ' + message;

	  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    args[_key - 2] = arguments[_key];
	  }

	  _warning2.default.apply(undefined, [falseToWarn, message].concat(args));
	}

	function _resetWarned() {
	  warned = {};
	}

/***/ },
/* 18 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * Copyright (c) 2011-2014 Felix Gnass
	 * Licensed under the MIT license
	 * http://spin.js.org/
	 *
	 * Example:
	    var opts = {
	      lines: 12             // The number of lines to draw
	    , length: 7             // The length of each line
	    , width: 5              // The line thickness
	    , radius: 10            // The radius of the inner circle
	    , scale: 1.0            // Scales overall size of the spinner
	    , corners: 1            // Roundness (0..1)
	    , color: '#000'         // #rgb or #rrggbb
	    , opacity: 1/4          // Opacity of the lines
	    , rotate: 0             // Rotation offset
	    , direction: 1          // 1: clockwise, -1: counterclockwise
	    , speed: 1              // Rounds per second
	    , trail: 100            // Afterglow percentage
	    , fps: 20               // Frames per second when using setTimeout()
	    , zIndex: 2e9           // Use a high z-index by default
	    , className: 'spinner'  // CSS class to assign to the element
	    , top: '50%'            // center vertically
	    , left: '50%'           // center horizontally
	    , shadow: false         // Whether to render a shadow
	    , hwaccel: false        // Whether to use hardware acceleration (might be buggy)
	    , position: 'absolute'  // Element positioning
	    }
	    var target = document.getElementById('foo')
	    var spinner = new Spinner(opts).spin(target)
	 */
	(function (root, factory) {

	  /* CommonJS */
	  if (( false ? 'undefined' : _typeof(module)) == 'object' && module.exports) module.exports = factory();

	  /* AMD module */
	  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	    /* Browser global */
	    else root.Spinner = factory();
	})(undefined, function () {
	  "use strict";

	  var prefixes = ['webkit', 'Moz', 'ms', 'O'] /* Vendor prefixes */
	  ,
	      animations = {} /* Animation rules keyed by their name */
	  ,
	      useCssAnimations /* Whether to use CSS animations or setTimeout */
	  ,
	      sheet; /* A stylesheet to hold the @keyframe or VML rules. */

	  /**
	   * Utility function to create elements. If no tag name is given,
	   * a DIV is created. Optionally properties can be passed.
	   */
	  function createEl(tag, prop) {
	    var el = document.createElement(tag || 'div'),
	        n;

	    for (n in prop) {
	      el[n] = prop[n];
	    }return el;
	  }

	  /**
	   * Appends children and returns the parent.
	   */
	  function ins(parent /* child1, child2, ...*/) {
	    for (var i = 1, n = arguments.length; i < n; i++) {
	      parent.appendChild(arguments[i]);
	    }

	    return parent;
	  }

	  /**
	   * Creates an opacity keyframe animation rule and returns its name.
	   * Since most mobile Webkits have timing issues with animation-delay,
	   * we create separate rules for each line/segment.
	   */
	  function addAnimation(alpha, trail, i, lines) {
	    var name = ['opacity', trail, ~~(alpha * 100), i, lines].join('-'),
	        start = 0.01 + i / lines * 100,
	        z = Math.max(1 - (1 - alpha) / trail * (100 - start), alpha),
	        prefix = useCssAnimations.substring(0, useCssAnimations.indexOf('Animation')).toLowerCase(),
	        pre = prefix && '-' + prefix + '-' || '';

	    if (!animations[name]) {
	      sheet.insertRule('@' + pre + 'keyframes ' + name + '{' + '0%{opacity:' + z + '}' + start + '%{opacity:' + alpha + '}' + (start + 0.01) + '%{opacity:1}' + (start + trail) % 100 + '%{opacity:' + alpha + '}' + '100%{opacity:' + z + '}' + '}', sheet.cssRules.length);

	      animations[name] = 1;
	    }

	    return name;
	  }

	  /**
	   * Tries various vendor prefixes and returns the first supported property.
	   */
	  function vendor(el, prop) {
	    var s = el.style,
	        pp,
	        i;

	    prop = prop.charAt(0).toUpperCase() + prop.slice(1);
	    if (s[prop] !== undefined) return prop;
	    for (i = 0; i < prefixes.length; i++) {
	      pp = prefixes[i] + prop;
	      if (s[pp] !== undefined) return pp;
	    }
	  }

	  /**
	   * Sets multiple style properties at once.
	   */
	  function css(el, prop) {
	    for (var n in prop) {
	      el.style[vendor(el, n) || n] = prop[n];
	    }

	    return el;
	  }

	  /**
	   * Fills in default values.
	   */
	  function merge(obj) {
	    for (var i = 1; i < arguments.length; i++) {
	      var def = arguments[i];
	      for (var n in def) {
	        if (obj[n] === undefined) obj[n] = def[n];
	      }
	    }
	    return obj;
	  }

	  /**
	   * Returns the line color from the given string or array.
	   */
	  function getColor(color, idx) {
	    return typeof color == 'string' ? color : color[idx % color.length];
	  }

	  // Built-in defaults

	  var defaults = {
	    lines: 12 // The number of lines to draw
	    , length: 7 // The length of each line
	    , width: 5 // The line thickness
	    , radius: 10 // The radius of the inner circle
	    , scale: 1.0 // Scales overall size of the spinner
	    , corners: 1 // Roundness (0..1)
	    , color: '#000' // #rgb or #rrggbb
	    , opacity: 1 / 4 // Opacity of the lines
	    , rotate: 0 // Rotation offset
	    , direction: 1 // 1: clockwise, -1: counterclockwise
	    , speed: 1 // Rounds per second
	    , trail: 100 // Afterglow percentage
	    , fps: 20 // Frames per second when using setTimeout()
	    , zIndex: 2e9 // Use a high z-index by default
	    , className: 'spinner' // CSS class to assign to the element
	    , top: '50%' // center vertically
	    , left: '50%' // center horizontally
	    , shadow: false // Whether to render a shadow
	    , hwaccel: false // Whether to use hardware acceleration (might be buggy)
	    , position: 'absolute' // Element positioning
	  };

	  /** The constructor */
	  function Spinner(o) {
	    this.opts = merge(o || {}, Spinner.defaults, defaults);
	  }

	  // Global defaults that override the built-ins:
	  Spinner.defaults = {};

	  merge(Spinner.prototype, {
	    /**
	     * Adds the spinner to the given target element. If this instance is already
	     * spinning, it is automatically removed from its previous target b calling
	     * stop() internally.
	     */
	    spin: function spin(target) {
	      this.stop();

	      var self = this,
	          o = self.opts,
	          el = self.el = createEl(null, { className: o.className });

	      css(el, {
	        position: o.position,
	        width: 0,
	        zIndex: o.zIndex,
	        left: o.left,
	        top: o.top
	      });

	      if (target) {
	        target.insertBefore(el, target.firstChild || null);
	      }

	      el.setAttribute('role', 'progressbar');
	      self.lines(el, self.opts);

	      if (!useCssAnimations) {
	        // No CSS animation support, use setTimeout() instead
	        var i = 0,
	            start = (o.lines - 1) * (1 - o.direction) / 2,
	            alpha,
	            fps = o.fps,
	            f = fps / o.speed,
	            ostep = (1 - o.opacity) / (f * o.trail / 100),
	            astep = f / o.lines;(function anim() {
	          i++;
	          for (var j = 0; j < o.lines; j++) {
	            alpha = Math.max(1 - (i + (o.lines - j) * astep) % f * ostep, o.opacity);

	            self.opacity(el, j * o.direction + start, alpha, o);
	          }
	          self.timeout = self.el && setTimeout(anim, ~~(1000 / fps));
	        })();
	      }
	      return self;
	    }

	    /**
	     * Stops and removes the Spinner.
	     */
	    , stop: function stop() {
	      var el = this.el;
	      if (el) {
	        clearTimeout(this.timeout);
	        if (el.parentNode) el.parentNode.removeChild(el);
	        this.el = undefined;
	      }
	      return this;
	    }

	    /**
	     * Internal method that draws the individual lines. Will be overwritten
	     * in VML fallback mode below.
	     */
	    , lines: function lines(el, o) {
	      var i = 0,
	          start = (o.lines - 1) * (1 - o.direction) / 2,
	          seg;

	      function fill(color, shadow) {
	        return css(createEl(), {
	          position: 'absolute',
	          width: o.scale * (o.length + o.width) + 'px',
	          height: o.scale * o.width + 'px',
	          background: color,
	          boxShadow: shadow,
	          transformOrigin: 'left',
	          transform: 'rotate(' + ~~(360 / o.lines * i + o.rotate) + 'deg) translate(' + o.scale * o.radius + 'px' + ',0)',
	          borderRadius: (o.corners * o.scale * o.width >> 1) + 'px'
	        });
	      }

	      for (; i < o.lines; i++) {
	        seg = css(createEl(), {
	          position: 'absolute',
	          top: 1 + ~(o.scale * o.width / 2) + 'px',
	          transform: o.hwaccel ? 'translate3d(0,0,0)' : '',
	          opacity: o.opacity,
	          animation: useCssAnimations && addAnimation(o.opacity, o.trail, start + i * o.direction, o.lines) + ' ' + 1 / o.speed + 's linear infinite'
	        });

	        if (o.shadow) ins(seg, css(fill('#000', '0 0 4px #000'), { top: '2px' }));
	        ins(el, ins(seg, fill(getColor(o.color, i), '0 0 1px rgba(0,0,0,.1)')));
	      }
	      return el;
	    }

	    /**
	     * Internal method that adjusts the opacity of a single line.
	     * Will be overwritten in VML fallback mode below.
	     */
	    , opacity: function opacity(el, i, val) {
	      if (i < el.childNodes.length) el.childNodes[i].style.opacity = val;
	    }

	  });

	  function initVML() {

	    /* Utility function to create a VML tag */
	    function vml(tag, attr) {
	      return createEl('<' + tag + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', attr);
	    }

	    // No CSS transforms but VML support, add a CSS rule for VML elements:
	    sheet.addRule('.spin-vml', 'behavior:url(#default#VML)');

	    Spinner.prototype.lines = function (el, o) {
	      var r = o.scale * (o.length + o.width),
	          s = o.scale * 2 * r;

	      function grp() {
	        return css(vml('group', {
	          coordsize: s + ' ' + s,
	          coordorigin: -r + ' ' + -r
	        }), { width: s, height: s });
	      }

	      var margin = -(o.width + o.length) * o.scale * 2 + 'px',
	          g = css(grp(), { position: 'absolute', top: margin, left: margin }),
	          i;

	      function seg(i, dx, filter) {
	        ins(g, ins(css(grp(), { rotation: 360 / o.lines * i + 'deg', left: ~~dx }), ins(css(vml('roundrect', { arcsize: o.corners }), { width: r,
	          height: o.scale * o.width,
	          left: o.scale * o.radius,
	          top: -o.scale * o.width >> 1,
	          filter: filter
	        }), vml('fill', { color: getColor(o.color, i), opacity: o.opacity }), vml('stroke', { opacity: 0 }) // transparent stroke to fix color bleeding upon opacity change
	        )));
	      }

	      if (o.shadow) for (i = 1; i <= o.lines; i++) {
	        seg(i, -2, 'progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)');
	      }

	      for (i = 1; i <= o.lines; i++) {
	        seg(i);
	      }return ins(el, g);
	    };

	    Spinner.prototype.opacity = function (el, i, val, o) {
	      var c = el.firstChild;
	      o = o.shadow && o.lines || 0;
	      if (c && i + o < c.childNodes.length) {
	        c = c.childNodes[i + o];c = c && c.firstChild;c = c && c.firstChild;
	        if (c) c.opacity = val;
	      }
	    };
	  }

	  if (typeof document !== 'undefined') {
	    sheet = function () {
	      var el = createEl('style', { type: 'text/css' });
	      ins(document.getElementsByTagName('head')[0], el);
	      return el.sheet || el.styleSheet;
	    }();

	    var probe = css(createEl('group'), { behavior: 'url(#default#VML)' });

	    if (!vendor(probe, 'transform') && probe.adj) initVML();else useCssAnimations = vendor(probe, 'animation');
	  }

	  return Spinner;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)(module)))

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.request = request;

	var _cgiPath = __webpack_require__(3);

	function request(cgiName, params) {
	    var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	    var requiredFields = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

	    return function (dispatch, getState) {
	        var action = {
	            'API': {
	                cgiName: cgiName,
	                params: params,
	                opts: opts
	            },
	            type: _cgiPath.API_REQUEST
	        };
	        return dispatch(action);
	    };
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = undefined;

	var _class;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pureRenderDecorator = __webpack_require__(5);

	var _pureRenderDecorator2 = _interopRequireDefault(_pureRenderDecorator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Spin = __webpack_require__(19);

	__webpack_require__(18);

	var Spinner = (0, _pureRenderDecorator2.default)(_class = function (_Component) {
		_inherits(Spinner, _Component);

		function Spinner(props, context) {
			_classCallCheck(this, Spinner);

			var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

			_this.state = {};
			return _this;
		}

		Spinner.prototype.componentWillMount = function componentWillMount() {};

		Spinner.prototype.componentDidMount = function componentDidMount() {
			var opts = {
				lines: 12 // The number of lines to draw
				, length: 3 // The length of each line
				, width: 2 // The line thickness
				, radius: 6 // The radius of the inner circle
				, scale: 1.0 // Scales overall size of the spinner
				, corners: 1 // Roundness (0..1)
				, color: '#777' // #rgb or #rrggbb
				, opacity: 1 / 4 // Opacity of the lines
				, rotate: 0 // Rotation offset
				, direction: 1 // 1: clockwise, -1: counterclockwise
				, speed: 1 // Rounds per second
				, trail: 100 // Afterglow percentage
				, fps: 20 // Frames per second when using setTimeout()
				, zIndex: 2e9 // Use a high z-index by default
				, className: 'spin' // CSS class to assign to the element
				, top: '50%' // center vertically
				, left: '50%' // center horizontally
				, shadow: false // Whether to render a shadow
				, hwaccel: false // Whether to use hardware acceleration (might be buggy)
				, position: 'absolute' // Element positioning
			};
			var target = document.getElementById('spin');
			var spinner = new Spin(opts).spin(target);
		};

		Spinner.prototype.render = function render() {

			console.log('render spinner');

			var isShow = this.props.isShow || false;
			var spinStyle = {
				display: isShow ? 'block' : 'none'
			};

			return _react2.default.createElement('div', { id: 'spin', style: spinStyle });
		};

		return Spinner;
	}(_react.Component)) || _class;

	exports.default = Spinner;

/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	var LATEST_NEWS = exports.LATEST_NEWS = 10;
	var LIKE_NEWS = exports.LIKE_NEWS = 11;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _net = __webpack_require__(27);

	var _net2 = _interopRequireDefault(_net);

	var _lodash = __webpack_require__(2);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _cgiPath = __webpack_require__(3);

	var _cgiPath2 = _interopRequireDefault(_cgiPath);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (store) {
	    return function (next) {
	        return function (action) {

	            var API_OPT = action['API'];

	            if (!API_OPT) {
	                return next(action);
	            }

	            // let ACTION_TYPE = action['type'];
	            var cgiName = API_OPT.cgiName,
	                params = API_OPT.params,
	                _API_OPT$opts = API_OPT.opts,
	                opts = _API_OPT$opts === undefined ? {} : _API_OPT$opts;
	            var onSuccess = params.onSuccess,
	                onError = params.onError,
	                _params$ajaxType = params.ajaxType,
	                ajaxType = _params$ajaxType === undefined ? 'GET' : _params$ajaxType,
	                param = params.param,
	                localData = params.localData;

	            // 触发下一个action

	            var nextAction = function nextAction(type, param, opts) {
	                action['type'] = type;
	                action['opts'] = opts;
	                delete param['onSuccess'];
	                delete param['onError'];
	                var nextRequestAction = (0, _lodash2.default)({}, action, param);
	                return nextRequestAction;
	            };

	            params.data = null;
	            // 触发正在请求的action
	            var result = next(nextAction(cgiName + '_ON', params, opts));

	            _net2.default.ajaxInit({
	                dataReturnSuccessCondition: function dataReturnSuccessCondition(data) {
	                    return !data.ret || !data.retcode;
	                }
	            });

	            _net2.default.ajax({
	                url: _cgiPath2.default[cgiName],
	                ajaxType: ajaxType,
	                param: param,
	                localData: localData,
	                success: function success(data) {
	                    onSuccess && onSuccess(data);
	                    params.data = data;
	                    //  触发请求成功的action
	                    return next(nextAction(cgiName + '_SUCCESS', params, opts));
	                },
	                error: function error(data) {
	                    onError && onError(data);
	                    //  触发请求失败的action
	                    return next(nextAction(cgiName + '_ERROR', params, opts));
	                }
	            });

	            return result;
	        };
	    };
	}; // ajax

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(1), __webpack_require__(6));
		else if(typeof define === 'function' && define.amd)
			define(["react", "redux"], factory);
		else if(typeof exports === 'object')
			exports["ReactRedux"] = factory(require("react"), require("redux"));
		else
			root["ReactRedux"] = factory(root["React"], root["Redux"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_20__) {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};

	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {

	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;

	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};

	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;

	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}


	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;

	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;

	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";

	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;
		exports.connect = exports.Provider = undefined;

		var _Provider = __webpack_require__(5);

		var _Provider2 = _interopRequireDefault(_Provider);

		var _connect = __webpack_require__(6);

		var _connect2 = _interopRequireDefault(_connect);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

		exports.Provider = _Provider2["default"];
		exports.connect = _connect2["default"];

	/***/ },
	/* 1 */
	/***/ function(module, exports) {

		module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

	/***/ },
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _react = __webpack_require__(1);

		exports["default"] = _react.PropTypes.shape({
		  subscribe: _react.PropTypes.func.isRequired,
		  dispatch: _react.PropTypes.func.isRequired,
		  getState: _react.PropTypes.func.isRequired
		});

	/***/ },
	/* 3 */
	/***/ function(module, exports) {

		'use strict';

		exports.__esModule = true;
		exports["default"] = warning;
		/**
		 * Prints a warning in the console if it exists.
		 *
		 * @param {String} message The warning message.
		 * @returns {void}
		 */
		function warning(message) {
		  /* eslint-disable no-console */
		  if (typeof console !== 'undefined' && typeof console.error === 'function') {
		    console.error(message);
		  }
		  /* eslint-enable no-console */
		  try {
		    // This error was thrown as a convenience so that if you enable
		    // "break on all exceptions" in your console,
		    // it would pause the execution at this line.
		    throw new Error(message);
		    /* eslint-disable no-empty */
		  } catch (e) {}
		  /* eslint-enable no-empty */
		}

	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {

		var root = __webpack_require__(17);

		/** Built-in value references. */
		var Symbol = root.Symbol;

		module.exports = Symbol;


	/***/ },
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;
		exports["default"] = undefined;

		var _react = __webpack_require__(1);

		var _storeShape = __webpack_require__(2);

		var _storeShape2 = _interopRequireDefault(_storeShape);

		var _warning = __webpack_require__(3);

		var _warning2 = _interopRequireDefault(_warning);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var didWarnAboutReceivingStore = false;
		function warnAboutReceivingStore() {
		  if (didWarnAboutReceivingStore) {
		    return;
		  }
		  didWarnAboutReceivingStore = true;

		  (0, _warning2["default"])('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
		}

		var Provider = function (_Component) {
		  _inherits(Provider, _Component);

		  Provider.prototype.getChildContext = function getChildContext() {
		    return { store: this.store };
		  };

		  function Provider(props, context) {
		    _classCallCheck(this, Provider);

		    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

		    _this.store = props.store;
		    return _this;
		  }

		  Provider.prototype.render = function render() {
		    return _react.Children.only(this.props.children);
		  };

		  return Provider;
		}(_react.Component);

		exports["default"] = Provider;


		if (true) {
		  Provider.prototype.componentWillReceiveProps = function (nextProps) {
		    var store = this.store;
		    var nextStore = nextProps.store;


		    if (store !== nextStore) {
		      warnAboutReceivingStore();
		    }
		  };
		}

		Provider.propTypes = {
		  store: _storeShape2["default"].isRequired,
		  children: _react.PropTypes.element.isRequired
		};
		Provider.childContextTypes = {
		  store: _storeShape2["default"].isRequired
		};

	/***/ },
	/* 6 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

		exports["default"] = connect;

		var _react = __webpack_require__(1);

		var _storeShape = __webpack_require__(2);

		var _storeShape2 = _interopRequireDefault(_storeShape);

		var _shallowEqual = __webpack_require__(7);

		var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

		var _wrapActionCreators = __webpack_require__(8);

		var _wrapActionCreators2 = _interopRequireDefault(_wrapActionCreators);

		var _warning = __webpack_require__(3);

		var _warning2 = _interopRequireDefault(_warning);

		var _isPlainObject = __webpack_require__(19);

		var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

		var _hoistNonReactStatics = __webpack_require__(9);

		var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

		var _invariant = __webpack_require__(10);

		var _invariant2 = _interopRequireDefault(_invariant);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var defaultMapStateToProps = function defaultMapStateToProps(state) {
		  return {};
		}; // eslint-disable-line no-unused-vars
		var defaultMapDispatchToProps = function defaultMapDispatchToProps(dispatch) {
		  return { dispatch: dispatch };
		};
		var defaultMergeProps = function defaultMergeProps(stateProps, dispatchProps, parentProps) {
		  return _extends({}, parentProps, stateProps, dispatchProps);
		};

		function getDisplayName(WrappedComponent) {
		  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
		}

		var errorObject = { value: null };
		function tryCatch(fn, ctx) {
		  try {
		    return fn.apply(ctx);
		  } catch (e) {
		    errorObject.value = e;
		    return errorObject;
		  }
		}

		// Helps track hot reloading.
		var nextVersion = 0;

		function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
		  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

		  var shouldSubscribe = Boolean(mapStateToProps);
		  var mapState = mapStateToProps || defaultMapStateToProps;

		  var mapDispatch = void 0;
		  if (typeof mapDispatchToProps === 'function') {
		    mapDispatch = mapDispatchToProps;
		  } else if (!mapDispatchToProps) {
		    mapDispatch = defaultMapDispatchToProps;
		  } else {
		    mapDispatch = (0, _wrapActionCreators2["default"])(mapDispatchToProps);
		  }

		  var finalMergeProps = mergeProps || defaultMergeProps;
		  var _options$pure = options.pure,
		      pure = _options$pure === undefined ? true : _options$pure,
		      _options$withRef = options.withRef,
		      withRef = _options$withRef === undefined ? false : _options$withRef;

		  var checkMergedEquals = pure && finalMergeProps !== defaultMergeProps;

		  // Helps track hot reloading.
		  var version = nextVersion++;

		  return function wrapWithConnect(WrappedComponent) {
		    var connectDisplayName = 'Connect(' + getDisplayName(WrappedComponent) + ')';

		    function checkStateShape(props, methodName) {
		      if (!(0, _isPlainObject2["default"])(props)) {
		        (0, _warning2["default"])(methodName + '() in ' + connectDisplayName + ' must return a plain object. ' + ('Instead received ' + props + '.'));
		      }
		    }

		    function computeMergedProps(stateProps, dispatchProps, parentProps) {
		      var mergedProps = finalMergeProps(stateProps, dispatchProps, parentProps);
		      if (true) {
		        checkStateShape(mergedProps, 'mergeProps');
		      }
		      return mergedProps;
		    }

		    var Connect = function (_Component) {
		      _inherits(Connect, _Component);

		      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
		        return !pure || this.haveOwnPropsChanged || this.hasStoreStateChanged;
		      };

		      function Connect(props, context) {
		        _classCallCheck(this, Connect);

		        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

		        _this.version = version;
		        _this.store = props.store || context.store;

		        (0, _invariant2["default"])(_this.store, 'Could not find "store" in either the context or ' + ('props of "' + connectDisplayName + '". ') + 'Either wrap the root component in a <Provider>, ' + ('or explicitly pass "store" as a prop to "' + connectDisplayName + '".'));

		        var storeState = _this.store.getState();
		        _this.state = { storeState: storeState };
		        _this.clearCache();
		        return _this;
		      }

		      Connect.prototype.computeStateProps = function computeStateProps(store, props) {
		        if (!this.finalMapStateToProps) {
		          return this.configureFinalMapState(store, props);
		        }

		        var state = store.getState();
		        var stateProps = this.doStatePropsDependOnOwnProps ? this.finalMapStateToProps(state, props) : this.finalMapStateToProps(state);

		        if (true) {
		          checkStateShape(stateProps, 'mapStateToProps');
		        }
		        return stateProps;
		      };

		      Connect.prototype.configureFinalMapState = function configureFinalMapState(store, props) {
		        var mappedState = mapState(store.getState(), props);
		        var isFactory = typeof mappedState === 'function';

		        this.finalMapStateToProps = isFactory ? mappedState : mapState;
		        this.doStatePropsDependOnOwnProps = this.finalMapStateToProps.length !== 1;

		        if (isFactory) {
		          return this.computeStateProps(store, props);
		        }

		        if (true) {
		          checkStateShape(mappedState, 'mapStateToProps');
		        }
		        return mappedState;
		      };

		      Connect.prototype.computeDispatchProps = function computeDispatchProps(store, props) {
		        if (!this.finalMapDispatchToProps) {
		          return this.configureFinalMapDispatch(store, props);
		        }

		        var dispatch = store.dispatch;

		        var dispatchProps = this.doDispatchPropsDependOnOwnProps ? this.finalMapDispatchToProps(dispatch, props) : this.finalMapDispatchToProps(dispatch);

		        if (true) {
		          checkStateShape(dispatchProps, 'mapDispatchToProps');
		        }
		        return dispatchProps;
		      };

		      Connect.prototype.configureFinalMapDispatch = function configureFinalMapDispatch(store, props) {
		        var mappedDispatch = mapDispatch(store.dispatch, props);
		        var isFactory = typeof mappedDispatch === 'function';

		        this.finalMapDispatchToProps = isFactory ? mappedDispatch : mapDispatch;
		        this.doDispatchPropsDependOnOwnProps = this.finalMapDispatchToProps.length !== 1;

		        if (isFactory) {
		          return this.computeDispatchProps(store, props);
		        }

		        if (true) {
		          checkStateShape(mappedDispatch, 'mapDispatchToProps');
		        }
		        return mappedDispatch;
		      };

		      Connect.prototype.updateStatePropsIfNeeded = function updateStatePropsIfNeeded() {
		        var nextStateProps = this.computeStateProps(this.store, this.props);
		        if (this.stateProps && (0, _shallowEqual2["default"])(nextStateProps, this.stateProps)) {
		          return false;
		        }

		        this.stateProps = nextStateProps;
		        return true;
		      };

		      Connect.prototype.updateDispatchPropsIfNeeded = function updateDispatchPropsIfNeeded() {
		        var nextDispatchProps = this.computeDispatchProps(this.store, this.props);
		        if (this.dispatchProps && (0, _shallowEqual2["default"])(nextDispatchProps, this.dispatchProps)) {
		          return false;
		        }

		        this.dispatchProps = nextDispatchProps;
		        return true;
		      };

		      Connect.prototype.updateMergedPropsIfNeeded = function updateMergedPropsIfNeeded() {
		        var nextMergedProps = computeMergedProps(this.stateProps, this.dispatchProps, this.props);
		        if (this.mergedProps && checkMergedEquals && (0, _shallowEqual2["default"])(nextMergedProps, this.mergedProps)) {
		          return false;
		        }

		        this.mergedProps = nextMergedProps;
		        return true;
		      };

		      Connect.prototype.isSubscribed = function isSubscribed() {
		        return typeof this.unsubscribe === 'function';
		      };

		      Connect.prototype.trySubscribe = function trySubscribe() {
		        if (shouldSubscribe && !this.unsubscribe) {
		          this.unsubscribe = this.store.subscribe(this.handleChange.bind(this));
		          this.handleChange();
		        }
		      };

		      Connect.prototype.tryUnsubscribe = function tryUnsubscribe() {
		        if (this.unsubscribe) {
		          this.unsubscribe();
		          this.unsubscribe = null;
		        }
		      };

		      Connect.prototype.componentDidMount = function componentDidMount() {
		        this.trySubscribe();
		      };

		      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
		        if (!pure || !(0, _shallowEqual2["default"])(nextProps, this.props)) {
		          this.haveOwnPropsChanged = true;
		        }
		      };

		      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
		        this.tryUnsubscribe();
		        this.clearCache();
		      };

		      Connect.prototype.clearCache = function clearCache() {
		        this.dispatchProps = null;
		        this.stateProps = null;
		        this.mergedProps = null;
		        this.haveOwnPropsChanged = true;
		        this.hasStoreStateChanged = true;
		        this.haveStatePropsBeenPrecalculated = false;
		        this.statePropsPrecalculationError = null;
		        this.renderedElement = null;
		        this.finalMapDispatchToProps = null;
		        this.finalMapStateToProps = null;
		      };

		      Connect.prototype.handleChange = function handleChange() {
		        if (!this.unsubscribe) {
		          return;
		        }

		        var storeState = this.store.getState();
		        var prevStoreState = this.state.storeState;
		        if (pure && prevStoreState === storeState) {
		          return;
		        }

		        if (pure && !this.doStatePropsDependOnOwnProps) {
		          var haveStatePropsChanged = tryCatch(this.updateStatePropsIfNeeded, this);
		          if (!haveStatePropsChanged) {
		            return;
		          }
		          if (haveStatePropsChanged === errorObject) {
		            this.statePropsPrecalculationError = errorObject.value;
		          }
		          this.haveStatePropsBeenPrecalculated = true;
		        }

		        this.hasStoreStateChanged = true;
		        this.setState({ storeState: storeState });
		      };

		      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
		        (0, _invariant2["default"])(withRef, 'To access the wrapped instance, you need to specify ' + '{ withRef: true } as the fourth argument of the connect() call.');

		        return this.refs.wrappedInstance;
		      };

		      Connect.prototype.render = function render() {
		        var haveOwnPropsChanged = this.haveOwnPropsChanged,
		            hasStoreStateChanged = this.hasStoreStateChanged,
		            haveStatePropsBeenPrecalculated = this.haveStatePropsBeenPrecalculated,
		            statePropsPrecalculationError = this.statePropsPrecalculationError,
		            renderedElement = this.renderedElement;


		        this.haveOwnPropsChanged = false;
		        this.hasStoreStateChanged = false;
		        this.haveStatePropsBeenPrecalculated = false;
		        this.statePropsPrecalculationError = null;

		        if (statePropsPrecalculationError) {
		          throw statePropsPrecalculationError;
		        }

		        var shouldUpdateStateProps = true;
		        var shouldUpdateDispatchProps = true;
		        if (pure && renderedElement) {
		          shouldUpdateStateProps = hasStoreStateChanged || haveOwnPropsChanged && this.doStatePropsDependOnOwnProps;
		          shouldUpdateDispatchProps = haveOwnPropsChanged && this.doDispatchPropsDependOnOwnProps;
		        }

		        var haveStatePropsChanged = false;
		        var haveDispatchPropsChanged = false;
		        if (haveStatePropsBeenPrecalculated) {
		          haveStatePropsChanged = true;
		        } else if (shouldUpdateStateProps) {
		          haveStatePropsChanged = this.updateStatePropsIfNeeded();
		        }
		        if (shouldUpdateDispatchProps) {
		          haveDispatchPropsChanged = this.updateDispatchPropsIfNeeded();
		        }

		        var haveMergedPropsChanged = true;
		        if (haveStatePropsChanged || haveDispatchPropsChanged || haveOwnPropsChanged) {
		          haveMergedPropsChanged = this.updateMergedPropsIfNeeded();
		        } else {
		          haveMergedPropsChanged = false;
		        }

		        if (!haveMergedPropsChanged && renderedElement) {
		          return renderedElement;
		        }

		        if (withRef) {
		          this.renderedElement = (0, _react.createElement)(WrappedComponent, _extends({}, this.mergedProps, {
		            ref: 'wrappedInstance'
		          }));
		        } else {
		          this.renderedElement = (0, _react.createElement)(WrappedComponent, this.mergedProps);
		        }

		        return this.renderedElement;
		      };

		      return Connect;
		    }(_react.Component);

		    Connect.displayName = connectDisplayName;
		    Connect.WrappedComponent = WrappedComponent;
		    Connect.contextTypes = {
		      store: _storeShape2["default"]
		    };
		    Connect.propTypes = {
		      store: _storeShape2["default"]
		    };

		    if (true) {
		      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
		        if (this.version === version) {
		          return;
		        }

		        // We are hot reloading!
		        this.version = version;
		        this.trySubscribe();
		        this.clearCache();
		      };
		    }

		    return (0, _hoistNonReactStatics2["default"])(Connect, WrappedComponent);
		  };
		}

	/***/ },
	/* 7 */
	/***/ function(module, exports) {

		"use strict";

		exports.__esModule = true;
		exports["default"] = shallowEqual;
		function shallowEqual(objA, objB) {
		  if (objA === objB) {
		    return true;
		  }

		  var keysA = Object.keys(objA);
		  var keysB = Object.keys(objB);

		  if (keysA.length !== keysB.length) {
		    return false;
		  }

		  // Test for A's keys different from B.
		  var hasOwn = Object.prototype.hasOwnProperty;
		  for (var i = 0; i < keysA.length; i++) {
		    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
		      return false;
		    }
		  }

		  return true;
		}

	/***/ },
	/* 8 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;
		exports["default"] = wrapActionCreators;

		var _redux = __webpack_require__(20);

		function wrapActionCreators(actionCreators) {
		  return function (dispatch) {
		    return (0, _redux.bindActionCreators)(actionCreators, dispatch);
		  };
		}

	/***/ },
	/* 9 */
	/***/ function(module, exports) {

		/**
		 * Copyright 2015, Yahoo! Inc.
		 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
		 */
		'use strict';

		var REACT_STATICS = {
		    childContextTypes: true,
		    contextTypes: true,
		    defaultProps: true,
		    displayName: true,
		    getDefaultProps: true,
		    mixins: true,
		    propTypes: true,
		    type: true
		};

		var KNOWN_STATICS = {
		    name: true,
		    length: true,
		    prototype: true,
		    caller: true,
		    arguments: true,
		    arity: true
		};

		var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

		module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
		    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
		        var keys = Object.getOwnPropertyNames(sourceComponent);

		        /* istanbul ignore else */
		        if (isGetOwnPropertySymbolsAvailable) {
		            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
		        }

		        for (var i = 0; i < keys.length; ++i) {
		            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
		                try {
		                    targetComponent[keys[i]] = sourceComponent[keys[i]];
		                } catch (error) {

		                }
		            }
		        }
		    }

		    return targetComponent;
		};


	/***/ },
	/* 10 */
	/***/ function(module, exports, __webpack_require__) {

		/**
		 * Copyright 2013-2015, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 */

		'use strict';

		/**
		 * Use invariant() to assert state which your program assumes to be true.
		 *
		 * Provide sprintf-style format (only %s is supported) and arguments
		 * to provide information about what broke and what you were
		 * expecting.
		 *
		 * The invariant message will be stripped in production, but the invariant
		 * will remain to ensure logic does not differ in production.
		 */

		var invariant = function(condition, format, a, b, c, d, e, f) {
		  if (true) {
		    if (format === undefined) {
		      throw new Error('invariant requires an error message argument');
		    }
		  }

		  if (!condition) {
		    var error;
		    if (format === undefined) {
		      error = new Error(
		        'Minified exception occurred; use the non-minified dev environment ' +
		        'for the full error message and additional helpful warnings.'
		      );
		    } else {
		      var args = [a, b, c, d, e, f];
		      var argIndex = 0;
		      error = new Error(
		        format.replace(/%s/g, function() { return args[argIndex++]; })
		      );
		      error.name = 'Invariant Violation';
		    }

		    error.framesToPop = 1; // we don't care about invariant's own frame
		    throw error;
		  }
		};

		module.exports = invariant;


	/***/ },
	/* 11 */
	/***/ function(module, exports, __webpack_require__) {

		var Symbol = __webpack_require__(4),
		    getRawTag = __webpack_require__(14),
		    objectToString = __webpack_require__(15);

		/** `Object#toString` result references. */
		var nullTag = '[object Null]',
		    undefinedTag = '[object Undefined]';

		/** Built-in value references. */
		var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

		/**
		 * The base implementation of `getTag` without fallbacks for buggy environments.
		 *
		 * @private
		 * @param {*} value The value to query.
		 * @returns {string} Returns the `toStringTag`.
		 */
		function baseGetTag(value) {
		  if (value == null) {
		    return value === undefined ? undefinedTag : nullTag;
		  }
		  value = Object(value);
		  return (symToStringTag && symToStringTag in value)
		    ? getRawTag(value)
		    : objectToString(value);
		}

		module.exports = baseGetTag;


	/***/ },
	/* 12 */
	/***/ function(module, exports) {

		/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
		var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

		module.exports = freeGlobal;

		/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()) || Function('return this')()))

	/***/ },
	/* 13 */
	/***/ function(module, exports, __webpack_require__) {

		var overArg = __webpack_require__(16);

		/** Built-in value references. */
		var getPrototype = overArg(Object.getPrototypeOf, Object);

		module.exports = getPrototype;


	/***/ },
	/* 14 */
	/***/ function(module, exports, __webpack_require__) {

		var Symbol = __webpack_require__(4);

		/** Used for built-in method references. */
		var objectProto = Object.prototype;

		/** Used to check objects for own properties. */
		var hasOwnProperty = objectProto.hasOwnProperty;

		/**
		 * Used to resolve the
		 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
		 * of values.
		 */
		var nativeObjectToString = objectProto.toString;

		/** Built-in value references. */
		var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

		/**
		 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
		 *
		 * @private
		 * @param {*} value The value to query.
		 * @returns {string} Returns the raw `toStringTag`.
		 */
		function getRawTag(value) {
		  var isOwn = hasOwnProperty.call(value, symToStringTag),
		      tag = value[symToStringTag];

		  try {
		    value[symToStringTag] = undefined;
		    var unmasked = true;
		  } catch (e) {}

		  var result = nativeObjectToString.call(value);
		  if (unmasked) {
		    if (isOwn) {
		      value[symToStringTag] = tag;
		    } else {
		      delete value[symToStringTag];
		    }
		  }
		  return result;
		}

		module.exports = getRawTag;


	/***/ },
	/* 15 */
	/***/ function(module, exports) {

		/** Used for built-in method references. */
		var objectProto = Object.prototype;

		/**
		 * Used to resolve the
		 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
		 * of values.
		 */
		var nativeObjectToString = objectProto.toString;

		/**
		 * Converts `value` to a string using `Object.prototype.toString`.
		 *
		 * @private
		 * @param {*} value The value to convert.
		 * @returns {string} Returns the converted string.
		 */
		function objectToString(value) {
		  return nativeObjectToString.call(value);
		}

		module.exports = objectToString;


	/***/ },
	/* 16 */
	/***/ function(module, exports) {

		/**
		 * Creates a unary function that invokes `func` with its argument transformed.
		 *
		 * @private
		 * @param {Function} func The function to wrap.
		 * @param {Function} transform The argument transform.
		 * @returns {Function} Returns the new function.
		 */
		function overArg(func, transform) {
		  return function(arg) {
		    return func(transform(arg));
		  };
		}

		module.exports = overArg;


	/***/ },
	/* 17 */
	/***/ function(module, exports, __webpack_require__) {

		var freeGlobal = __webpack_require__(12);

		/** Detect free variable `self`. */
		var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

		/** Used as a reference to the global object. */
		var root = freeGlobal || freeSelf || Function('return this')();

		module.exports = root;


	/***/ },
	/* 18 */
	/***/ function(module, exports) {

		/**
		 * Checks if `value` is object-like. A value is object-like if it's not `null`
		 * and has a `typeof` result of "object".
		 *
		 * @static
		 * @memberOf _
		 * @since 4.0.0
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
		 * @example
		 *
		 * _.isObjectLike({});
		 * // => true
		 *
		 * _.isObjectLike([1, 2, 3]);
		 * // => true
		 *
		 * _.isObjectLike(_.noop);
		 * // => false
		 *
		 * _.isObjectLike(null);
		 * // => false
		 */
		function isObjectLike(value) {
		  return value != null && typeof value == 'object';
		}

		module.exports = isObjectLike;


	/***/ },
	/* 19 */
	/***/ function(module, exports, __webpack_require__) {

		var baseGetTag = __webpack_require__(11),
		    getPrototype = __webpack_require__(13),
		    isObjectLike = __webpack_require__(18);

		/** `Object#toString` result references. */
		var objectTag = '[object Object]';

		/** Used for built-in method references. */
		var funcProto = Function.prototype,
		    objectProto = Object.prototype;

		/** Used to resolve the decompiled source of functions. */
		var funcToString = funcProto.toString;

		/** Used to check objects for own properties. */
		var hasOwnProperty = objectProto.hasOwnProperty;

		/** Used to infer the `Object` constructor. */
		var objectCtorString = funcToString.call(Object);

		/**
		 * Checks if `value` is a plain object, that is, an object created by the
		 * `Object` constructor or one with a `[[Prototype]]` of `null`.
		 *
		 * @static
		 * @memberOf _
		 * @since 0.8.0
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
		 * @example
		 *
		 * function Foo() {
		 *   this.a = 1;
		 * }
		 *
		 * _.isPlainObject(new Foo);
		 * // => false
		 *
		 * _.isPlainObject([1, 2, 3]);
		 * // => false
		 *
		 * _.isPlainObject({ 'x': 0, 'y': 0 });
		 * // => true
		 *
		 * _.isPlainObject(Object.create(null));
		 * // => true
		 */
		function isPlainObject(value) {
		  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
		    return false;
		  }
		  var proto = getPrototype(value);
		  if (proto === null) {
		    return true;
		  }
		  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
		  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
		    funcToString.call(Ctor) == objectCtorString;
		}

		module.exports = isPlainObject;


	/***/ },
	/* 20 */
	/***/ function(module, exports) {

		module.exports = __WEBPACK_EXTERNAL_MODULE_20__;

	/***/ }
	/******/ ])
	});
	;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.routes = exports.route = exports.components = exports.component = exports.history = undefined;
	exports.falsy = falsy;

	var _react = __webpack_require__(1);

	var func = _react.PropTypes.func,
	    object = _react.PropTypes.object,
	    arrayOf = _react.PropTypes.arrayOf,
	    oneOfType = _react.PropTypes.oneOfType,
	    element = _react.PropTypes.element,
	    shape = _react.PropTypes.shape,
	    string = _react.PropTypes.string;
	function falsy(props, propName, componentName) {
	  if (props[propName]) return new Error('<' + componentName + '> should not have a "' + propName + '" prop');
	}

	var history = exports.history = shape({
	  listen: func.isRequired,
	  push: func.isRequired,
	  replace: func.isRequired,
	  go: func.isRequired,
	  goBack: func.isRequired,
	  goForward: func.isRequired
	});

	var component = exports.component = oneOfType([func, string]);
	var components = exports.components = oneOfType([component, object]);
	var route = exports.route = oneOfType([object, element]);
	var routes = exports.routes = oneOfType([route, arrayOf(route)]);

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';

	function thunkMiddleware(_ref) {
	  var dispatch = _ref.dispatch;
	  var getState = _ref.getState;

	  return function (next) {
	    return function (action) {
	      return typeof action === 'function' ? action(dispatch, getState) : next(action);
	    };
	  };
	}

	module.exports = thunkMiddleware;

/***/ },
/* 27 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.ajaxInit = ajaxInit;
	exports.ajaxGet = ajaxGet;
	exports.ajaxPost = ajaxPost;
	exports.ajaxJsonp = ajaxJsonp;
	/**
	 * steamer-net
	 * github: https://github.com/SteamerTeam/steamer-net
	 * npm: https://www.npmjs.com/package/steamer-net
	 * version: 0.2.2
	 * date: 2016.07.30
	 */

	// global config for whole plugin
	var config = {
	    dataReturnSuccessCondition: function dataReturnSuccessCondition() {
	        return true;
	    }
	};

	// readyState const
	var DONE = 4;

	// status code
	var STATE_200 = 200;

	// empty function
	function emptyFunc() {}

	function makeOpts(options) {

	    var opts = {};
	    opts.url = options.url, opts.paramObj = options.param || {}, opts.successCb = options.success || emptyFunc, opts.errorCb = options.error || emptyFunc, opts.localData = options.localData || null, opts.method = options.ajaxType || 'GET';
	    opts.method = opts.method.toUpperCase();
	    return opts;
	}

	/**
	 * create xhr
	 * @return {Object} [xhr object]
	 */
	function createXHR() {

	    var xhr = null;

	    var XMLHttpFactories = [function () {
	        return new XMLHttpRequest();
	    }, function () {
	        return new XDomainRequest();
	    }, function () {
	        return new ActiveXObject("Msxml2.XMLHTTP");
	    }, function () {
	        return new ActiveXObject("Msxml3.xmlhttp");
	    }, function () {
	        return new ActiveXObject("Microsoft.XMLHTTP");
	    }];

	    for (var i = 0, len = XMLHttpFactories.length; i < len; i++) {
	        try {
	            xhr = XMLHttpFactories[i]();
	        } catch (e) {
	            continue;
	        }
	        break;
	    }

	    return xhr;
	}

	/**
	 * make url/request param
	 * @param  {Object} paramObj [param object passed by user]
	 * @return {String}          [return param string]
	 */
	function makeParam(paramObj) {
	    var paramArray = [];

	    for (var key in paramObj) {
	        paramArray.push(key + '=' + encodeURIComponent(paramObj[key]));
	    }

	    return paramArray.join('&');
	}

	/**
	 * make url with param
	 * @param  {String} url        [original url]
	 * @param  {Array}  paramArray [param array]
	 * @return {String}            [final url]
	 */
	function makeUrl(url, paramString) {
	    url += (!!~url.indexOf('?') ? '&' : '?') + paramString;
	    return url;
	}

	function ajaxInit(cf) {
	    config.dataReturnSuccessCondition = cf.dataReturnSuccessCondition || config.dataReturnSuccessCondition;
	}

	function ajaxGet(options) {
	    var opts = makeOpts(options),
	        paramString = makeParam(opts.paramObj),
	        url = makeUrl(opts.url, paramString);

	    var xhr = sendReq(opts);

	    if (!xhr) {
	        return;
	    }

	    xhr.open(opts.method, url, true);
	    xhr.withCredentials = true;
	    xhr.setRequestHeader && xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	    xhr.send();
	}

	function ajaxPost(options) {
	    var opts = makeOpts(options),
	        paramString = makeParam(opts.paramObj),
	        url = opts.url;

	    var xhr = sendReq(opts);

	    if (!xhr) {
	        return;
	    }

	    xhr.open(opts.method, url, true);
	    xhr.withCredentials = true;
	    xhr.setRequestHeader && xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	    xhr.send(paramString);
	}

	/**
	 * jsonp
	 * @param  {[type]} options [description]
	 * @return {[type]}         [description]
	 */
	function ajaxJsonp(options) {

	    var opts = makeOpts(options);

	    if (!opts.paramObj || !opts.paramObj.jsonCbName) {
	        throw new Error("Please provide a callback function name for jsonp");
	    }

	    opts.paramObj.callback = opts.paramObj.jsonCbName;
	    delete opts.paramObj['jsonCbName'];

	    window[opts.paramObj.callback] = function (data) {
	        if (opts.localData) {
	            onDataReturn(opts.localData, opts);
	            return;
	        }

	        onDataReturn(data, opts);
	        removeScript(script);
	    };

	    function removeScript(st) {
	        setTimeout(function () {
	            st.parentNode.removeChild(st);
	            st = null;
	        }, 200);
	    }

	    var paramString = makeParam(opts.paramObj),
	        url = makeUrl(opts.url, paramString),
	        script = document.createElement("script"),
	        head = document.getElementsByTagName("head")[0];

	    script.src = url;
	    head.appendChild(script);

	    script.onerror = function (err) {
	        opts.errorCb({ errCode: err });
	        removeScript(script);
	    };
	}

	function onDataReturn(data, opts) {
	    var isSuccess = config.dataReturnSuccessCondition(data);
	    isSuccess ? opts.successCb(data) : opts.errorCb(data);
	}

	function sendReq(opts) {
	    var xhr = createXHR();

	    // 如果本地已经从别的地方获取到数据，就不用请求了
	    if (opts.localData) {
	        onDataReturn(opts.localData, opts);
	        return;
	    }

	    xhr.onreadystatechange = function () {
	        if (xhr.readyState === DONE) {
	            if (xhr.status === STATE_200) {
	                var data = JSON.parse(xhr.responseText);
	                onDataReturn(data, opts);
	            } else {
	                opts.errorCb({
	                    errCode: xhr.status
	                });
	            }
	        }
	    };

	    xhr.onerror = function () {
	        opts.errorCb({
	            errCode: -1
	        });
	    };

	    return xhr;
	}

	function ajax(options) {

	    var opts = makeOpts(options);

	    switch (opts.method) {
	        case 'JSONP':
	            ajaxJsonp(options);
	            break;
	        case 'GET':
	            ajaxGet(options);
	            break;
	        case 'POST':
	            ajaxPost(options);
	            break;
	    }
	}

	var net = {
	    ajax: ajax,
	    ajaxGet: ajaxGet,
	    ajaxPost: ajaxPost,
	    ajaxJsonp: ajaxJsonp,
	    ajaxInit: ajaxInit
	};

	exports.default = net;

/***/ },
/* 28 */,
/* 29 */,
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _reactRedux = __webpack_require__(24);

	var _actions = __webpack_require__(20);

	var _actions2 = __webpack_require__(49);

	// Map Redux state to component props
	// ownProps stores react-router-redux props
	function mapStateToProps(state) {
	    return {
	        args: state.args,
	        tabs: state.tabs,
	        news: state.news,
	        details: state.details,
	        comments: state.comments,
	        spinLoading: state.spinLoading,
	        listLoading: state.listLoading
	    };
	}

	// Map Redux actions to component props
	function mapDispatchToProps(dispatch) {
	    return {
	        request: function request(cgiName, params, opts) {
	            return dispatch((0, _actions.request)(cgiName, params, opts));
	        },
	        getArgs: function getArgs(value) {
	            return dispatch((0, _actions2.getArgs)(value));
	        },
	        toggleListLoading: function toggleListLoading(value) {
	            return dispatch((0, _actions2.toggleListLoading)(value));
	        },
	        toggleSpinLoading: function toggleSpinLoading(value) {
	            return dispatch((0, _actions2.toggleSpinLoading)(value));
	        },
	        updateActiveTab: function updateActiveTab(value) {
	            return dispatch((0, _actions2.updateActiveTab)(value));
	        },
	        likeNews: function likeNews(value) {
	            return dispatch((0, _actions2.likeNews)(value));
	        },
	        dislikeNews: function dislikeNews(value) {
	            return dispatch((0, _actions2.dislikeNews)(value));
	        }
	    };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps);

/***/ },
/* 31 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	/**
	 * Indicates that navigation was caused by a call to history.push.
	 */
	var PUSH = exports.PUSH = 'PUSH';

	/**
	 * Indicates that navigation was caused by a call to history.replace.
	 */
	var REPLACE = exports.REPLACE = 'REPLACE';

	/**
	 * Indicates that navigation was caused by some other action such
	 * as using a browser's back/forward buttons and/or manually manipulating
	 * the URL in a browser's location bar. This is the default.
	 *
	 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
	 * for more information.
	 */
	var POP = exports.POP = 'POP';

/***/ },
/* 32 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var addEventListener = exports.addEventListener = function addEventListener(node, event, listener) {
	  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
	};

	var removeEventListener = exports.removeEventListener = function removeEventListener(node, event, listener) {
	  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
	};

	/**
	 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
	 *
	 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
	 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
	 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
	 */
	var supportsHistory = exports.supportsHistory = function supportsHistory() {
	  var ua = window.navigator.userAgent;

	  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;

	  return window.history && 'pushState' in window.history;
	};

	/**
	 * Returns false if using go(n) with hash history causes a full page reload.
	 */
	var supportsGoWithoutReloadUsingHash = exports.supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
	  return window.navigator.userAgent.indexOf('Firefox') === -1;
	};

	/**
	 * Returns true if browser fires popstate on hash change.
	 * IE10 and IE11 do not.
	 */
	var supportsPopstateOnHashchange = exports.supportsPopstateOnHashchange = function supportsPopstateOnHashchange() {
	  return window.navigator.userAgent.indexOf('Trident') === -1;
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 34 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	var logger = function logger(store) {
	  return function (next) {
	    return function (action) {
	      var result = next(action); // 返回的也是同样的action值
	      // console.log('dispatching', action);
	      // console.log('next state', store.getState());
	      return result;
	    };
	  };
	};

	exports.default = logger;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.go = exports.replaceLocation = exports.pushLocation = exports.startListener = exports.getUserConfirmation = exports.getCurrentLocation = undefined;

	var _LocationUtils = __webpack_require__(15);

	var _DOMUtils = __webpack_require__(32);

	var _DOMStateStorage = __webpack_require__(50);

	var _PathUtils = __webpack_require__(10);

	var _ExecutionEnvironment = __webpack_require__(36);

	var PopStateEvent = 'popstate';
	var HashChangeEvent = 'hashchange';

	var needsHashchangeListener = _ExecutionEnvironment.canUseDOM && !(0, _DOMUtils.supportsPopstateOnHashchange)();

	var _createLocation = function _createLocation(historyState) {
	  var key = historyState && historyState.key;

	  return (0, _LocationUtils.createLocation)({
	    pathname: window.location.pathname,
	    search: window.location.search,
	    hash: window.location.hash,
	    state: key ? (0, _DOMStateStorage.readState)(key) : undefined
	  }, undefined, key);
	};

	var getCurrentLocation = exports.getCurrentLocation = function getCurrentLocation() {
	  var historyState = void 0;
	  try {
	    historyState = window.history.state || {};
	  } catch (error) {
	    // IE 11 sometimes throws when accessing window.history.state
	    // See https://github.com/ReactTraining/history/pull/289
	    historyState = {};
	  }

	  return _createLocation(historyState);
	};

	var getUserConfirmation = exports.getUserConfirmation = function getUserConfirmation(message, callback) {
	  return callback(window.confirm(message));
	}; // eslint-disable-line no-alert

	var startListener = exports.startListener = function startListener(listener) {
	  var handlePopState = function handlePopState(event) {
	    if (event.state !== undefined) // Ignore extraneous popstate events in WebKit
	      listener(_createLocation(event.state));
	  };

	  (0, _DOMUtils.addEventListener)(window, PopStateEvent, handlePopState);

	  var handleUnpoppedHashChange = function handleUnpoppedHashChange() {
	    return listener(getCurrentLocation());
	  };

	  if (needsHashchangeListener) {
	    (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleUnpoppedHashChange);
	  }

	  return function () {
	    (0, _DOMUtils.removeEventListener)(window, PopStateEvent, handlePopState);

	    if (needsHashchangeListener) {
	      (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleUnpoppedHashChange);
	    }
	  };
	};

	var updateLocation = function updateLocation(location, updateState) {
	  var state = location.state;
	  var key = location.key;


	  if (state !== undefined) (0, _DOMStateStorage.saveState)(key, state);

	  updateState({ key: key }, (0, _PathUtils.createPath)(location));
	};

	var pushLocation = exports.pushLocation = function pushLocation(location) {
	  return updateLocation(location, function (state, path) {
	    return window.history.pushState(state, null, path);
	  });
	};

	var replaceLocation = exports.replaceLocation = function replaceLocation(location) {
	  return updateLocation(location, function (state, path) {
	    return window.history.replaceState(state, null, path);
	  });
	};

	var go = exports.go = function go(n) {
	  if (n) window.history.go(n);
	};

/***/ },
/* 36 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var canUseDOM = exports.canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _AsyncUtils = __webpack_require__(118);

	var _PathUtils = __webpack_require__(10);

	var _runTransitionHook = __webpack_require__(38);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _Actions = __webpack_require__(31);

	var _LocationUtils = __webpack_require__(15);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var createHistory = function createHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var getCurrentLocation = options.getCurrentLocation;
	  var getUserConfirmation = options.getUserConfirmation;
	  var pushLocation = options.pushLocation;
	  var replaceLocation = options.replaceLocation;
	  var go = options.go;
	  var keyLength = options.keyLength;


	  var currentLocation = void 0;
	  var pendingLocation = void 0;
	  var beforeListeners = [];
	  var listeners = [];
	  var allKeys = [];

	  var getCurrentIndex = function getCurrentIndex() {
	    if (pendingLocation && pendingLocation.action === _Actions.POP) return allKeys.indexOf(pendingLocation.key);

	    if (currentLocation) return allKeys.indexOf(currentLocation.key);

	    return -1;
	  };

	  var updateLocation = function updateLocation(nextLocation) {
	    var currentIndex = getCurrentIndex();

	    currentLocation = nextLocation;

	    if (currentLocation.action === _Actions.PUSH) {
	      allKeys = [].concat(allKeys.slice(0, currentIndex + 1), [currentLocation.key]);
	    } else if (currentLocation.action === _Actions.REPLACE) {
	      allKeys[currentIndex] = currentLocation.key;
	    }

	    listeners.forEach(function (listener) {
	      return listener(currentLocation);
	    });
	  };

	  var listenBefore = function listenBefore(listener) {
	    beforeListeners.push(listener);

	    return function () {
	      return beforeListeners = beforeListeners.filter(function (item) {
	        return item !== listener;
	      });
	    };
	  };

	  var listen = function listen(listener) {
	    listeners.push(listener);

	    return function () {
	      return listeners = listeners.filter(function (item) {
	        return item !== listener;
	      });
	    };
	  };

	  var confirmTransitionTo = function confirmTransitionTo(location, callback) {
	    (0, _AsyncUtils.loopAsync)(beforeListeners.length, function (index, next, done) {
	      (0, _runTransitionHook2.default)(beforeListeners[index], location, function (result) {
	        return result != null ? done(result) : next();
	      });
	    }, function (message) {
	      if (getUserConfirmation && typeof message === 'string') {
	        getUserConfirmation(message, function (ok) {
	          return callback(ok !== false);
	        });
	      } else {
	        callback(message !== false);
	      }
	    });
	  };

	  var transitionTo = function transitionTo(nextLocation) {
	    if (currentLocation && (0, _LocationUtils.locationsAreEqual)(currentLocation, nextLocation) || pendingLocation && (0, _LocationUtils.locationsAreEqual)(pendingLocation, nextLocation)) return; // Nothing to do

	    pendingLocation = nextLocation;

	    confirmTransitionTo(nextLocation, function (ok) {
	      if (pendingLocation !== nextLocation) return; // Transition was interrupted during confirmation

	      pendingLocation = null;

	      if (ok) {
	        // Treat PUSH to same path like REPLACE to be consistent with browsers
	        if (nextLocation.action === _Actions.PUSH) {
	          var prevPath = (0, _PathUtils.createPath)(currentLocation);
	          var nextPath = (0, _PathUtils.createPath)(nextLocation);

	          if (nextPath === prevPath && (0, _LocationUtils.statesAreEqual)(currentLocation.state, nextLocation.state)) nextLocation.action = _Actions.REPLACE;
	        }

	        if (nextLocation.action === _Actions.POP) {
	          updateLocation(nextLocation);
	        } else if (nextLocation.action === _Actions.PUSH) {
	          if (pushLocation(nextLocation) !== false) updateLocation(nextLocation);
	        } else if (nextLocation.action === _Actions.REPLACE) {
	          if (replaceLocation(nextLocation) !== false) updateLocation(nextLocation);
	        }
	      } else if (currentLocation && nextLocation.action === _Actions.POP) {
	        var prevIndex = allKeys.indexOf(currentLocation.key);
	        var nextIndex = allKeys.indexOf(nextLocation.key);

	        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL
	      }
	    });
	  };

	  var push = function push(input) {
	    return transitionTo(createLocation(input, _Actions.PUSH));
	  };

	  var replace = function replace(input) {
	    return transitionTo(createLocation(input, _Actions.REPLACE));
	  };

	  var goBack = function goBack() {
	    return go(-1);
	  };

	  var goForward = function goForward() {
	    return go(1);
	  };

	  var createKey = function createKey() {
	    return Math.random().toString(36).substr(2, keyLength || 6);
	  };

	  var createHref = function createHref(location) {
	    return (0, _PathUtils.createPath)(location);
	  };

	  var createLocation = function createLocation(location, action) {
	    var key = arguments.length <= 2 || arguments[2] === undefined ? createKey() : arguments[2];
	    return (0, _LocationUtils.createLocation)(location, action, key);
	  };

	  return {
	    getCurrentLocation: getCurrentLocation,
	    listenBefore: listenBefore,
	    listen: listen,
	    transitionTo: transitionTo,
	    push: push,
	    replace: replace,
	    go: go,
	    goBack: goBack,
	    goForward: goForward,
	    createKey: createKey,
	    createPath: _PathUtils.createPath,
	    createHref: createHref,
	    createLocation: createLocation
	  };
	};

	exports.default = createHistory;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _warning = __webpack_require__(12);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var runTransitionHook = function runTransitionHook(hook, location, callback) {
	  var result = hook(location, callback);

	  if (hook.length < 2) {
	    // Assume the hook runs synchronously and automatically
	    // call the callback with the return value.
	    callback(result);
	  } else {
	     true ? (0, _warning2.default)(result === undefined, 'You should not "return" in a transition hook with a callback argument; ' + 'call the callback instead') : void 0;
	  }
	};

	exports.default = runTransitionHook;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(33);

	var nav = window ? window.navigator : null;
	var ua = nav ? navigator.userAgent.toLowerCase() : "";

	var _platform = function _platform(os) {
		var ver = ('' + (new RegExp(os + '(\\d+((\\.|_)\\d+)*)').exec(ua) || [, 0])[1]).replace(/_/g, '.');
		// undefined < 3 === false, but null < 3 === true
		return parseFloat(ver) || undefined;
	};

	var os = {
		ios: _platform('os '),
		android: _platform('android[/ ]'),
		pc: !_platform('os ') && !_platform('android[/ ]')
	};

	var Scroll = function (_Component) {
		_inherits(Scroll, _Component);

		function Scroll(props, context) {
			_classCallCheck(this, Scroll);

			var _this = _possibleConstructorReturn(this, (Scroll.__proto__ || Object.getPrototypeOf(Scroll)).call(this, props, context));

			_this.state = {};
			_this.prvScrollTop = 0;
			_this.bindScroll = _this.bindScroll.bind(_this);
			_this.scrollEvt = _this.scrollEvt.bind(_this);
			_this.timer = null;
			return _this;
		}

		_createClass(Scroll, [{
			key: 'componentWillMount',
			value: function componentWillMount() {
				this.prvScrollTop = 0;
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				this.bindScroll();
			}
		}, {
			key: 'componentDidUpdate',
			value: function componentDidUpdate(prevProps, prevState) {}
		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {
				this.scrollContainer.removeEventListener('scroll', this.scrollEvt);
			}
		}, {
			key: 'bindScroll',
			value: function bindScroll() {
				this.scrollContainer = !os.ios ? window : this.scrollContainer;
				console.dir(this.scrollContainer);
				this.scrollContainer.addEventListener('scroll', this.scrollEvt);
			}
		}, {
			key: 'scrollEvt',
			value: function scrollEvt(evt) {
				var _this2 = this;

				var isWindow = this.scrollContainer === window;

				// 延迟计算
				this.timer && clearTimeout(this.timer);
				this.timer = setTimeout(function () {
					if (_this2.props.disable || _this2.props.isEnd) {
						return;
					}

					var scrollEle = isWindow ? _this2.scrollContainer.document : _this2.scrollContainer;
					var scrollTop = isWindow ? scrollEle.body.scrollTop : scrollEle.scrollTop;

					// 防止向上滚动也拉数据
					if (_this2.prvScrollTop > scrollTop) {
						return;
					}
					_this2.prvScrollTop = scrollTop;

					var containerHeight = isWindow ? scrollEle.documentElement.clientHeight : scrollEle.offsetHeight;
					var scrollHeight = isWindow ? scrollEle.body.clientHeight : scrollEle.scrollHeight;

					// 条件一： 滚动到中间拉数据
					if (_this2.props.isHalf && scrollTop >= (scrollHeight - containerHeight) / 2) {
						_this2.props.loadDataForScroll && _this2.props.loadDataForScroll();
					}

					// 条件二： 滚动到最底部才拉数据
					else if (scrollTop + scrollHeight >= containerHeight) {
							_this2.props.loadDataForScroll && _this2.props.loadDataForScroll();
						}
				}, 50);
			}
		}, {
			key: 'render',
			value: function render() {
				var _this3 = this;

				var _props$scrollStyle = this.props.scrollStyle,
				    scrollStyle = _props$scrollStyle === undefined ? null : _props$scrollStyle;


				return _react2.default.createElement(
					'div',
					{
						className: "react-scroll-wrapper" + (os.ios ? " ios" : ""),
						style: scrollStyle,
						ref: function ref(scrollContainer) {
							_this3.scrollContainer = scrollContainer;
						}
					},
					this.props.children
				);
			}
		}]);

		return Scroll;
	}(_react.Component);

	exports.default = Scroll;

/***/ },
/* 40 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.loopAsync = loopAsync;
	exports.mapAsync = mapAsync;
	function loopAsync(turns, work, callback) {
	  var currentTurn = 0,
	      isDone = false;
	  var sync = false,
	      hasNext = false,
	      doneArgs = void 0;

	  function done() {
	    isDone = true;
	    if (sync) {
	      // Iterate instead of recursing if possible.
	      doneArgs = [].concat(Array.prototype.slice.call(arguments));
	      return;
	    }

	    callback.apply(this, arguments);
	  }

	  function next() {
	    if (isDone) {
	      return;
	    }

	    hasNext = true;
	    if (sync) {
	      // Iterate instead of recursing if possible.
	      return;
	    }

	    sync = true;

	    while (!isDone && currentTurn < turns && hasNext) {
	      hasNext = false;
	      work.call(this, currentTurn++, next, done);
	    }

	    sync = false;

	    if (isDone) {
	      // This means the loop finished synchronously.
	      callback.apply(this, doneArgs);
	      return;
	    }

	    if (currentTurn >= turns && hasNext) {
	      isDone = true;
	      callback();
	    }
	  }

	  next();
	}

	function mapAsync(array, work, callback) {
	  var length = array.length;
	  var values = [];

	  if (length === 0) return callback(null, values);

	  var isDone = false,
	      doneCount = 0;

	  function done(index, error, value) {
	    if (isDone) return;

	    if (error) {
	      isDone = true;
	      callback(error);
	    } else {
	      values[index] = value;

	      isDone = ++doneCount === length;

	      if (isDone) callback(null, values);
	    }
	  }

	  array.forEach(function (item, index) {
	    work(item, index, function (error, value) {
	      done(index, error, value);
	    });
	  });
	}

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ContextProvider = ContextProvider;
	exports.ContextSubscriber = ContextSubscriber;

	var _react = __webpack_require__(1);

	// Works around issues with context updates failing to propagate.
	// Caveat: the context value is expected to never change its identity.
	// https://github.com/facebook/react/issues/2517
	// https://github.com/reactjs/react-router/issues/470

	var contextProviderShape = _react.PropTypes.shape({
	  subscribe: _react.PropTypes.func.isRequired,
	  eventIndex: _react.PropTypes.number.isRequired
	});

	function makeContextName(name) {
	  return '@@contextSubscriber/' + name;
	}

	function ContextProvider(name) {
	  var _childContextTypes, _ref2;

	  var contextName = makeContextName(name);
	  var listenersKey = contextName + '/listeners';
	  var eventIndexKey = contextName + '/eventIndex';
	  var subscribeKey = contextName + '/subscribe';

	  return _ref2 = {
	    childContextTypes: (_childContextTypes = {}, _childContextTypes[contextName] = contextProviderShape.isRequired, _childContextTypes),

	    getChildContext: function getChildContext() {
	      var _ref;

	      return _ref = {}, _ref[contextName] = {
	        eventIndex: this[eventIndexKey],
	        subscribe: this[subscribeKey]
	      }, _ref;
	    },
	    componentWillMount: function componentWillMount() {
	      this[listenersKey] = [];
	      this[eventIndexKey] = 0;
	    },
	    componentWillReceiveProps: function componentWillReceiveProps() {
	      this[eventIndexKey]++;
	    },
	    componentDidUpdate: function componentDidUpdate() {
	      var _this = this;

	      this[listenersKey].forEach(function (listener) {
	        return listener(_this[eventIndexKey]);
	      });
	    }
	  }, _ref2[subscribeKey] = function (listener) {
	    var _this2 = this;

	    // No need to immediately call listener here.
	    this[listenersKey].push(listener);

	    return function () {
	      _this2[listenersKey] = _this2[listenersKey].filter(function (item) {
	        return item !== listener;
	      });
	    };
	  }, _ref2;
	}

	function ContextSubscriber(name) {
	  var _contextTypes, _ref4;

	  var contextName = makeContextName(name);
	  var lastRenderedEventIndexKey = contextName + '/lastRenderedEventIndex';
	  var handleContextUpdateKey = contextName + '/handleContextUpdate';
	  var unsubscribeKey = contextName + '/unsubscribe';

	  return _ref4 = {
	    contextTypes: (_contextTypes = {}, _contextTypes[contextName] = contextProviderShape, _contextTypes),

	    getInitialState: function getInitialState() {
	      var _ref3;

	      if (!this.context[contextName]) {
	        return {};
	      }

	      return _ref3 = {}, _ref3[lastRenderedEventIndexKey] = this.context[contextName].eventIndex, _ref3;
	    },
	    componentDidMount: function componentDidMount() {
	      if (!this.context[contextName]) {
	        return;
	      }

	      this[unsubscribeKey] = this.context[contextName].subscribe(this[handleContextUpdateKey]);
	    },
	    componentWillReceiveProps: function componentWillReceiveProps() {
	      var _setState;

	      if (!this.context[contextName]) {
	        return;
	      }

	      this.setState((_setState = {}, _setState[lastRenderedEventIndexKey] = this.context[contextName].eventIndex, _setState));
	    },
	    componentWillUnmount: function componentWillUnmount() {
	      if (!this[unsubscribeKey]) {
	        return;
	      }

	      this[unsubscribeKey]();
	      this[unsubscribeKey] = null;
	    }
	  }, _ref4[handleContextUpdateKey] = function (eventIndex) {
	    if (eventIndex !== this.state[lastRenderedEventIndexKey]) {
	      var _setState2;

	      this.setState((_setState2 = {}, _setState2[lastRenderedEventIndexKey] = eventIndex, _setState2));
	    }
	  }, _ref4;
	}

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.locationShape = exports.routerShape = undefined;

	var _react = __webpack_require__(1);

	var func = _react.PropTypes.func,
	    object = _react.PropTypes.object,
	    shape = _react.PropTypes.shape,
	    string = _react.PropTypes.string;
	var routerShape = exports.routerShape = shape({
	  push: func.isRequired,
	  replace: func.isRequired,
	  go: func.isRequired,
	  goBack: func.isRequired,
	  goForward: func.isRequired,
	  setRouteLeaveHook: func.isRequired,
	  isActive: func.isRequired
	});

	var locationShape = exports.locationShape = shape({
	  pathname: string.isRequired,
	  search: string.isRequired,
	  state: object,
	  action: string.isRequired,
	  key: string
	});

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _invariant = __webpack_require__(4);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _getRouteParams = __webpack_require__(139);

	var _getRouteParams2 = _interopRequireDefault(_getRouteParams);

	var _ContextUtils = __webpack_require__(41);

	var _RouteUtils = __webpack_require__(11);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _React$PropTypes = _react2.default.PropTypes,
	    array = _React$PropTypes.array,
	    func = _React$PropTypes.func,
	    object = _React$PropTypes.object;

	/**
	 * A <RouterContext> renders the component tree for a given router state
	 * and sets the history object and the current location in context.
	 */

	var RouterContext = _react2.default.createClass({
	  displayName: 'RouterContext',


	  mixins: [(0, _ContextUtils.ContextProvider)('router')],

	  propTypes: {
	    router: object.isRequired,
	    location: object.isRequired,
	    routes: array.isRequired,
	    params: object.isRequired,
	    components: array.isRequired,
	    createElement: func.isRequired
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      createElement: _react2.default.createElement
	    };
	  },


	  childContextTypes: {
	    router: object.isRequired
	  },

	  getChildContext: function getChildContext() {
	    return {
	      router: this.props.router
	    };
	  },
	  createElement: function createElement(component, props) {
	    return component == null ? null : this.props.createElement(component, props);
	  },
	  render: function render() {
	    var _this = this;

	    var _props = this.props,
	        location = _props.location,
	        routes = _props.routes,
	        params = _props.params,
	        components = _props.components,
	        router = _props.router;

	    var element = null;

	    if (components) {
	      element = components.reduceRight(function (element, components, index) {
	        if (components == null) return element; // Don't create new children; use the grandchildren.

	        var route = routes[index];
	        var routeParams = (0, _getRouteParams2.default)(route, params);
	        var props = {
	          location: location,
	          params: params,
	          route: route,
	          router: router,
	          routeParams: routeParams,
	          routes: routes
	        };

	        if ((0, _RouteUtils.isReactChildren)(element)) {
	          props.children = element;
	        } else if (element) {
	          for (var prop in element) {
	            if (Object.prototype.hasOwnProperty.call(element, prop)) props[prop] = element[prop];
	          }
	        }

	        if ((typeof components === 'undefined' ? 'undefined' : _typeof(components)) === 'object') {
	          var elements = {};

	          for (var key in components) {
	            if (Object.prototype.hasOwnProperty.call(components, key)) {
	              // Pass through the key as a prop to createElement to allow
	              // custom createElement functions to know which named component
	              // they're rendering, for e.g. matching up to fetched data.
	              elements[key] = _this.createElement(components[key], _extends({
	                key: key }, props));
	            }
	          }

	          return elements;
	        }

	        return _this.createElement(components, props);
	      }, element);
	    }

	    !(element === null || element === false || _react2.default.isValidElement(element)) ?  true ? (0, _invariant2.default)(false, 'The root route must render a single element') : (0, _invariant2.default)(false) : void 0;

	    return element;
	  }
	});

	exports.default = RouterContext;
	module.exports = exports['default'];

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 45 */,
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.loadTopNews = loadTopNews;
	exports.loadData = loadData;
	exports.getNewsDetail = getNewsDetail;
	exports.getCommentList = getCommentList;

	var _lodash = __webpack_require__(2);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _cgiPath = __webpack_require__(3);

	var _constants = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// export function loadDataForScroll() {
	// 	loadNewsList(null);
	// }

	function loadTopNews() {
		var url = _cgiPath.GET_TOP_NEWS,
		    opts = {};

		var pa = (0, _lodash2.default)({}, {
			chlid: 'news_news_top',
			refer: 'mobilewwwqqcom',
			otype: 'jsonp',
			jsonCbName: 'getNewsIndexOutput',
			t: new Date().getTime()
		}, pa);

		var param = {
			param: pa,
			ajaxType: 'JSONP',
			onSuccess: function onSuccess(res) {
				// console.log(res);
			},
			onError: function onError(res) {
				// console.log(res);
				// alert(res.errMsg || '加载新闻列表失败，请稍后重试');
			}
		};

		this.props.request(url, param, opts);
	}

	// export function loadNewsList() {

	// 	loadData(LATEST_NEWS, {});
	// }

	//http://mat1.gtimg.com/www/mobi/image/loadimg.png

	function loadData(listType) {
		var pa = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
		var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

		var url = _cgiPath.GET_NEWS_LIST;

		var listInfoParam = this.props.news.listInfo['listLatest'],
		    ids = this.props.news.ids;

		// 防止重复拉取
		if (listInfoParam.isLoading) {
			return;
		}

		var curPage = listInfoParam.curPage,
		    page_size = listInfoParam.pageSize,
		    startIndex = 0 + curPage * page_size,
		    endIndex = startIndex + page_size;

		var newIds = ids.slice(startIndex, endIndex),
		    newIdArray = [];

		newIds.forEach(function (item) {
			newIdArray.push(item.id);
		});

		var pa = (0, _lodash2.default)({}, {
			cmd: _cgiPath.GET_NEWS_LIST,
			ids: newIdArray.join(','),
			refer: "mobilewwwqqcom",
			otype: "jsonp",
			jsonCbName: "getNewsContentOnlyOutput",
			t: new Date().getTime()
		}, pa);

		var param = {
			param: pa,
			ajaxType: 'JSONP',
			onSuccess: function onSuccess(data) {
				// console.log(data);
			},
			onError: function onError() {
				// console.log("err");
				// console.log(res);
				// alert(res.errMsg || '加载新闻列表失败，请稍后重试');
			}
		};

		this.props.request(url, param, opts);
	}

	function getNewsDetail(item) {
		var url = _cgiPath.GET_NEWS_DETAIL,
		    opts = {};

		var pa = (0, _lodash2.default)({}, {
			url: item.url,
			news_id: item.id,
			v: new Date().getTime()
		}, pa);

		var param = {
			param: pa,
			ajaxType: 'POST',
			localData: {
				content: '险企碰红线 监管将下手快下手狠\n\n2017-01-12 23:00:39 腾讯财经\n\n文/刘鹏\n\n进入2017年，保险业监管将保持高压状态。\n\n1月12日，2017年全国保险监管工作会议在京召开，保监会主席项俊波在会议上部署了2017年的保险业监管工作。他强调，要将“保险业姓保、保监会姓监”理念贯穿到监管工作各个方面。要打赢一场硬仗，坚决守住不发生系统性风险底线。\n\n'
			},
			onSuccess: function onSuccess(data) {},
			onError: function onError(res) {
				console.log("err");
			}
		};

		this.props.request(url, param, opts);
	}

	function getCommentList() {
		var url = _cgiPath.GET_COMMENT_LIST,
		    opts = {};

		var pa = (0, _lodash2.default)({}, {
			comment_id: this.props.params.id,
			otype: "jsonp",
			jsonCbName: "renderComment",
			lcount: 20,
			from: 'share',
			v: new Date().getTime()
		}, pa);

		var param = {
			param: pa,
			ajaxType: 'JSONP',
			onSuccess: function onSuccess(data) {
				// console.log(data);
			},
			onError: function onError(res) {
				console.log("err");
			}
		};

		this.props.request(url, param, opts);
	}

/***/ },
/* 47 */,
/* 48 */,
/* 49 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.getArgs = getArgs;
	exports.toggleListLoading = toggleListLoading;
	exports.toggleSpinLoading = toggleSpinLoading;
	exports.updateActiveTab = updateActiveTab;
	exports.likeNews = likeNews;
	exports.dislikeNews = dislikeNews;
	/*
	 * action types
	 */

	// OTHERS
	var GET_ARGS = exports.GET_ARGS = 'GET_ARGS';

	var TOGGLE_SPIN_LOADING = exports.TOGGLE_SPIN_LOADING = 'TOGGLE_SPIN_LOADING';
	var TOGGLE_LIST_LOADING = exports.TOGGLE_LIST_LOADING = 'TOGGLE_LIST_LOADING';

	var TABS_UPDATE = exports.TABS_UPDATE = 'TABS_UPDATE';

	var LIKE_NEWS = exports.LIKE_NEWS = 'LIKE_NEWS';
	var DISLIKE_NEWS = exports.DISLIKE_NEWS = 'DISLIKE_NEWS';

	/*
	 * other constants
	 */

	/*
	 * action creators
	 */

	function getArgs(value) {
	  return { type: GET_ARGS, value: value };
	}

	function toggleListLoading(value) {
	  return { type: TOGGLE_LIST_LOADING, value: value };
	}

	function toggleSpinLoading(value) {
	  return { type: TOGGLE_SPIN_LOADING, value: value };
	}

	function updateActiveTab(value) {
	  return { type: TABS_UPDATE, value: value };
	}

	function likeNews(value) {
	  return { type: LIKE_NEWS, value: value };
	}

	function dislikeNews(value) {
	  return { type: DISLIKE_NEWS, value: value };
	}

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.readState = exports.saveState = undefined;

	var _warning = __webpack_require__(12);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var QuotaExceededErrors = {
	  QuotaExceededError: true,
	  QUOTA_EXCEEDED_ERR: true
	};

	var SecurityErrors = {
	  SecurityError: true
	};

	var KeyPrefix = '@@History/';

	var createKey = function createKey(key) {
	  return KeyPrefix + key;
	};

	var saveState = exports.saveState = function saveState(key, state) {
	  if (!window.sessionStorage) {
	    // Session storage is not available or hidden.
	    // sessionStorage is undefined in Internet Explorer when served via file protocol.
	     true ? (0, _warning2.default)(false, '[history] Unable to save state; sessionStorage is not available') : void 0;

	    return;
	  }

	  try {
	    if (state == null) {
	      window.sessionStorage.removeItem(createKey(key));
	    } else {
	      window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
	    }
	  } catch (error) {
	    if (SecurityErrors[error.name]) {
	      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
	      // attempt to access window.sessionStorage.
	       true ? (0, _warning2.default)(false, '[history] Unable to save state; sessionStorage is not available due to security settings') : void 0;

	      return;
	    }

	    if (QuotaExceededErrors[error.name] && window.sessionStorage.length === 0) {
	      // Safari "private mode" throws QuotaExceededError.
	       true ? (0, _warning2.default)(false, '[history] Unable to save state; sessionStorage is not available in Safari private mode') : void 0;

	      return;
	    }

	    throw error;
	  }
	};

	var readState = exports.readState = function readState(key) {
	  var json = void 0;
	  try {
	    json = window.sessionStorage.getItem(createKey(key));
	  } catch (error) {
	    if (SecurityErrors[error.name]) {
	      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
	      // attempt to access window.sessionStorage.
	       true ? (0, _warning2.default)(false, '[history] Unable to read state; sessionStorage is not available due to security settings') : void 0;

	      return undefined;
	    }
	  }

	  if (json) {
	    try {
	      return JSON.parse(json);
	    } catch (error) {
	      // Ignore invalid JSON.
	    }
	  }

	  return undefined;
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _runTransitionHook = __webpack_require__(38);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _PathUtils = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var useBasename = function useBasename(createHistory) {
	  return function () {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var history = createHistory(options);
	    var basename = options.basename;


	    var addBasename = function addBasename(location) {
	      if (!location) return location;

	      if (basename && location.basename == null) {
	        if (location.pathname.indexOf(basename) === 0) {
	          location.pathname = location.pathname.substring(basename.length);
	          location.basename = basename;

	          if (location.pathname === '') location.pathname = '/';
	        } else {
	          location.basename = '';
	        }
	      }

	      return location;
	    };

	    var prependBasename = function prependBasename(location) {
	      if (!basename) return location;

	      var object = typeof location === 'string' ? (0, _PathUtils.parsePath)(location) : location;
	      var pname = object.pathname;
	      var normalizedBasename = basename.slice(-1) === '/' ? basename : basename + '/';
	      var normalizedPathname = pname.charAt(0) === '/' ? pname.slice(1) : pname;
	      var pathname = normalizedBasename + normalizedPathname;

	      return _extends({}, object, {
	        pathname: pathname
	      });
	    };

	    // Override all read methods with basename-aware versions.
	    var getCurrentLocation = function getCurrentLocation() {
	      return addBasename(history.getCurrentLocation());
	    };

	    var listenBefore = function listenBefore(hook) {
	      return history.listenBefore(function (location, callback) {
	        return (0, _runTransitionHook2.default)(hook, addBasename(location), callback);
	      });
	    };

	    var listen = function listen(listener) {
	      return history.listen(function (location) {
	        return listener(addBasename(location));
	      });
	    };

	    // Override all write methods with basename-aware versions.
	    var push = function push(location) {
	      return history.push(prependBasename(location));
	    };

	    var replace = function replace(location) {
	      return history.replace(prependBasename(location));
	    };

	    var createPath = function createPath(location) {
	      return history.createPath(prependBasename(location));
	    };

	    var createHref = function createHref(location) {
	      return history.createHref(prependBasename(location));
	    };

	    var createLocation = function createLocation(location) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      return addBasename(history.createLocation.apply(history, [prependBasename(location)].concat(args)));
	    };

	    return _extends({}, history, {
	      getCurrentLocation: getCurrentLocation,
	      listenBefore: listenBefore,
	      listen: listen,
	      push: push,
	      replace: replace,
	      createPath: createPath,
	      createHref: createHref,
	      createLocation: createLocation
	    });
	  };
	};

	exports.default = useBasename;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _queryString = __webpack_require__(126);

	var _runTransitionHook = __webpack_require__(38);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _LocationUtils = __webpack_require__(15);

	var _PathUtils = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var defaultStringifyQuery = function defaultStringifyQuery(query) {
	  return (0, _queryString.stringify)(query).replace(/%20/g, '+');
	};

	var defaultParseQueryString = _queryString.parse;

	/**
	 * Returns a new createHistory function that may be used to create
	 * history objects that know how to handle URL queries.
	 */
	var useQueries = function useQueries(createHistory) {
	  return function () {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var history = createHistory(options);
	    var stringifyQuery = options.stringifyQuery;
	    var parseQueryString = options.parseQueryString;


	    if (typeof stringifyQuery !== 'function') stringifyQuery = defaultStringifyQuery;

	    if (typeof parseQueryString !== 'function') parseQueryString = defaultParseQueryString;

	    var decodeQuery = function decodeQuery(location) {
	      if (!location) return location;

	      if (location.query == null) location.query = parseQueryString(location.search.substring(1));

	      return location;
	    };

	    var encodeQuery = function encodeQuery(location, query) {
	      if (query == null) return location;

	      var object = typeof location === 'string' ? (0, _PathUtils.parsePath)(location) : location;
	      var queryString = stringifyQuery(query);
	      var search = queryString ? '?' + queryString : '';

	      return _extends({}, object, {
	        search: search
	      });
	    };

	    // Override all read methods with query-aware versions.
	    var getCurrentLocation = function getCurrentLocation() {
	      return decodeQuery(history.getCurrentLocation());
	    };

	    var listenBefore = function listenBefore(hook) {
	      return history.listenBefore(function (location, callback) {
	        return (0, _runTransitionHook2.default)(hook, decodeQuery(location), callback);
	      });
	    };

	    var listen = function listen(listener) {
	      return history.listen(function (location) {
	        return listener(decodeQuery(location));
	      });
	    };

	    // Override all write methods with query-aware versions.
	    var push = function push(location) {
	      return history.push(encodeQuery(location, location.query));
	    };

	    var replace = function replace(location) {
	      return history.replace(encodeQuery(location, location.query));
	    };

	    var createPath = function createPath(location) {
	      return history.createPath(encodeQuery(location, location.query));
	    };

	    var createHref = function createHref(location) {
	      return history.createHref(encodeQuery(location, location.query));
	    };

	    var createLocation = function createLocation(location) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      var newLocation = history.createLocation.apply(history, [encodeQuery(location, location.query)].concat(args));

	      if (location.query) newLocation.query = (0, _LocationUtils.createQuery)(location.query);

	      return decodeQuery(newLocation);
	    };

	    return _extends({}, history, {
	      getCurrentLocation: getCurrentLocation,
	      listenBefore: listenBefore,
	      listen: listen,
	      push: push,
	      replace: replace,
	      createPath: createPath,
	      createHref: createHref,
	      createLocation: createLocation
	    });
	  };
	};

	exports.default = useQueries;

/***/ },
/* 53 */,
/* 54 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * This action type will be dispatched by the history actions below.
	 * If you're writing a middleware to watch for navigation events, be sure to
	 * look for actions of this type.
	 */
	var CALL_HISTORY_METHOD = exports.CALL_HISTORY_METHOD = '@@router/CALL_HISTORY_METHOD';

	function updateLocation(method) {
	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return {
	      type: CALL_HISTORY_METHOD,
	      payload: { method: method, args: args }
	    };
	  };
	}

	/**
	 * These actions correspond to the history API.
	 * The associated routerMiddleware will capture these events before they get to
	 * your reducer and reissue them as the matching function on your history.
	 */
	var push = exports.push = updateLocation('push');
	var replace = exports.replace = updateLocation('replace');
	var go = exports.go = updateLocation('go');
	var goBack = exports.goBack = updateLocation('goBack');
	var goForward = exports.goForward = updateLocation('goForward');

	var routerActions = exports.routerActions = { push: push, replace: replace, go: go, goBack: goBack, goForward: goForward };

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.routerMiddleware = exports.routerActions = exports.goForward = exports.goBack = exports.go = exports.replace = exports.push = exports.CALL_HISTORY_METHOD = exports.routerReducer = exports.LOCATION_CHANGE = exports.syncHistoryWithStore = undefined;

	var _reducer = __webpack_require__(56);

	Object.defineProperty(exports, 'LOCATION_CHANGE', {
	  enumerable: true,
	  get: function get() {
	    return _reducer.LOCATION_CHANGE;
	  }
	});
	Object.defineProperty(exports, 'routerReducer', {
	  enumerable: true,
	  get: function get() {
	    return _reducer.routerReducer;
	  }
	});

	var _actions = __webpack_require__(54);

	Object.defineProperty(exports, 'CALL_HISTORY_METHOD', {
	  enumerable: true,
	  get: function get() {
	    return _actions.CALL_HISTORY_METHOD;
	  }
	});
	Object.defineProperty(exports, 'push', {
	  enumerable: true,
	  get: function get() {
	    return _actions.push;
	  }
	});
	Object.defineProperty(exports, 'replace', {
	  enumerable: true,
	  get: function get() {
	    return _actions.replace;
	  }
	});
	Object.defineProperty(exports, 'go', {
	  enumerable: true,
	  get: function get() {
	    return _actions.go;
	  }
	});
	Object.defineProperty(exports, 'goBack', {
	  enumerable: true,
	  get: function get() {
	    return _actions.goBack;
	  }
	});
	Object.defineProperty(exports, 'goForward', {
	  enumerable: true,
	  get: function get() {
	    return _actions.goForward;
	  }
	});
	Object.defineProperty(exports, 'routerActions', {
	  enumerable: true,
	  get: function get() {
	    return _actions.routerActions;
	  }
	});

	var _sync = __webpack_require__(128);

	var _sync2 = _interopRequireDefault(_sync);

	var _middleware = __webpack_require__(127);

	var _middleware2 = _interopRequireDefault(_middleware);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	exports.syncHistoryWithStore = _sync2['default'];
	exports.routerMiddleware = _middleware2['default'];

/***/ },
/* 56 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.routerReducer = routerReducer;
	/**
	 * This action type will be dispatched when your history
	 * receives a location change.
	 */
	var LOCATION_CHANGE = exports.LOCATION_CHANGE = '@@router/LOCATION_CHANGE';

	var initialState = {
	  locationBeforeTransitions: null
	};

	/**
	 * This reducer will update the state with the most recent location history
	 * has transitioned to. This may not be in sync with the router, particularly
	 * if you have asynchronously-loaded routes, so reading from and relying on
	 * this state is discouraged.
	 */
	function routerReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;

	  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	      type = _ref.type,
	      payload = _ref.payload;

	  if (type === LOCATION_CHANGE) {
	    return _extends({}, state, { locationBeforeTransitions: payload });
	  }

	  return state;
	}

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(4);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _PropTypes = __webpack_require__(42);

	var _ContextUtils = __webpack_require__(41);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _React$PropTypes = _react2.default.PropTypes,
	    bool = _React$PropTypes.bool,
	    object = _React$PropTypes.object,
	    string = _React$PropTypes.string,
	    func = _React$PropTypes.func,
	    oneOfType = _React$PropTypes.oneOfType;


	function isLeftClickEvent(event) {
	  return event.button === 0;
	}

	function isModifiedEvent(event) {
	  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
	}

	// TODO: De-duplicate against hasAnyProperties in createTransitionManager.
	function isEmptyObject(object) {
	  for (var p in object) {
	    if (Object.prototype.hasOwnProperty.call(object, p)) return false;
	  }return true;
	}

	function resolveToLocation(to, router) {
	  return typeof to === 'function' ? to(router.location) : to;
	}

	/**
	 * A <Link> is used to create an <a> element that links to a route.
	 * When that route is active, the link gets the value of its
	 * activeClassName prop.
	 *
	 * For example, assuming you have the following route:
	 *
	 *   <Route path="/posts/:postID" component={Post} />
	 *
	 * You could use the following component to link to that route:
	 *
	 *   <Link to={`/posts/${post.id}`} />
	 *
	 * Links may pass along location state and/or query string parameters
	 * in the state/query props, respectively.
	 *
	 *   <Link ... query={{ show: true }} state={{ the: 'state' }} />
	 */
	var Link = _react2.default.createClass({
	  displayName: 'Link',


	  mixins: [(0, _ContextUtils.ContextSubscriber)('router')],

	  contextTypes: {
	    router: _PropTypes.routerShape
	  },

	  propTypes: {
	    to: oneOfType([string, object, func]),
	    query: object,
	    hash: string,
	    state: object,
	    activeStyle: object,
	    activeClassName: string,
	    onlyActiveOnIndex: bool.isRequired,
	    onClick: func,
	    target: string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      onlyActiveOnIndex: false,
	      style: {}
	    };
	  },
	  handleClick: function handleClick(event) {
	    if (this.props.onClick) this.props.onClick(event);

	    if (event.defaultPrevented) return;

	    var router = this.context.router;

	    !router ?  true ? (0, _invariant2.default)(false, '<Link>s rendered outside of a router context cannot navigate.') : (0, _invariant2.default)(false) : void 0;

	    if (isModifiedEvent(event) || !isLeftClickEvent(event)) return;

	    // If target prop is set (e.g. to "_blank"), let browser handle link.
	    /* istanbul ignore if: untestable with Karma */
	    if (this.props.target) return;

	    event.preventDefault();

	    router.push(resolveToLocation(this.props.to, router));
	  },
	  render: function render() {
	    var _props = this.props,
	        to = _props.to,
	        activeClassName = _props.activeClassName,
	        activeStyle = _props.activeStyle,
	        onlyActiveOnIndex = _props.onlyActiveOnIndex,
	        props = _objectWithoutProperties(_props, ['to', 'activeClassName', 'activeStyle', 'onlyActiveOnIndex']);

	    // Ignore if rendered outside the context of router to simplify unit testing.


	    var router = this.context.router;


	    if (router) {
	      // If user does not specify a `to` prop, return an empty anchor tag.
	      if (!to) {
	        return _react2.default.createElement('a', props);
	      }

	      var toLocation = resolveToLocation(to, router);
	      props.href = router.createHref(toLocation);

	      if (activeClassName || activeStyle != null && !isEmptyObject(activeStyle)) {
	        if (router.isActive(toLocation, onlyActiveOnIndex)) {
	          if (activeClassName) {
	            if (props.className) {
	              props.className += ' ' + activeClassName;
	            } else {
	              props.className = activeClassName;
	            }
	          }

	          if (activeStyle) props.style = _extends({}, props.style, activeStyle);
	        }
	      }
	    }

	    return _react2.default.createElement('a', _extends({}, props, { onClick: this.handleClick }));
	  }
	});

	exports.default = Link;
	module.exports = exports['default'];

/***/ },
/* 58 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.isPromise = isPromise;
	function isPromise(obj) {
	  return obj && typeof obj.then === 'function';
	}

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(4);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _RouteUtils = __webpack_require__(11);

	var _PatternUtils = __webpack_require__(16);

	var _InternalPropTypes = __webpack_require__(25);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _React$PropTypes = _react2.default.PropTypes,
	    string = _React$PropTypes.string,
	    object = _React$PropTypes.object;

	/**
	 * A <Redirect> is used to declare another URL path a client should
	 * be sent to when they request a given URL.
	 *
	 * Redirects are placed alongside routes in the route configuration
	 * and are traversed in the same manner.
	 */
	/* eslint-disable react/require-render-return */

	var Redirect = _react2.default.createClass({
	  displayName: 'Redirect',


	  statics: {
	    createRouteFromReactElement: function createRouteFromReactElement(element) {
	      var route = (0, _RouteUtils.createRouteFromReactElement)(element);

	      if (route.from) route.path = route.from;

	      route.onEnter = function (nextState, replace) {
	        var location = nextState.location,
	            params = nextState.params;


	        var pathname = void 0;
	        if (route.to.charAt(0) === '/') {
	          pathname = (0, _PatternUtils.formatPattern)(route.to, params);
	        } else if (!route.to) {
	          pathname = location.pathname;
	        } else {
	          var routeIndex = nextState.routes.indexOf(route);
	          var parentPattern = Redirect.getRoutePattern(nextState.routes, routeIndex - 1);
	          var pattern = parentPattern.replace(/\/*$/, '/') + route.to;
	          pathname = (0, _PatternUtils.formatPattern)(pattern, params);
	        }

	        replace({
	          pathname: pathname,
	          query: route.query || location.query,
	          state: route.state || location.state
	        });
	      };

	      return route;
	    },
	    getRoutePattern: function getRoutePattern(routes, routeIndex) {
	      var parentPattern = '';

	      for (var i = routeIndex; i >= 0; i--) {
	        var route = routes[i];
	        var pattern = route.path || '';

	        parentPattern = pattern.replace(/\/*$/, '/') + parentPattern;

	        if (pattern.indexOf('/') === 0) break;
	      }

	      return '/' + parentPattern;
	    }
	  },

	  propTypes: {
	    path: string,
	    from: string, // Alias for path
	    to: string.isRequired,
	    query: object,
	    state: object,
	    onEnter: _InternalPropTypes.falsy,
	    children: _InternalPropTypes.falsy
	  },

	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ?  true ? (0, _invariant2.default)(false, '<Redirect> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});

	exports.default = Redirect;
	module.exports = exports['default'];

/***/ },
/* 60 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.createRouterObject = createRouterObject;
	exports.assignRouterState = assignRouterState;
	function createRouterObject(history, transitionManager, state) {
	  var router = _extends({}, history, {
	    setRouteLeaveHook: transitionManager.listenBeforeLeavingRoute,
	    isActive: transitionManager.isActive
	  });

	  return assignRouterState(router, state);
	}

	function assignRouterState(router, _ref) {
	  var location = _ref.location,
	      params = _ref.params,
	      routes = _ref.routes;

	  router.location = location;
	  router.params = params;
	  router.routes = routes;

	  return router;
	}

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = createMemoryHistory;

	var _useQueries = __webpack_require__(52);

	var _useQueries2 = _interopRequireDefault(_useQueries);

	var _useBasename = __webpack_require__(51);

	var _useBasename2 = _interopRequireDefault(_useBasename);

	var _createMemoryHistory = __webpack_require__(123);

	var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function createMemoryHistory(options) {
	  // signatures and type checking differ between `useQueries` and
	  // `createMemoryHistory`, have to create `memoryHistory` first because
	  // `useQueries` doesn't understand the signature
	  var memoryHistory = (0, _createMemoryHistory2.default)(options);
	  var createHistory = function createHistory() {
	    return memoryHistory;
	  };
	  var history = (0, _useQueries2.default)((0, _useBasename2.default)(createHistory))(options);
	  return history;
	}
	module.exports = exports['default'];

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	exports.default = function (createHistory) {
	  var history = void 0;
	  if (canUseDOM) history = (0, _useRouterHistory2.default)(createHistory)();
	  return history;
	};

	var _useRouterHistory = __webpack_require__(64);

	var _useRouterHistory2 = _interopRequireDefault(_useRouterHistory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

	module.exports = exports['default'];

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = createTransitionManager;

	var _routerWarning = __webpack_require__(17);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _computeChangedRoutes2 = __webpack_require__(137);

	var _computeChangedRoutes3 = _interopRequireDefault(_computeChangedRoutes2);

	var _TransitionUtils = __webpack_require__(134);

	var _isActive2 = __webpack_require__(142);

	var _isActive3 = _interopRequireDefault(_isActive2);

	var _getComponents = __webpack_require__(138);

	var _getComponents2 = _interopRequireDefault(_getComponents);

	var _matchRoutes = __webpack_require__(144);

	var _matchRoutes2 = _interopRequireDefault(_matchRoutes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function hasAnyProperties(object) {
	  for (var p in object) {
	    if (Object.prototype.hasOwnProperty.call(object, p)) return true;
	  }return false;
	}

	function createTransitionManager(history, routes) {
	  var state = {};

	  // Signature should be (location, indexOnly), but needs to support (path,
	  // query, indexOnly)
	  function isActive(location, indexOnly) {
	    location = history.createLocation(location);

	    return (0, _isActive3.default)(location, indexOnly, state.location, state.routes, state.params);
	  }

	  var partialNextState = void 0;

	  function match(location, callback) {
	    if (partialNextState && partialNextState.location === location) {
	      // Continue from where we left off.
	      finishMatch(partialNextState, callback);
	    } else {
	      (0, _matchRoutes2.default)(routes, location, function (error, nextState) {
	        if (error) {
	          callback(error);
	        } else if (nextState) {
	          finishMatch(_extends({}, nextState, { location: location }), callback);
	        } else {
	          callback();
	        }
	      });
	    }
	  }

	  function finishMatch(nextState, callback) {
	    var _computeChangedRoutes = (0, _computeChangedRoutes3.default)(state, nextState),
	        leaveRoutes = _computeChangedRoutes.leaveRoutes,
	        changeRoutes = _computeChangedRoutes.changeRoutes,
	        enterRoutes = _computeChangedRoutes.enterRoutes;

	    (0, _TransitionUtils.runLeaveHooks)(leaveRoutes, state);

	    // Tear down confirmation hooks for left routes
	    leaveRoutes.filter(function (route) {
	      return enterRoutes.indexOf(route) === -1;
	    }).forEach(removeListenBeforeHooksForRoute);

	    // change and enter hooks are run in series
	    (0, _TransitionUtils.runChangeHooks)(changeRoutes, state, nextState, function (error, redirectInfo) {
	      if (error || redirectInfo) return handleErrorOrRedirect(error, redirectInfo);

	      (0, _TransitionUtils.runEnterHooks)(enterRoutes, nextState, finishEnterHooks);
	    });

	    function finishEnterHooks(error, redirectInfo) {
	      if (error || redirectInfo) return handleErrorOrRedirect(error, redirectInfo);

	      // TODO: Fetch components after state is updated.
	      (0, _getComponents2.default)(nextState, function (error, components) {
	        if (error) {
	          callback(error);
	        } else {
	          // TODO: Make match a pure function and have some other API
	          // for "match and update state".
	          callback(null, null, state = _extends({}, nextState, { components: components }));
	        }
	      });
	    }

	    function handleErrorOrRedirect(error, redirectInfo) {
	      if (error) callback(error);else callback(null, redirectInfo);
	    }
	  }

	  var RouteGuid = 1;

	  function getRouteID(route) {
	    var create = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	    return route.__id__ || create && (route.__id__ = RouteGuid++);
	  }

	  var RouteHooks = Object.create(null);

	  function getRouteHooksForRoutes(routes) {
	    return routes.map(function (route) {
	      return RouteHooks[getRouteID(route)];
	    }).filter(function (hook) {
	      return hook;
	    });
	  }

	  function transitionHook(location, callback) {
	    (0, _matchRoutes2.default)(routes, location, function (error, nextState) {
	      if (nextState == null) {
	        // TODO: We didn't actually match anything, but hang
	        // onto error/nextState so we don't have to matchRoutes
	        // again in the listen callback.
	        callback();
	        return;
	      }

	      // Cache some state here so we don't have to
	      // matchRoutes() again in the listen callback.
	      partialNextState = _extends({}, nextState, { location: location });

	      var hooks = getRouteHooksForRoutes((0, _computeChangedRoutes3.default)(state, partialNextState).leaveRoutes);

	      var result = void 0;
	      for (var i = 0, len = hooks.length; result == null && i < len; ++i) {
	        // Passing the location arg here indicates to
	        // the user that this is a transition hook.
	        result = hooks[i](location);
	      }

	      callback(result);
	    });
	  }

	  /* istanbul ignore next: untestable with Karma */
	  function beforeUnloadHook() {
	    // Synchronously check to see if any route hooks want
	    // to prevent the current window/tab from closing.
	    if (state.routes) {
	      var hooks = getRouteHooksForRoutes(state.routes);

	      var message = void 0;
	      for (var i = 0, len = hooks.length; typeof message !== 'string' && i < len; ++i) {
	        // Passing no args indicates to the user that this is a
	        // beforeunload hook. We don't know the next location.
	        message = hooks[i]();
	      }

	      return message;
	    }
	  }

	  var unlistenBefore = void 0,
	      unlistenBeforeUnload = void 0;

	  function removeListenBeforeHooksForRoute(route) {
	    var routeID = getRouteID(route);
	    if (!routeID) {
	      return;
	    }

	    delete RouteHooks[routeID];

	    if (!hasAnyProperties(RouteHooks)) {
	      // teardown transition & beforeunload hooks
	      if (unlistenBefore) {
	        unlistenBefore();
	        unlistenBefore = null;
	      }

	      if (unlistenBeforeUnload) {
	        unlistenBeforeUnload();
	        unlistenBeforeUnload = null;
	      }
	    }
	  }

	  /**
	   * Registers the given hook function to run before leaving the given route.
	   *
	   * During a normal transition, the hook function receives the next location
	   * as its only argument and can return either a prompt message (string) to show the user,
	   * to make sure they want to leave the page; or `false`, to prevent the transition.
	   * Any other return value will have no effect.
	   *
	   * During the beforeunload event (in browsers) the hook receives no arguments.
	   * In this case it must return a prompt message to prevent the transition.
	   *
	   * Returns a function that may be used to unbind the listener.
	   */
	  function listenBeforeLeavingRoute(route, hook) {
	    var thereWereNoRouteHooks = !hasAnyProperties(RouteHooks);
	    var routeID = getRouteID(route, true);

	    RouteHooks[routeID] = hook;

	    if (thereWereNoRouteHooks) {
	      // setup transition & beforeunload hooks
	      unlistenBefore = history.listenBefore(transitionHook);

	      if (history.listenBeforeUnload) unlistenBeforeUnload = history.listenBeforeUnload(beforeUnloadHook);
	    }

	    return function () {
	      removeListenBeforeHooksForRoute(route);
	    };
	  }

	  /**
	   * This is the API for stateful environments. As the location
	   * changes, we update state and call the listener. We can also
	   * gracefully handle errors and redirects.
	   */
	  function listen(listener) {
	    function historyListener(location) {
	      if (state.location === location) {
	        listener(null, state);
	      } else {
	        match(location, function (error, redirectLocation, nextState) {
	          if (error) {
	            listener(error);
	          } else if (redirectLocation) {
	            history.replace(redirectLocation);
	          } else if (nextState) {
	            listener(null, nextState);
	          } else {
	             true ? (0, _routerWarning2.default)(false, 'Location "%s" did not match any routes', location.pathname + location.search + location.hash) : void 0;
	          }
	        });
	      }
	    }

	    // TODO: Only use a single history listener. Otherwise we'll end up with
	    // multiple concurrent calls to match.

	    // Set up the history listener first in case the initial match redirects.
	    var unsubscribe = history.listen(historyListener);

	    if (state.location) {
	      // Picking up on a matchContext.
	      listener(null, state);
	    } else {
	      historyListener(history.getCurrentLocation());
	    }

	    return unsubscribe;
	  }

	  return {
	    isActive: isActive,
	    match: match,
	    listenBeforeLeavingRoute: listenBeforeLeavingRoute,
	    listen: listen
	  };
	}
	module.exports = exports['default'];

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = useRouterHistory;

	var _useQueries = __webpack_require__(52);

	var _useQueries2 = _interopRequireDefault(_useQueries);

	var _useBasename = __webpack_require__(51);

	var _useBasename2 = _interopRequireDefault(_useBasename);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function useRouterHistory(createHistory) {
	  return function (options) {
	    var history = (0, _useQueries2.default)((0, _useBasename2.default)(createHistory))(options);
	    return history;
	  };
	}
	module.exports = exports['default'];

/***/ },
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 75 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 76 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 77 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 78 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 79 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = undefined;

	var _class;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pureRenderDecorator = __webpack_require__(5);

	var _pureRenderDecorator2 = _interopRequireDefault(_pureRenderDecorator);

	var _classnames = __webpack_require__(9);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _constants = __webpack_require__(22);

	var _touch = __webpack_require__(14);

	var _touch2 = _interopRequireDefault(_touch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(74);

	var List = (0, _pureRenderDecorator2.default)(_class = function (_Component) {
		_inherits(List, _Component);

		function List(props, context) {
			_classCallCheck(this, List);

			var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

			_this.state = {
				activeDelHwId: null,
				activeDelBubbleHwId: null
			};
			_this.jumpToDetail = _this.jumpToDetail.bind(_this);
			_this.showLikeBtn = _this.showLikeBtn.bind(_this);
			_this.hideLikeBtn = _this.hideLikeBtn.bind(_this);
			_this.isClickOnBtn = false; // 是否点击在修改、删除按钮上
			_this.like = _this.like.bind(_this);
			_this.dislike = _this.dislike.bind(_this);
			return _this;
		}

		List.prototype.componentWillMount = function componentWillMount() {};

		List.prototype.componentDidMount = function componentDidMount() {
			window.addEventListener('touchstart', this.hideLikeBtn(), false);
		};

		List.prototype.componentWillUnmount = function componentWillUnmount() {
			window.removeEventListener('touchstart', this.hideLikeBtn(), false);
		};

		List.prototype.jumpToDetail = function jumpToDetail(item) {
			var _this2 = this;

			return function (e) {
				if (!_this2.isClickOnBtn) {
					if (item.articletype === '100') {
						var win = window.open(item.url, '_blank');
						win && win.focus();
					} else {
						if (!_this2.props.details.hasOwnProperty(item.id)) {
							_this2.props.getNewsDetail(item);
						}
						_this2.context.router.push('detail/' + item.id + '/' + item.commentid);
					}
				}
			};
		};

		List.prototype.renderNewsIcon = function renderNewsIcon(pic) {
			return {
				"backgroundImage": "url(" + pic + ")",
				"backgroundSize": "100%"
			};
		};

		List.prototype.showLikeBtn = function showLikeBtn(item, e) {
			var _this3 = this;

			return function (e) {
				e.preventDefault();

				_this3.setState({
					activeNewsId: item.id
				});
			};
		};

		List.prototype.hideLikeBtn = function hideLikeBtn(e) {
			var _this4 = this;

			return function (e) {

				if (_this4.state.activeNewsId === null) {
					return;
				}

				_this4.setState({
					activeNewsId: null
				});
			};
		};

		List.prototype.like = function like(item) {
			var _this5 = this;

			return function (e) {
				_this5.isClickOnBtn = true;
				_this5.props.likeNews(item);
				setTimeout(function () {
					_this5.hideLikeBtn(e);
					_this5.isClickOnBtn = false;
				}, 20);
			};
		};

		List.prototype.dislike = function dislike(item) {
			var _this6 = this;

			return function (e) {
				_this6.isClickOnBtn = true;
				_this6.props.dislikeNews(item);
				setTimeout(function () {
					_this6.hideLikeBtn(e);
					_this6.isClickOnBtn = false;
				}, 20);
			};
		};

		List.prototype.render = function render() {
			var _this7 = this;

			console.dev('render List!!');

			var news = this.props.news;
			var tabsType = this.props.tabsType;

			this.listData = news;

			var list = news.map(function (item, index) {
				return _react2.default.createElement(
					'li',
					{ key: index + tabsType, className: (0, _classnames2.default)('item ui-border-1px', { 'active-like': _this7.state.activeNewsId === item.id }) },
					_react2.default.createElement(
						_touch2.default,
						{ className: 'item-inner', onSwipeLeft: _this7.showLikeBtn(item), onTap: _this7.jumpToDetail(item) },
						_react2.default.createElement('div', { className: "icon ", style: _this7.renderNewsIcon(item.thumbnails[0]) }),
						_react2.default.createElement(
							'div',
							{ className: 'info-wrap clearfix' },
							_react2.default.createElement(
								'div',
								{ className: 'info-left' },
								_react2.default.createElement(
									'div',
									{ className: 'info-name' },
									_react2.default.createElement(
										'div',
										{ className: 'info-name-text' },
										item.title
									)
								),
								_react2.default.createElement(
									'p',
									{ className: 'info-content' },
									item.des
								)
							)
						),
						_react2.default.createElement(
							_touch2.default,
							{ onTap: tabsType === _constants.LATEST_NEWS ? _this7.like(item) : _this7.dislike(item),
								className: (0, _classnames2.default)(tabsType === _constants.LATEST_NEWS ? "like-btn" : 'dislike-btn') },
							tabsType === _constants.LATEST_NEWS ? "收藏" : "取消"
						)
					)
				);
			});

			var wrapperStyle = {
				display: this.props.tabs === tabsType ? "block" : "none",
				paddingTop: 46
			};

			return _react2.default.createElement(
				'div',
				{ className: 'news-list', style: wrapperStyle },
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'ul',
						null,
						list
					)
				)
			);
		};

		return List;
	}(_react.Component)) || _class;

	exports.default = List;


	List.contextTypes = {
		router: _react2.default.PropTypes.object.isRequired
	};

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = undefined;

	var _class;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pureRenderDecorator = __webpack_require__(5);

	var _pureRenderDecorator2 = _interopRequireDefault(_pureRenderDecorator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(75);

	var List = (0, _pureRenderDecorator2.default)(_class = function (_Component) {
		_inherits(List, _Component);

		function List(props, context) {
			_classCallCheck(this, List);

			var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

			_this.state = {};
			return _this;
		}

		List.prototype.componentWillMount = function componentWillMount() {};

		List.prototype.componentDidMount = function componentDidMount() {};

		List.prototype.render = function render() {

			console.dev('render Loading');

			var isShow = this.props.isShow || false;
			var loadingStyle = {
				display: isShow ? 'block' : 'none'
			};

			var isEnd = this.props.isEnd || false;
			var loadingText = isEnd ? '已加载全部' : '正在加载中…';

			return _react2.default.createElement(
				'div',
				{ className: 'loading', style: loadingStyle },
				_react2.default.createElement(
					'p',
					null,
					loadingText
				)
			);
		};

		return List;
	}(_react.Component)) || _class;

	exports.default = List;

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = undefined;

	var _class;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pureRenderDecorator = __webpack_require__(5);

	var _pureRenderDecorator2 = _interopRequireDefault(_pureRenderDecorator);

	var _constants = __webpack_require__(22);

	var _touch = __webpack_require__(14);

	var _touch2 = _interopRequireDefault(_touch);

	var _classnames = __webpack_require__(9);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(76);

	function TabItem(item, key) {
		return _react2.default.createElement(
			'li',
			{ 'data-tab': item.label,
				key: key
			},
			_react2.default.createElement(
				_touch2.default,
				{ 'data-tab': item.label, onTap: this.switchTab },
				item.text
			)
		);
	}

	function TabHighlight(props) {

		var isActive = props.active === _constants.LIKE_NEWS;
		return _react2.default.createElement('i', { className: (0, _classnames2.default)('icon-active', { 'pull-right': isActive }) });
	}

	var Tab = (0, _pureRenderDecorator2.default)(_class = function (_Component) {
		_inherits(Tab, _Component);

		function Tab(props, context) {
			_classCallCheck(this, Tab);

			var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

			_this.state = {};
			_this.tabs = [{
				label: _constants.LATEST_NEWS,
				text: '最新新闻'
			}, {
				label: _constants.LIKE_NEWS,
				text: '我的收藏'
			}];
			_this.switchTab = _this.switchTab.bind(_this);
			return _this;
		}

		Tab.prototype.componentWillMount = function componentWillMount() {};

		Tab.prototype.componentDidMount = function componentDidMount() {};

		Tab.prototype.switchTab = function switchTab(e) {
			var tab = parseInt(e.target.dataset.tab);
			this.props.updateActiveTab(tab);
		};

		Tab.prototype.render = function render() {
			console.dev('render Tab');

			return _react2.default.createElement(
				'div',
				{ id: 'cm-tab' },
				_react2.default.createElement(
					'div',
					{ className: 'cm-tabs' },
					_react2.default.createElement(
						'nav',
						{ className: 'nav ui-border-1px' },
						_react2.default.createElement(
							'ul',
							{ className: 'title-list' },
							this.tabs.map(TabItem, this)
						),
						_react2.default.createElement(TabHighlight, { active: this.props.tabs })
					)
				)
			);
		};

		return Tab;
	}(_react.Component)) || _class;

	exports.default = Tab;

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _connect = __webpack_require__(30);

	var _connect2 = _interopRequireDefault(_connect);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function App(props) {

	       return _react2.default.createElement(
	              'div',
	              null,
	              props.children
	       );
	}

	App.contextTypes = {
	       router: _react2.default.PropTypes.object.isRequired
	};

	exports.default = (0, _connect2.default)(App);

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _lodash = __webpack_require__(2);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _utils = __webpack_require__(7);

	var _connect = __webpack_require__(30);

	var _connect2 = _interopRequireDefault(_connect);

	var _db = __webpack_require__(46);

	var _spinner = __webpack_require__(21);

	var _spinner2 = _interopRequireDefault(_spinner);

	var _touch = __webpack_require__(14);

	var _touch2 = _interopRequireDefault(_touch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(77);

	var Comment = function (_Component) {
		_inherits(Comment, _Component);

		function Comment(props, context) {
			_classCallCheck(this, Comment);

			var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

			_this.state = {};
			_this.commentId = _this.props.params.id;

			_this.getCommentList = _db.getCommentList.bind(_this);
			return _this;
		}

		Comment.prototype.componentDidMount = function componentDidMount() {};

		Comment.prototype.componentWillMount = function componentWillMount() {
			if (!this.props.comments.hasOwnProperty(this.commentId)) {
				this.getCommentList();
			}
		};

		Comment.prototype.render = function render() {
			var _this2 = this;

			var commentId = this.commentId;
			var commentData = this.props.comments.hasOwnProperty(commentId) ? this.props.comments[commentId] : [];

			var commentList = commentData.map(function (items, index) {
				var item = items[0];

				return _react2.default.createElement(
					'div',
					{ key: index, className: 'comment-list_item' },
					_react2.default.createElement(
						'div',
						{ className: 'item' },
						_react2.default.createElement(
							'div',
							{ className: 'avatar' },
							_react2.default.createElement('img', { src: item.head_url })
						),
						_react2.default.createElement(
							'div',
							{ className: 'nameBar' },
							item.nick,
							_react2.default.createElement(
								'span',
								null,
								(0, _utils.formatDate)(item.pub_time, 2)
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'contentBox' },
							_react2.default.createElement(
								'p',
								null,
								item.reply_content
							)
						)
					)
				);
			});

			commentList = !commentList.length ? _react2.default.createElement(
				'div',
				null,
				'\u6682\u65E0\u8BC4\u8BBA'
			) : commentList;

			return _react2.default.createElement(
				'div',
				{ className: 'comment-wrapper' },
				_react2.default.createElement(
					'div',
					{ className: 'comment-list' },
					_react2.default.createElement(
						'h1',
						null,
						'\u7CBE\u9009\u8BC4\u8BBA',
						_react2.default.createElement(
							_touch2.default,
							{ onTap: function onTap() {
									_this2.context.router.goBack();
									// this.context.router
								} },
							_react2.default.createElement(
								'div',
								{ className: 'back' },
								'\u8FD4\u56DE'
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'comment-list_item' },
						commentList
					)
				),
				_react2.default.createElement(_spinner2.default, { isShow: this.props.spinLoading })
			);
		};

		return Comment;
	}(_react.Component);

	Comment.contextTypes = {
		router: _react2.default.PropTypes.object.isRequired
	};

	exports.default = (0, _connect2.default)(Comment);

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _lodash = __webpack_require__(2);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _connect = __webpack_require__(30);

	var _connect2 = _interopRequireDefault(_connect);

	var _cgiPath = __webpack_require__(3);

	var _spinner = __webpack_require__(21);

	var _spinner2 = _interopRequireDefault(_spinner);

	var _touch = __webpack_require__(14);

	var _touch2 = _interopRequireDefault(_touch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(78);

	var Detail = function (_Component) {
		_inherits(Detail, _Component);

		function Detail(props, context) {
			_classCallCheck(this, Detail);

			var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

			_this.state = {};
			_this.newsId = _this.props.params.id;
			_this.commentId = _this.props.params.commentid;

			_this.getNewsDetail = _this.getNewsDetail.bind(_this);
			return _this;
		}

		Detail.prototype.componentDidMount = function componentDidMount() {
			var keys = Object.keys(this.props.details);

			if (!keys.length) {
				this.getNewsDetail({
					id: this.newsId
				});
			}
		};

		Detail.prototype.componentWillMount = function componentWillMount() {};

		Detail.prototype.getNewsDetail = function getNewsDetail(item) {
			var url = _cgiPath.GET_NEWS_DETAIL,
			    opts = {};

			var pa = (0, _lodash2.default)({}, {
				url: item.url,
				news_id: item.id,
				v: new Date().getTime()
			}, pa);

			var param = {
				param: pa,
				ajaxType: 'POST',
				localData: {
					content: '险企碰红线 监管将下手快下手狠\n\n2017-01-12 23:00:39 腾讯财经\n\n文/刘鹏\n\n进入2017年，保险业监管将保持高压状态。\n\n1月12日，2017年全国保险监管工作会议在京召开，保监会主席项俊波在会议上部署了2017年的保险业监管工作。他强调，要将“保险业姓保、保监会姓监”理念贯穿到监管工作各个方面。要打赢一场硬仗，坚决守住不发生系统性风险底线。\n\n'
				},
				onSuccess: function onSuccess(data) {},
				onError: function onError(res) {
					console.log("err");
				}
			};

			this.props.request(url, param, opts);
		};

		Detail.prototype.render = function render() {
			var _this2 = this;

			var details = this.props.details || {},
			    detailStr = details.hasOwnProperty(this.newsId) ? details[this.newsId] : '';

			var detailContent = detailStr.split('\n\n').map(function (item, index) {
				// console.log(item);
				switch (index) {
					case 0:
						return _react2.default.createElement(
							'p',
							{ key: index, className: 'title' },
							item
						);
					case 1:
						return _react2.default.createElement(
							'p',
							{ key: index, className: 'src' },
							item
						);
					default:

						var regex = new RegExp('(\[http:\/\/(\w.+)\])', 'i');
						var matches = item.match(regex);
						// console.log(matches);
						if (matches !== null && !!~matches.input.indexOf("\[http://")) {
							// console.log(item);
							return _react2.default.createElement(
								'p',
								{ key: index, className: 'imgNode' },
								_react2.default.createElement('img', { src: item.replace("\[", "").replace("\]", "") })
							);
						} else {
							return _react2.default.createElement(
								'p',
								{ key: index, className: 'text' },
								item
							);
						}
				}
			});

			return _react2.default.createElement(
				'div',
				{ className: 'detail-wrapper' },
				detailContent,
				_react2.default.createElement(
					'div',
					{ className: 'btns' },
					_react2.default.createElement(
						_touch2.default,
						{ onTap: function onTap() {
								_this2.context.router.goBack();
								// this.context.router
							} },
						'\u9996\u9875'
					),
					_react2.default.createElement(
						_touch2.default,
						{ onTap: function onTap() {
								_this2.context.router.push('comment/' + _this2.commentId);
							} },
						'\u7CBE\u5F69\u8BC4\u8BBA'
					)
				),
				_react2.default.createElement(_spinner2.default, { isShow: this.props.spinLoading })
			);
		};

		return Detail;
	}(_react.Component);

	Detail.contextTypes = {
		router: _react2.default.PropTypes.object.isRequired
	};

	exports.default = (0, _connect2.default)(Detail);

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _connect = __webpack_require__(30);

	var _connect2 = _interopRequireDefault(_connect);

	var _db = __webpack_require__(46);

	var _constants = __webpack_require__(22);

	var _scroll = __webpack_require__(39);

	var _scroll2 = _interopRequireDefault(_scroll);

	var _spinner = __webpack_require__(21);

	var _spinner2 = _interopRequireDefault(_spinner);

	var _index = __webpack_require__(104);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(106);

	var _index4 = _interopRequireDefault(_index3);

	var _index5 = __webpack_require__(105);

	var _index6 = _interopRequireDefault(_index5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(79);

	var Wrapper = function (_Component) {
		_inherits(Wrapper, _Component);

		function Wrapper(props, context) {
			_classCallCheck(this, Wrapper);

			var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

			_this.state = {
				lock: true
			};
			_this.firstGetAllData = false;

			_this.loadTopNews = _db.loadTopNews.bind(_this);
			_this.loadNewsList = _this.loadNewsList.bind(_this);
			_this.loadData = _db.loadData.bind(_this);
			// this.loadDataForScroll = loadDataForScroll.bind(this);
			_this.getNewsDetail = _db.getNewsDetail.bind(_this);
			return _this;
		}

		Wrapper.prototype.componentDidMount = function componentDidMount() {
			var _this2 = this;

			setTimeout(function () {
				_this2.setState({
					lock: false
				});
			}, 100);
		};

		Wrapper.prototype.componentWillMount = function componentWillMount() {
			if (this.props.news.ids.length === 0) {
				this.loadTopNews();
			}
		};

		Wrapper.prototype.componentWillReceiveProps = function componentWillReceiveProps() {
			this.props.toggleSpinLoading(false);

			return true;
		};

		Wrapper.prototype.loadNewsList = function loadNewsList() {
			this.loadData(_constants.LATEST_NEWS, {});
		};

		Wrapper.prototype.render = function render() {
			console.dev('render container!!!');
			var tabStyle = this.props.tabs,
			    isEnd = this.props.news.listInfo['listLatest']['isEnd'],
			    isLoadingShow = tabStyle === _constants.LATEST_NEWS;

			return _react2.default.createElement(
				'article',
				{ className: 'cm-page' },
				_react2.default.createElement(_index4.default, {
					tabs: this.props.tabs,
					updateActiveTab: this.props.updateActiveTab
				}),
				_react2.default.createElement(
					'div',
					{ className: 'cm-content' },
					_react2.default.createElement(
						_scroll2.default,
						{
							ref: 'scroll',
							loadDataForScroll: this.loadNewsList,
							disable: this.state.lock
						},
						_react2.default.createElement(_index2.default, {
							tabs: this.props.tabs,
							tabsType: _constants.LATEST_NEWS,
							news: this.props.news.listLatest,
							listInfo: this.props.news.listInfo.listLatest,
							args: this.props.args,
							likeNews: this.props.likeNews,
							getNewsDetail: this.getNewsDetail,
							details: this.props.details
						}),
						_react2.default.createElement(_index2.default, {
							tabs: this.props.tabs,
							tabsType: _constants.LIKE_NEWS,
							news: this.props.news.listLike,
							listInfo: this.props.news.listInfo.listLike,
							args: this.props.args,
							dislikeNews: this.props.dislikeNews,
							getNewsDetail: this.getNewsDetail,
							details: this.props.details
						}),
						_react2.default.createElement(_index6.default, { isShow: isLoadingShow, isEnd: isEnd })
					)
				),
				_react2.default.createElement(_spinner2.default, { isShow: this.props.spinLoading })
			);
		};

		return Wrapper;
	}(_react.Component);

	Wrapper.contextTypes = {
		router: _react2.default.PropTypes.object.isRequired
	};

	exports.default = (0, _connect2.default)(Wrapper);

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Root = __webpack_require__(113);

	var _Root2 = _interopRequireDefault(_Root);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _redux = __webpack_require__(6);

	var _reactRouterRedux = __webpack_require__(55);

	var _lodash = __webpack_require__(2);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _utils = __webpack_require__(7);

	var _stores = __webpack_require__(117);

	var _stores2 = _interopRequireDefault(_stores);

	var _cgiPath = __webpack_require__(3);

	var _actions = __webpack_require__(49);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var news = function news() {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _stores2.default.news;
		var action = arguments[1];


		switch (action.type) {

			case _cgiPath.GET_TOP_NEWS + '_SUCCESS':

				if (!action.data || !action.data.idlist || action.data.idlist.length === 0) {
					return state;
				}

				var idlist = action.data.idlist,
				    newState = (0, _lodash2.default)({}, state);

				newState.ids = (0, _lodash2.default)([], idlist[0].ids);
				newState.listLatest = (0, _lodash2.default)([], newState.listLatest.concat(idlist[0].newslist));

				return newState;

			case _cgiPath.GET_NEWS_LIST + '_ON':
				var newState = (0, _lodash2.default)({}, state);
				newState.listInfo['listLatest'].isLoading = true;

				return newState;

			case _cgiPath.GET_NEWS_LIST + '_SUCCESS':

				if (!action.data || !action.data.newslist) {
					return state;
				}

				var newState = (0, _lodash2.default)({}, state),
				    listInfo = {
					curPage: ++newState.listInfo['listLatest'].curPage,
					isLoading: false
				};

				newState.listInfo['listLatest'] = (0, _lodash2.default)({}, newState.listInfo['listLatest'], listInfo);
				newState['listLatest'] = newState['listLatest'].concat(action.data.newslist);

				return newState;

			case _cgiPath.GET_NEWS_LIST + '_ERROR':
				var newState = (0, _lodash2.default)({}, state);
				newState.listInfo['listLatest'].isLoading = false;

				return newState;

			case _actions.LIKE_NEWS:
				if (!action.value) {
					return state;
				}

				var newState = (0, _lodash2.default)({}, state),
				    isDuplicate = false;

				newState['listLike'].map(function (item) {
					if (item.id === action.value.id) {
						isDuplicate = true;
					}
				});

				if (isDuplicate) {
					return newState;
				}

				newState['listLike'] = newState['listLike'].concat(action.value);
				(0, _utils.setItem)('like-list', JSON.stringify(newState['listLike']));

				return newState;

			case _actions.DISLIKE_NEWS:
				if (!action.value) {
					return state;
				}

				var newState = (0, _lodash2.default)({}, state);
				newState['listLike'] = newState['listLike'].filter(function (item) {
					return item.id !== action.value.id;
				});
				(0, _utils.setItem)('like-list', JSON.stringify(newState['listLike']));

				return newState;

			default:
				return state;
		}
	};

	var details = function details() {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _stores2.default.details;
		var action = arguments[1];

		switch (action.type) {
			case _cgiPath.GET_NEWS_DETAIL + '_SUCCESS':
				var newState = (0, _lodash2.default)({}, state);
				if (!action.data || !action.data.content) {
					return newState;
				}
				newState[action.param.news_id] = action.data.content;
				return newState;
			default:
				return state;
		}
	};

	var comments = function comments() {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _stores2.default.comments;
		var action = arguments[1];

		switch (action.type) {
			case _cgiPath.GET_COMMENT_LIST + '_SUCCESS':
				var newState = (0, _lodash2.default)({}, state);
				if (!action.data || !action.data.comments || !action.data.comments.list) {
					return newState;
				}

				newState[action.param.comment_id] = action.data.comments.list;
				return newState;
			default:

				return state;
		}
	};

	var args = function args() {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _stores2.default.args;
		var action = arguments[1];

		switch (action.type) {
			case _actions.GET_ARGS:
				return (0, _lodash2.default)({}, state, action.value);
			default:
				return state;
		}
	};

	var tabs = function tabs() {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _stores2.default.tabs;
		var action = arguments[1];

		switch (action.type) {
			case _actions.TABS_UPDATE:
				return action.value;
			default:
				return state;
		}
	};

	var listLoading = function listLoading() {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _stores2.default.listLoading;
		var action = arguments[1];

		switch (action.type) {
			case _actions.TOGGLE_LIST_LOADING:
				return action.value;

			default:
				return state;
		}
	};

	var spinLoading = function spinLoading() {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _stores2.default.spinLoading;
		var action = arguments[1];

		switch (action.type) {
			case _actions.TOGGLE_SPIN_LOADING:
				return action.value;

			case _cgiPath.GET_COMMENT_LIST + '_ON':
			case _cgiPath.GET_NEWS_DETAIL + '_ON':
				return true;

			case _cgiPath.GET_COMMENT_LIST + '_SUCCESS':
			case _cgiPath.GET_COMMENT_LIST + '_ERROR':
			case _cgiPath.GET_NEWS_DETAIL + '_SUCCESS':
			case _cgiPath.GET_NEWS_DETAIL + '_ERROR':
				return false;

			default:
				return state;
		}
	};

	var rootReducer = (0, _redux.combineReducers)({
		routing: _reactRouterRedux.routerReducer,
		args: args,
		tabs: tabs,
		news: news,
		details: details,
		comments: comments,
		listLoading: listLoading,
		spinLoading: spinLoading
	});

	exports.default = rootReducer;

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	if (false) {
		window.console.dev = function (msg) {
			console.log(msg);
		};
		// use it for hot reload
		module.exports = require('./Root.hot');

		// enable it and don't forget to add back render() function
		// module.exports = require('./Root.dev');
	} else {
		window.console.dev = function () {};
		module.exports = __webpack_require__(114);
	}

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = undefined;

	var _react = __webpack_require__(1);

	var _reactDom = __webpack_require__(44);

	var _reactRedux = __webpack_require__(24);

	var _configureStore = __webpack_require__(115);

	var _configureStore2 = _interopRequireDefault(_configureStore);

	var _index = __webpack_require__(110);

	var _index2 = _interopRequireDefault(_index);

	var _comment = __webpack_require__(108);

	var _comment2 = _interopRequireDefault(_comment);

	var _detail = __webpack_require__(109);

	var _detail2 = _interopRequireDefault(_detail);

	var _app = __webpack_require__(107);

	var _app2 = _interopRequireDefault(_app);

	var _reactRouterRedux = __webpack_require__(55);

	var _reactRouter = __webpack_require__(141);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var store = (0, _configureStore2.default)();

	var history = (0, _reactRouterRedux.syncHistoryWithStore)(_reactRouter.hashHistory, store);

	var Root = function (_Component) {
	    _inherits(Root, _Component);

	    function Root(props, context) {
	        _classCallCheck(this, Root);

	        return _possibleConstructorReturn(this, _Component.call(this, props, context));
	    }

	    Root.prototype.render = function render() {
	        return React.createElement(
	            _reactRedux.Provider,
	            { store: store },
	            React.createElement(
	                'div',
	                null,
	                React.createElement(
	                    _reactRouter.Router,
	                    { history: history },
	                    React.createElement(
	                        _reactRouter.Route,
	                        { path: '/', component: _app2.default },
	                        React.createElement(_reactRouter.IndexRoute, { component: _index2.default }),
	                        React.createElement(_reactRouter.Route, { path: 'comment/:id', component: _comment2.default }),
	                        React.createElement(_reactRouter.Route, { path: 'detail/:id/:commentid', component: _detail2.default })
	                    )
	                )
	            )
	        );
	    };

	    return Root;
	}(_react.Component);

	exports.default = Root;


	(0, _reactDom.render)(React.createElement(Root, null), document.getElementById('pages'));

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	if (false) {
		module.exports = require('./configureStore.dev');
	} else {
		module.exports = __webpack_require__(116);
	}

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = configureStore;

	var _redux = __webpack_require__(6);

	var _reducers = __webpack_require__(112);

	var _reducers2 = _interopRequireDefault(_reducers);

	var _reduxThunk = __webpack_require__(26);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _logger = __webpack_require__(34);

	var _logger2 = _interopRequireDefault(_logger);

	var _api = __webpack_require__(23);

	var _api2 = _interopRequireDefault(_api);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var finalCreateStore = (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default, _api2.default, _logger2.default))(_redux.createStore);

	function configureStore(initialState) {

	  var store = finalCreateStore(_reducers2.default, initialState);

	  return store;
	}

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(7);

	var _constants = __webpack_require__(22);

	/** other const **/
	var initialState = {
		args: {
			src: (0, _utils.getHash)('src')
		},
		tabs: _constants.LATEST_NEWS,
		news: {
			ids: [], // 新闻id
			listLatest: [], // 最新新闻
			listLike: JSON.parse((0, _utils.getItem)('like-list')) || [], // 收藏新闻
			listInfo: {
				listLatest: {
					isEnd: false,
					pageSize: 20,
					curPage: 1,
					isLoading: false
				},
				listLike: {
					isEnd: false,
					pageSize: 20,
					curPage: 1,
					isLoading: false
				}
			}
		},
		details: {},
		comments: {},
		listLoading: false,
		spinLoading: true
	};

	exports.default = initialState;

/***/ },
/* 118 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	var loopAsync = exports.loopAsync = function loopAsync(turns, work, callback) {
	  var currentTurn = 0,
	      isDone = false;
	  var isSync = false,
	      hasNext = false,
	      doneArgs = void 0;

	  var done = function done() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    isDone = true;

	    if (isSync) {
	      // Iterate instead of recursing if possible.
	      doneArgs = args;
	      return;
	    }

	    callback.apply(undefined, args);
	  };

	  var next = function next() {
	    if (isDone) return;

	    hasNext = true;

	    if (isSync) return; // Iterate instead of recursing if possible.

	    isSync = true;

	    while (!isDone && currentTurn < turns && hasNext) {
	      hasNext = false;
	      work(currentTurn++, next, done);
	    }

	    isSync = false;

	    if (isDone) {
	      // This means the loop finished synchronously.
	      callback.apply(undefined, doneArgs);
	      return;
	    }

	    if (currentTurn >= turns && hasNext) {
	      isDone = true;
	      callback();
	    }
	  };

	  next();
	};

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.replaceLocation = exports.pushLocation = exports.startListener = exports.getCurrentLocation = exports.go = exports.getUserConfirmation = undefined;

	var _BrowserProtocol = __webpack_require__(35);

	Object.defineProperty(exports, 'getUserConfirmation', {
	  enumerable: true,
	  get: function get() {
	    return _BrowserProtocol.getUserConfirmation;
	  }
	});
	Object.defineProperty(exports, 'go', {
	  enumerable: true,
	  get: function get() {
	    return _BrowserProtocol.go;
	  }
	});

	var _warning = __webpack_require__(12);

	var _warning2 = _interopRequireDefault(_warning);

	var _LocationUtils = __webpack_require__(15);

	var _DOMUtils = __webpack_require__(32);

	var _DOMStateStorage = __webpack_require__(50);

	var _PathUtils = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var HashChangeEvent = 'hashchange';

	var getHashPath = function getHashPath() {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  var href = window.location.href;
	  var hashIndex = href.indexOf('#');
	  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
	};

	var pushHashPath = function pushHashPath(path) {
	  return window.location.hash = path;
	};

	var replaceHashPath = function replaceHashPath(path) {
	  var hashIndex = window.location.href.indexOf('#');

	  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
	};

	var getCurrentLocation = exports.getCurrentLocation = function getCurrentLocation(pathCoder, queryKey) {
	  var path = pathCoder.decodePath(getHashPath());
	  var key = (0, _PathUtils.getQueryStringValueFromPath)(path, queryKey);

	  var state = void 0;
	  if (key) {
	    path = (0, _PathUtils.stripQueryStringValueFromPath)(path, queryKey);
	    state = (0, _DOMStateStorage.readState)(key);
	  }

	  var init = (0, _PathUtils.parsePath)(path);
	  init.state = state;

	  return (0, _LocationUtils.createLocation)(init, undefined, key);
	};

	var prevLocation = void 0;

	var startListener = exports.startListener = function startListener(listener, pathCoder, queryKey) {
	  var handleHashChange = function handleHashChange() {
	    var path = getHashPath();
	    var encodedPath = pathCoder.encodePath(path);

	    if (path !== encodedPath) {
	      // Always be sure we have a properly-encoded hash.
	      replaceHashPath(encodedPath);
	    } else {
	      var currentLocation = getCurrentLocation(pathCoder, queryKey);

	      if (prevLocation && currentLocation.key && prevLocation.key === currentLocation.key) return; // Ignore extraneous hashchange events

	      prevLocation = currentLocation;

	      listener(currentLocation);
	    }
	  };

	  // Ensure the hash is encoded properly.
	  var path = getHashPath();
	  var encodedPath = pathCoder.encodePath(path);

	  if (path !== encodedPath) replaceHashPath(encodedPath);

	  (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);

	  return function () {
	    return (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
	  };
	};

	var updateLocation = function updateLocation(location, pathCoder, queryKey, updateHash) {
	  var state = location.state;
	  var key = location.key;


	  var path = pathCoder.encodePath((0, _PathUtils.createPath)(location));

	  if (state !== undefined) {
	    path = (0, _PathUtils.addQueryStringValueToPath)(path, queryKey, key);
	    (0, _DOMStateStorage.saveState)(key, state);
	  }

	  prevLocation = location;

	  updateHash(path);
	};

	var pushLocation = exports.pushLocation = function pushLocation(location, pathCoder, queryKey) {
	  return updateLocation(location, pathCoder, queryKey, function (path) {
	    if (getHashPath() !== path) {
	      pushHashPath(path);
	    } else {
	       true ? (0, _warning2.default)(false, 'You cannot PUSH the same path using hash history') : void 0;
	    }
	  });
	};

	var replaceLocation = exports.replaceLocation = function replaceLocation(location, pathCoder, queryKey) {
	  return updateLocation(location, pathCoder, queryKey, function (path) {
	    if (getHashPath() !== path) replaceHashPath(path);
	  });
	};

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.replaceLocation = exports.pushLocation = exports.getCurrentLocation = exports.go = exports.getUserConfirmation = undefined;

	var _BrowserProtocol = __webpack_require__(35);

	Object.defineProperty(exports, 'getUserConfirmation', {
	  enumerable: true,
	  get: function get() {
	    return _BrowserProtocol.getUserConfirmation;
	  }
	});
	Object.defineProperty(exports, 'go', {
	  enumerable: true,
	  get: function get() {
	    return _BrowserProtocol.go;
	  }
	});

	var _LocationUtils = __webpack_require__(15);

	var _PathUtils = __webpack_require__(10);

	var getCurrentLocation = exports.getCurrentLocation = function getCurrentLocation() {
	  return (0, _LocationUtils.createLocation)(window.location);
	};

	var pushLocation = exports.pushLocation = function pushLocation(location) {
	  window.location.href = (0, _PathUtils.createPath)(location);
	  return false; // Don't update location
	};

	var replaceLocation = exports.replaceLocation = function replaceLocation(location) {
	  window.location.replace((0, _PathUtils.createPath)(location));
	  return false; // Don't update location
	};

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _invariant = __webpack_require__(4);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _ExecutionEnvironment = __webpack_require__(36);

	var _BrowserProtocol = __webpack_require__(35);

	var BrowserProtocol = _interopRequireWildcard(_BrowserProtocol);

	var _RefreshProtocol = __webpack_require__(120);

	var RefreshProtocol = _interopRequireWildcard(_RefreshProtocol);

	var _DOMUtils = __webpack_require__(32);

	var _createHistory = __webpack_require__(37);

	var _createHistory2 = _interopRequireDefault(_createHistory);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Creates and returns a history object that uses HTML5's history API
	 * (pushState, replaceState, and the popstate event) to manage history.
	 * This is the recommended method of managing history in browsers because
	 * it provides the cleanest URLs.
	 *
	 * Note: In browsers that do not support the HTML5 history API full
	 * page reloads will be used to preserve clean URLs. You can force this
	 * behavior using { forceRefresh: true } in options.
	 */
	var createBrowserHistory = function createBrowserHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  !_ExecutionEnvironment.canUseDOM ?  true ? (0, _invariant2.default)(false, 'Browser history needs a DOM') : (0, _invariant2.default)(false) : void 0;

	  var useRefresh = options.forceRefresh || !(0, _DOMUtils.supportsHistory)();
	  var Protocol = useRefresh ? RefreshProtocol : BrowserProtocol;

	  var getUserConfirmation = Protocol.getUserConfirmation;
	  var getCurrentLocation = Protocol.getCurrentLocation;
	  var pushLocation = Protocol.pushLocation;
	  var replaceLocation = Protocol.replaceLocation;
	  var go = Protocol.go;


	  var history = (0, _createHistory2.default)(_extends({
	    getUserConfirmation: getUserConfirmation }, options, {
	    getCurrentLocation: getCurrentLocation,
	    pushLocation: pushLocation,
	    replaceLocation: replaceLocation,
	    go: go
	  }));

	  var listenerCount = 0,
	      stopListener = void 0;

	  var startListener = function startListener(listener, before) {
	    if (++listenerCount === 1) stopListener = BrowserProtocol.startListener(history.transitionTo);

	    var unlisten = before ? history.listenBefore(listener) : history.listen(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopListener();
	    };
	  };

	  var listenBefore = function listenBefore(listener) {
	    return startListener(listener, true);
	  };

	  var listen = function listen(listener) {
	    return startListener(listener, false);
	  };

	  return _extends({}, history, {
	    listenBefore: listenBefore,
	    listen: listen
	  });
	};

	exports.default = createBrowserHistory;

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _warning = __webpack_require__(12);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(4);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _ExecutionEnvironment = __webpack_require__(36);

	var _DOMUtils = __webpack_require__(32);

	var _HashProtocol = __webpack_require__(119);

	var HashProtocol = _interopRequireWildcard(_HashProtocol);

	var _createHistory = __webpack_require__(37);

	var _createHistory2 = _interopRequireDefault(_createHistory);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var DefaultQueryKey = '_k';

	var addLeadingSlash = function addLeadingSlash(path) {
	  return path.charAt(0) === '/' ? path : '/' + path;
	};

	var HashPathCoders = {
	  hashbang: {
	    encodePath: function encodePath(path) {
	      return path.charAt(0) === '!' ? path : '!' + path;
	    },
	    decodePath: function decodePath(path) {
	      return path.charAt(0) === '!' ? path.substring(1) : path;
	    }
	  },
	  noslash: {
	    encodePath: function encodePath(path) {
	      return path.charAt(0) === '/' ? path.substring(1) : path;
	    },
	    decodePath: addLeadingSlash
	  },
	  slash: {
	    encodePath: addLeadingSlash,
	    decodePath: addLeadingSlash
	  }
	};

	var createHashHistory = function createHashHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  !_ExecutionEnvironment.canUseDOM ?  true ? (0, _invariant2.default)(false, 'Hash history needs a DOM') : (0, _invariant2.default)(false) : void 0;

	  var queryKey = options.queryKey;
	  var hashType = options.hashType;


	   true ? (0, _warning2.default)(queryKey !== false, 'Using { queryKey: false } no longer works. Instead, just don\'t ' + 'use location state if you don\'t want a key in your URL query string') : void 0;

	  if (typeof queryKey !== 'string') queryKey = DefaultQueryKey;

	  if (hashType == null) hashType = 'slash';

	  if (!(hashType in HashPathCoders)) {
	     true ? (0, _warning2.default)(false, 'Invalid hash type: %s', hashType) : void 0;

	    hashType = 'slash';
	  }

	  var pathCoder = HashPathCoders[hashType];

	  var getUserConfirmation = HashProtocol.getUserConfirmation;


	  var getCurrentLocation = function getCurrentLocation() {
	    return HashProtocol.getCurrentLocation(pathCoder, queryKey);
	  };

	  var pushLocation = function pushLocation(location) {
	    return HashProtocol.pushLocation(location, pathCoder, queryKey);
	  };

	  var replaceLocation = function replaceLocation(location) {
	    return HashProtocol.replaceLocation(location, pathCoder, queryKey);
	  };

	  var history = (0, _createHistory2.default)(_extends({
	    getUserConfirmation: getUserConfirmation }, options, {
	    getCurrentLocation: getCurrentLocation,
	    pushLocation: pushLocation,
	    replaceLocation: replaceLocation,
	    go: HashProtocol.go
	  }));

	  var listenerCount = 0,
	      stopListener = void 0;

	  var startListener = function startListener(listener, before) {
	    if (++listenerCount === 1) stopListener = HashProtocol.startListener(history.transitionTo, pathCoder, queryKey);

	    var unlisten = before ? history.listenBefore(listener) : history.listen(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopListener();
	    };
	  };

	  var listenBefore = function listenBefore(listener) {
	    return startListener(listener, true);
	  };

	  var listen = function listen(listener) {
	    return startListener(listener, false);
	  };

	  var goIsSupportedWithoutReload = (0, _DOMUtils.supportsGoWithoutReloadUsingHash)();

	  var go = function go(n) {
	     true ? (0, _warning2.default)(goIsSupportedWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : void 0;

	    history.go(n);
	  };

	  var createHref = function createHref(path) {
	    return '#' + pathCoder.encodePath(history.createHref(path));
	  };

	  return _extends({}, history, {
	    listenBefore: listenBefore,
	    listen: listen,
	    go: go,
	    createHref: createHref
	  });
	};

	exports.default = createHashHistory;

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _warning = __webpack_require__(12);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(4);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _LocationUtils = __webpack_require__(15);

	var _PathUtils = __webpack_require__(10);

	var _createHistory = __webpack_require__(37);

	var _createHistory2 = _interopRequireDefault(_createHistory);

	var _Actions = __webpack_require__(31);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var createStateStorage = function createStateStorage(entries) {
	  return entries.filter(function (entry) {
	    return entry.state;
	  }).reduce(function (memo, entry) {
	    memo[entry.key] = entry.state;
	    return memo;
	  }, {});
	};

	var createMemoryHistory = function createMemoryHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  if (Array.isArray(options)) {
	    options = { entries: options };
	  } else if (typeof options === 'string') {
	    options = { entries: [options] };
	  }

	  var getCurrentLocation = function getCurrentLocation() {
	    var entry = entries[current];
	    var path = (0, _PathUtils.createPath)(entry);

	    var key = void 0,
	        state = void 0;
	    if (entry.key) {
	      key = entry.key;
	      state = readState(key);
	    }

	    var init = (0, _PathUtils.parsePath)(path);

	    return (0, _LocationUtils.createLocation)(_extends({}, init, { state: state }), undefined, key);
	  };

	  var canGo = function canGo(n) {
	    var index = current + n;
	    return index >= 0 && index < entries.length;
	  };

	  var go = function go(n) {
	    if (!n) return;

	    if (!canGo(n)) {
	       true ? (0, _warning2.default)(false, 'Cannot go(%s) there is not enough history', n) : void 0;

	      return;
	    }

	    current += n;
	    var currentLocation = getCurrentLocation();

	    // Change action to POP
	    history.transitionTo(_extends({}, currentLocation, { action: _Actions.POP }));
	  };

	  var pushLocation = function pushLocation(location) {
	    current += 1;

	    if (current < entries.length) entries.splice(current);

	    entries.push(location);

	    saveState(location.key, location.state);
	  };

	  var replaceLocation = function replaceLocation(location) {
	    entries[current] = location;
	    saveState(location.key, location.state);
	  };

	  var history = (0, _createHistory2.default)(_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    pushLocation: pushLocation,
	    replaceLocation: replaceLocation,
	    go: go
	  }));

	  var _options = options;
	  var entries = _options.entries;
	  var current = _options.current;


	  if (typeof entries === 'string') {
	    entries = [entries];
	  } else if (!Array.isArray(entries)) {
	    entries = ['/'];
	  }

	  entries = entries.map(function (entry) {
	    return (0, _LocationUtils.createLocation)(entry);
	  });

	  if (current == null) {
	    current = entries.length - 1;
	  } else {
	    !(current >= 0 && current < entries.length) ?  true ? (0, _invariant2.default)(false, 'Current index must be >= 0 and < %s, was %s', entries.length, current) : (0, _invariant2.default)(false) : void 0;
	  }

	  var storage = createStateStorage(entries);

	  var saveState = function saveState(key, state) {
	    return storage[key] = state;
	  };

	  var readState = function readState(key) {
	    return storage[key];
	  };

	  return _extends({}, history, {
	    canGo: canGo
	  });
	};

	exports.default = createMemoryHistory;

/***/ },
/* 124 */
/***/ function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';

	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};

	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};

	var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	        var keys = Object.getOwnPropertyNames(sourceComponent);

	        /* istanbul ignore else */
	        if (isGetOwnPropertySymbolsAvailable) {
	            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
	        }

	        for (var i = 0; i < keys.length; ++i) {
	            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
	                try {
	                    targetComponent[keys[i]] = sourceComponent[keys[i]];
	                } catch (error) {

	                }
	            }
	        }
	    }

	    return targetComponent;
	};


/***/ },
/* 125 */
/***/ function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strictUriEncode = __webpack_require__(146);
	var objectAssign = __webpack_require__(125);

	function encoderForArrayFormat(opts) {
		switch (opts.arrayFormat) {
			case 'index':
				return function (key, value, index) {
					return value === null ? [
						encode(key, opts),
						'[',
						index,
						']'
					].join('') : [
						encode(key, opts),
						'[',
						encode(index, opts),
						']=',
						encode(value, opts)
					].join('');
				};

			case 'bracket':
				return function (key, value) {
					return value === null ? encode(key, opts) : [
						encode(key, opts),
						'[]=',
						encode(value, opts)
					].join('');
				};

			default:
				return function (key, value) {
					return value === null ? encode(key, opts) : [
						encode(key, opts),
						'=',
						encode(value, opts)
					].join('');
				};
		}
	}

	function parserForArrayFormat(opts) {
		var result;

		switch (opts.arrayFormat) {
			case 'index':
				return function (key, value, accumulator) {
					result = /\[(\d*)]$/.exec(key);

					key = key.replace(/\[\d*]$/, '');

					if (!result) {
						accumulator[key] = value;
						return;
					}

					if (accumulator[key] === undefined) {
						accumulator[key] = {};
					}

					accumulator[key][result[1]] = value;
				};

			case 'bracket':
				return function (key, value, accumulator) {
					result = /(\[])$/.exec(key);

					key = key.replace(/\[]$/, '');

					if (!result || accumulator[key] === undefined) {
						accumulator[key] = value;
						return;
					}

					accumulator[key] = [].concat(accumulator[key], value);
				};

			default:
				return function (key, value, accumulator) {
					if (accumulator[key] === undefined) {
						accumulator[key] = value;
						return;
					}

					accumulator[key] = [].concat(accumulator[key], value);
				};
		}
	}

	function encode(value, opts) {
		if (opts.encode) {
			return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
		}

		return value;
	}

	function keysSorter(input) {
		if (Array.isArray(input)) {
			return input.sort();
		} else if (typeof input === 'object') {
			return keysSorter(Object.keys(input)).sort(function (a, b) {
				return Number(a) - Number(b);
			}).map(function (key) {
				return input[key];
			});
		}

		return input;
	}

	exports.extract = function (str) {
		return str.split('?')[1] || '';
	};

	exports.parse = function (str, opts) {
		opts = objectAssign({arrayFormat: 'none'}, opts);

		var formatter = parserForArrayFormat(opts);

		// Create an object with no prototype
		// https://github.com/sindresorhus/query-string/issues/47
		var ret = Object.create(null);

		if (typeof str !== 'string') {
			return ret;
		}

		str = str.trim().replace(/^(\?|#|&)/, '');

		if (!str) {
			return ret;
		}

		str.split('&').forEach(function (param) {
			var parts = param.replace(/\+/g, ' ').split('=');
			// Firefox (pre 40) decodes `%3D` to `=`
			// https://github.com/sindresorhus/query-string/pull/37
			var key = parts.shift();
			var val = parts.length > 0 ? parts.join('=') : undefined;

			// missing `=` should be `null`:
			// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
			val = val === undefined ? null : decodeURIComponent(val);

			formatter(decodeURIComponent(key), val, ret);
		});

		return Object.keys(ret).sort().reduce(function (result, key) {
			var val = ret[key];
			if (Boolean(val) && typeof val === 'object' && !Array.isArray(val)) {
				// Sort object keys, not values
				result[key] = keysSorter(val);
			} else {
				result[key] = val;
			}

			return result;
		}, Object.create(null));
	};

	exports.stringify = function (obj, opts) {
		var defaults = {
			encode: true,
			strict: true,
			arrayFormat: 'none'
		};

		opts = objectAssign(defaults, opts);

		var formatter = encoderForArrayFormat(opts);

		return obj ? Object.keys(obj).sort().map(function (key) {
			var val = obj[key];

			if (val === undefined) {
				return '';
			}

			if (val === null) {
				return encode(key, opts);
			}

			if (Array.isArray(val)) {
				var result = [];

				val.slice().forEach(function (val2) {
					if (val2 === undefined) {
						return;
					}

					result.push(formatter(key, val2, result.length));
				});

				return result.join('&');
			}

			return encode(key, opts) + '=' + encode(val, opts);
		}).filter(function (x) {
			return x.length > 0;
		}).join('&') : '';
	};


/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = routerMiddleware;

	var _actions = __webpack_require__(54);

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	/**
	 * This middleware captures CALL_HISTORY_METHOD actions to redirect to the
	 * provided history object. This will prevent these actions from reaching your
	 * reducer or any middleware that comes after this one.
	 */
	function routerMiddleware(history) {
	  return function () {
	    return function (next) {
	      return function (action) {
	        if (action.type !== _actions.CALL_HISTORY_METHOD) {
	          return next(action);
	        }

	        var _action$payload = action.payload,
	            method = _action$payload.method,
	            args = _action$payload.args;

	        history[method].apply(history, _toConsumableArray(args));
	      };
	    };
	  };
	}

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = syncHistoryWithStore;

	var _reducer = __webpack_require__(56);

	var defaultSelectLocationState = function defaultSelectLocationState(state) {
	  return state.routing;
	};

	/**
	 * This function synchronizes your history state with the Redux store.
	 * Location changes flow from history to the store. An enhanced history is
	 * returned with a listen method that responds to store updates for location.
	 *
	 * When this history is provided to the router, this means the location data
	 * will flow like this:
	 * history.push -> store.dispatch -> enhancedHistory.listen -> router
	 * This ensures that when the store state changes due to a replay or other
	 * event, the router will be updated appropriately and can transition to the
	 * correct router state.
	 */
	function syncHistoryWithStore(history, store) {
	  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
	      _ref$selectLocationSt = _ref.selectLocationState,
	      selectLocationState = _ref$selectLocationSt === undefined ? defaultSelectLocationState : _ref$selectLocationSt,
	      _ref$adjustUrlOnRepla = _ref.adjustUrlOnReplay,
	      adjustUrlOnReplay = _ref$adjustUrlOnRepla === undefined ? true : _ref$adjustUrlOnRepla;

	  // Ensure that the reducer is mounted on the store and functioning properly.
	  if (typeof selectLocationState(store.getState()) === 'undefined') {
	    throw new Error('Expected the routing state to be available either as `state.routing` ' + 'or as the custom expression you can specify as `selectLocationState` ' + 'in the `syncHistoryWithStore()` options. ' + 'Ensure you have added the `routerReducer` to your store\'s ' + 'reducers via `combineReducers` or whatever method you use to isolate ' + 'your reducers.');
	  }

	  var initialLocation = void 0;
	  var isTimeTraveling = void 0;
	  var unsubscribeFromStore = void 0;
	  var unsubscribeFromHistory = void 0;
	  var currentLocation = void 0;

	  // What does the store say about current location?
	  var getLocationInStore = function getLocationInStore(useInitialIfEmpty) {
	    var locationState = selectLocationState(store.getState());
	    return locationState.locationBeforeTransitions || (useInitialIfEmpty ? initialLocation : undefined);
	  };

	  // Init initialLocation with potential location in store
	  initialLocation = getLocationInStore();

	  // If the store is replayed, update the URL in the browser to match.
	  if (adjustUrlOnReplay) {
	    var handleStoreChange = function handleStoreChange() {
	      var locationInStore = getLocationInStore(true);
	      if (currentLocation === locationInStore || initialLocation === locationInStore) {
	        return;
	      }

	      // Update address bar to reflect store state
	      isTimeTraveling = true;
	      currentLocation = locationInStore;
	      history.transitionTo(_extends({}, locationInStore, {
	        action: 'PUSH'
	      }));
	      isTimeTraveling = false;
	    };

	    unsubscribeFromStore = store.subscribe(handleStoreChange);
	    handleStoreChange();
	  }

	  // Whenever location changes, dispatch an action to get it in the store
	  var handleLocationChange = function handleLocationChange(location) {
	    // ... unless we just caused that location change
	    if (isTimeTraveling) {
	      return;
	    }

	    // Remember where we are
	    currentLocation = location;

	    // Are we being called for the first time?
	    if (!initialLocation) {
	      // Remember as a fallback in case state is reset
	      initialLocation = location;

	      // Respect persisted location, if any
	      if (getLocationInStore()) {
	        return;
	      }
	    }

	    // Tell the store to update by dispatching an action
	    store.dispatch({
	      type: _reducer.LOCATION_CHANGE,
	      payload: location
	    });
	  };
	  unsubscribeFromHistory = history.listen(handleLocationChange);

	  // support history 3.x
	  if (history.getCurrentLocation) {
	    handleLocationChange(history.getCurrentLocation());
	  }

	  // The enhanced history uses store as source of truth
	  return _extends({}, history, {
	    // The listeners are subscribed to the store instead of history
	    listen: function listen(listener) {
	      // Copy of last location.
	      var lastPublishedLocation = getLocationInStore(true);

	      // Keep track of whether we unsubscribed, as Redux store
	      // only applies changes in subscriptions on next dispatch
	      var unsubscribed = false;
	      var unsubscribeFromStore = store.subscribe(function () {
	        var currentLocation = getLocationInStore(true);
	        if (currentLocation === lastPublishedLocation) {
	          return;
	        }
	        lastPublishedLocation = currentLocation;
	        if (!unsubscribed) {
	          listener(lastPublishedLocation);
	        }
	      });

	      // History listeners expect a synchronous call. Make the first call to the
	      // listener after subscribing to the store, in case the listener causes a
	      // location change (e.g. when it redirects)
	      listener(lastPublishedLocation);

	      // Let user unsubscribe later
	      return function () {
	        unsubscribed = true;
	        unsubscribeFromStore();
	      };
	    },


	    // It also provides a way to destroy internal listeners
	    unsubscribe: function unsubscribe() {
	      if (adjustUrlOnReplay) {
	        unsubscribeFromStore();
	      }
	      unsubscribeFromHistory();
	    }
	  });
	}

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Link = __webpack_require__(57);

	var _Link2 = _interopRequireDefault(_Link);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * An <IndexLink> is used to link to an <IndexRoute>.
	 */
	var IndexLink = _react2.default.createClass({
	  displayName: 'IndexLink',
	  render: function render() {
	    return _react2.default.createElement(_Link2.default, _extends({}, this.props, { onlyActiveOnIndex: true }));
	  }
	});

	exports.default = IndexLink;
	module.exports = exports['default'];

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _routerWarning = __webpack_require__(17);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _invariant = __webpack_require__(4);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _Redirect = __webpack_require__(59);

	var _Redirect2 = _interopRequireDefault(_Redirect);

	var _InternalPropTypes = __webpack_require__(25);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _React$PropTypes = _react2.default.PropTypes,
	    string = _React$PropTypes.string,
	    object = _React$PropTypes.object;

	/**
	 * An <IndexRedirect> is used to redirect from an indexRoute.
	 */
	/* eslint-disable react/require-render-return */

	var IndexRedirect = _react2.default.createClass({
	  displayName: 'IndexRedirect',


	  statics: {
	    createRouteFromReactElement: function createRouteFromReactElement(element, parentRoute) {
	      /* istanbul ignore else: sanity check */
	      if (parentRoute) {
	        parentRoute.indexRoute = _Redirect2.default.createRouteFromReactElement(element);
	      } else {
	         true ? (0, _routerWarning2.default)(false, 'An <IndexRedirect> does not make sense at the root of your route config') : void 0;
	      }
	    }
	  },

	  propTypes: {
	    to: string.isRequired,
	    query: object,
	    state: object,
	    onEnter: _InternalPropTypes.falsy,
	    children: _InternalPropTypes.falsy
	  },

	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ?  true ? (0, _invariant2.default)(false, '<IndexRedirect> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});

	exports.default = IndexRedirect;
	module.exports = exports['default'];

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _routerWarning = __webpack_require__(17);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _invariant = __webpack_require__(4);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _RouteUtils = __webpack_require__(11);

	var _InternalPropTypes = __webpack_require__(25);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var func = _react2.default.PropTypes.func;

	/**
	 * An <IndexRoute> is used to specify its parent's <Route indexRoute> in
	 * a JSX route config.
	 */
	/* eslint-disable react/require-render-return */

	var IndexRoute = _react2.default.createClass({
	  displayName: 'IndexRoute',


	  statics: {
	    createRouteFromReactElement: function createRouteFromReactElement(element, parentRoute) {
	      /* istanbul ignore else: sanity check */
	      if (parentRoute) {
	        parentRoute.indexRoute = (0, _RouteUtils.createRouteFromReactElement)(element);
	      } else {
	         true ? (0, _routerWarning2.default)(false, 'An <IndexRoute> does not make sense at the root of your route config') : void 0;
	      }
	    }
	  },

	  propTypes: {
	    path: _InternalPropTypes.falsy,
	    component: _InternalPropTypes.component,
	    components: _InternalPropTypes.components,
	    getComponent: func,
	    getComponents: func
	  },

	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ?  true ? (0, _invariant2.default)(false, '<IndexRoute> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});

	exports.default = IndexRoute;
	module.exports = exports['default'];

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(4);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _RouteUtils = __webpack_require__(11);

	var _InternalPropTypes = __webpack_require__(25);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _React$PropTypes = _react2.default.PropTypes,
	    string = _React$PropTypes.string,
	    func = _React$PropTypes.func;

	/**
	 * A <Route> is used to declare which components are rendered to the
	 * page when the URL matches a given pattern.
	 *
	 * Routes are arranged in a nested tree structure. When a new URL is
	 * requested, the tree is searched depth-first to find a route whose
	 * path matches the URL.  When one is found, all routes in the tree
	 * that lead to it are considered "active" and their components are
	 * rendered into the DOM, nested in the same order as in the tree.
	 */
	/* eslint-disable react/require-render-return */

	var Route = _react2.default.createClass({
	  displayName: 'Route',


	  statics: {
	    createRouteFromReactElement: _RouteUtils.createRouteFromReactElement
	  },

	  propTypes: {
	    path: string,
	    component: _InternalPropTypes.component,
	    components: _InternalPropTypes.components,
	    getComponent: func,
	    getComponents: func
	  },

	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ?  true ? (0, _invariant2.default)(false, '<Route> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});

	exports.default = Route;
	module.exports = exports['default'];

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _invariant = __webpack_require__(4);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _createTransitionManager2 = __webpack_require__(63);

	var _createTransitionManager3 = _interopRequireDefault(_createTransitionManager2);

	var _InternalPropTypes = __webpack_require__(25);

	var _RouterContext = __webpack_require__(43);

	var _RouterContext2 = _interopRequireDefault(_RouterContext);

	var _RouteUtils = __webpack_require__(11);

	var _RouterUtils = __webpack_require__(60);

	var _routerWarning = __webpack_require__(17);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _React$PropTypes = _react2.default.PropTypes,
	    func = _React$PropTypes.func,
	    object = _React$PropTypes.object;

	/**
	 * A <Router> is a high-level API for automatically setting up
	 * a router that renders a <RouterContext> with all the props
	 * it needs each time the URL changes.
	 */

	var Router = _react2.default.createClass({
	  displayName: 'Router',


	  propTypes: {
	    history: object,
	    children: _InternalPropTypes.routes,
	    routes: _InternalPropTypes.routes, // alias for children
	    render: func,
	    createElement: func,
	    onError: func,
	    onUpdate: func,

	    // PRIVATE: For client-side rehydration of server match.
	    matchContext: object
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      render: function render(props) {
	        return _react2.default.createElement(_RouterContext2.default, props);
	      }
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      location: null,
	      routes: null,
	      params: null,
	      components: null
	    };
	  },
	  handleError: function handleError(error) {
	    if (this.props.onError) {
	      this.props.onError.call(this, error);
	    } else {
	      // Throw errors by default so we don't silently swallow them!
	      throw error; // This error probably occurred in getChildRoutes or getComponents.
	    }
	  },
	  createRouterObject: function createRouterObject(state) {
	    var matchContext = this.props.matchContext;

	    if (matchContext) {
	      return matchContext.router;
	    }

	    var history = this.props.history;

	    return (0, _RouterUtils.createRouterObject)(history, this.transitionManager, state);
	  },
	  createTransitionManager: function createTransitionManager() {
	    var matchContext = this.props.matchContext;

	    if (matchContext) {
	      return matchContext.transitionManager;
	    }

	    var history = this.props.history;
	    var _props = this.props,
	        routes = _props.routes,
	        children = _props.children;


	    !history.getCurrentLocation ?  true ? (0, _invariant2.default)(false, 'You have provided a history object created with history v4.x or v2.x ' + 'and earlier. This version of React Router is only compatible with v3 ' + 'history objects. Please change to history v3.x.') : (0, _invariant2.default)(false) : void 0;

	    return (0, _createTransitionManager3.default)(history, (0, _RouteUtils.createRoutes)(routes || children));
	  },
	  componentWillMount: function componentWillMount() {
	    var _this = this;

	    this.transitionManager = this.createTransitionManager();
	    this.router = this.createRouterObject(this.state);

	    this._unlisten = this.transitionManager.listen(function (error, state) {
	      if (error) {
	        _this.handleError(error);
	      } else {
	        // Keep the identity of this.router because of a caveat in ContextUtils:
	        // they only work if the object identity is preserved.
	        (0, _RouterUtils.assignRouterState)(_this.router, state);
	        _this.setState(state, _this.props.onUpdate);
	      }
	    });
	  },


	  /* istanbul ignore next: sanity check */
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	     true ? (0, _routerWarning2.default)(nextProps.history === this.props.history, 'You cannot change <Router history>; it will be ignored') : void 0;

	     true ? (0, _routerWarning2.default)((nextProps.routes || nextProps.children) === (this.props.routes || this.props.children), 'You cannot change <Router routes>; it will be ignored') : void 0;
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    if (this._unlisten) this._unlisten();
	  },
	  render: function render() {
	    var _state = this.state,
	        location = _state.location,
	        routes = _state.routes,
	        params = _state.params,
	        components = _state.components;

	    var _props2 = this.props,
	        createElement = _props2.createElement,
	        render = _props2.render,
	        props = _objectWithoutProperties(_props2, ['createElement', 'render']);

	    if (location == null) return null; // Async match

	    // Only forward non-Router-specific props to routing context, as those are
	    // the only ones that might be custom routing context props.
	    Object.keys(Router.propTypes).forEach(function (propType) {
	      return delete props[propType];
	    });

	    return render(_extends({}, props, {
	      router: this.router,
	      location: location,
	      routes: routes,
	      params: params,
	      components: components,
	      createElement: createElement
	    }));
	  }
	});

	exports.default = Router;
	module.exports = exports['default'];

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.runEnterHooks = runEnterHooks;
	exports.runChangeHooks = runChangeHooks;
	exports.runLeaveHooks = runLeaveHooks;

	var _AsyncUtils = __webpack_require__(40);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var PendingHooks = function PendingHooks() {
	  var _this = this;

	  _classCallCheck(this, PendingHooks);

	  this.hooks = [];

	  this.add = function (hook) {
	    return _this.hooks.push(hook);
	  };

	  this.remove = function (hook) {
	    return _this.hooks = _this.hooks.filter(function (h) {
	      return h !== hook;
	    });
	  };

	  this.has = function (hook) {
	    return _this.hooks.indexOf(hook) !== -1;
	  };

	  this.clear = function () {
	    return _this.hooks = [];
	  };
	};

	var enterHooks = new PendingHooks();
	var changeHooks = new PendingHooks();

	function createTransitionHook(hook, route, asyncArity, pendingHooks) {
	  var isSync = hook.length < asyncArity;

	  var transitionHook = function transitionHook() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    hook.apply(route, args);

	    if (isSync) {
	      var callback = args[args.length - 1];
	      // Assume hook executes synchronously and
	      // automatically call the callback.
	      callback();
	    }
	  };

	  pendingHooks.add(transitionHook);

	  return transitionHook;
	}

	function getEnterHooks(routes) {
	  return routes.reduce(function (hooks, route) {
	    if (route.onEnter) hooks.push(createTransitionHook(route.onEnter, route, 3, enterHooks));
	    return hooks;
	  }, []);
	}

	function getChangeHooks(routes) {
	  return routes.reduce(function (hooks, route) {
	    if (route.onChange) hooks.push(createTransitionHook(route.onChange, route, 4, changeHooks));
	    return hooks;
	  }, []);
	}

	function runTransitionHooks(length, iter, callback) {
	  if (!length) {
	    callback();
	    return;
	  }

	  var redirectInfo = void 0;
	  function replace(location) {
	    redirectInfo = location;
	  }

	  (0, _AsyncUtils.loopAsync)(length, function (index, next, done) {
	    iter(index, replace, function (error) {
	      if (error || redirectInfo) {
	        done(error, redirectInfo); // No need to continue.
	      } else {
	        next();
	      }
	    });
	  }, callback);
	}

	/**
	 * Runs all onEnter hooks in the given array of routes in order
	 * with onEnter(nextState, replace, callback) and calls
	 * callback(error, redirectInfo) when finished. The first hook
	 * to use replace short-circuits the loop.
	 *
	 * If a hook needs to run asynchronously, it may use the callback
	 * function. However, doing so will cause the transition to pause,
	 * which could lead to a non-responsive UI if the hook is slow.
	 */
	function runEnterHooks(routes, nextState, callback) {
	  enterHooks.clear();
	  var hooks = getEnterHooks(routes);
	  return runTransitionHooks(hooks.length, function (index, replace, next) {
	    var wrappedNext = function wrappedNext() {
	      if (enterHooks.has(hooks[index])) {
	        next.apply(undefined, arguments);
	        enterHooks.remove(hooks[index]);
	      }
	    };
	    hooks[index](nextState, replace, wrappedNext);
	  }, callback);
	}

	/**
	 * Runs all onChange hooks in the given array of routes in order
	 * with onChange(prevState, nextState, replace, callback) and calls
	 * callback(error, redirectInfo) when finished. The first hook
	 * to use replace short-circuits the loop.
	 *
	 * If a hook needs to run asynchronously, it may use the callback
	 * function. However, doing so will cause the transition to pause,
	 * which could lead to a non-responsive UI if the hook is slow.
	 */
	function runChangeHooks(routes, state, nextState, callback) {
	  changeHooks.clear();
	  var hooks = getChangeHooks(routes);
	  return runTransitionHooks(hooks.length, function (index, replace, next) {
	    var wrappedNext = function wrappedNext() {
	      if (changeHooks.has(hooks[index])) {
	        next.apply(undefined, arguments);
	        changeHooks.remove(hooks[index]);
	      }
	    };
	    hooks[index](state, nextState, replace, wrappedNext);
	  }, callback);
	}

	/**
	 * Runs all onLeave hooks in the given array of routes in order.
	 */
	function runLeaveHooks(routes, prevState) {
	  for (var i = 0, len = routes.length; i < len; ++i) {
	    if (routes[i].onLeave) routes[i].onLeave.call(routes[i], prevState);
	  }
	}

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _RouterContext = __webpack_require__(43);

	var _RouterContext2 = _interopRequireDefault(_RouterContext);

	var _routerWarning = __webpack_require__(17);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }

	  if (true) {
	    middlewares.forEach(function (middleware, index) {
	       true ? (0, _routerWarning2.default)(middleware.renderRouterContext || middleware.renderRouteComponent, 'The middleware specified at index ' + index + ' does not appear to be ' + 'a valid React Router middleware.') : void 0;
	    });
	  }

	  var withContext = middlewares.map(function (middleware) {
	    return middleware.renderRouterContext;
	  }).filter(Boolean);
	  var withComponent = middlewares.map(function (middleware) {
	    return middleware.renderRouteComponent;
	  }).filter(Boolean);

	  var makeCreateElement = function makeCreateElement() {
	    var baseCreateElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _react.createElement;
	    return function (Component, props) {
	      return withComponent.reduceRight(function (previous, renderRouteComponent) {
	        return renderRouteComponent(previous, props);
	      }, baseCreateElement(Component, props));
	    };
	  };

	  return function (renderProps) {
	    return withContext.reduceRight(function (previous, renderRouterContext) {
	      return renderRouterContext(previous, renderProps);
	    }, _react2.default.createElement(_RouterContext2.default, _extends({}, renderProps, {
	      createElement: makeCreateElement(renderProps.createElement)
	    })));
	  };
	};

	module.exports = exports['default'];

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createBrowserHistory = __webpack_require__(121);

	var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

	var _createRouterHistory = __webpack_require__(62);

	var _createRouterHistory2 = _interopRequireDefault(_createRouterHistory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _createRouterHistory2.default)(_createBrowserHistory2.default);
	module.exports = exports['default'];

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _PatternUtils = __webpack_require__(16);

	function routeParamsChanged(route, prevState, nextState) {
	  if (!route.path) return false;

	  var paramNames = (0, _PatternUtils.getParamNames)(route.path);

	  return paramNames.some(function (paramName) {
	    return prevState.params[paramName] !== nextState.params[paramName];
	  });
	}

	/**
	 * Returns an object of { leaveRoutes, changeRoutes, enterRoutes } determined by
	 * the change from prevState to nextState. We leave routes if either
	 * 1) they are not in the next state or 2) they are in the next state
	 * but their params have changed (i.e. /users/123 => /users/456).
	 *
	 * leaveRoutes are ordered starting at the leaf route of the tree
	 * we're leaving up to the common parent route. enterRoutes are ordered
	 * from the top of the tree we're entering down to the leaf route.
	 *
	 * changeRoutes are any routes that didn't leave or enter during
	 * the transition.
	 */
	function computeChangedRoutes(prevState, nextState) {
	  var prevRoutes = prevState && prevState.routes;
	  var nextRoutes = nextState.routes;

	  var leaveRoutes = void 0,
	      changeRoutes = void 0,
	      enterRoutes = void 0;
	  if (prevRoutes) {
	    (function () {
	      var parentIsLeaving = false;
	      leaveRoutes = prevRoutes.filter(function (route) {
	        if (parentIsLeaving) {
	          return true;
	        } else {
	          var isLeaving = nextRoutes.indexOf(route) === -1 || routeParamsChanged(route, prevState, nextState);
	          if (isLeaving) parentIsLeaving = true;
	          return isLeaving;
	        }
	      });

	      // onLeave hooks start at the leaf route.
	      leaveRoutes.reverse();

	      enterRoutes = [];
	      changeRoutes = [];

	      nextRoutes.forEach(function (route) {
	        var isNew = prevRoutes.indexOf(route) === -1;
	        var paramsChanged = leaveRoutes.indexOf(route) !== -1;

	        if (isNew || paramsChanged) enterRoutes.push(route);else changeRoutes.push(route);
	      });
	    })();
	  } else {
	    leaveRoutes = [];
	    changeRoutes = [];
	    enterRoutes = nextRoutes;
	  }

	  return {
	    leaveRoutes: leaveRoutes,
	    changeRoutes: changeRoutes,
	    enterRoutes: enterRoutes
	  };
	}

	exports.default = computeChangedRoutes;
	module.exports = exports['default'];

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _AsyncUtils = __webpack_require__(40);

	var _PromiseUtils = __webpack_require__(58);

	function getComponentsForRoute(nextState, route, callback) {
	  if (route.component || route.components) {
	    callback(null, route.component || route.components);
	    return;
	  }

	  var getComponent = route.getComponent || route.getComponents;
	  if (getComponent) {
	    var componentReturn = getComponent.call(route, nextState, callback);
	    if ((0, _PromiseUtils.isPromise)(componentReturn)) componentReturn.then(function (component) {
	      return callback(null, component);
	    }, callback);
	  } else {
	    callback();
	  }
	}

	/**
	 * Asynchronously fetches all components needed for the given router
	 * state and calls callback(error, components) when finished.
	 *
	 * Note: This operation may finish synchronously if no routes have an
	 * asynchronous getComponents method.
	 */
	function getComponents(nextState, callback) {
	  (0, _AsyncUtils.mapAsync)(nextState.routes, function (route, index, callback) {
	    getComponentsForRoute(nextState, route, callback);
	  }, callback);
	}

	exports.default = getComponents;
	module.exports = exports['default'];

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _PatternUtils = __webpack_require__(16);

	/**
	 * Extracts an object of params the given route cares about from
	 * the given params object.
	 */
	function getRouteParams(route, params) {
	  var routeParams = {};

	  if (!route.path) return routeParams;

	  (0, _PatternUtils.getParamNames)(route.path).forEach(function (p) {
	    if (Object.prototype.hasOwnProperty.call(params, p)) {
	      routeParams[p] = params[p];
	    }
	  });

	  return routeParams;
	}

	exports.default = getRouteParams;
	module.exports = exports['default'];

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createHashHistory = __webpack_require__(122);

	var _createHashHistory2 = _interopRequireDefault(_createHashHistory);

	var _createRouterHistory = __webpack_require__(62);

	var _createRouterHistory2 = _interopRequireDefault(_createRouterHistory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _createRouterHistory2.default)(_createHashHistory2.default);
	module.exports = exports['default'];

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.createMemoryHistory = exports.hashHistory = exports.browserHistory = exports.applyRouterMiddleware = exports.formatPattern = exports.useRouterHistory = exports.match = exports.routerShape = exports.locationShape = exports.RouterContext = exports.createRoutes = exports.Route = exports.Redirect = exports.IndexRoute = exports.IndexRedirect = exports.withRouter = exports.IndexLink = exports.Link = exports.Router = undefined;

	var _RouteUtils = __webpack_require__(11);

	Object.defineProperty(exports, 'createRoutes', {
	  enumerable: true,
	  get: function get() {
	    return _RouteUtils.createRoutes;
	  }
	});

	var _PropTypes = __webpack_require__(42);

	Object.defineProperty(exports, 'locationShape', {
	  enumerable: true,
	  get: function get() {
	    return _PropTypes.locationShape;
	  }
	});
	Object.defineProperty(exports, 'routerShape', {
	  enumerable: true,
	  get: function get() {
	    return _PropTypes.routerShape;
	  }
	});

	var _PatternUtils = __webpack_require__(16);

	Object.defineProperty(exports, 'formatPattern', {
	  enumerable: true,
	  get: function get() {
	    return _PatternUtils.formatPattern;
	  }
	});

	var _Router2 = __webpack_require__(133);

	var _Router3 = _interopRequireDefault(_Router2);

	var _Link2 = __webpack_require__(57);

	var _Link3 = _interopRequireDefault(_Link2);

	var _IndexLink2 = __webpack_require__(129);

	var _IndexLink3 = _interopRequireDefault(_IndexLink2);

	var _withRouter2 = __webpack_require__(145);

	var _withRouter3 = _interopRequireDefault(_withRouter2);

	var _IndexRedirect2 = __webpack_require__(130);

	var _IndexRedirect3 = _interopRequireDefault(_IndexRedirect2);

	var _IndexRoute2 = __webpack_require__(131);

	var _IndexRoute3 = _interopRequireDefault(_IndexRoute2);

	var _Redirect2 = __webpack_require__(59);

	var _Redirect3 = _interopRequireDefault(_Redirect2);

	var _Route2 = __webpack_require__(132);

	var _Route3 = _interopRequireDefault(_Route2);

	var _RouterContext2 = __webpack_require__(43);

	var _RouterContext3 = _interopRequireDefault(_RouterContext2);

	var _match2 = __webpack_require__(143);

	var _match3 = _interopRequireDefault(_match2);

	var _useRouterHistory2 = __webpack_require__(64);

	var _useRouterHistory3 = _interopRequireDefault(_useRouterHistory2);

	var _applyRouterMiddleware2 = __webpack_require__(135);

	var _applyRouterMiddleware3 = _interopRequireDefault(_applyRouterMiddleware2);

	var _browserHistory2 = __webpack_require__(136);

	var _browserHistory3 = _interopRequireDefault(_browserHistory2);

	var _hashHistory2 = __webpack_require__(140);

	var _hashHistory3 = _interopRequireDefault(_hashHistory2);

	var _createMemoryHistory2 = __webpack_require__(61);

	var _createMemoryHistory3 = _interopRequireDefault(_createMemoryHistory2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Router = _Router3.default; /* components */

	exports.Link = _Link3.default;
	exports.IndexLink = _IndexLink3.default;
	exports.withRouter = _withRouter3.default;

	/* components (configuration) */

	exports.IndexRedirect = _IndexRedirect3.default;
	exports.IndexRoute = _IndexRoute3.default;
	exports.Redirect = _Redirect3.default;
	exports.Route = _Route3.default;

	/* utils */

	exports.RouterContext = _RouterContext3.default;
	exports.match = _match3.default;
	exports.useRouterHistory = _useRouterHistory3.default;
	exports.applyRouterMiddleware = _applyRouterMiddleware3.default;

	/* histories */

	exports.browserHistory = _browserHistory3.default;
	exports.hashHistory = _hashHistory3.default;
	exports.createMemoryHistory = _createMemoryHistory3.default;

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.default = isActive;

	var _PatternUtils = __webpack_require__(16);

	function deepEqual(a, b) {
	  if (a == b) return true;

	  if (a == null || b == null) return false;

	  if (Array.isArray(a)) {
	    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
	      return deepEqual(item, b[index]);
	    });
	  }

	  if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object') {
	    for (var p in a) {
	      if (!Object.prototype.hasOwnProperty.call(a, p)) {
	        continue;
	      }

	      if (a[p] === undefined) {
	        if (b[p] !== undefined) {
	          return false;
	        }
	      } else if (!Object.prototype.hasOwnProperty.call(b, p)) {
	        return false;
	      } else if (!deepEqual(a[p], b[p])) {
	        return false;
	      }
	    }

	    return true;
	  }

	  return String(a) === String(b);
	}

	/**
	 * Returns true if the current pathname matches the supplied one, net of
	 * leading and trailing slash normalization. This is sufficient for an
	 * indexOnly route match.
	 */
	function pathIsActive(pathname, currentPathname) {
	  // Normalize leading slash for consistency. Leading slash on pathname has
	  // already been normalized in isActive. See caveat there.
	  if (currentPathname.charAt(0) !== '/') {
	    currentPathname = '/' + currentPathname;
	  }

	  // Normalize the end of both path names too. Maybe `/foo/` shouldn't show
	  // `/foo` as active, but in this case, we would already have failed the
	  // match.
	  if (pathname.charAt(pathname.length - 1) !== '/') {
	    pathname += '/';
	  }
	  if (currentPathname.charAt(currentPathname.length - 1) !== '/') {
	    currentPathname += '/';
	  }

	  return currentPathname === pathname;
	}

	/**
	 * Returns true if the given pathname matches the active routes and params.
	 */
	function routeIsActive(pathname, routes, params) {
	  var remainingPathname = pathname,
	      paramNames = [],
	      paramValues = [];

	  // for...of would work here but it's probably slower post-transpilation.
	  for (var i = 0, len = routes.length; i < len; ++i) {
	    var route = routes[i];
	    var pattern = route.path || '';

	    if (pattern.charAt(0) === '/') {
	      remainingPathname = pathname;
	      paramNames = [];
	      paramValues = [];
	    }

	    if (remainingPathname !== null && pattern) {
	      var matched = (0, _PatternUtils.matchPattern)(pattern, remainingPathname);
	      if (matched) {
	        remainingPathname = matched.remainingPathname;
	        paramNames = [].concat(paramNames, matched.paramNames);
	        paramValues = [].concat(paramValues, matched.paramValues);
	      } else {
	        remainingPathname = null;
	      }

	      if (remainingPathname === '') {
	        // We have an exact match on the route. Just check that all the params
	        // match.
	        // FIXME: This doesn't work on repeated params.
	        return paramNames.every(function (paramName, index) {
	          return String(paramValues[index]) === String(params[paramName]);
	        });
	      }
	    }
	  }

	  return false;
	}

	/**
	 * Returns true if all key/value pairs in the given query are
	 * currently active.
	 */
	function queryIsActive(query, activeQuery) {
	  if (activeQuery == null) return query == null;

	  if (query == null) return true;

	  return deepEqual(query, activeQuery);
	}

	/**
	 * Returns true if a <Link> to the given pathname/query combination is
	 * currently active.
	 */
	function isActive(_ref, indexOnly, currentLocation, routes, params) {
	  var pathname = _ref.pathname,
	      query = _ref.query;

	  if (currentLocation == null) return false;

	  // TODO: This is a bit ugly. It keeps around support for treating pathnames
	  // without preceding slashes as absolute paths, but possibly also works
	  // around the same quirks with basenames as in matchRoutes.
	  if (pathname.charAt(0) !== '/') {
	    pathname = '/' + pathname;
	  }

	  if (!pathIsActive(pathname, currentLocation.pathname)) {
	    // The path check is necessary and sufficient for indexOnly, but otherwise
	    // we still need to check the routes.
	    if (indexOnly || !routeIsActive(pathname, routes, params)) {
	      return false;
	    }
	  }

	  return queryIsActive(query, currentLocation.query);
	}
	module.exports = exports['default'];

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _Actions = __webpack_require__(31);

	var _invariant = __webpack_require__(4);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _createMemoryHistory = __webpack_require__(61);

	var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

	var _createTransitionManager = __webpack_require__(63);

	var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

	var _RouteUtils = __webpack_require__(11);

	var _RouterUtils = __webpack_require__(60);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	/**
	 * A high-level API to be used for server-side rendering.
	 *
	 * This function matches a location to a set of routes and calls
	 * callback(error, redirectLocation, renderProps) when finished.
	 *
	 * Note: You probably don't want to use this in a browser unless you're using
	 * server-side rendering with async routes.
	 */
	function match(_ref, callback) {
	  var history = _ref.history,
	      routes = _ref.routes,
	      location = _ref.location,
	      options = _objectWithoutProperties(_ref, ['history', 'routes', 'location']);

	  !(history || location) ?  true ? (0, _invariant2.default)(false, 'match needs a history or a location') : (0, _invariant2.default)(false) : void 0;

	  history = history ? history : (0, _createMemoryHistory2.default)(options);
	  var transitionManager = (0, _createTransitionManager2.default)(history, (0, _RouteUtils.createRoutes)(routes));

	  if (location) {
	    // Allow match({ location: '/the/path', ... })
	    location = history.createLocation(location);
	  } else {
	    location = history.getCurrentLocation();
	  }

	  transitionManager.match(location, function (error, redirectLocation, nextState) {
	    var renderProps = void 0;

	    if (nextState) {
	      var router = (0, _RouterUtils.createRouterObject)(history, transitionManager, nextState);
	      renderProps = _extends({}, nextState, {
	        router: router,
	        matchContext: { transitionManager: transitionManager, router: router }
	      });
	    }

	    callback(error, redirectLocation && history.createLocation(redirectLocation, _Actions.REPLACE), renderProps);
	  });
	}

	exports.default = match;
	module.exports = exports['default'];

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.default = matchRoutes;

	var _AsyncUtils = __webpack_require__(40);

	var _PromiseUtils = __webpack_require__(58);

	var _PatternUtils = __webpack_require__(16);

	var _routerWarning = __webpack_require__(17);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _RouteUtils = __webpack_require__(11);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getChildRoutes(route, location, paramNames, paramValues, callback) {
	  if (route.childRoutes) {
	    return [null, route.childRoutes];
	  }
	  if (!route.getChildRoutes) {
	    return [];
	  }

	  var sync = true,
	      result = void 0;

	  var partialNextState = {
	    location: location,
	    params: createParams(paramNames, paramValues)
	  };

	  var childRoutesReturn = route.getChildRoutes(partialNextState, function (error, childRoutes) {
	    childRoutes = !error && (0, _RouteUtils.createRoutes)(childRoutes);
	    if (sync) {
	      result = [error, childRoutes];
	      return;
	    }

	    callback(error, childRoutes);
	  });

	  if ((0, _PromiseUtils.isPromise)(childRoutesReturn)) childRoutesReturn.then(function (childRoutes) {
	    return callback(null, (0, _RouteUtils.createRoutes)(childRoutes));
	  }, callback);

	  sync = false;
	  return result; // Might be undefined.
	}

	function getIndexRoute(route, location, paramNames, paramValues, callback) {
	  if (route.indexRoute) {
	    callback(null, route.indexRoute);
	  } else if (route.getIndexRoute) {
	    var partialNextState = {
	      location: location,
	      params: createParams(paramNames, paramValues)
	    };

	    var indexRoutesReturn = route.getIndexRoute(partialNextState, function (error, indexRoute) {
	      callback(error, !error && (0, _RouteUtils.createRoutes)(indexRoute)[0]);
	    });

	    if ((0, _PromiseUtils.isPromise)(indexRoutesReturn)) indexRoutesReturn.then(function (indexRoute) {
	      return callback(null, (0, _RouteUtils.createRoutes)(indexRoute)[0]);
	    }, callback);
	  } else if (route.childRoutes || route.getChildRoutes) {
	    var onChildRoutes = function onChildRoutes(error, childRoutes) {
	      if (error) {
	        callback(error);
	        return;
	      }

	      var pathless = childRoutes.filter(function (childRoute) {
	        return !childRoute.path;
	      });

	      (0, _AsyncUtils.loopAsync)(pathless.length, function (index, next, done) {
	        getIndexRoute(pathless[index], location, paramNames, paramValues, function (error, indexRoute) {
	          if (error || indexRoute) {
	            var routes = [pathless[index]].concat(Array.isArray(indexRoute) ? indexRoute : [indexRoute]);
	            done(error, routes);
	          } else {
	            next();
	          }
	        });
	      }, function (err, routes) {
	        callback(null, routes);
	      });
	    };

	    var result = getChildRoutes(route, location, paramNames, paramValues, onChildRoutes);
	    if (result) {
	      onChildRoutes.apply(undefined, result);
	    }
	  } else {
	    callback();
	  }
	}

	function assignParams(params, paramNames, paramValues) {
	  return paramNames.reduce(function (params, paramName, index) {
	    var paramValue = paramValues && paramValues[index];

	    if (Array.isArray(params[paramName])) {
	      params[paramName].push(paramValue);
	    } else if (paramName in params) {
	      params[paramName] = [params[paramName], paramValue];
	    } else {
	      params[paramName] = paramValue;
	    }

	    return params;
	  }, params);
	}

	function createParams(paramNames, paramValues) {
	  return assignParams({}, paramNames, paramValues);
	}

	function matchRouteDeep(route, location, remainingPathname, paramNames, paramValues, callback) {
	  var pattern = route.path || '';

	  if (pattern.charAt(0) === '/') {
	    remainingPathname = location.pathname;
	    paramNames = [];
	    paramValues = [];
	  }

	  // Only try to match the path if the route actually has a pattern, and if
	  // we're not just searching for potential nested absolute paths.
	  if (remainingPathname !== null && pattern) {
	    try {
	      var matched = (0, _PatternUtils.matchPattern)(pattern, remainingPathname);
	      if (matched) {
	        remainingPathname = matched.remainingPathname;
	        paramNames = [].concat(paramNames, matched.paramNames);
	        paramValues = [].concat(paramValues, matched.paramValues);
	      } else {
	        remainingPathname = null;
	      }
	    } catch (error) {
	      callback(error);
	    }

	    // By assumption, pattern is non-empty here, which is the prerequisite for
	    // actually terminating a match.
	    if (remainingPathname === '') {
	      var _ret = function () {
	        var match = {
	          routes: [route],
	          params: createParams(paramNames, paramValues)
	        };

	        getIndexRoute(route, location, paramNames, paramValues, function (error, indexRoute) {
	          if (error) {
	            callback(error);
	          } else {
	            if (Array.isArray(indexRoute)) {
	              var _match$routes;

	               true ? (0, _routerWarning2.default)(indexRoute.every(function (route) {
	                return !route.path;
	              }), 'Index routes should not have paths') : void 0;
	              (_match$routes = match.routes).push.apply(_match$routes, indexRoute);
	            } else if (indexRoute) {
	               true ? (0, _routerWarning2.default)(!indexRoute.path, 'Index routes should not have paths') : void 0;
	              match.routes.push(indexRoute);
	            }

	            callback(null, match);
	          }
	        });

	        return {
	          v: void 0
	        };
	      }();

	      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	    }
	  }

	  if (remainingPathname != null || route.childRoutes) {
	    // Either a) this route matched at least some of the path or b)
	    // we don't have to load this route's children asynchronously. In
	    // either case continue checking for matches in the subtree.
	    var onChildRoutes = function onChildRoutes(error, childRoutes) {
	      if (error) {
	        callback(error);
	      } else if (childRoutes) {
	        // Check the child routes to see if any of them match.
	        matchRoutes(childRoutes, location, function (error, match) {
	          if (error) {
	            callback(error);
	          } else if (match) {
	            // A child route matched! Augment the match and pass it up the stack.
	            match.routes.unshift(route);
	            callback(null, match);
	          } else {
	            callback();
	          }
	        }, remainingPathname, paramNames, paramValues);
	      } else {
	        callback();
	      }
	    };

	    var result = getChildRoutes(route, location, paramNames, paramValues, onChildRoutes);
	    if (result) {
	      onChildRoutes.apply(undefined, result);
	    }
	  } else {
	    callback();
	  }
	}

	/**
	 * Asynchronously matches the given location to a set of routes and calls
	 * callback(error, state) when finished. The state object will have the
	 * following properties:
	 *
	 * - routes       An array of routes that matched, in hierarchical order
	 * - params       An object of URL parameters
	 *
	 * Note: This operation may finish synchronously if no routes have an
	 * asynchronous getChildRoutes method.
	 */
	function matchRoutes(routes, location, callback, remainingPathname) {
	  var paramNames = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
	  var paramValues = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];

	  if (remainingPathname === undefined) {
	    // TODO: This is a little bit ugly, but it works around a quirk in history
	    // that strips the leading slash from pathnames when using basenames with
	    // trailing slashes.
	    if (location.pathname.charAt(0) !== '/') {
	      location = _extends({}, location, {
	        pathname: '/' + location.pathname
	      });
	    }
	    remainingPathname = location.pathname;
	  }

	  (0, _AsyncUtils.loopAsync)(routes.length, function (index, next, done) {
	    matchRouteDeep(routes[index], location, remainingPathname, paramNames, paramValues, function (error, match) {
	      if (error || match) {
	        done(error, match);
	      } else {
	        next();
	      }
	    });
	  }, callback);
	}
	module.exports = exports['default'];

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = withRouter;

	var _invariant = __webpack_require__(4);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _hoistNonReactStatics = __webpack_require__(124);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _ContextUtils = __webpack_require__(41);

	var _PropTypes = __webpack_require__(42);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getDisplayName(WrappedComponent) {
	  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	}

	function withRouter(WrappedComponent, options) {
	  var withRef = options && options.withRef;

	  var WithRouter = _react2.default.createClass({
	    displayName: 'WithRouter',

	    mixins: [(0, _ContextUtils.ContextSubscriber)('router')],

	    contextTypes: { router: _PropTypes.routerShape },
	    propTypes: { router: _PropTypes.routerShape },

	    getWrappedInstance: function getWrappedInstance() {
	      !withRef ?  true ? (0, _invariant2.default)(false, 'To access the wrapped instance, you need to specify ' + '`{ withRef: true }` as the second argument of the withRouter() call.') : (0, _invariant2.default)(false) : void 0;

	      return this.wrappedInstance;
	    },
	    render: function render() {
	      var _this = this;

	      var router = this.props.router || this.context.router;
	      if (!router) {
	        return _react2.default.createElement(WrappedComponent, this.props);
	      }

	      var params = router.params,
	          location = router.location,
	          routes = router.routes;

	      var props = _extends({}, this.props, { router: router, params: params, location: location, routes: routes });

	      if (withRef) {
	        props.ref = function (c) {
	          _this.wrappedInstance = c;
	        };
	      }

	      return _react2.default.createElement(WrappedComponent, props);
	    }
	  });

	  WithRouter.displayName = 'withRouter(' + getDisplayName(WrappedComponent) + ')';
	  WithRouter.WrappedComponent = WrappedComponent;

	  return (0, _hoistNonReactStatics2.default)(WithRouter, WrappedComponent);
	}
	module.exports = exports['default'];

/***/ },
/* 146 */
/***/ function(module, exports) {

	'use strict';
	module.exports = function (str) {
		return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
			return '%' + c.charCodeAt(0).toString(16).toUpperCase();
		});
	};


/***/ }
/******/ ]);
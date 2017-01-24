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
/******/ 	__webpack_require__.p = "//localhost:8000/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(99);


/***/ },
/* 1 */,
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
/* 4 */,
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
/* 8 */
/***/ function(module, exports) {

	module.exports = preact;

/***/ },
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
/* 10 */,
/* 11 */,
/* 12 */,
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
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
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
/* 21 */,
/* 22 */,
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
/* 24 */,
/* 25 */,
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
/* 29 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	var LATEST_NEWS = exports.LATEST_NEWS = 10;
	var LIKE_NEWS = exports.LIKE_NEWS = 11;

	var DEBUG = exports.DEBUG = true;

/***/ },
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _class; /** @jsx h */


	var _preact = __webpack_require__(8);

	var _preact2 = _interopRequireDefault(_preact);

	var _lodash = __webpack_require__(2);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _pureRenderDecorator = __webpack_require__(5);

	var _pureRenderDecorator2 = _interopRequireDefault(_pureRenderDecorator);

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

	var Touch = (0, _pureRenderDecorator2.default)(_class = function (_Component) {
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
			// console.log('render Touch');
			return (0, _preact.h)(
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
	}(_preact.Component)) || _class;

	// Touch.propTypes = {
	// 	onTap: PropTypes.func,
	// 	onSingleTap: PropTypes.func,
	// 	onDoubleTap: PropTypes.func,
	// 	onLongTap: PropTypes.func,
	//     onSwipe: PropTypes.func,
	//     onSwipeUp: PropTypes.func,
	//     onSwipeRight: PropTypes.func,
	//     onSwipeDown: PropTypes.func,
	//     onSwipeLeft: PropTypes.func
	// };


	exports.default = Touch;
	Touch.defaultProps = {
		flickThreshold: 0.6
	};

/***/ },
/* 46 */,
/* 47 */,
/* 48 */
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
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	(function (global, factory) {
		 true ? module.exports = factory(__webpack_require__(8), __webpack_require__(6)) :
		typeof define === 'function' && define.amd ? define(['preact', 'redux'], factory) :
		(global.preactRedux = factory(global.preact,global.redux));
	}(this, (function (preact,redux) {

	var Children = {
		only: function (children) {
			return children && children[0] || null;
		}
	};

	function proptype() {}
	proptype.isRequired = proptype;

	var PropTypes = {
		element: proptype,
		func: proptype,
		shape: function () {
			return proptype;
		}
	};

	var storeShape = PropTypes.shape({
	  subscribe: PropTypes.func.isRequired,
	  dispatch: PropTypes.func.isRequired,
	  getState: PropTypes.func.isRequired
	});

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
	    // This error was thrown as a convenience so that you can use this stack
	    // to find the callsite that caused this warning to fire.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

	var classCallCheck = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

	var inherits = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }

	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};

	var possibleConstructorReturn = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && (typeof call === "object" || typeof call === "function") ? call : self;
	};

	var didWarnAboutReceivingStore = false;
	function warnAboutReceivingStore() {
	  if (didWarnAboutReceivingStore) {
	    return;
	  }
	  didWarnAboutReceivingStore = true;

	  warning('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
	}

	var Provider = function (_Component) {
	  inherits(Provider, _Component);

	  Provider.prototype.getChildContext = function getChildContext() {
	    return { store: this.store };
	  };

	  function Provider(props, context) {
	    classCallCheck(this, Provider);

	    var _this = possibleConstructorReturn(this, _Component.call(this, props, context));

	    _this.store = props.store;
	    return _this;
	  }

	  Provider.prototype.render = function render() {
	    var children = this.props.children;

	    return Children.only(children);
	  };

	  return Provider;
	}(preact.Component);

	if (true) {
	  Provider.prototype.componentWillReceiveProps = function (nextProps) {
	    var store = this.store;
	    var nextStore = nextProps.store;


	    if (store !== nextStore) {
	      warnAboutReceivingStore();
	    }
	  };
	}

	Provider.childContextTypes = {
	  store: storeShape.isRequired
	};

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

	function wrapActionCreators(actionCreators) {
	  return function (dispatch) {
	    return redux.bindActionCreators(actionCreators, dispatch);
	  };
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
	  return function (arg) {
	    return func(transform(arg));
	  };
	}

	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);

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

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var funcProto = Function.prototype;
	var objectProto = Object.prototype;
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
	    if (!isObjectLike(value) || objectToString.call(value) != objectTag || isHostObject(value)) {
	        return false;
	    }
	    var proto = getPrototype(value);
	    if (proto === null) {
	        return true;
	    }
	    var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	    return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
	}

	function interopDefault(ex) {
		return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var index = createCommonjsModule(function (module) {
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
	        if (typeof sourceComponent !== 'string') {
	            // don't hoist over string (html) components
	            var keys = Object.getOwnPropertyNames(sourceComponent);

	            /* istanbul ignore else */
	            if (isGetOwnPropertySymbolsAvailable) {
	                keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
	            }

	            for (var i = 0; i < keys.length; ++i) {
	                if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
	                    try {
	                        targetComponent[keys[i]] = sourceComponent[keys[i]];
	                    } catch (error) {}
	                }
	            }
	        }

	        return targetComponent;
	    };
	});

	var hoistStatics = interopDefault(index);

	function invariant () {}

	var defaultMapStateToProps = function (state) {
	  return {};
	}; // eslint-disable-line no-unused-vars
	var defaultMapDispatchToProps = function (dispatch) {
	  return { dispatch: dispatch };
	};
	var defaultMergeProps = function (stateProps, dispatchProps, parentProps) {
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
	  var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

	  var shouldSubscribe = Boolean(mapStateToProps);
	  var mapState = mapStateToProps || defaultMapStateToProps;

	  var mapDispatch = void 0;
	  if (typeof mapDispatchToProps === 'function') {
	    mapDispatch = mapDispatchToProps;
	  } else if (!mapDispatchToProps) {
	    mapDispatch = defaultMapDispatchToProps;
	  } else {
	    mapDispatch = wrapActionCreators(mapDispatchToProps);
	  }

	  var finalMergeProps = mergeProps || defaultMergeProps;
	  var _options$pure = options.pure;
	  var pure = _options$pure === undefined ? true : _options$pure;
	  var _options$withRef = options.withRef;
	  var withRef = _options$withRef === undefined ? false : _options$withRef;

	  var checkMergedEquals = pure && finalMergeProps !== defaultMergeProps;

	  // Helps track hot reloading.
	  var version = nextVersion++;

	  return function wrapWithConnect(WrappedComponent) {
	    var connectDisplayName = 'Connect(' + getDisplayName(WrappedComponent) + ')';

	    function checkStateShape(props, methodName) {
	      if (!isPlainObject(props)) {
	        warning(methodName + '() in ' + connectDisplayName + ' must return a plain object. ' + ('Instead received ' + props + '.'));
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
	      inherits(Connect, _Component);

	      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
	        return !pure || this.haveOwnPropsChanged || this.hasStoreStateChanged;
	      };

	      function Connect(props, context) {
	        classCallCheck(this, Connect);

	        var _this = possibleConstructorReturn(this, _Component.call(this, props, context));

	        _this.version = version;
	        _this.store = props.store || context.store;

	        invariant(_this.store, 'Could not find "store" in either the context or ' + ('props of "' + connectDisplayName + '". ') + 'Either wrap the root component in a <Provider>, ' + ('or explicitly pass "store" as a prop to "' + connectDisplayName + '".'));

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
	        if (this.stateProps && shallowEqual(nextStateProps, this.stateProps)) {
	          return false;
	        }

	        this.stateProps = nextStateProps;
	        return true;
	      };

	      Connect.prototype.updateDispatchPropsIfNeeded = function updateDispatchPropsIfNeeded() {
	        var nextDispatchProps = this.computeDispatchProps(this.store, this.props);
	        if (this.dispatchProps && shallowEqual(nextDispatchProps, this.dispatchProps)) {
	          return false;
	        }

	        this.dispatchProps = nextDispatchProps;
	        return true;
	      };

	      Connect.prototype.updateMergedPropsIfNeeded = function updateMergedPropsIfNeeded() {
	        var nextMergedProps = computeMergedProps(this.stateProps, this.dispatchProps, this.props);
	        if (this.mergedProps && checkMergedEquals && shallowEqual(nextMergedProps, this.mergedProps)) {
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
	        if (!pure || !shallowEqual(nextProps, this.props)) {
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
	        invariant(withRef, 'To access the wrapped instance, you need to specify ' + '{ withRef: true } as the fourth argument of the connect() call.');

	        return this.refs.wrappedInstance;
	      };

	      Connect.prototype.render = function render() {
	        var haveOwnPropsChanged = this.haveOwnPropsChanged;
	        var hasStoreStateChanged = this.hasStoreStateChanged;
	        var haveStatePropsBeenPrecalculated = this.haveStatePropsBeenPrecalculated;
	        var statePropsPrecalculationError = this.statePropsPrecalculationError;
	        var renderedElement = this.renderedElement;


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
	          this.renderedElement = preact.h(WrappedComponent, _extends({}, this.mergedProps, {
	            ref: 'wrappedInstance'
	          }));
	        } else {
	          this.renderedElement = preact.h(WrappedComponent, this.mergedProps);
	        }

	        return this.renderedElement;
	      };

	      return Connect;
	    }(preact.Component);

	    Connect.displayName = connectDisplayName;
	    Connect.WrappedComponent = WrappedComponent;
	    Connect.contextTypes = {
	      store: storeShape
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

	    return hoistStatics(Connect, WrappedComponent);
	  };
	}



	var lib = {
		Provider: Provider,
		connect: connect
	};

	return lib;

	})));
	//# sourceMappingURL=preact-redux.js.map


/***/ },
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 71 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 72 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 73 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = undefined;

	var _class; /** @jsx h */


	var _preact = __webpack_require__(8);

	var _preact2 = _interopRequireDefault(_preact);

	var _pureRenderDecorator = __webpack_require__(5);

	var _pureRenderDecorator2 = _interopRequireDefault(_pureRenderDecorator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(65);

	/**
	 * 使用方法
	 * 
	 * 请使用以下HTML嵌套方式
	 * <Scroll>
	 * 		<List></List>
	 * 		<List></List>
	 * </Scroll>
	 *
	 * 对象参数
	 * prvScrollTop -> 当前列表上次滚动到的位置
	 * wrapper -> 滚动的对象
	 * disable -> 停用
	 * isEnd -> 列表到底
	 *
	 * 方法
	 * bindScroll -> 滚动绑定
	 * scrollEvt -> scroll事件回调
	 * props.loadDataForScroll -> 从上层组件传进来的拉取数据方法
	 *
	 * 注意事项
	 * 1. 记录滚动位置
	 * 请在放置<Scroll>的组件里面，存放对应列表上次滚动的位置
	 *
	 * 2. 还原上次滚动位置
	 * (1) 如果是双列表滚动，且使用display的block和none切换，则请在放置<Scroll>的组件中，切换列表的方法内，进行还原prvScrollTop
	 * (2) 如果是双列表滚动，但使用替换的方式切换，则可以通过销毁<Scroll>同时重新创建，然后触发componentWillMount去还原prvScrollTop
	 * 
	 */

	var Scroll = (0, _pureRenderDecorator2.default)(_class = function (_Component) {
		_inherits(Scroll, _Component);

		function Scroll(props, context) {
			_classCallCheck(this, Scroll);

			var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

			_this.state = {};
			_this.prvScrollTop = 0;
			_this.wrapper = props.wrapper;
			_this.bindScroll = _this.bindScroll.bind(_this);
			_this.scrollEvt = _this.scrollEvt.bind(_this);
			_this.timer = null;
			return _this;
		}

		Scroll.prototype.componentWillMount = function componentWillMount() {
			this.prvScrollTop = 0;
		};

		Scroll.prototype.componentDidMount = function componentDidMount() {
			this.bindScroll();
		};

		Scroll.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {};

		Scroll.prototype.componentWillUnmount = function componentWillUnmount() {
			this.scrollContainer.removeEventListener('scroll', this.scrollEvt);
		};

		Scroll.prototype.bindScroll = function bindScroll() {
			this.scrollContainer = window.mqq && window.mqq.iOS ? document.querySelector(this.wrapper) : window;
			this.scrollContainer.addEventListener('scroll', this.scrollEvt);
		};

		Scroll.prototype.scrollEvt = function scrollEvt(evt) {
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

				// 条件一： 滚动到最底部才拉数据
				// if (scrollTop + winHeight >= clientHeight) {
				// 条件二： 滚动到中间拉数据
				// console.log(scrollTop, scrollHeight, containerHeight);

				if (scrollTop >= (scrollHeight - containerHeight) / 2) {
					_this2.props.loadDataForScroll && _this2.props.loadDataForScroll();
				}
			}, 50);
		};

		Scroll.prototype.render = function render() {

			console.dev('render Scroll!');

			var _props$scrollStyle = this.props.scrollStyle,
			    scrollStyle = _props$scrollStyle === undefined ? null : _props$scrollStyle;


			return (0, _preact.h)(
				'div',
				{ className: 'content-wrap', style: scrollStyle },
				this.props.children
			);
		};

		return Scroll;
	}(_preact.Component)) || _class;

	exports.default = Scroll;

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = undefined;

	var _class; /** @jsx h */


	var _preact = __webpack_require__(8);

	var _preact2 = _interopRequireDefault(_preact);

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

			return (0, _preact.h)('div', { id: 'spin', style: spinStyle });
		};

		return Spinner;
	}(_preact.Component)) || _class;

	exports.default = Spinner;

/***/ },
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
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = undefined;

	var _preact = __webpack_require__(8);

	var _preact2 = _interopRequireDefault(_preact);

	var _classnames = __webpack_require__(9);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _constants = __webpack_require__(29);

	var _touchP = __webpack_require__(45);

	var _touchP2 = _interopRequireDefault(_touchP);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** @jsx h */

	// import pureRender from 'pure-render-decorator';


	__webpack_require__(70);

	// @pureRender

	var List = function (_Component) {
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
					window.location.href = item.url;
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
				return (0, _preact.h)(
					'li',
					{ key: index + tabsType, className: (0, _classnames2.default)('item ui-border-1px', { 'active-like': _this7.state.activeNewsId === item.id }) },
					(0, _preact.h)(
						_touchP2.default,
						{ className: 'item-inner', onSwipeLeft: _this7.showLikeBtn(item), onTap: _this7.jumpToDetail(item) },
						(0, _preact.h)('div', { className: "icon ", style: _this7.renderNewsIcon(item.thumbnails[0]) }),
						(0, _preact.h)(
							'div',
							{ className: 'info-wrap clearfix' },
							(0, _preact.h)(
								'div',
								{ className: 'info-left' },
								(0, _preact.h)(
									'div',
									{ className: 'info-name' },
									(0, _preact.h)(
										'div',
										{ className: 'info-name-text' },
										item.title
									)
								),
								(0, _preact.h)(
									'p',
									{ className: 'info-content' },
									item.des
								)
							)
						),
						(0, _preact.h)(
							_touchP2.default,
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

			return (0, _preact.h)(
				'div',
				{ className: 'news-list', style: wrapperStyle },
				(0, _preact.h)(
					'div',
					null,
					(0, _preact.h)(
						'ul',
						null,
						list
					)
				)
			);
		};

		return List;
	}(_preact.Component);

	exports.default = List;

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = undefined;

	var _preact = __webpack_require__(8);

	var _preact2 = _interopRequireDefault(_preact);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** @jsx h */


	// import pureRender from 'pure-render-decorator';

	__webpack_require__(71);

	// @pureRender

	var List = function (_Component) {
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

			return (0, _preact.h)(
				'div',
				{ className: 'loading', style: loadingStyle },
				(0, _preact.h)(
					'p',
					null,
					loadingText
				)
			);
		};

		return List;
	}(_preact.Component);

	exports.default = List;

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = undefined;

	var _preact = __webpack_require__(8);

	var _preact2 = _interopRequireDefault(_preact);

	var _constants = __webpack_require__(29);

	var _touchP = __webpack_require__(45);

	var _touchP2 = _interopRequireDefault(_touchP);

	var _classnames = __webpack_require__(9);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** @jsx h */

	// import pureRender from 'pure-render-decorator';


	__webpack_require__(72);

	function TabItem(item, key) {
		return (0, _preact.h)(
			'li',
			{ 'data-tab': item.label,
				key: key
			},
			(0, _preact.h)(
				_touchP2.default,
				{ 'data-tab': item.label, onTap: this.switchTab },
				item.text
			)
		);
	}

	function TabHighlight(props) {

		var isActive = props.active === _constants.LIKE_NEWS;
		return (0, _preact.h)('i', { className: (0, _classnames2.default)('icon-active', { 'pull-right': isActive }) });
	}

	// @pureRender

	var Tab = function (_Component) {
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

			return (0, _preact.h)(
				'div',
				{ id: 'cm-tab' },
				(0, _preact.h)(
					'div',
					{ className: 'cm-tabs' },
					(0, _preact.h)(
						'nav',
						{ className: 'nav ui-border-1px' },
						(0, _preact.h)(
							'ul',
							{ className: 'title-list' },
							this.tabs.map(TabItem, this)
						),
						(0, _preact.h)(TabHighlight, { active: this.props.tabs })
					)
				)
			);
		};

		return Tab;
	}(_preact.Component);

	exports.default = Tab;

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _preactRedux = __webpack_require__(53);

	var _actions = __webpack_require__(20);

	var _actions2 = __webpack_require__(48);

	// Map Redux state to component props
	// ownProps stores react-router-redux props
	function mapStateToProps(state) {
	    return {
	        args: state.args,
	        tabs: state.tabs,
	        news: state.news,
	        spinLoading: state.spinLoading,
	        listLoading: state.listLoading
	    };
	}

	// Map Redux actions to component props
	/** @jsx h */
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

	exports.default = (0, _preactRedux.connect)(mapStateToProps, mapDispatchToProps);

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _preact = __webpack_require__(8);

	var _preact2 = _interopRequireDefault(_preact);

	var _lodash = __webpack_require__(2);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _connect = __webpack_require__(97);

	var _connect2 = _interopRequireDefault(_connect);

	var _cgiPath = __webpack_require__(3);

	var _constants = __webpack_require__(29);

	var _scrollP = __webpack_require__(80);

	var _scrollP2 = _interopRequireDefault(_scrollP);

	var _spinnerP = __webpack_require__(81);

	var _spinnerP2 = _interopRequireDefault(_spinnerP);

	var _index = __webpack_require__(94);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(96);

	var _index4 = _interopRequireDefault(_index3);

	var _index5 = __webpack_require__(95);

	var _index6 = _interopRequireDefault(_index5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** @jsx h */


	__webpack_require__(73);

	var Wrapper = function (_Component) {
		_inherits(Wrapper, _Component);

		function Wrapper(props, context) {
			_classCallCheck(this, Wrapper);

			var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

			_this.state = {};
			_this.firstGetAllData = false;
			_this.loadTopNews = _this.loadTopNews.bind(_this);
			_this.loadNewsList = _this.loadNewsList.bind(_this);
			_this.loadData = _this.loadData.bind(_this);
			_this.loadDataForScroll = _this.loadDataForScroll.bind(_this);
			return _this;
		}

		Wrapper.prototype.componentDidMount = function componentDidMount() {};

		Wrapper.prototype.componentWillMount = function componentWillMount() {
			this.loadTopNews();
		};

		Wrapper.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
			this.props.toggleSpinLoading(false);

			return true;
		};

		Wrapper.prototype.loadDataForScroll = function loadDataForScroll() {
			this.loadNewsList(null);
		};

		Wrapper.prototype.loadTopNews = function loadTopNews() {
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
		};

		Wrapper.prototype.loadNewsList = function loadNewsList(props) {
			var props = props || this.props;

			this.loadData(_constants.LATEST_NEWS, {});
		};

		//http://mat1.gtimg.com/www/mobi/image/loadimg.png

		Wrapper.prototype.loadData = function loadData(listType) {
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
			    startIndex = 0 + (curPage - 1) * page_size,
			    endIndex = startIndex + page_size;

			var newIds = ids.slice(startIndex, endIndex),
			    newIdArray = [];

			newIds.forEach(function (item, index) {
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
				onError: function onError(res) {
					console.log("err");
					// console.log(res);
					// alert(res.errMsg || '加载新闻列表失败，请稍后重试');
				}
			};

			this.props.request(url, param, opts);
		};

		Wrapper.prototype.render = function render() {

			console.dev('render container!!!');
			var tabStyle = this.props.tabs,
			    isEnd = this.props.news.listInfo['listLatest']['isEnd'],
			    isLoadingShow = tabStyle === _constants.LATEST_NEWS;

			return (0, _preact.h)(
				'article',
				{ className: 'cm-page' },
				(0, _preact.h)(_index4.default, {
					tabs: this.props.tabs,
					updateActiveTab: this.props.updateActiveTab
				}),
				(0, _preact.h)(
					'div',
					{ className: 'cm-content' },
					(0, _preact.h)(
						_scrollP2.default,
						{
							wrapper: ".content-wrap",
							loadDataForScroll: this.loadDataForScroll
						},
						(0, _preact.h)(_index2.default, {
							tabs: this.props.tabs,
							tabsType: _constants.LATEST_NEWS,
							news: this.props.news.listLatest,
							listInfo: this.props.news.listInfo.listLatest,
							args: this.props.args,
							request: this.props.request,
							likeNews: this.props.likeNews
						}),
						(0, _preact.h)(_index2.default, {
							tabs: this.props.tabs,
							tabsType: _constants.LIKE_NEWS,
							news: this.props.news.listLike,
							listInfo: this.props.news.listInfo.listLike,
							args: this.props.args,
							request: this.props.request,
							dislikeNews: this.props.dislikeNews
						}),
						(0, _preact.h)(_index6.default, { isShow: isLoadingShow, isEnd: isEnd })
					)
				),
				(0, _preact.h)(_spinnerP2.default, { isShow: this.props.spinLoading })
			);
		};

		return Wrapper;
	}(_preact.Component);

	exports.default = (0, _connect2.default)(Wrapper);

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Root = __webpack_require__(101);

	var _Root2 = _interopRequireDefault(_Root);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _redux = __webpack_require__(6);

	var _lodash = __webpack_require__(2);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _utils = __webpack_require__(7);

	var _stores = __webpack_require__(103);

	var _stores2 = _interopRequireDefault(_stores);

	var _cgiPath = __webpack_require__(3);

	var _actions = __webpack_require__(48);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/** @jsx h */
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
			default:
				return state;
		}
	};

	var rootReducer = (0, _redux.combineReducers)({
		args: args,
		tabs: tabs,
		news: news,
		listLoading: listLoading,
		spinLoading: spinLoading
	});

	exports.default = rootReducer;

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = undefined;

	var _preact = __webpack_require__(8);

	var _preact2 = _interopRequireDefault(_preact);

	var _preactRedux = __webpack_require__(53);

	var _configureStore = __webpack_require__(102);

	var _configureStore2 = _interopRequireDefault(_configureStore);

	var _index = __webpack_require__(98);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/** @jsx h */
	if (false) {
	    window.console.dev = function (msg) {
	        console.log(msg);
	    };
	} else {
	    window.console.dev = function (msg) {};
	}

	var store = (0, _configureStore2.default)();

	var Root = function (_Component) {
	    _inherits(Root, _Component);

	    function Root(props, context) {
	        _classCallCheck(this, Root);

	        return _possibleConstructorReturn(this, _Component.call(this, props, context));
	    }

	    Root.prototype.render = function render() {
	        return (0, _preact.h)(
	            _preactRedux.Provider,
	            { store: store },
	            (0, _preact.h)(
	                'div',
	                null,
	                (0, _preact.h)(_index2.default, null)
	            )
	        );
	    };

	    return Root;
	}(_preact.Component);

	exports.default = Root;


	(0, _preact.render)((0, _preact.h)(Root, null), document.getElementById('pages'));

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = configureStore;

	var _redux = __webpack_require__(6);

	var _reducers = __webpack_require__(100);

	var _reducers2 = _interopRequireDefault(_reducers);

	var _reduxThunk = __webpack_require__(26);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _api = __webpack_require__(23);

	var _api2 = _interopRequireDefault(_api);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/** @jsx h */
	var finalCreateStore = (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default, _api2.default))(_redux.createStore);

	function configureStore(initialState) {

	  var store = finalCreateStore(_reducers2.default, initialState);

	  return store;
	}

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(7);

	var _constants = __webpack_require__(29);

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
		listLoading: false,
		spinLoading: true
	};

	exports.default = initialState;

/***/ }
/******/ ]);
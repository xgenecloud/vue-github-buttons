var VueGitHubButtons = (function (Vue) {
    'use strict';

    Vue = Vue && Object.prototype.hasOwnProperty.call(Vue, 'default') ? Vue['default'] : Vue;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    /**
      * vue-class-component v7.2.3
      * (c) 2015-present Evan You
      * @license MIT
      */

    function _typeof(obj) {
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function (obj) {
          return typeof obj;
        };
      } else {
        _typeof = function (obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
      }

      return _typeof(obj);
    }

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }

      return obj;
    }

    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
    }

    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

        return arr2;
      }
    }

    function _iterableToArray(iter) {
      if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
    }

    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }

    // The rational behind the verbose Reflect-feature check below is the fact that there are polyfills
    // which add an implementation for Reflect.defineMetadata but not for Reflect.getOwnMetadataKeys.
    // Without this check consumers will encounter hard to track down runtime errors.
    function reflectionIsSupported() {
      return typeof Reflect !== 'undefined' && Reflect.defineMetadata && Reflect.getOwnMetadataKeys;
    }
    function copyReflectionMetadata(to, from) {
      forwardMetadata(to, from);
      Object.getOwnPropertyNames(from.prototype).forEach(function (key) {
        forwardMetadata(to.prototype, from.prototype, key);
      });
      Object.getOwnPropertyNames(from).forEach(function (key) {
        forwardMetadata(to, from, key);
      });
    }

    function forwardMetadata(to, from, propertyKey) {
      var metaKeys = propertyKey ? Reflect.getOwnMetadataKeys(from, propertyKey) : Reflect.getOwnMetadataKeys(from);
      metaKeys.forEach(function (metaKey) {
        var metadata = propertyKey ? Reflect.getOwnMetadata(metaKey, from, propertyKey) : Reflect.getOwnMetadata(metaKey, from);

        if (propertyKey) {
          Reflect.defineMetadata(metaKey, metadata, to, propertyKey);
        } else {
          Reflect.defineMetadata(metaKey, metadata, to);
        }
      });
    }

    var fakeArray = {
      __proto__: []
    };
    var hasProto = fakeArray instanceof Array;
    function createDecorator(factory) {
      return function (target, key, index) {
        var Ctor = typeof target === 'function' ? target : target.constructor;

        if (!Ctor.__decorators__) {
          Ctor.__decorators__ = [];
        }

        if (typeof index !== 'number') {
          index = undefined;
        }

        Ctor.__decorators__.push(function (options) {
          return factory(options, key, index);
        });
      };
    }
    function mixins() {
      for (var _len = arguments.length, Ctors = new Array(_len), _key = 0; _key < _len; _key++) {
        Ctors[_key] = arguments[_key];
      }

      return Vue.extend({
        mixins: Ctors
      });
    }
    function isPrimitive(value) {
      var type = _typeof(value);

      return value == null || type !== 'object' && type !== 'function';
    }

    function collectDataFromConstructor(vm, Component) {
      // override _init to prevent to init as Vue instance
      var originalInit = Component.prototype._init;

      Component.prototype._init = function () {
        var _this = this;

        // proxy to actual vm
        var keys = Object.getOwnPropertyNames(vm); // 2.2.0 compat (props are no longer exposed as self properties)

        if (vm.$options.props) {
          for (var key in vm.$options.props) {
            if (!vm.hasOwnProperty(key)) {
              keys.push(key);
            }
          }
        }

        keys.forEach(function (key) {
          if (key.charAt(0) !== '_') {
            Object.defineProperty(_this, key, {
              get: function get() {
                return vm[key];
              },
              set: function set(value) {
                vm[key] = value;
              },
              configurable: true
            });
          }
        });
      }; // should be acquired class property values


      var data = new Component(); // restore original _init to avoid memory leak (#209)

      Component.prototype._init = originalInit; // create plain data object

      var plainData = {};
      Object.keys(data).forEach(function (key) {
        if (data[key] !== undefined) {
          plainData[key] = data[key];
        }
      });

      return plainData;
    }

    var $internalHooks = ['data', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeDestroy', 'destroyed', 'beforeUpdate', 'updated', 'activated', 'deactivated', 'render', 'errorCaptured', 'serverPrefetch' // 2.6
    ];
    function componentFactory(Component) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      options.name = options.name || Component._componentTag || Component.name; // prototype props.

      var proto = Component.prototype;
      Object.getOwnPropertyNames(proto).forEach(function (key) {
        if (key === 'constructor') {
          return;
        } // hooks


        if ($internalHooks.indexOf(key) > -1) {
          options[key] = proto[key];
          return;
        }

        var descriptor = Object.getOwnPropertyDescriptor(proto, key);

        if (descriptor.value !== void 0) {
          // methods
          if (typeof descriptor.value === 'function') {
            (options.methods || (options.methods = {}))[key] = descriptor.value;
          } else {
            // typescript decorated data
            (options.mixins || (options.mixins = [])).push({
              data: function data() {
                return _defineProperty({}, key, descriptor.value);
              }
            });
          }
        } else if (descriptor.get || descriptor.set) {
          // computed properties
          (options.computed || (options.computed = {}))[key] = {
            get: descriptor.get,
            set: descriptor.set
          };
        }
      });
      (options.mixins || (options.mixins = [])).push({
        data: function data() {
          return collectDataFromConstructor(this, Component);
        }
      }); // decorate options

      var decorators = Component.__decorators__;

      if (decorators) {
        decorators.forEach(function (fn) {
          return fn(options);
        });
        delete Component.__decorators__;
      } // find super


      var superProto = Object.getPrototypeOf(Component.prototype);
      var Super = superProto instanceof Vue ? superProto.constructor : Vue;
      var Extended = Super.extend(options);
      forwardStaticMembers(Extended, Component, Super);

      if (reflectionIsSupported()) {
        copyReflectionMetadata(Extended, Component);
      }

      return Extended;
    }
    var shouldIgnore = {
      prototype: true,
      arguments: true,
      callee: true,
      caller: true
    };

    function forwardStaticMembers(Extended, Original, Super) {
      // We have to use getOwnPropertyNames since Babel registers methods as non-enumerable
      Object.getOwnPropertyNames(Original).forEach(function (key) {
        // Skip the properties that should not be overwritten
        if (shouldIgnore[key]) {
          return;
        } // Some browsers does not allow reconfigure built-in properties


        var extendedDescriptor = Object.getOwnPropertyDescriptor(Extended, key);

        if (extendedDescriptor && !extendedDescriptor.configurable) {
          return;
        }

        var descriptor = Object.getOwnPropertyDescriptor(Original, key); // If the user agent does not support `__proto__` or its family (IE <= 10),
        // the sub class properties may be inherited properties from the super class in TypeScript.
        // We need to exclude such properties to prevent to overwrite
        // the component options object which stored on the extended constructor (See #192).
        // If the value is a referenced value (object or function),
        // we can check equality of them and exclude it if they have the same reference.
        // If it is a primitive value, it will be forwarded for safety.

        if (!hasProto) {
          // Only `cid` is explicitly exluded from property forwarding
          // because we cannot detect whether it is a inherited property or not
          // on the no `__proto__` environment even though the property is reserved.
          if (key === 'cid') {
            return;
          }

          var superDescriptor = Object.getOwnPropertyDescriptor(Super, key);

          if (!isPrimitive(descriptor.value) && superDescriptor && superDescriptor.value === descriptor.value) {
            return;
          }
        } // Warn if the users manually declare reserved properties

        Object.defineProperty(Extended, key, descriptor);
      });
    }

    function Component(options) {
      if (typeof options === 'function') {
        return componentFactory(options);
      }

      return function (Component) {
        return componentFactory(Component, options);
      };
    }

    Component.registerHooks = function registerHooks(keys) {
      $internalHooks.push.apply($internalHooks, _toConsumableArray(keys));
    };

    /** vue-property-decorator verson 8.5.1 MIT LICENSE copyright 2020 kaorun343 */
    /** @see {@link https://github.com/vuejs/vue-class-component/blob/master/src/reflect.ts} */
    var reflectMetadataIsSupported = typeof Reflect !== 'undefined' && typeof Reflect.getMetadata !== 'undefined';
    function applyMetadata(options, target, key) {
        if (reflectMetadataIsSupported) {
            if (!Array.isArray(options) &&
                typeof options !== 'function' &&
                typeof options.type === 'undefined') {
                var type = Reflect.getMetadata('design:type', target, key);
                if (type !== Object) {
                    options.type = type;
                }
            }
        }
    }
    /**
     * decorator of a prop
     * @param  options the options for the prop
     * @return PropertyDecorator | void
     */
    function Prop(options) {
        if (options === void 0) { options = {}; }
        return function (target, key) {
            applyMetadata(options, target, key);
            createDecorator(function (componentOptions, k) {
                (componentOptions.props || (componentOptions.props = {}))[k] = options;
            })(target, key);
        };
    }

    // &nbsp; (Non-Breaking Space)
    var NBSP = String.fromCharCode(160);

    function parseNumber(number) {
    	var isNegative = number < 0;
    	var numberString = String(number);
    	if (isNegative) {
    		numberString = numberString.slice(1);
    	}
    	var decimal = numberString.split('.');
    	return {
    		integer: decimal[0],
    		fraction: decimal[1] || '',
    		sign: isNegative ? '-' : ''
    	};
    }

    function format(number, separator) {
    	number = String(number);

    	while (number.length % 3) {
    		number = '#' + number;
    	}

    	var result = number.substr(0, 3);
    	result = result.replace(/#/g, '');
    	var i;
    	var length = number.length;
    	for (i = 3; i < length; i += 3) {
    		result = result + separator + number.substr(i, 3);
    	}

    	return result;
    }

    /**
     * @param {Number} number
     * @param {Object|String} [options=' ']
     * @param {String} [options.separator=' ']
     * @param {Boolean} [options.formatFourDigits=true]
     * @returns {String}
     */
    var formatThousands = function (number, options) {
    	var result = '';
    	var separator = NBSP;
    	var formatFourDigits = true;

    	if (!number && number !== 0) {
    		return result;
    	}

    	var numberObject = parseNumber(number);
    	var numberString = String(number);

    	if (typeof options === 'object') {
    		if (options.separator) {
    			separator = options.separator;
    		}

    		if (typeof options.formatFourDigits === 'boolean') {
    			formatFourDigits = options.formatFourDigits;
    		}
    	} else if (typeof options !== 'undefined') {
    		separator = options;
    	}

    	if (
    		numberObject.integer.length <= 3 ||
    		(numberObject.integer.length === 4 && !formatFourDigits)
    	) {
    		result = numberString;
    	} else {
    		result += numberObject.sign;
    		result += format(numberObject.integer, separator);
    		if (numberObject.fraction) {
    			result += '.';
    			result += numberObject.fraction;
    		}
    	}

    	return result;
    };

    /**
     * GitHub site URL
     */
    var GH_URL = 'https://github.com';
    /**
     * GitHub API root URL
     */
    var GH_ROOT_URL = 'https://api.github.com';

    /**
     * Vue GitHub Buttons cacher.
     *
     * @export
     * @class Cacher
     */
    var Cacher = /** @class */ (function () {
        /**
         * Creates an instance of `Cacher`.
         *
         * @param {boolean} [autoCommit=true] Automatically commit cache to session storage
         * @memberof Cacher
         */
        function Cacher(autoCommit) {
            if (autoCommit === void 0) { autoCommit = true; }
            /**
             * Cache
             *
             * @private
             * @type {Cache}
             * @memberof Cacher
             */
            this.cache = {
                repo: {},
                user: {}
            };
            this.autoCommit = autoCommit;
            if (this.exist()) {
                this.retrieve();
            }
            else {
                this.commit();
            }
        }
        Object.defineProperty(Cacher, "CACHE_NAME", {
            /**
             * Cache name constant
             *
             * @readonly
             * @static
             *
             * @memberOf Cacher
             */
            get: function () {
                return 'vue-github-buttons';
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Check session storage API support.
         *
         * @static
         * @returns {boolean}
         *
         * @memberOf Cacher
         */
        Cacher.supportSession = function () {
            return (typeof window !== 'undefined') && window.sessionStorage ? true : false;
        };
        /**
         * Check cache existence in session storage.
         *
         * @returns {boolean}
         *
         * @memberOf Cacher
         */
        Cacher.prototype.exist = function () {
            if (Cacher.supportSession()) {
                var cache = sessionStorage.getItem(Cacher.CACHE_NAME);
                return cache ? true : false;
            }
            return false;
        };
        /**
         * Write cache data to session storage.
         *
         * @returns {boolean} Commit result.
         *
         * @memberOf Cacher
         */
        Cacher.prototype.commit = function () {
            try {
                if (Cacher.supportSession()) {
                    sessionStorage.setItem(Cacher.CACHE_NAME, JSON.stringify(this.cache));
                }
                return true;
            }
            catch (_) {
                return false;
            }
        };
        /**
         * Retrieve cache data from session storage.
         *
         *
         * @memberOf Cacher
         */
        Cacher.prototype.retrieve = function () {
            if (Cacher.supportSession()) {
                var cache = sessionStorage.getItem(Cacher.CACHE_NAME);
                if (cache) {
                    this.cache = JSON.parse(cache);
                }
            }
        };
        /**
         * Clear cache.
         *
         *
         * @memberOf Cacher
         */
        Cacher.prototype.clear = function () {
            this.cache = {
                repo: {},
                user: {}
            };
            if (Cacher.supportSession()) {
                sessionStorage.removeItem(Cacher.CACHE_NAME);
            }
        };
        /**
         * Get repository data from cache.
         *
         * @param {string} slug GitHub slug.
         * @returns {any}
         *
         * @memberOf Cacher
         */
        Cacher.prototype.getRepo = function (slug) {
            if (typeof slug === 'string' && this.cache.repo[slug]) {
                return this.cache.repo[slug];
            }
            else {
                return null;
            }
        };
        /**
         * Set repository data to cache.
         *
         * @param {string} slug GitHub slug.
         * @param {any} data Repository data.
         *
         * @memberOf Cacher
         */
        Cacher.prototype.setRepo = function (slug, data) {
            if (typeof slug === 'string' && data) {
                this.cache.repo[slug] = data;
                if (this.autoCommit) {
                    this.commit();
                }
            }
        };
        /**
         * Get user data from cache.
         *
         * @param {string} username GitHub user's name.
         * @returns {any}
         *
         * @memberOf Cacher
         */
        Cacher.prototype.getUser = function (username) {
            if (typeof username === 'string' && this.cache.user[username]) {
                return this.cache.user[username];
            }
            else {
                return null;
            }
        };
        /**
         * Set user data to cache.
         *
         * @param {string} username GitHub user's name.
         * @param {any} data User data.
         *
         * @memberOf Cacher
         */
        Cacher.prototype.setUser = function (username, data) {
            if (typeof username === 'string' && data) {
                this.cache.user[username] = data;
                if (this.autoCommit) {
                    this.commit();
                }
            }
        };
        return Cacher;
    }());

    /**
     * Repo path RegEx.
     */
    var repo = /^(\/repos\/)(.+)/;
    /**
     * User path RegEx.
     */
    var user = /^(\/users\/)(.+)/;

    /**
     * Check if repo path or not.
     *
     * @export
     * @param {string} path GitHub API relative path
     * @returns {boolean}
     */
    function isRepoPath(path) {
        return repo.test(path);
    }

    /**
     * Get a repo slug from GitHub API relative path.
     *
     * @export
     * @param {string} path GitHub API relative path
     * @returns {string} Repo slug
     */
    function getRepoFromPath(path) {
        return isRepoPath(path) ? path.match(repo)[2] : null;
    }

    /**
     * Check if user path or not.
     *
     * @export
     * @param {string} path GitHub API relative path
     * @returns {boolean}
     */
    function isUserPath(path) {
        return user.test(path);
    }

    /**
     * Get a user name from GitHub API relative path.
     *
     * @export
     * @param {string} path GitHub API relative path
     * @returns {string} User name
     */
    function getUserFromPath(path) {
        return isUserPath(path) ? path.match(user)[2] : null;
    }

    /**
     * Path action executor.
     *
     * @export
     * @class PathActionExecutor
     */
    var PathActionExecutor = /** @class */ (function () {
        /**
         * Creates an instance of `PathActionExecutor`.
         *
         * @param {string} path GitHub API relative path
         * @memberof PathActionExecutor
         */
        function PathActionExecutor(path) {
            this.path = path;
            this.clear();
        }
        /**
         * Define repo action.
         *
         * @param {RepoAction} action An action
         * @returns {this}
         * @memberof PathActionExecutor
         */
        PathActionExecutor.prototype.repo = function (action) {
            this.repoAction = action;
            return this;
        };
        /**
         * Define user action.
         *
         * @param {UserAction} action An action
         * @returns {this}
         * @memberof PathActionExecutor
         */
        PathActionExecutor.prototype.user = function (action) {
            this.userAction = action;
            return this;
        };
        /**
         * Clear actions.
         *
         * @memberof PathActionExecutor
         */
        PathActionExecutor.prototype.clear = function () {
            this.repoAction = function () { };
            this.userAction = function () { };
        };
        /**
         * Execute an appropriate action.
         *
         * @param {any} [payload] Payload
         * @memberof PathActionExecutor
         */
        PathActionExecutor.prototype.execute = function (payload) {
            var _a = this, path = _a.path, repoAction = _a.repoAction, userAction = _a.userAction;
            if (isRepoPath(path)) {
                repoAction(getRepoFromPath(path), payload);
            }
            else if (isUserPath(path)) {
                userAction(getUserFromPath(path), payload);
            }
        };
        return PathActionExecutor;
    }());

    var requestHeaders = {
        Accept: 'application/vnd.github.v3+json'
    };
    /**
     * Send GET request to GitHub API.
     *
     * @export
     * @param {string} path Request relative path
     * @param {Middleware} [middleware=() => {}] Middleware
     * @returns {Promise<any>} GitHub API data
     */
    function sendGhRequest(path, middleware) {
        if (middleware === void 0) { middleware = function () { }; }
        return __awaiter(this, void 0, void 0, function () {
            var fullUrl, res, data, errorMsg;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (path.charAt(0) !== '/') {
                            path = "/" + path;
                        }
                        fullUrl = "" + GH_ROOT_URL + path;
                        return [4 /*yield*/, fetch(fullUrl, {
                                method: 'GET',
                                headers: requestHeaders,
                                cache: 'no-store',
                                redirect: 'follow'
                            })];
                    case 1:
                        res = _a.sent();
                        if (!res.ok) return [3 /*break*/, 3];
                        return [4 /*yield*/, res.json()];
                    case 2:
                        data = _a.sent();
                        middleware(data);
                        return [2 /*return*/, data];
                    case 3:
                        errorMsg = "" + res.status;
                        if (res.statusText) {
                            errorMsg += " - " + res.statusText;
                        }
                        throw new Error("GitHub request error: " + errorMsg);
                }
            });
        });
    }

    /**
     * Send GET request from GitHub API.
     *
     * @export
     * @param {string} path GitHub API request path
     * @param {boolean} [useCache=true] Enable caching
     * @returns {Promise<any>}
     */
    function ghGet(path, useCache) {
        if (useCache === void 0) { useCache = true; }
        return __awaiter(this, void 0, void 0, function () {
            var cacher_1, retrievedData_1, retrievalExecutor, cachingExecutor_1, cacherMiddleware;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!useCache) return [3 /*break*/, 4];
                        cacher_1 = new Cacher();
                        retrievedData_1 = null;
                        retrievalExecutor = new PathActionExecutor(path)
                            .repo(function (slug) {
                            retrievedData_1 = cacher_1.getRepo(slug);
                        })
                            .user(function (username) {
                            retrievedData_1 = cacher_1.getUser(username);
                        });
                        cachingExecutor_1 = new PathActionExecutor(path)
                            .repo(function (slug, data) {
                            cacher_1.setRepo(slug, data);
                        })
                            .user(function (username, data) {
                            cacher_1.setUser(username, data);
                        });
                        cacherMiddleware = function (data) {
                            cachingExecutor_1.execute(data);
                        };
                        retrievalExecutor.execute();
                        if (!retrievedData_1) return [3 /*break*/, 1];
                        return [2 /*return*/, retrievedData_1];
                    case 1: return [4 /*yield*/, sendGhRequest(path, cacherMiddleware)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3: return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, sendGhRequest(path)];
                    case 5: return [2 /*return*/, _a.sent()];
                    case 6: return [2 /*return*/];
                }
            });
        });
    }

    /**
     * Is value set?
     *
     * @export
     * @template T
     * @param {T} value A value to check
     * @returns {boolean}
     */
    function isset(value) {
        if (typeof value === 'string' && value.length > 0) {
            return true;
        }
        else {
            return typeof value !== 'undefined' && value != null;
        }
    }

    var EyeIcon = /** @class */ (function (_super) {
        __extends(EyeIcon, _super);
        function EyeIcon() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        EyeIcon = __decorate([
            Component({
                name: 'EyeIcon'
            })
        ], EyeIcon);
        return EyeIcon;
    }(Vue));

    function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
        if (typeof shadowMode !== 'boolean') {
            createInjectorSSR = createInjector;
            createInjector = shadowMode;
            shadowMode = false;
        }
        // Vue.extend constructor export interop.
        const options = typeof script === 'function' ? script.options : script;
        // render functions
        if (template && template.render) {
            options.render = template.render;
            options.staticRenderFns = template.staticRenderFns;
            options._compiled = true;
            // functional template
            if (isFunctionalTemplate) {
                options.functional = true;
            }
        }
        // scopedId
        if (scopeId) {
            options._scopeId = scopeId;
        }
        let hook;
        if (moduleIdentifier) {
            // server build
            hook = function (context) {
                // 2.3 injection
                context =
                    context || // cached call
                        (this.$vnode && this.$vnode.ssrContext) || // stateful
                        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
                // 2.2 with runInNewContext: true
                if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                    context = __VUE_SSR_CONTEXT__;
                }
                // inject component styles
                if (style) {
                    style.call(this, createInjectorSSR(context));
                }
                // register component module identifier for async chunk inference
                if (context && context._registeredComponents) {
                    context._registeredComponents.add(moduleIdentifier);
                }
            };
            // used by ssr in case component is cached and beforeCreate
            // never gets called
            options._ssrRegister = hook;
        }
        else if (style) {
            hook = shadowMode
                ? function (context) {
                    style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
                }
                : function (context) {
                    style.call(this, createInjector(context));
                };
        }
        if (hook) {
            if (options.functional) {
                // register for functional component in vue file
                const originalRender = options.render;
                options.render = function renderWithStyleInjection(h, context) {
                    hook.call(context);
                    return originalRender(h, context);
                };
            }
            else {
                // inject component registration as beforeCreate hook
                const existing = options.beforeCreate;
                options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
            }
        }
        return script;
    }

    /* script */
    const __vue_script__ = EyeIcon;

    /* template */
    var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"octicon octicon-eye",attrs:{"version":"1.1","width":"16","height":"16","viewBox":"0 0 16 16","aria-hidden":"true"}},[_c('path',{attrs:{"fill-rule":"evenodd","d":"M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"}})])};
    var __vue_staticRenderFns__ = [];

      /* style */
      const __vue_inject_styles__ = undefined;
      /* scoped */
      const __vue_scope_id__ = undefined;
      /* module identifier */
      const __vue_module_identifier__ = undefined;
      /* functional template */
      const __vue_is_functional_template__ = false;
      /* style inject */
      
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__ = /*#__PURE__*/normalizeComponent(
        { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
        __vue_inject_styles__,
        __vue_script__,
        __vue_scope_id__,
        __vue_is_functional_template__,
        __vue_module_identifier__,
        false,
        undefined,
        undefined,
        undefined
      );

    var MarkGithubIcon = /** @class */ (function (_super) {
        __extends(MarkGithubIcon, _super);
        function MarkGithubIcon() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MarkGithubIcon = __decorate([
            Component({
                name: 'MarkGithubIcon'
            })
        ], MarkGithubIcon);
        return MarkGithubIcon;
    }(Vue));

    /* script */
    const __vue_script__$1 = MarkGithubIcon;

    /* template */
    var __vue_render__$1 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"octicon octicon-mark-github",attrs:{"version":"1.1","width":"16","height":"16","viewBox":"0 0 16 16","aria-hidden":"true"}},[_c('path',{attrs:{"fill-rule":"evenodd","d":"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}})])};
    var __vue_staticRenderFns__$1 = [];

      /* style */
      const __vue_inject_styles__$1 = undefined;
      /* scoped */
      const __vue_scope_id__$1 = undefined;
      /* module identifier */
      const __vue_module_identifier__$1 = undefined;
      /* functional template */
      const __vue_is_functional_template__$1 = false;
      /* style inject */
      
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$1 = /*#__PURE__*/normalizeComponent(
        { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
        __vue_inject_styles__$1,
        __vue_script__$1,
        __vue_scope_id__$1,
        __vue_is_functional_template__$1,
        __vue_module_identifier__$1,
        false,
        undefined,
        undefined,
        undefined
      );

    var RepoForkedIcon = /** @class */ (function (_super) {
        __extends(RepoForkedIcon, _super);
        function RepoForkedIcon() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RepoForkedIcon = __decorate([
            Component({
                name: 'RepoForkedIcon'
            })
        ], RepoForkedIcon);
        return RepoForkedIcon;
    }(Vue));

    /* script */
    const __vue_script__$2 = RepoForkedIcon;

    /* template */
    var __vue_render__$2 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"octicon octicon-repo-forked",attrs:{"version":"1.1","width":"10","height":"16","viewBox":"0 0 10 16","aria-hidden":"true"}},[_c('path',{attrs:{"fill-rule":"evenodd","d":"M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"}})])};
    var __vue_staticRenderFns__$2 = [];

      /* style */
      const __vue_inject_styles__$2 = undefined;
      /* scoped */
      const __vue_scope_id__$2 = undefined;
      /* module identifier */
      const __vue_module_identifier__$2 = undefined;
      /* functional template */
      const __vue_is_functional_template__$2 = false;
      /* style inject */
      
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$2 = /*#__PURE__*/normalizeComponent(
        { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
        __vue_inject_styles__$2,
        __vue_script__$2,
        __vue_scope_id__$2,
        __vue_is_functional_template__$2,
        __vue_module_identifier__$2,
        false,
        undefined,
        undefined,
        undefined
      );

    var StarIcon = /** @class */ (function (_super) {
        __extends(StarIcon, _super);
        function StarIcon() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        StarIcon = __decorate([
            Component({
                name: 'StarIcon'
            })
        ], StarIcon);
        return StarIcon;
    }(Vue));

    /* script */
    const __vue_script__$3 = StarIcon;

    /* template */
    var __vue_render__$3 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"octicon octicon-star",attrs:{"version":"1.1","width":"14","height":"16","viewBox":"0 0 14 16","aria-hidden":"true"}},[_c('path',{attrs:{"fill-rule":"evenodd","d":"M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"}})])};
    var __vue_staticRenderFns__$3 = [];

      /* style */
      const __vue_inject_styles__$3 = undefined;
      /* scoped */
      const __vue_scope_id__$3 = undefined;
      /* module identifier */
      const __vue_module_identifier__$3 = undefined;
      /* functional template */
      const __vue_is_functional_template__$3 = false;
      /* style inject */
      
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$3 = /*#__PURE__*/normalizeComponent(
        { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
        __vue_inject_styles__$3,
        __vue_script__$3,
        __vue_scope_id__$3,
        __vue_is_functional_template__$3,
        __vue_module_identifier__$3,
        false,
        undefined,
        undefined,
        undefined
      );

    var SyncIcon = /** @class */ (function (_super) {
        __extends(SyncIcon, _super);
        function SyncIcon() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SyncIcon = __decorate([
            Component({
                name: 'SyncIcon'
            })
        ], SyncIcon);
        return SyncIcon;
    }(Vue));

    /* script */
    const __vue_script__$4 = SyncIcon;

    /* template */
    var __vue_render__$4 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"octicon octicon-sync spin",attrs:{"version":"1.1","width":"12","height":"16","viewBox":"0 0 12 16","aria-hidden":"true"}},[_c('path',{attrs:{"fill-rule":"evenodd","d":"M10.24 7.4a4.15 4.15 0 0 1-1.2 3.6 4.346 4.346 0 0 1-5.41.54L4.8 10.4.5 9.8l.6 4.2 1.31-1.26c2.36 1.74 5.7 1.57 7.84-.54a5.876 5.876 0 0 0 1.74-4.46l-1.75-.34zM2.96 5a4.346 4.346 0 0 1 5.41-.54L7.2 5.6l4.3.6-.6-4.2-1.31 1.26c-2.36-1.74-5.7-1.57-7.85.54C.5 5.03-.06 6.65.01 8.26l1.75.35A4.17 4.17 0 0 1 2.96 5z"}})])};
    var __vue_staticRenderFns__$4 = [];

      /* style */
      const __vue_inject_styles__$4 = undefined;
      /* scoped */
      const __vue_scope_id__$4 = undefined;
      /* module identifier */
      const __vue_module_identifier__$4 = undefined;
      /* functional template */
      const __vue_is_functional_template__$4 = false;
      /* style inject */
      
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$4 = /*#__PURE__*/normalizeComponent(
        { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
        __vue_inject_styles__$4,
        __vue_script__$4,
        __vue_scope_id__$4,
        __vue_is_functional_template__$4,
        __vue_module_identifier__$4,
        false,
        undefined,
        undefined,
        undefined
      );

    /**
     * Get all SVG icons as component.
     *
     * @export
     */
    var getIconComponents = (function () {
        return {
            EyeIcon: __vue_component__,
            MarkGithubIcon: __vue_component__$1,
            RepoForkedIcon: __vue_component__$2,
            StarIcon: __vue_component__$3,
            SyncIcon: __vue_component__$4
        };
    });

    var GitHubButton = /** @class */ (function (_super) {
        __extends(GitHubButton, _super);
        function GitHubButton() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(GitHubButton.prototype, "iconComponentName", {
            get: function () {
                return this.icon + "-icon";
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GitHubButton.prototype, "hasCount", {
            get: function () {
                var count = this.count;
                // Show count when count exist and greater than or equal to 0
                return isset(count) && (count >= 0);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GitHubButton.prototype, "hasCountLink", {
            get: function () {
                var countLink = this.countLink;
                return isset(countLink);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GitHubButton.prototype, "fullLink", {
            get: function () {
                return GH_URL + "/" + this.link;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GitHubButton.prototype, "fullCountLink", {
            get: function () {
                var countLink = this.countLink;
                if (this.hasCountLink) {
                    return GH_URL + "/" + countLink;
                }
                else {
                    return 'javascript:void(0);';
                }
            },
            enumerable: false,
            configurable: true
        });
        __decorate([
            Prop({ type: String, required: true })
        ], GitHubButton.prototype, "icon", void 0);
        __decorate([
            Prop({ type: String, required: true })
        ], GitHubButton.prototype, "link", void 0);
        __decorate([
            Prop({ type: Boolean, default: false })
        ], GitHubButton.prototype, "isLoading", void 0);
        __decorate([
            Prop({ type: Boolean, default: false })
        ], GitHubButton.prototype, "reverse", void 0);
        __decorate([
            Prop({ type: Number, default: 0 })
        ], GitHubButton.prototype, "count", void 0);
        __decorate([
            Prop({ type: String, default: '' })
        ], GitHubButton.prototype, "countLink", void 0);
        GitHubButton = __decorate([
            Component({
                name: 'GitHubButton',
                components: getIconComponents(),
                filters: {
                    formatNumber: function (value) {
                        if ((typeof value !== 'undefined') && (value != null)) {
                            return formatThousands(value, ',');
                        }
                        else {
                            return value;
                        }
                    }
                }
            })
        ], GitHubButton);
        return GitHubButton;
    }(Vue));

    /* script */
    const __vue_script__$5 = GitHubButton;

    /* template */
    var __vue_render__$5 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"gh-button-container",class:{reverse: _vm.reverse}},[(!_vm.isLoading)?[_c('a',{staticClass:"gh-button",class:{ 'with-count': _vm.hasCount,reverse: _vm.reverse },attrs:{"href":_vm.fullLink,"target":"_blank","rel":"noopener"}},[_c(_vm.iconComponentName,{tag:"component"}),_vm._v(" "),_vm._t("default")],2),_vm._v(" "),(_vm.hasCount)?_c('a',{staticClass:"social-count",class:{reverse: _vm.reverse},attrs:{"href":_vm.fullCountLink,"target":_vm.hasCountLink ? '_blank' : null,"rel":"noopener"}},[_vm._v("\n\t\t\t"+_vm._s(_vm._f("formatNumber")(_vm.count))+"\n\t\t")]):_vm._e()]:[_c('a',{staticClass:"gh-button"},[_c('sync-icon')],1)]],2)};
    var __vue_staticRenderFns__$5 = [];

      /* style */
      const __vue_inject_styles__$5 = undefined;
      /* scoped */
      const __vue_scope_id__$5 = undefined;
      /* module identifier */
      const __vue_module_identifier__$5 = undefined;
      /* functional template */
      const __vue_is_functional_template__$5 = false;
      /* style inject */
      
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$5 = /*#__PURE__*/normalizeComponent(
        { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
        __vue_inject_styles__$5,
        __vue_script__$5,
        __vue_scope_id__$5,
        __vue_is_functional_template__$5,
        __vue_module_identifier__$5,
        false,
        undefined,
        undefined,
        undefined
      );

    /**
     * Vue GitHub buttons options store.
     *
     * @export
     * @class OptionsStore
     */
    var OptionsStore = /** @class */ (function () {
        function OptionsStore() {
            this._options = {
                useCache: true
            };
        }
        Object.defineProperty(OptionsStore.prototype, "value", {
            /**
             * Options value
             *
             * @type {Options}
             * @memberof OptionsStore
             */
            get: function () {
                return this._options;
            },
            set: function (options) {
                this._options = options;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Get an option value.
         *
         * @template K Type of option
         * @param {K} optionName Option name
         * @returns {Options[K]}
         * @memberof OptionsStore
         */
        OptionsStore.prototype.getOption = function (optionName) {
            return this._options[optionName];
        };
        /**
         * Set an option value.
         *
         * @template K Type of option
         * @param {K} optionName Option name
         * @param {Options[K]} optionValue New option value
         * @memberof OptionsStore
         */
        OptionsStore.prototype.setOption = function (optionName, optionValue) {
            this._options[optionName] = optionValue;
        };
        return OptionsStore;
    }());
    /**
     * Vue GitHub buttons global options store.
     */
    var optionsStore = new OptionsStore();

    var GetCountMixin = /** @class */ (function (_super) {
        __extends(GetCountMixin, _super);
        function GetCountMixin() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Get button count via GitHub API.
         *
         * @param {string} path Request path
         * @param {string} key The property of response that contain count result
         * @param {boolean} [useCache=true] Enable caching
         * @returns {Promise<number>}
         * @memberof GetCountMixin
         */
        GetCountMixin.prototype.getCount = function (path, key, useCache) {
            if (useCache === void 0) { useCache = true; }
            return __awaiter(this, void 0, void 0, function () {
                var res, err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, ghGet(path, useCache)];
                        case 1:
                            res = _a.sent();
                            return [2 /*return*/, parseInt(res[key], 10)];
                        case 2:
                            err_1 = _a.sent();
                            console.error(err_1);
                            /*
                             * Do not show count number when error.
                             * Set it to -1 to hide count number.
                             */
                            return [2 /*return*/, -1];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        GetCountMixin = __decorate([
            Component
        ], GetCountMixin);
        return GetCountMixin;
    }(Vue));

    var RepoMixin = /** @class */ (function (_super) {
        __extends(RepoMixin, _super);
        function RepoMixin() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.count = null;
            return _this;
        }
        Object.defineProperty(RepoMixin.prototype, "isLoading", {
            get: function () {
                if (this.showCount) {
                    return this.count == null;
                }
                else {
                    return false;
                }
            },
            enumerable: false,
            configurable: true
        });
        __decorate([
            Prop({ type: String, required: true })
        ], RepoMixin.prototype, "slug", void 0);
        __decorate([
            Prop({ type: String, required: false })
        ], RepoMixin.prototype, "icon", void 0);
        __decorate([
            Prop({ type: Boolean, default: false })
        ], RepoMixin.prototype, "showCount", void 0);
        __decorate([
            Prop({ type: Boolean, default: false })
        ], RepoMixin.prototype, "reverse", void 0);
        RepoMixin = __decorate([
            Component
        ], RepoMixin);
        return RepoMixin;
    }(Vue));

    var UserMixin = /** @class */ (function (_super) {
        __extends(UserMixin, _super);
        function UserMixin() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.count = null;
            return _this;
        }
        Object.defineProperty(UserMixin.prototype, "isLoading", {
            get: function () {
                if (this.showCount) {
                    return this.count == null;
                }
                else {
                    return false;
                }
            },
            enumerable: false,
            configurable: true
        });
        __decorate([
            Prop({ type: String, required: true })
        ], UserMixin.prototype, "user", void 0);
        __decorate([
            Prop({ type: Boolean, default: false })
        ], UserMixin.prototype, "showCount", void 0);
        UserMixin = __decorate([
            Component
        ], UserMixin);
        return UserMixin;
    }(Vue));

    var GitHubButtonFollow = /** @class */ (function (_super) {
        __extends(GitHubButtonFollow, _super);
        function GitHubButtonFollow() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        GitHubButtonFollow.prototype.loadCount = function () {
            return __awaiter(this, void 0, void 0, function () {
                var useCache, requestPath, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!this.showCount) return [3 /*break*/, 2];
                            useCache = optionsStore.value.useCache;
                            requestPath = "/users/" + this.user;
                            _a = this;
                            return [4 /*yield*/, this.getCount(requestPath, 'followers', useCache)];
                        case 1:
                            _a.count = _b.sent();
                            _b.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            });
        };
        GitHubButtonFollow.prototype.created = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.loadCount()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        GitHubButtonFollow.prototype.updated = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.loadCount()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        GitHubButtonFollow = __decorate([
            Component({
                name: 'GitHubButtonFollow',
                components: {
                    'gh-button': __vue_component__$5
                }
            })
        ], GitHubButtonFollow);
        return GitHubButtonFollow;
    }(mixins(GetCountMixin, UserMixin)));

    /* script */
    const __vue_script__$6 = GitHubButtonFollow;

    /* template */
    var __vue_render__$6 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('gh-button',{attrs:{"is-loading":_vm.isLoading,"link":_vm.user,"count":_vm.count,"count-link":(_vm.user + "/followers"),"icon":"mark-github"}},[_vm._v("\n\tFollow\n")])};
    var __vue_staticRenderFns__$6 = [];

      /* style */
      const __vue_inject_styles__$6 = undefined;
      /* scoped */
      const __vue_scope_id__$6 = undefined;
      /* module identifier */
      const __vue_module_identifier__$6 = undefined;
      /* functional template */
      const __vue_is_functional_template__$6 = false;
      /* style inject */
      
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$6 = /*#__PURE__*/normalizeComponent(
        { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
        __vue_inject_styles__$6,
        __vue_script__$6,
        __vue_scope_id__$6,
        __vue_is_functional_template__$6,
        __vue_module_identifier__$6,
        false,
        undefined,
        undefined,
        undefined
      );

    var GitHubButtonFork = /** @class */ (function (_super) {
        __extends(GitHubButtonFork, _super);
        function GitHubButtonFork() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        GitHubButtonFork.prototype.loadCount = function () {
            return __awaiter(this, void 0, void 0, function () {
                var useCache, requestPath, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!this.showCount) return [3 /*break*/, 2];
                            useCache = optionsStore.value.useCache;
                            requestPath = "/repos/" + this.slug;
                            _a = this;
                            return [4 /*yield*/, this.getCount(requestPath, 'forks_count', useCache)];
                        case 1:
                            _a.count = _b.sent();
                            _b.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            });
        };
        GitHubButtonFork.prototype.created = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.loadCount()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        GitHubButtonFork.prototype.updated = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.loadCount()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        GitHubButtonFork = __decorate([
            Component({
                name: 'GitHubButtonFork',
                components: {
                    'gh-button': __vue_component__$5
                }
            })
        ], GitHubButtonFork);
        return GitHubButtonFork;
    }(mixins(GetCountMixin, RepoMixin)));

    /* script */
    const __vue_script__$7 = GitHubButtonFork;

    /* template */
    var __vue_render__$7 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('gh-button',{attrs:{"is-loading":_vm.isLoading,"link":(_vm.slug + "/fork"),"count":_vm.count,"count-link":(_vm.slug + "/network"),"icon":"repo-forked"}},[_vm._v("\n\tFork\n")])};
    var __vue_staticRenderFns__$7 = [];

      /* style */
      const __vue_inject_styles__$7 = undefined;
      /* scoped */
      const __vue_scope_id__$7 = undefined;
      /* module identifier */
      const __vue_module_identifier__$7 = undefined;
      /* functional template */
      const __vue_is_functional_template__$7 = false;
      /* style inject */
      
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$7 = /*#__PURE__*/normalizeComponent(
        { render: __vue_render__$7, staticRenderFns: __vue_staticRenderFns__$7 },
        __vue_inject_styles__$7,
        __vue_script__$7,
        __vue_scope_id__$7,
        __vue_is_functional_template__$7,
        __vue_module_identifier__$7,
        false,
        undefined,
        undefined,
        undefined
      );

    var GitHubButtonStar = /** @class */ (function (_super) {
        __extends(GitHubButtonStar, _super);
        function GitHubButtonStar() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        GitHubButtonStar.prototype.loadCount = function () {
            return __awaiter(this, void 0, void 0, function () {
                var useCache, requestPath, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!this.showCount) return [3 /*break*/, 2];
                            useCache = optionsStore.value.useCache;
                            requestPath = "/repos/" + this.slug;
                            _a = this;
                            return [4 /*yield*/, this.getCount(requestPath, 'stargazers_count', useCache)];
                        case 1:
                            _a.count = _b.sent();
                            _b.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            });
        };
        GitHubButtonStar.prototype.created = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.loadCount()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        GitHubButtonStar.prototype.updated = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.loadCount()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        GitHubButtonStar = __decorate([
            Component({
                name: 'GitHubButtonStar',
                components: {
                    'gh-button': __vue_component__$5
                }
            })
        ], GitHubButtonStar);
        return GitHubButtonStar;
    }(mixins(GetCountMixin, RepoMixin)));

    /* script */
    const __vue_script__$8 = GitHubButtonStar;

    /* template */
    var __vue_render__$8 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('gh-button',{attrs:{"is-loading":_vm.isLoading,"link":_vm.slug,"count":_vm.count,"count-link":(_vm.slug + "/stargazers"),"icon":_vm.icon || 'star',"reverse":_vm.reverse}},[_vm._t("default",[_vm._v("Star")])],2)};
    var __vue_staticRenderFns__$8 = [];

      /* style */
      const __vue_inject_styles__$8 = undefined;
      /* scoped */
      const __vue_scope_id__$8 = undefined;
      /* module identifier */
      const __vue_module_identifier__$8 = undefined;
      /* functional template */
      const __vue_is_functional_template__$8 = false;
      /* style inject */
      
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$8 = /*#__PURE__*/normalizeComponent(
        { render: __vue_render__$8, staticRenderFns: __vue_staticRenderFns__$8 },
        __vue_inject_styles__$8,
        __vue_script__$8,
        __vue_scope_id__$8,
        __vue_is_functional_template__$8,
        __vue_module_identifier__$8,
        false,
        undefined,
        undefined,
        undefined
      );

    var GitHubButtonWatch = /** @class */ (function (_super) {
        __extends(GitHubButtonWatch, _super);
        function GitHubButtonWatch() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        GitHubButtonWatch.prototype.loadCount = function () {
            return __awaiter(this, void 0, void 0, function () {
                var useCache, requestPath, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!this.showCount) return [3 /*break*/, 2];
                            useCache = optionsStore.value.useCache;
                            requestPath = "/repos/" + this.slug;
                            _a = this;
                            return [4 /*yield*/, this.getCount(requestPath, 'subscribers_count', useCache)];
                        case 1:
                            _a.count = _b.sent();
                            _b.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            });
        };
        GitHubButtonWatch.prototype.created = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.loadCount()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        GitHubButtonWatch.prototype.updated = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.loadCount()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        GitHubButtonWatch = __decorate([
            Component({
                name: 'GitHubButtonWatch',
                components: {
                    'gh-button': __vue_component__$5
                }
            })
        ], GitHubButtonWatch);
        return GitHubButtonWatch;
    }(mixins(GetCountMixin, RepoMixin)));

    /* script */
    const __vue_script__$9 = GitHubButtonWatch;

    /* template */
    var __vue_render__$9 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('gh-button',{attrs:{"is-loading":_vm.isLoading,"link":(_vm.slug + "/subscription"),"count":_vm.count,"count-link":(_vm.slug + "/watchers"),"icon":"eye"}},[_vm._v("\n\tWatch\n")])};
    var __vue_staticRenderFns__$9 = [];

      /* style */
      const __vue_inject_styles__$9 = undefined;
      /* scoped */
      const __vue_scope_id__$9 = undefined;
      /* module identifier */
      const __vue_module_identifier__$9 = undefined;
      /* functional template */
      const __vue_is_functional_template__$9 = false;
      /* style inject */
      
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__$9 = /*#__PURE__*/normalizeComponent(
        { render: __vue_render__$9, staticRenderFns: __vue_staticRenderFns__$9 },
        __vue_inject_styles__$9,
        __vue_script__$9,
        __vue_scope_id__$9,
        __vue_is_functional_template__$9,
        __vue_module_identifier__$9,
        false,
        undefined,
        undefined,
        undefined
      );

    /**
     * Install Vue GitHub buttons as Vue plugin.
     *
     * @param {Vue} vue A Vue instance.
     * @param {Object} [options={ useCache: true }] Options.
     */
    function install(vue, options) {
        if (options === void 0) { options = { useCache: true }; }
        optionsStore.value = options;
        vue.component('GhBtnsStar', __vue_component__$8);
        vue.component('GhBtnsFork', __vue_component__$7);
        vue.component('GhBtnsWatch', __vue_component__$9);
        vue.component('GhBtnsFollow', __vue_component__$6);
    }
    if (typeof window !== 'undefined' && window.Vue) {
        install(window.Vue);
    }
    var index = {
        install: install
    };

    return index;

}(Vue));
//# sourceMappingURL=vue-github-buttons.web.js.map

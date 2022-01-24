System.register(['./theme-2d172b3c.nomodule.js'], (function (exports) {
    'use strict';
    var getDefaultExportFromCjs, a, n;
    return {
        setters: [function (module) {
            getDefaultExportFromCjs = module.g;
            a = module.a;
            n = module.n;
        }],
        execute: (function () {

            exports('default', fluorescentVideo_es);

            var dist = {exports: {}};

            var Sister;

            /**
            * @link https://github.com/gajus/sister for the canonical source repository
            * @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
            */
            Sister = function () {
                var sister = {},
                    events = {};

                /**
                 * @name handler
                 * @function
                 * @param {Object} data Event data.
                 */

                /**
                 * @param {String} name Event name.
                 * @param {handler} handler
                 * @return {listener}
                 */
                sister.on = function (name, handler) {
                    var listener = {name: name, handler: handler};
                    events[name] = events[name] || [];
                    events[name].unshift(listener);
                    return listener;
                };

                /**
                 * @param {listener}
                 */
                sister.off = function (listener) {
                    var index = events[listener.name].indexOf(listener);

                    if (index !== -1) {
                        events[listener.name].splice(index, 1);
                    }
                };

                /**
                 * @param {String} name Event name.
                 * @param {Object} data Event data.
                 */
                sister.trigger = function (name, data) {
                    var listeners = events[name],
                        i;

                    if (listeners) {
                        i = listeners.length;
                        while (i--) {
                            listeners[i].handler(data);
                        }
                    }
                };

                return sister;
            };

            var sister = Sister;

            var loadYouTubeIframeApi = {exports: {}};

            var loadScript = function load (src, opts, cb) {
              var head = document.head || document.getElementsByTagName('head')[0];
              var script = document.createElement('script');

              if (typeof opts === 'function') {
                cb = opts;
                opts = {};
              }

              opts = opts || {};
              cb = cb || function() {};

              script.type = opts.type || 'text/javascript';
              script.charset = opts.charset || 'utf8';
              script.async = 'async' in opts ? !!opts.async : true;
              script.src = src;

              if (opts.attrs) {
                setAttributes(script, opts.attrs);
              }

              if (opts.text) {
                script.text = '' + opts.text;
              }

              var onend = 'onload' in script ? stdOnEnd : ieOnEnd;
              onend(script, cb);

              // some good legacy browsers (firefox) fail the 'in' detection above
              // so as a fallback we always set onload
              // old IE will ignore this and new IE will set onload
              if (!script.onload) {
                stdOnEnd(script, cb);
              }

              head.appendChild(script);
            };

            function setAttributes(script, attrs) {
              for (var attr in attrs) {
                script.setAttribute(attr, attrs[attr]);
              }
            }

            function stdOnEnd (script, cb) {
              script.onload = function () {
                this.onerror = this.onload = null;
                cb(null, script);
              };
              script.onerror = function () {
                // this.onload = null here is necessary
                // because even IE9 works not like others
                this.onerror = this.onload = null;
                cb(new Error('Failed to load ' + this.src), script);
              };
            }

            function ieOnEnd (script, cb) {
              script.onreadystatechange = function () {
                if (this.readyState != 'complete' && this.readyState != 'loaded') return
                this.onreadystatechange = null;
                cb(null, script); // there is no way to catch loading errors in IE8
              };
            }

            (function (module, exports) {

            Object.defineProperty(exports, "__esModule", {
              value: true
            });

            var _loadScript = loadScript;

            var _loadScript2 = _interopRequireDefault(_loadScript);

            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

            exports.default = function (emitter) {
              /**
               * A promise that is resolved when window.onYouTubeIframeAPIReady is called.
               * The promise is resolved with a reference to window.YT object.
               */
              var iframeAPIReady = new Promise(function (resolve) {
                if (window.YT && window.YT.Player && window.YT.Player instanceof Function) {
                  resolve(window.YT);

                  return;
                } else {
                  var protocol = window.location.protocol === 'http:' ? 'http:' : 'https:';

                  (0, _loadScript2.default)(protocol + '//www.youtube.com/iframe_api', function (error) {
                    if (error) {
                      emitter.trigger('error', error);
                    }
                  });
                }

                var previous = window.onYouTubeIframeAPIReady;

                // The API will call this function when page has finished downloading
                // the JavaScript for the player API.
                window.onYouTubeIframeAPIReady = function () {
                  if (previous) {
                    previous();
                  }

                  resolve(window.YT);
                };
              });

              return iframeAPIReady;
            };

            module.exports = exports['default'];
            }(loadYouTubeIframeApi, loadYouTubeIframeApi.exports));

            var YouTubePlayer = {exports: {}};

            var browser = {exports: {}};

            var debug = {exports: {}};

            /**
             * Helpers.
             */

            var s = 1000;
            var m = s * 60;
            var h = m * 60;
            var d = h * 24;
            var y = d * 365.25;

            /**
             * Parse or format the given `val`.
             *
             * Options:
             *
             *  - `long` verbose formatting [false]
             *
             * @param {String|Number} val
             * @param {Object} [options]
             * @throws {Error} throw an error if val is not a non-empty string or a number
             * @return {String|Number}
             * @api public
             */

            var ms = function(val, options) {
              options = options || {};
              var type = typeof val;
              if (type === 'string' && val.length > 0) {
                return parse(val);
              } else if (type === 'number' && isNaN(val) === false) {
                return options.long ? fmtLong(val) : fmtShort(val);
              }
              throw new Error(
                'val is not a non-empty string or a valid number. val=' +
                  JSON.stringify(val)
              );
            };

            /**
             * Parse the given `str` and return milliseconds.
             *
             * @param {String} str
             * @return {Number}
             * @api private
             */

            function parse(str) {
              str = String(str);
              if (str.length > 100) {
                return;
              }
              var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
                str
              );
              if (!match) {
                return;
              }
              var n = parseFloat(match[1]);
              var type = (match[2] || 'ms').toLowerCase();
              switch (type) {
                case 'years':
                case 'year':
                case 'yrs':
                case 'yr':
                case 'y':
                  return n * y;
                case 'days':
                case 'day':
                case 'd':
                  return n * d;
                case 'hours':
                case 'hour':
                case 'hrs':
                case 'hr':
                case 'h':
                  return n * h;
                case 'minutes':
                case 'minute':
                case 'mins':
                case 'min':
                case 'm':
                  return n * m;
                case 'seconds':
                case 'second':
                case 'secs':
                case 'sec':
                case 's':
                  return n * s;
                case 'milliseconds':
                case 'millisecond':
                case 'msecs':
                case 'msec':
                case 'ms':
                  return n;
                default:
                  return undefined;
              }
            }

            /**
             * Short format for `ms`.
             *
             * @param {Number} ms
             * @return {String}
             * @api private
             */

            function fmtShort(ms) {
              if (ms >= d) {
                return Math.round(ms / d) + 'd';
              }
              if (ms >= h) {
                return Math.round(ms / h) + 'h';
              }
              if (ms >= m) {
                return Math.round(ms / m) + 'm';
              }
              if (ms >= s) {
                return Math.round(ms / s) + 's';
              }
              return ms + 'ms';
            }

            /**
             * Long format for `ms`.
             *
             * @param {Number} ms
             * @return {String}
             * @api private
             */

            function fmtLong(ms) {
              return plural(ms, d, 'day') ||
                plural(ms, h, 'hour') ||
                plural(ms, m, 'minute') ||
                plural(ms, s, 'second') ||
                ms + ' ms';
            }

            /**
             * Pluralization helper.
             */

            function plural(ms, n, name) {
              if (ms < n) {
                return;
              }
              if (ms < n * 1.5) {
                return Math.floor(ms / n) + ' ' + name;
              }
              return Math.ceil(ms / n) + ' ' + name + 's';
            }

            (function (module, exports) {
            /**
             * This is the common logic for both the Node.js and web browser
             * implementations of `debug()`.
             *
             * Expose `debug()` as the module.
             */

            exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
            exports.coerce = coerce;
            exports.disable = disable;
            exports.enable = enable;
            exports.enabled = enabled;
            exports.humanize = ms;

            /**
             * The currently active debug mode names, and names to skip.
             */

            exports.names = [];
            exports.skips = [];

            /**
             * Map of special "%n" handling functions, for the debug "format" argument.
             *
             * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
             */

            exports.formatters = {};

            /**
             * Previous log timestamp.
             */

            var prevTime;

            /**
             * Select a color.
             * @param {String} namespace
             * @return {Number}
             * @api private
             */

            function selectColor(namespace) {
              var hash = 0, i;

              for (i in namespace) {
                hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
                hash |= 0; // Convert to 32bit integer
              }

              return exports.colors[Math.abs(hash) % exports.colors.length];
            }

            /**
             * Create a debugger with the given `namespace`.
             *
             * @param {String} namespace
             * @return {Function}
             * @api public
             */

            function createDebug(namespace) {

              function debug() {
                // disabled?
                if (!debug.enabled) return;

                var self = debug;

                // set `diff` timestamp
                var curr = +new Date();
                var ms = curr - (prevTime || curr);
                self.diff = ms;
                self.prev = prevTime;
                self.curr = curr;
                prevTime = curr;

                // turn the `arguments` into a proper Array
                var args = new Array(arguments.length);
                for (var i = 0; i < args.length; i++) {
                  args[i] = arguments[i];
                }

                args[0] = exports.coerce(args[0]);

                if ('string' !== typeof args[0]) {
                  // anything else let's inspect with %O
                  args.unshift('%O');
                }

                // apply any `formatters` transformations
                var index = 0;
                args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
                  // if we encounter an escaped % then don't increase the array index
                  if (match === '%%') return match;
                  index++;
                  var formatter = exports.formatters[format];
                  if ('function' === typeof formatter) {
                    var val = args[index];
                    match = formatter.call(self, val);

                    // now we need to remove `args[index]` since it's inlined in the `format`
                    args.splice(index, 1);
                    index--;
                  }
                  return match;
                });

                // apply env-specific formatting (colors, etc.)
                exports.formatArgs.call(self, args);

                var logFn = debug.log || exports.log || console.log.bind(console);
                logFn.apply(self, args);
              }

              debug.namespace = namespace;
              debug.enabled = exports.enabled(namespace);
              debug.useColors = exports.useColors();
              debug.color = selectColor(namespace);

              // env-specific initialization logic for debug instances
              if ('function' === typeof exports.init) {
                exports.init(debug);
              }

              return debug;
            }

            /**
             * Enables a debug mode by namespaces. This can include modes
             * separated by a colon and wildcards.
             *
             * @param {String} namespaces
             * @api public
             */

            function enable(namespaces) {
              exports.save(namespaces);

              exports.names = [];
              exports.skips = [];

              var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
              var len = split.length;

              for (var i = 0; i < len; i++) {
                if (!split[i]) continue; // ignore empty strings
                namespaces = split[i].replace(/\*/g, '.*?');
                if (namespaces[0] === '-') {
                  exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
                } else {
                  exports.names.push(new RegExp('^' + namespaces + '$'));
                }
              }
            }

            /**
             * Disable debug output.
             *
             * @api public
             */

            function disable() {
              exports.enable('');
            }

            /**
             * Returns true if the given mode name is enabled, false otherwise.
             *
             * @param {String} name
             * @return {Boolean}
             * @api public
             */

            function enabled(name) {
              var i, len;
              for (i = 0, len = exports.skips.length; i < len; i++) {
                if (exports.skips[i].test(name)) {
                  return false;
                }
              }
              for (i = 0, len = exports.names.length; i < len; i++) {
                if (exports.names[i].test(name)) {
                  return true;
                }
              }
              return false;
            }

            /**
             * Coerce `val`.
             *
             * @param {Mixed} val
             * @return {Mixed}
             * @api private
             */

            function coerce(val) {
              if (val instanceof Error) return val.stack || val.message;
              return val;
            }
            }(debug, debug.exports));

            /**
             * This is the web browser implementation of `debug()`.
             *
             * Expose `debug()` as the module.
             */

            (function (module, exports) {
            exports = module.exports = debug.exports;
            exports.log = log;
            exports.formatArgs = formatArgs;
            exports.save = save;
            exports.load = load;
            exports.useColors = useColors;
            exports.storage = 'undefined' != typeof chrome
                           && 'undefined' != typeof chrome.storage
                              ? chrome.storage.local
                              : localstorage();

            /**
             * Colors.
             */

            exports.colors = [
              'lightseagreen',
              'forestgreen',
              'goldenrod',
              'dodgerblue',
              'darkorchid',
              'crimson'
            ];

            /**
             * Currently only WebKit-based Web Inspectors, Firefox >= v31,
             * and the Firebug extension (any Firefox version) are known
             * to support "%c" CSS customizations.
             *
             * TODO: add a `localStorage` variable to explicitly enable/disable colors
             */

            function useColors() {
              // NB: In an Electron preload script, document will be defined but not fully
              // initialized. Since we know we're in Chrome, we'll just detect this case
              // explicitly
              if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
                return true;
              }

              // is webkit? http://stackoverflow.com/a/16459606/376773
              // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
              return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
                // is firebug? http://stackoverflow.com/a/398120/376773
                (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
                // is firefox >= v31?
                // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
                (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
                // double check webkit in userAgent just in case we are in a worker
                (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
            }

            /**
             * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
             */

            exports.formatters.j = function(v) {
              try {
                return JSON.stringify(v);
              } catch (err) {
                return '[UnexpectedJSONParseError]: ' + err.message;
              }
            };


            /**
             * Colorize log arguments if enabled.
             *
             * @api public
             */

            function formatArgs(args) {
              var useColors = this.useColors;

              args[0] = (useColors ? '%c' : '')
                + this.namespace
                + (useColors ? ' %c' : ' ')
                + args[0]
                + (useColors ? '%c ' : ' ')
                + '+' + exports.humanize(this.diff);

              if (!useColors) return;

              var c = 'color: ' + this.color;
              args.splice(1, 0, c, 'color: inherit');

              // the final "%c" is somewhat tricky, because there could be other
              // arguments passed either before or after the %c, so we need to
              // figure out the correct index to insert the CSS into
              var index = 0;
              var lastC = 0;
              args[0].replace(/%[a-zA-Z%]/g, function(match) {
                if ('%%' === match) return;
                index++;
                if ('%c' === match) {
                  // we only are interested in the *last* %c
                  // (the user may have provided their own)
                  lastC = index;
                }
              });

              args.splice(lastC, 0, c);
            }

            /**
             * Invokes `console.log()` when available.
             * No-op when `console.log` is not a "function".
             *
             * @api public
             */

            function log() {
              // this hackery is required for IE8/9, where
              // the `console.log` function doesn't have 'apply'
              return 'object' === typeof console
                && console.log
                && Function.prototype.apply.call(console.log, console, arguments);
            }

            /**
             * Save `namespaces`.
             *
             * @param {String} namespaces
             * @api private
             */

            function save(namespaces) {
              try {
                if (null == namespaces) {
                  exports.storage.removeItem('debug');
                } else {
                  exports.storage.debug = namespaces;
                }
              } catch(e) {}
            }

            /**
             * Load `namespaces`.
             *
             * @return {String} returns the previously persisted debug modes
             * @api private
             */

            function load() {
              var r;
              try {
                r = exports.storage.debug;
              } catch(e) {}

              // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
              if (!r && typeof process !== 'undefined' && 'env' in process) {
                r = process.env.DEBUG;
              }

              return r;
            }

            /**
             * Enable namespaces listed in `localStorage.debug` initially.
             */

            exports.enable(load());

            /**
             * Localstorage attempts to return the localstorage.
             *
             * This is necessary because safari throws
             * when a user disables cookies/localstorage
             * and you attempt to access it.
             *
             * @return {LocalStorage}
             * @api private
             */

            function localstorage() {
              try {
                return window.localStorage;
              } catch (e) {}
            }
            }(browser, browser.exports));

            var functionNames = {exports: {}};

            (function (module, exports) {

            Object.defineProperty(exports, "__esModule", {
              value: true
            });


            /**
             * @see https://developers.google.com/youtube/iframe_api_reference#Functions
             */
            exports.default = ['cueVideoById', 'loadVideoById', 'cueVideoByUrl', 'loadVideoByUrl', 'playVideo', 'pauseVideo', 'stopVideo', 'getVideoLoadedFraction', 'cuePlaylist', 'loadPlaylist', 'nextVideo', 'previousVideo', 'playVideoAt', 'setShuffle', 'setLoop', 'getPlaylist', 'getPlaylistIndex', 'setOption', 'mute', 'unMute', 'isMuted', 'setVolume', 'getVolume', 'seekTo', 'getPlayerState', 'getPlaybackRate', 'setPlaybackRate', 'getAvailablePlaybackRates', 'getPlaybackQuality', 'setPlaybackQuality', 'getAvailableQualityLevels', 'getCurrentTime', 'getDuration', 'removeEventListener', 'getVideoUrl', 'getVideoEmbedCode', 'getOptions', 'getOption', 'addEventListener', 'destroy', 'setSize', 'getIframe'];
            module.exports = exports['default'];
            }(functionNames, functionNames.exports));

            var eventNames = {exports: {}};

            (function (module, exports) {

            Object.defineProperty(exports, "__esModule", {
              value: true
            });


            /**
             * @see https://developers.google.com/youtube/iframe_api_reference#Events
             * `volumeChange` is not officially supported but seems to work
             * it emits an object: `{volume: 82.6923076923077, muted: false}`
             */
            exports.default = ['ready', 'stateChange', 'playbackQualityChange', 'playbackRateChange', 'error', 'apiChange', 'volumeChange'];
            module.exports = exports['default'];
            }(eventNames, eventNames.exports));

            var FunctionStateMap = {exports: {}};

            var PlayerStates = {exports: {}};

            (function (module, exports) {

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.default = {
              BUFFERING: 3,
              ENDED: 0,
              PAUSED: 2,
              PLAYING: 1,
              UNSTARTED: -1,
              VIDEO_CUED: 5
            };
            module.exports = exports["default"];
            }(PlayerStates, PlayerStates.exports));

            (function (module, exports) {

            Object.defineProperty(exports, "__esModule", {
              value: true
            });

            var _PlayerStates = PlayerStates.exports;

            var _PlayerStates2 = _interopRequireDefault(_PlayerStates);

            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

            exports.default = {
              pauseVideo: {
                acceptableStates: [_PlayerStates2.default.ENDED, _PlayerStates2.default.PAUSED],
                stateChangeRequired: false
              },
              playVideo: {
                acceptableStates: [_PlayerStates2.default.ENDED, _PlayerStates2.default.PLAYING],
                stateChangeRequired: false
              },
              seekTo: {
                acceptableStates: [_PlayerStates2.default.ENDED, _PlayerStates2.default.PLAYING, _PlayerStates2.default.PAUSED],
                stateChangeRequired: true,

                // TRICKY: `seekTo` may not cause a state change if no buffering is
                // required.
                timeout: 3000
              }
            };
            module.exports = exports['default'];
            }(FunctionStateMap, FunctionStateMap.exports));

            (function (module, exports) {

            Object.defineProperty(exports, "__esModule", {
              value: true
            });

            var _debug = browser.exports;

            var _debug2 = _interopRequireDefault(_debug);

            var _functionNames = functionNames.exports;

            var _functionNames2 = _interopRequireDefault(_functionNames);

            var _eventNames = eventNames.exports;

            var _eventNames2 = _interopRequireDefault(_eventNames);

            var _FunctionStateMap = FunctionStateMap.exports;

            var _FunctionStateMap2 = _interopRequireDefault(_FunctionStateMap);

            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

            /* eslint-disable promise/prefer-await-to-then */

            var debug = (0, _debug2.default)('youtube-player');

            var YouTubePlayer = {};

            /**
             * Construct an object that defines an event handler for all of the YouTube
             * player events. Proxy captured events through an event emitter.
             *
             * @todo Capture event parameters.
             * @see https://developers.google.com/youtube/iframe_api_reference#Events
             */
            YouTubePlayer.proxyEvents = function (emitter) {
              var events = {};

              var _loop = function _loop(eventName) {
                var onEventName = 'on' + eventName.slice(0, 1).toUpperCase() + eventName.slice(1);

                events[onEventName] = function (event) {
                  debug('event "%s"', onEventName, event);

                  emitter.trigger(eventName, event);
                };
              };

              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                for (var _iterator = _eventNames2.default[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var eventName = _step.value;

                  _loop(eventName);
                }
              } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                  }
                } finally {
                  if (_didIteratorError) {
                    throw _iteratorError;
                  }
                }
              }

              return events;
            };

            /**
             * Delays player API method execution until player state is ready.
             *
             * @todo Proxy all of the methods using Object.keys.
             * @todo See TRICKY below.
             * @param playerAPIReady Promise that resolves when player is ready.
             * @param strictState A flag designating whether or not to wait for
             * an acceptable state when calling supported functions.
             * @returns {Object}
             */
            YouTubePlayer.promisifyPlayer = function (playerAPIReady) {
              var strictState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

              var functions = {};

              var _loop2 = function _loop2(functionName) {
                if (strictState && _FunctionStateMap2.default[functionName]) {
                  functions[functionName] = function () {
                    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                      args[_key] = arguments[_key];
                    }

                    return playerAPIReady.then(function (player) {
                      var stateInfo = _FunctionStateMap2.default[functionName];
                      var playerState = player.getPlayerState();

                      // eslint-disable-next-line no-warning-comments
                      // TODO: Just spread the args into the function once Babel is fixed:
                      // https://github.com/babel/babel/issues/4270
                      //
                      // eslint-disable-next-line prefer-spread
                      var value = player[functionName].apply(player, args);

                      // TRICKY: For functions like `seekTo`, a change in state must be
                      // triggered given that the resulting state could match the initial
                      // state.
                      if (stateInfo.stateChangeRequired ||

                      // eslint-disable-next-line no-extra-parens
                      Array.isArray(stateInfo.acceptableStates) && stateInfo.acceptableStates.indexOf(playerState) === -1) {
                        return new Promise(function (resolve) {
                          var onPlayerStateChange = function onPlayerStateChange() {
                            var playerStateAfterChange = player.getPlayerState();

                            var timeout = void 0;

                            if (typeof stateInfo.timeout === 'number') {
                              timeout = setTimeout(function () {
                                player.removeEventListener('onStateChange', onPlayerStateChange);

                                resolve();
                              }, stateInfo.timeout);
                            }

                            if (Array.isArray(stateInfo.acceptableStates) && stateInfo.acceptableStates.indexOf(playerStateAfterChange) !== -1) {
                              player.removeEventListener('onStateChange', onPlayerStateChange);

                              clearTimeout(timeout);

                              resolve();
                            }
                          };

                          player.addEventListener('onStateChange', onPlayerStateChange);
                        }).then(function () {
                          return value;
                        });
                      }

                      return value;
                    });
                  };
                } else {
                  functions[functionName] = function () {
                    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                      args[_key2] = arguments[_key2];
                    }

                    return playerAPIReady.then(function (player) {
                      // eslint-disable-next-line no-warning-comments
                      // TODO: Just spread the args into the function once Babel is fixed:
                      // https://github.com/babel/babel/issues/4270
                      //
                      // eslint-disable-next-line prefer-spread
                      return player[functionName].apply(player, args);
                    });
                  };
                }
              };

              var _iteratorNormalCompletion2 = true;
              var _didIteratorError2 = false;
              var _iteratorError2 = undefined;

              try {
                for (var _iterator2 = _functionNames2.default[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  var functionName = _step2.value;

                  _loop2(functionName);
                }
              } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                  }
                } finally {
                  if (_didIteratorError2) {
                    throw _iteratorError2;
                  }
                }
              }

              return functions;
            };

            exports.default = YouTubePlayer;
            module.exports = exports['default'];
            }(YouTubePlayer, YouTubePlayer.exports));

            (function (module, exports) {

            Object.defineProperty(exports, "__esModule", {
              value: true
            });

            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

            var _sister = sister;

            var _sister2 = _interopRequireDefault(_sister);

            var _loadYouTubeIframeApi = loadYouTubeIframeApi.exports;

            var _loadYouTubeIframeApi2 = _interopRequireDefault(_loadYouTubeIframeApi);

            var _YouTubePlayer = YouTubePlayer.exports;

            var _YouTubePlayer2 = _interopRequireDefault(_YouTubePlayer);

            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

            /**
             * @typedef YT.Player
             * @see https://developers.google.com/youtube/iframe_api_reference
             * */

            /**
             * @see https://developers.google.com/youtube/iframe_api_reference#Loading_a_Video_Player
             */
            var youtubeIframeAPI = void 0;

            /**
             * A factory function used to produce an instance of YT.Player and queue function calls and proxy events of the resulting object.
             *
             * @param maybeElementId Either An existing YT.Player instance,
             * the DOM element or the id of the HTML element where the API will insert an <iframe>.
             * @param options See `options` (Ignored when using an existing YT.Player instance).
             * @param strictState A flag designating whether or not to wait for
             * an acceptable state when calling supported functions. Default: `false`.
             * See `FunctionStateMap.js` for supported functions and acceptable states.
             */

            exports.default = function (maybeElementId) {
              var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
              var strictState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

              var emitter = (0, _sister2.default)();

              if (!youtubeIframeAPI) {
                youtubeIframeAPI = (0, _loadYouTubeIframeApi2.default)(emitter);
              }

              if (options.events) {
                throw new Error('Event handlers cannot be overwritten.');
              }

              if (typeof maybeElementId === 'string' && !document.getElementById(maybeElementId)) {
                throw new Error('Element "' + maybeElementId + '" does not exist.');
              }

              options.events = _YouTubePlayer2.default.proxyEvents(emitter);

              var playerAPIReady = new Promise(function (resolve) {
                if ((typeof maybeElementId === 'undefined' ? 'undefined' : _typeof(maybeElementId)) === 'object' && maybeElementId.playVideo instanceof Function) {
                  var player = maybeElementId;

                  resolve(player);
                } else {
                  // asume maybeElementId can be rendered inside
                  // eslint-disable-next-line promise/catch-or-return
                  youtubeIframeAPI.then(function (YT) {
                    // eslint-disable-line promise/prefer-await-to-then
                    var player = new YT.Player(maybeElementId, options);

                    emitter.on('ready', function () {
                      resolve(player);
                    });

                    return null;
                  });
                }
              });

              var playerApi = _YouTubePlayer2.default.promisifyPlayer(playerAPIReady, strictState);

              playerApi.on = emitter.on;
              playerApi.off = emitter.off;

              return playerApi;
            };

            module.exports = exports['default'];
            }(dist, dist.exports));

            var t = /*@__PURE__*/getDefaultExportFromCjs(dist.exports);

            /*! @vimeo/player v2.16.2 | (c) 2021 Vimeo | MIT License | https://github.com/vimeo/player.js */
            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }

            function _defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }

            function _createClass(Constructor, protoProps, staticProps) {
              if (protoProps) _defineProperties(Constructor.prototype, protoProps);
              if (staticProps) _defineProperties(Constructor, staticProps);
              return Constructor;
            }

            /**
             * @module lib/functions
             */

            /**
             * Check to see this is a node environment.
             * @type {Boolean}
             */

            /* global global */
            var isNode = typeof global !== 'undefined' && {}.toString.call(global) === '[object global]';
            /**
             * Get the name of the method for a given getter or setter.
             *
             * @param {string} prop The name of the property.
             * @param {string} type Either “get” or “set”.
             * @return {string}
             */

            function getMethodName(prop, type) {
              if (prop.indexOf(type.toLowerCase()) === 0) {
                return prop;
              }

              return "".concat(type.toLowerCase()).concat(prop.substr(0, 1).toUpperCase()).concat(prop.substr(1));
            }
            /**
             * Check to see if the object is a DOM Element.
             *
             * @param {*} element The object to check.
             * @return {boolean}
             */

            function isDomElement(element) {
              return Boolean(element && element.nodeType === 1 && 'nodeName' in element && element.ownerDocument && element.ownerDocument.defaultView);
            }
            /**
             * Check to see whether the value is a number.
             *
             * @see http://dl.dropboxusercontent.com/u/35146/js/tests/isNumber.html
             * @param {*} value The value to check.
             * @param {boolean} integer Check if the value is an integer.
             * @return {boolean}
             */

            function isInteger(value) {
              // eslint-disable-next-line eqeqeq
              return !isNaN(parseFloat(value)) && isFinite(value) && Math.floor(value) == value;
            }
            /**
             * Check to see if the URL is a Vimeo url.
             *
             * @param {string} url The url string.
             * @return {boolean}
             */

            function isVimeoUrl(url) {
              return /^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(url);
            }
            /**
             * Get the Vimeo URL from an element.
             * The element must have either a data-vimeo-id or data-vimeo-url attribute.
             *
             * @param {object} oEmbedParameters The oEmbed parameters.
             * @return {string}
             */

            function getVimeoUrl() {
              var oEmbedParameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
              var id = oEmbedParameters.id;
              var url = oEmbedParameters.url;
              var idOrUrl = id || url;

              if (!idOrUrl) {
                throw new Error('An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.');
              }

              if (isInteger(idOrUrl)) {
                return "https://vimeo.com/".concat(idOrUrl);
              }

              if (isVimeoUrl(idOrUrl)) {
                return idOrUrl.replace('http:', 'https:');
              }

              if (id) {
                throw new TypeError("\u201C".concat(id, "\u201D is not a valid video id."));
              }

              throw new TypeError("\u201C".concat(idOrUrl, "\u201D is not a vimeo.com url."));
            }

            var arrayIndexOfSupport = typeof Array.prototype.indexOf !== 'undefined';
            var postMessageSupport = typeof window !== 'undefined' && typeof window.postMessage !== 'undefined';

            if (!isNode && (!arrayIndexOfSupport || !postMessageSupport)) {
              throw new Error('Sorry, the Vimeo Player API is not available in this browser.');
            }

            var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

            function createCommonjsModule(fn, module) {
            	return module = { exports: {} }, fn(module, module.exports), module.exports;
            }

            /*!
             * weakmap-polyfill v2.0.4 - ECMAScript6 WeakMap polyfill
             * https://github.com/polygonplanet/weakmap-polyfill
             * Copyright (c) 2015-2021 polygonplanet <polygon.planet.aqua@gmail.com>
             * @license MIT
             */
            (function (self) {

              if (self.WeakMap) {
                return;
              }

              var hasOwnProperty = Object.prototype.hasOwnProperty;

              var hasDefine = Object.defineProperty && function () {
                try {
                  // Avoid IE8's broken Object.defineProperty
                  return Object.defineProperty({}, 'x', {
                    value: 1
                  }).x === 1;
                } catch (e) {}
              }();

              var defineProperty = function (object, name, value) {
                if (hasDefine) {
                  Object.defineProperty(object, name, {
                    configurable: true,
                    writable: true,
                    value: value
                  });
                } else {
                  object[name] = value;
                }
              };

              self.WeakMap = function () {
                // ECMA-262 23.3 WeakMap Objects
                function WeakMap() {
                  if (this === void 0) {
                    throw new TypeError("Constructor WeakMap requires 'new'");
                  }

                  defineProperty(this, '_id', genId('_WeakMap')); // ECMA-262 23.3.1.1 WeakMap([iterable])

                  if (arguments.length > 0) {
                    // Currently, WeakMap `iterable` argument is not supported
                    throw new TypeError('WeakMap iterable is not supported');
                  }
                } // ECMA-262 23.3.3.2 WeakMap.prototype.delete(key)


                defineProperty(WeakMap.prototype, 'delete', function (key) {
                  checkInstance(this, 'delete');

                  if (!isObject(key)) {
                    return false;
                  }

                  var entry = key[this._id];

                  if (entry && entry[0] === key) {
                    delete key[this._id];
                    return true;
                  }

                  return false;
                }); // ECMA-262 23.3.3.3 WeakMap.prototype.get(key)

                defineProperty(WeakMap.prototype, 'get', function (key) {
                  checkInstance(this, 'get');

                  if (!isObject(key)) {
                    return void 0;
                  }

                  var entry = key[this._id];

                  if (entry && entry[0] === key) {
                    return entry[1];
                  }

                  return void 0;
                }); // ECMA-262 23.3.3.4 WeakMap.prototype.has(key)

                defineProperty(WeakMap.prototype, 'has', function (key) {
                  checkInstance(this, 'has');

                  if (!isObject(key)) {
                    return false;
                  }

                  var entry = key[this._id];

                  if (entry && entry[0] === key) {
                    return true;
                  }

                  return false;
                }); // ECMA-262 23.3.3.5 WeakMap.prototype.set(key, value)

                defineProperty(WeakMap.prototype, 'set', function (key, value) {
                  checkInstance(this, 'set');

                  if (!isObject(key)) {
                    throw new TypeError('Invalid value used as weak map key');
                  }

                  var entry = key[this._id];

                  if (entry && entry[0] === key) {
                    entry[1] = value;
                    return this;
                  }

                  defineProperty(key, this._id, [key, value]);
                  return this;
                });

                function checkInstance(x, methodName) {
                  if (!isObject(x) || !hasOwnProperty.call(x, '_id')) {
                    throw new TypeError(methodName + ' method called on incompatible receiver ' + typeof x);
                  }
                }

                function genId(prefix) {
                  return prefix + '_' + rand() + '.' + rand();
                }

                function rand() {
                  return Math.random().toString().substring(2);
                }

                defineProperty(WeakMap, '_polyfill', true);
                return WeakMap;
              }();

              function isObject(x) {
                return Object(x) === x;
              }
            })(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof commonjsGlobal !== 'undefined' ? commonjsGlobal : commonjsGlobal);

            var npo_src = createCommonjsModule(function (module) {
            /*! Native Promise Only
                v0.8.1 (c) Kyle Simpson
                MIT License: http://getify.mit-license.org
            */
            (function UMD(name, context, definition) {
              // special form of UMD for polyfilling across evironments
              context[name] = context[name] || definition();

              if ( module.exports) {
                module.exports = context[name];
              }
            })("Promise", typeof commonjsGlobal != "undefined" ? commonjsGlobal : commonjsGlobal, function DEF() {

              var builtInProp,
                  cycle,
                  scheduling_queue,
                  ToString = Object.prototype.toString,
                  timer = typeof setImmediate != "undefined" ? function timer(fn) {
                return setImmediate(fn);
              } : setTimeout; // dammit, IE8.

              try {
                Object.defineProperty({}, "x", {});

                builtInProp = function builtInProp(obj, name, val, config) {
                  return Object.defineProperty(obj, name, {
                    value: val,
                    writable: true,
                    configurable: config !== false
                  });
                };
              } catch (err) {
                builtInProp = function builtInProp(obj, name, val) {
                  obj[name] = val;
                  return obj;
                };
              } // Note: using a queue instead of array for efficiency


              scheduling_queue = function Queue() {
                var first, last, item;

                function Item(fn, self) {
                  this.fn = fn;
                  this.self = self;
                  this.next = void 0;
                }

                return {
                  add: function add(fn, self) {
                    item = new Item(fn, self);

                    if (last) {
                      last.next = item;
                    } else {
                      first = item;
                    }

                    last = item;
                    item = void 0;
                  },
                  drain: function drain() {
                    var f = first;
                    first = last = cycle = void 0;

                    while (f) {
                      f.fn.call(f.self);
                      f = f.next;
                    }
                  }
                };
              }();

              function schedule(fn, self) {
                scheduling_queue.add(fn, self);

                if (!cycle) {
                  cycle = timer(scheduling_queue.drain);
                }
              } // promise duck typing


              function isThenable(o) {
                var _then,
                    o_type = typeof o;

                if (o != null && (o_type == "object" || o_type == "function")) {
                  _then = o.then;
                }

                return typeof _then == "function" ? _then : false;
              }

              function notify() {
                for (var i = 0; i < this.chain.length; i++) {
                  notifyIsolated(this, this.state === 1 ? this.chain[i].success : this.chain[i].failure, this.chain[i]);
                }

                this.chain.length = 0;
              } // NOTE: This is a separate function to isolate
              // the `try..catch` so that other code can be
              // optimized better


              function notifyIsolated(self, cb, chain) {
                var ret, _then;

                try {
                  if (cb === false) {
                    chain.reject(self.msg);
                  } else {
                    if (cb === true) {
                      ret = self.msg;
                    } else {
                      ret = cb.call(void 0, self.msg);
                    }

                    if (ret === chain.promise) {
                      chain.reject(TypeError("Promise-chain cycle"));
                    } else if (_then = isThenable(ret)) {
                      _then.call(ret, chain.resolve, chain.reject);
                    } else {
                      chain.resolve(ret);
                    }
                  }
                } catch (err) {
                  chain.reject(err);
                }
              }

              function resolve(msg) {
                var _then,
                    self = this; // already triggered?


                if (self.triggered) {
                  return;
                }

                self.triggered = true; // unwrap

                if (self.def) {
                  self = self.def;
                }

                try {
                  if (_then = isThenable(msg)) {
                    schedule(function () {
                      var def_wrapper = new MakeDefWrapper(self);

                      try {
                        _then.call(msg, function $resolve$() {
                          resolve.apply(def_wrapper, arguments);
                        }, function $reject$() {
                          reject.apply(def_wrapper, arguments);
                        });
                      } catch (err) {
                        reject.call(def_wrapper, err);
                      }
                    });
                  } else {
                    self.msg = msg;
                    self.state = 1;

                    if (self.chain.length > 0) {
                      schedule(notify, self);
                    }
                  }
                } catch (err) {
                  reject.call(new MakeDefWrapper(self), err);
                }
              }

              function reject(msg) {
                var self = this; // already triggered?

                if (self.triggered) {
                  return;
                }

                self.triggered = true; // unwrap

                if (self.def) {
                  self = self.def;
                }

                self.msg = msg;
                self.state = 2;

                if (self.chain.length > 0) {
                  schedule(notify, self);
                }
              }

              function iteratePromises(Constructor, arr, resolver, rejecter) {
                for (var idx = 0; idx < arr.length; idx++) {
                  (function IIFE(idx) {
                    Constructor.resolve(arr[idx]).then(function $resolver$(msg) {
                      resolver(idx, msg);
                    }, rejecter);
                  })(idx);
                }
              }

              function MakeDefWrapper(self) {
                this.def = self;
                this.triggered = false;
              }

              function MakeDef(self) {
                this.promise = self;
                this.state = 0;
                this.triggered = false;
                this.chain = [];
                this.msg = void 0;
              }

              function Promise(executor) {
                if (typeof executor != "function") {
                  throw TypeError("Not a function");
                }

                if (this.__NPO__ !== 0) {
                  throw TypeError("Not a promise");
                } // instance shadowing the inherited "brand"
                // to signal an already "initialized" promise


                this.__NPO__ = 1;
                var def = new MakeDef(this);

                this["then"] = function then(success, failure) {
                  var o = {
                    success: typeof success == "function" ? success : true,
                    failure: typeof failure == "function" ? failure : false
                  }; // Note: `then(..)` itself can be borrowed to be used against
                  // a different promise constructor for making the chained promise,
                  // by substituting a different `this` binding.

                  o.promise = new this.constructor(function extractChain(resolve, reject) {
                    if (typeof resolve != "function" || typeof reject != "function") {
                      throw TypeError("Not a function");
                    }

                    o.resolve = resolve;
                    o.reject = reject;
                  });
                  def.chain.push(o);

                  if (def.state !== 0) {
                    schedule(notify, def);
                  }

                  return o.promise;
                };

                this["catch"] = function $catch$(failure) {
                  return this.then(void 0, failure);
                };

                try {
                  executor.call(void 0, function publicResolve(msg) {
                    resolve.call(def, msg);
                  }, function publicReject(msg) {
                    reject.call(def, msg);
                  });
                } catch (err) {
                  reject.call(def, err);
                }
              }

              var PromisePrototype = builtInProp({}, "constructor", Promise,
              /*configurable=*/
              false); // Note: Android 4 cannot use `Object.defineProperty(..)` here

              Promise.prototype = PromisePrototype; // built-in "brand" to signal an "uninitialized" promise

              builtInProp(PromisePrototype, "__NPO__", 0,
              /*configurable=*/
              false);
              builtInProp(Promise, "resolve", function Promise$resolve(msg) {
                var Constructor = this; // spec mandated checks
                // note: best "isPromise" check that's practical for now

                if (msg && typeof msg == "object" && msg.__NPO__ === 1) {
                  return msg;
                }

                return new Constructor(function executor(resolve, reject) {
                  if (typeof resolve != "function" || typeof reject != "function") {
                    throw TypeError("Not a function");
                  }

                  resolve(msg);
                });
              });
              builtInProp(Promise, "reject", function Promise$reject(msg) {
                return new this(function executor(resolve, reject) {
                  if (typeof resolve != "function" || typeof reject != "function") {
                    throw TypeError("Not a function");
                  }

                  reject(msg);
                });
              });
              builtInProp(Promise, "all", function Promise$all(arr) {
                var Constructor = this; // spec mandated checks

                if (ToString.call(arr) != "[object Array]") {
                  return Constructor.reject(TypeError("Not an array"));
                }

                if (arr.length === 0) {
                  return Constructor.resolve([]);
                }

                return new Constructor(function executor(resolve, reject) {
                  if (typeof resolve != "function" || typeof reject != "function") {
                    throw TypeError("Not a function");
                  }

                  var len = arr.length,
                      msgs = Array(len),
                      count = 0;
                  iteratePromises(Constructor, arr, function resolver(idx, msg) {
                    msgs[idx] = msg;

                    if (++count === len) {
                      resolve(msgs);
                    }
                  }, reject);
                });
              });
              builtInProp(Promise, "race", function Promise$race(arr) {
                var Constructor = this; // spec mandated checks

                if (ToString.call(arr) != "[object Array]") {
                  return Constructor.reject(TypeError("Not an array"));
                }

                return new Constructor(function executor(resolve, reject) {
                  if (typeof resolve != "function" || typeof reject != "function") {
                    throw TypeError("Not a function");
                  }

                  iteratePromises(Constructor, arr, function resolver(idx, msg) {
                    resolve(msg);
                  }, reject);
                });
              });
              return Promise;
            });
            });

            /**
             * @module lib/callbacks
             */
            var callbackMap = new WeakMap();
            /**
             * Store a callback for a method or event for a player.
             *
             * @param {Player} player The player object.
             * @param {string} name The method or event name.
             * @param {(function(this:Player, *): void|{resolve: function, reject: function})} callback
             *        The callback to call or an object with resolve and reject functions for a promise.
             * @return {void}
             */

            function storeCallback(player, name, callback) {
              var playerCallbacks = callbackMap.get(player.element) || {};

              if (!(name in playerCallbacks)) {
                playerCallbacks[name] = [];
              }

              playerCallbacks[name].push(callback);
              callbackMap.set(player.element, playerCallbacks);
            }
            /**
             * Get the callbacks for a player and event or method.
             *
             * @param {Player} player The player object.
             * @param {string} name The method or event name
             * @return {function[]}
             */

            function getCallbacks(player, name) {
              var playerCallbacks = callbackMap.get(player.element) || {};
              return playerCallbacks[name] || [];
            }
            /**
             * Remove a stored callback for a method or event for a player.
             *
             * @param {Player} player The player object.
             * @param {string} name The method or event name
             * @param {function} [callback] The specific callback to remove.
             * @return {boolean} Was this the last callback?
             */

            function removeCallback(player, name, callback) {
              var playerCallbacks = callbackMap.get(player.element) || {};

              if (!playerCallbacks[name]) {
                return true;
              } // If no callback is passed, remove all callbacks for the event


              if (!callback) {
                playerCallbacks[name] = [];
                callbackMap.set(player.element, playerCallbacks);
                return true;
              }

              var index = playerCallbacks[name].indexOf(callback);

              if (index !== -1) {
                playerCallbacks[name].splice(index, 1);
              }

              callbackMap.set(player.element, playerCallbacks);
              return playerCallbacks[name] && playerCallbacks[name].length === 0;
            }
            /**
             * Return the first stored callback for a player and event or method.
             *
             * @param {Player} player The player object.
             * @param {string} name The method or event name.
             * @return {function} The callback, or false if there were none
             */

            function shiftCallbacks(player, name) {
              var playerCallbacks = getCallbacks(player, name);

              if (playerCallbacks.length < 1) {
                return false;
              }

              var callback = playerCallbacks.shift();
              removeCallback(player, name, callback);
              return callback;
            }
            /**
             * Move callbacks associated with an element to another element.
             *
             * @param {HTMLElement} oldElement The old element.
             * @param {HTMLElement} newElement The new element.
             * @return {void}
             */

            function swapCallbacks(oldElement, newElement) {
              var playerCallbacks = callbackMap.get(oldElement);
              callbackMap.set(newElement, playerCallbacks);
              callbackMap.delete(oldElement);
            }

            /**
             * @module lib/embed
             */
            var oEmbedParameters = ['autopause', 'autoplay', 'background', 'byline', 'color', 'controls', 'dnt', 'height', 'id', 'keyboard', 'loop', 'maxheight', 'maxwidth', 'muted', 'playsinline', 'portrait', 'responsive', 'speed', 'texttrack', 'title', 'transparent', 'url', 'width'];
            /**
             * Get the 'data-vimeo'-prefixed attributes from an element as an object.
             *
             * @param {HTMLElement} element The element.
             * @param {Object} [defaults={}] The default values to use.
             * @return {Object<string, string>}
             */

            function getOEmbedParameters(element) {
              var defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
              return oEmbedParameters.reduce(function (params, param) {
                var value = element.getAttribute("data-vimeo-".concat(param));

                if (value || value === '') {
                  params[param] = value === '' ? 1 : value;
                }

                return params;
              }, defaults);
            }
            /**
             * Create an embed from oEmbed data inside an element.
             *
             * @param {object} data The oEmbed data.
             * @param {HTMLElement} element The element to put the iframe in.
             * @return {HTMLIFrameElement} The iframe embed.
             */

            function createEmbed(_ref, element) {
              var html = _ref.html;

              if (!element) {
                throw new TypeError('An element must be provided');
              }

              if (element.getAttribute('data-vimeo-initialized') !== null) {
                return element.querySelector('iframe');
              }

              var div = document.createElement('div');
              div.innerHTML = html;
              element.appendChild(div.firstChild);
              element.setAttribute('data-vimeo-initialized', 'true');
              return element.querySelector('iframe');
            }
            /**
             * Make an oEmbed call for the specified URL.
             *
             * @param {string} videoUrl The vimeo.com url for the video.
             * @param {Object} [params] Parameters to pass to oEmbed.
             * @param {HTMLElement} element The element.
             * @return {Promise}
             */

            function getOEmbedData(videoUrl) {
              var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
              var element = arguments.length > 2 ? arguments[2] : undefined;
              return new Promise(function (resolve, reject) {
                if (!isVimeoUrl(videoUrl)) {
                  throw new TypeError("\u201C".concat(videoUrl, "\u201D is not a vimeo.com url."));
                }

                var url = "https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(videoUrl));

                for (var param in params) {
                  if (params.hasOwnProperty(param)) {
                    url += "&".concat(param, "=").concat(encodeURIComponent(params[param]));
                  }
                }

                var xhr = 'XDomainRequest' in window ? new XDomainRequest() : new XMLHttpRequest();
                xhr.open('GET', url, true);

                xhr.onload = function () {
                  if (xhr.status === 404) {
                    reject(new Error("\u201C".concat(videoUrl, "\u201D was not found.")));
                    return;
                  }

                  if (xhr.status === 403) {
                    reject(new Error("\u201C".concat(videoUrl, "\u201D is not embeddable.")));
                    return;
                  }

                  try {
                    var json = JSON.parse(xhr.responseText); // Check api response for 403 on oembed

                    if (json.domain_status_code === 403) {
                      // We still want to create the embed to give users visual feedback
                      createEmbed(json, element);
                      reject(new Error("\u201C".concat(videoUrl, "\u201D is not embeddable.")));
                      return;
                    }

                    resolve(json);
                  } catch (error) {
                    reject(error);
                  }
                };

                xhr.onerror = function () {
                  var status = xhr.status ? " (".concat(xhr.status, ")") : '';
                  reject(new Error("There was an error fetching the embed code from Vimeo".concat(status, ".")));
                };

                xhr.send();
              });
            }
            /**
             * Initialize all embeds within a specific element
             *
             * @param {HTMLElement} [parent=document] The parent element.
             * @return {void}
             */

            function initializeEmbeds() {
              var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
              var elements = [].slice.call(parent.querySelectorAll('[data-vimeo-id], [data-vimeo-url]'));

              var handleError = function handleError(error) {
                if ('console' in window && console.error) {
                  console.error("There was an error creating an embed: ".concat(error));
                }
              };

              elements.forEach(function (element) {
                try {
                  // Skip any that have data-vimeo-defer
                  if (element.getAttribute('data-vimeo-defer') !== null) {
                    return;
                  }

                  var params = getOEmbedParameters(element);
                  var url = getVimeoUrl(params);
                  getOEmbedData(url, params, element).then(function (data) {
                    return createEmbed(data, element);
                  }).catch(handleError);
                } catch (error) {
                  handleError(error);
                }
              });
            }
            /**
             * Resize embeds when messaged by the player.
             *
             * @param {HTMLElement} [parent=document] The parent element.
             * @return {void}
             */

            function resizeEmbeds() {
              var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;

              // Prevent execution if users include the player.js script multiple times.
              if (window.VimeoPlayerResizeEmbeds_) {
                return;
              }

              window.VimeoPlayerResizeEmbeds_ = true;

              var onMessage = function onMessage(event) {
                if (!isVimeoUrl(event.origin)) {
                  return;
                } // 'spacechange' is fired only on embeds with cards


                if (!event.data || event.data.event !== 'spacechange') {
                  return;
                }

                var iframes = parent.querySelectorAll('iframe');

                for (var i = 0; i < iframes.length; i++) {
                  if (iframes[i].contentWindow !== event.source) {
                    continue;
                  } // Change padding-bottom of the enclosing div to accommodate
                  // card carousel without distorting aspect ratio


                  var space = iframes[i].parentElement;
                  space.style.paddingBottom = "".concat(event.data.data[0].bottom, "px");
                  break;
                }
              };

              window.addEventListener('message', onMessage);
            }

            /**
             * @module lib/postmessage
             */
            /**
             * Parse a message received from postMessage.
             *
             * @param {*} data The data received from postMessage.
             * @return {object}
             */

            function parseMessageData(data) {
              if (typeof data === 'string') {
                try {
                  data = JSON.parse(data);
                } catch (error) {
                  // If the message cannot be parsed, throw the error as a warning
                  console.warn(error);
                  return {};
                }
              }

              return data;
            }
            /**
             * Post a message to the specified target.
             *
             * @param {Player} player The player object to use.
             * @param {string} method The API method to call.
             * @param {object} params The parameters to send to the player.
             * @return {void}
             */

            function postMessage(player, method, params) {
              if (!player.element.contentWindow || !player.element.contentWindow.postMessage) {
                return;
              }

              var message = {
                method: method
              };

              if (params !== undefined) {
                message.value = params;
              } // IE 8 and 9 do not support passing messages, so stringify them


              var ieVersion = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, '$1'));

              if (ieVersion >= 8 && ieVersion < 10) {
                message = JSON.stringify(message);
              }

              player.element.contentWindow.postMessage(message, player.origin);
            }
            /**
             * Parse the data received from a message event.
             *
             * @param {Player} player The player that received the message.
             * @param {(Object|string)} data The message data. Strings will be parsed into JSON.
             * @return {void}
             */

            function processData(player, data) {
              data = parseMessageData(data);
              var callbacks = [];
              var param;

              if (data.event) {
                if (data.event === 'error') {
                  var promises = getCallbacks(player, data.data.method);
                  promises.forEach(function (promise) {
                    var error = new Error(data.data.message);
                    error.name = data.data.name;
                    promise.reject(error);
                    removeCallback(player, data.data.method, promise);
                  });
                }

                callbacks = getCallbacks(player, "event:".concat(data.event));
                param = data.data;
              } else if (data.method) {
                var callback = shiftCallbacks(player, data.method);

                if (callback) {
                  callbacks.push(callback);
                  param = data.value;
                }
              }

              callbacks.forEach(function (callback) {
                try {
                  if (typeof callback === 'function') {
                    callback.call(player, param);
                    return;
                  }

                  callback.resolve(param);
                } catch (e) {// empty
                }
              });
            }

            /* MIT License

            Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

            Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

            The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
            Terms */
            function initializeScreenfull() {
              var fn = function () {
                var val;
                var fnMap = [['requestFullscreen', 'exitFullscreen', 'fullscreenElement', 'fullscreenEnabled', 'fullscreenchange', 'fullscreenerror'], // New WebKit
                ['webkitRequestFullscreen', 'webkitExitFullscreen', 'webkitFullscreenElement', 'webkitFullscreenEnabled', 'webkitfullscreenchange', 'webkitfullscreenerror'], // Old WebKit
                ['webkitRequestFullScreen', 'webkitCancelFullScreen', 'webkitCurrentFullScreenElement', 'webkitCancelFullScreen', 'webkitfullscreenchange', 'webkitfullscreenerror'], ['mozRequestFullScreen', 'mozCancelFullScreen', 'mozFullScreenElement', 'mozFullScreenEnabled', 'mozfullscreenchange', 'mozfullscreenerror'], ['msRequestFullscreen', 'msExitFullscreen', 'msFullscreenElement', 'msFullscreenEnabled', 'MSFullscreenChange', 'MSFullscreenError']];
                var i = 0;
                var l = fnMap.length;
                var ret = {};

                for (; i < l; i++) {
                  val = fnMap[i];

                  if (val && val[1] in document) {
                    for (i = 0; i < val.length; i++) {
                      ret[fnMap[0][i]] = val[i];
                    }

                    return ret;
                  }
                }

                return false;
              }();

              var eventNameMap = {
                fullscreenchange: fn.fullscreenchange,
                fullscreenerror: fn.fullscreenerror
              };
              var screenfull = {
                request: function request(element) {
                  return new Promise(function (resolve, reject) {
                    var onFullScreenEntered = function onFullScreenEntered() {
                      screenfull.off('fullscreenchange', onFullScreenEntered);
                      resolve();
                    };

                    screenfull.on('fullscreenchange', onFullScreenEntered);
                    element = element || document.documentElement;
                    var returnPromise = element[fn.requestFullscreen]();

                    if (returnPromise instanceof Promise) {
                      returnPromise.then(onFullScreenEntered).catch(reject);
                    }
                  });
                },
                exit: function exit() {
                  return new Promise(function (resolve, reject) {
                    if (!screenfull.isFullscreen) {
                      resolve();
                      return;
                    }

                    var onFullScreenExit = function onFullScreenExit() {
                      screenfull.off('fullscreenchange', onFullScreenExit);
                      resolve();
                    };

                    screenfull.on('fullscreenchange', onFullScreenExit);
                    var returnPromise = document[fn.exitFullscreen]();

                    if (returnPromise instanceof Promise) {
                      returnPromise.then(onFullScreenExit).catch(reject);
                    }
                  });
                },
                on: function on(event, callback) {
                  var eventName = eventNameMap[event];

                  if (eventName) {
                    document.addEventListener(eventName, callback);
                  }
                },
                off: function off(event, callback) {
                  var eventName = eventNameMap[event];

                  if (eventName) {
                    document.removeEventListener(eventName, callback);
                  }
                }
              };
              Object.defineProperties(screenfull, {
                isFullscreen: {
                  get: function get() {
                    return Boolean(document[fn.fullscreenElement]);
                  }
                },
                element: {
                  enumerable: true,
                  get: function get() {
                    return document[fn.fullscreenElement];
                  }
                },
                isEnabled: {
                  enumerable: true,
                  get: function get() {
                    // Coerce to boolean in case of old WebKit
                    return Boolean(document[fn.fullscreenEnabled]);
                  }
                }
              });
              return screenfull;
            }

            var playerMap = new WeakMap();
            var readyMap = new WeakMap();
            var screenfull = {};

            var Player = /*#__PURE__*/function () {
              /**
               * Create a Player.
               *
               * @param {(HTMLIFrameElement|HTMLElement|string|jQuery)} element A reference to the Vimeo
               *        player iframe, and id, or a jQuery object.
               * @param {object} [options] oEmbed parameters to use when creating an embed in the element.
               * @return {Player}
               */
              function Player(element) {
                var _this = this;

                var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

                _classCallCheck(this, Player);

                /* global jQuery */
                if (window.jQuery && element instanceof jQuery) {
                  if (element.length > 1 && window.console && console.warn) {
                    console.warn('A jQuery object with multiple elements was passed, using the first element.');
                  }

                  element = element[0];
                } // Find an element by ID


                if (typeof document !== 'undefined' && typeof element === 'string') {
                  element = document.getElementById(element);
                } // Not an element!


                if (!isDomElement(element)) {
                  throw new TypeError('You must pass either a valid element or a valid id.');
                } // Already initialized an embed in this div, so grab the iframe


                if (element.nodeName !== 'IFRAME') {
                  var iframe = element.querySelector('iframe');

                  if (iframe) {
                    element = iframe;
                  }
                } // iframe url is not a Vimeo url


                if (element.nodeName === 'IFRAME' && !isVimeoUrl(element.getAttribute('src') || '')) {
                  throw new Error('The player element passed isn’t a Vimeo embed.');
                } // If there is already a player object in the map, return that


                if (playerMap.has(element)) {
                  return playerMap.get(element);
                }

                this._window = element.ownerDocument.defaultView;
                this.element = element;
                this.origin = '*';
                var readyPromise = new npo_src(function (resolve, reject) {
                  _this._onMessage = function (event) {
                    if (!isVimeoUrl(event.origin) || _this.element.contentWindow !== event.source) {
                      return;
                    }

                    if (_this.origin === '*') {
                      _this.origin = event.origin;
                    }

                    var data = parseMessageData(event.data);
                    var isError = data && data.event === 'error';
                    var isReadyError = isError && data.data && data.data.method === 'ready';

                    if (isReadyError) {
                      var error = new Error(data.data.message);
                      error.name = data.data.name;
                      reject(error);
                      return;
                    }

                    var isReadyEvent = data && data.event === 'ready';
                    var isPingResponse = data && data.method === 'ping';

                    if (isReadyEvent || isPingResponse) {
                      _this.element.setAttribute('data-ready', 'true');

                      resolve();
                      return;
                    }

                    processData(_this, data);
                  };

                  _this._window.addEventListener('message', _this._onMessage);

                  if (_this.element.nodeName !== 'IFRAME') {
                    var params = getOEmbedParameters(element, options);
                    var url = getVimeoUrl(params);
                    getOEmbedData(url, params, element).then(function (data) {
                      var iframe = createEmbed(data, element); // Overwrite element with the new iframe,
                      // but store reference to the original element

                      _this.element = iframe;
                      _this._originalElement = element;
                      swapCallbacks(element, iframe);
                      playerMap.set(_this.element, _this);
                      return data;
                    }).catch(reject);
                  }
                }); // Store a copy of this Player in the map

                readyMap.set(this, readyPromise);
                playerMap.set(this.element, this); // Send a ping to the iframe so the ready promise will be resolved if
                // the player is already ready.

                if (this.element.nodeName === 'IFRAME') {
                  postMessage(this, 'ping');
                }

                if (screenfull.isEnabled) {
                  var exitFullscreen = function exitFullscreen() {
                    return screenfull.exit();
                  };

                  this.fullscreenchangeHandler = function () {
                    if (screenfull.isFullscreen) {
                      storeCallback(_this, 'event:exitFullscreen', exitFullscreen);
                    } else {
                      removeCallback(_this, 'event:exitFullscreen', exitFullscreen);
                    } // eslint-disable-next-line


                    _this.ready().then(function () {
                      postMessage(_this, 'fullscreenchange', screenfull.isFullscreen);
                    });
                  };

                  screenfull.on('fullscreenchange', this.fullscreenchangeHandler);
                }

                return this;
              }
              /**
               * Get a promise for a method.
               *
               * @param {string} name The API method to call.
               * @param {Object} [args={}] Arguments to send via postMessage.
               * @return {Promise}
               */


              _createClass(Player, [{
                key: "callMethod",
                value: function callMethod(name) {
                  var _this2 = this;

                  var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                  return new npo_src(function (resolve, reject) {
                    // We are storing the resolve/reject handlers to call later, so we
                    // can’t return here.
                    // eslint-disable-next-line promise/always-return
                    return _this2.ready().then(function () {
                      storeCallback(_this2, name, {
                        resolve: resolve,
                        reject: reject
                      });
                      postMessage(_this2, name, args);
                    }).catch(reject);
                  });
                }
                /**
                 * Get a promise for the value of a player property.
                 *
                 * @param {string} name The property name
                 * @return {Promise}
                 */

              }, {
                key: "get",
                value: function get(name) {
                  var _this3 = this;

                  return new npo_src(function (resolve, reject) {
                    name = getMethodName(name, 'get'); // We are storing the resolve/reject handlers to call later, so we
                    // can’t return here.
                    // eslint-disable-next-line promise/always-return

                    return _this3.ready().then(function () {
                      storeCallback(_this3, name, {
                        resolve: resolve,
                        reject: reject
                      });
                      postMessage(_this3, name);
                    }).catch(reject);
                  });
                }
                /**
                 * Get a promise for setting the value of a player property.
                 *
                 * @param {string} name The API method to call.
                 * @param {mixed} value The value to set.
                 * @return {Promise}
                 */

              }, {
                key: "set",
                value: function set(name, value) {
                  var _this4 = this;

                  return new npo_src(function (resolve, reject) {
                    name = getMethodName(name, 'set');

                    if (value === undefined || value === null) {
                      throw new TypeError('There must be a value to set.');
                    } // We are storing the resolve/reject handlers to call later, so we
                    // can’t return here.
                    // eslint-disable-next-line promise/always-return


                    return _this4.ready().then(function () {
                      storeCallback(_this4, name, {
                        resolve: resolve,
                        reject: reject
                      });
                      postMessage(_this4, name, value);
                    }).catch(reject);
                  });
                }
                /**
                 * Add an event listener for the specified event. Will call the
                 * callback with a single parameter, `data`, that contains the data for
                 * that event.
                 *
                 * @param {string} eventName The name of the event.
                 * @param {function(*)} callback The function to call when the event fires.
                 * @return {void}
                 */

              }, {
                key: "on",
                value: function on(eventName, callback) {
                  if (!eventName) {
                    throw new TypeError('You must pass an event name.');
                  }

                  if (!callback) {
                    throw new TypeError('You must pass a callback function.');
                  }

                  if (typeof callback !== 'function') {
                    throw new TypeError('The callback must be a function.');
                  }

                  var callbacks = getCallbacks(this, "event:".concat(eventName));

                  if (callbacks.length === 0) {
                    this.callMethod('addEventListener', eventName).catch(function () {// Ignore the error. There will be an error event fired that
                      // will trigger the error callback if they are listening.
                    });
                  }

                  storeCallback(this, "event:".concat(eventName), callback);
                }
                /**
                 * Remove an event listener for the specified event. Will remove all
                 * listeners for that event if a `callback` isn’t passed, or only that
                 * specific callback if it is passed.
                 *
                 * @param {string} eventName The name of the event.
                 * @param {function} [callback] The specific callback to remove.
                 * @return {void}
                 */

              }, {
                key: "off",
                value: function off(eventName, callback) {
                  if (!eventName) {
                    throw new TypeError('You must pass an event name.');
                  }

                  if (callback && typeof callback !== 'function') {
                    throw new TypeError('The callback must be a function.');
                  }

                  var lastCallback = removeCallback(this, "event:".concat(eventName), callback); // If there are no callbacks left, remove the listener

                  if (lastCallback) {
                    this.callMethod('removeEventListener', eventName).catch(function (e) {// Ignore the error. There will be an error event fired that
                      // will trigger the error callback if they are listening.
                    });
                  }
                }
                /**
                 * A promise to load a new video.
                 *
                 * @promise LoadVideoPromise
                 * @fulfill {number} The video with this id or url successfully loaded.
                 * @reject {TypeError} The id was not a number.
                 */

                /**
                 * Load a new video into this embed. The promise will be resolved if
                 * the video is successfully loaded, or it will be rejected if it could
                 * not be loaded.
                 *
                 * @param {number|string|object} options The id of the video, the url of the video, or an object with embed options.
                 * @return {LoadVideoPromise}
                 */

              }, {
                key: "loadVideo",
                value: function loadVideo(options) {
                  return this.callMethod('loadVideo', options);
                }
                /**
                 * A promise to perform an action when the Player is ready.
                 *
                 * @todo document errors
                 * @promise LoadVideoPromise
                 * @fulfill {void}
                 */

                /**
                 * Trigger a function when the player iframe has initialized. You do not
                 * need to wait for `ready` to trigger to begin adding event listeners
                 * or calling other methods.
                 *
                 * @return {ReadyPromise}
                 */

              }, {
                key: "ready",
                value: function ready() {
                  var readyPromise = readyMap.get(this) || new npo_src(function (resolve, reject) {
                    reject(new Error('Unknown player. Probably unloaded.'));
                  });
                  return npo_src.resolve(readyPromise);
                }
                /**
                 * A promise to add a cue point to the player.
                 *
                 * @promise AddCuePointPromise
                 * @fulfill {string} The id of the cue point to use for removeCuePoint.
                 * @reject {RangeError} the time was less than 0 or greater than the
                 *         video’s duration.
                 * @reject {UnsupportedError} Cue points are not supported with the current
                 *         player or browser.
                 */

                /**
                 * Add a cue point to the player.
                 *
                 * @param {number} time The time for the cue point.
                 * @param {object} [data] Arbitrary data to be returned with the cue point.
                 * @return {AddCuePointPromise}
                 */

              }, {
                key: "addCuePoint",
                value: function addCuePoint(time) {
                  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                  return this.callMethod('addCuePoint', {
                    time: time,
                    data: data
                  });
                }
                /**
                 * A promise to remove a cue point from the player.
                 *
                 * @promise AddCuePointPromise
                 * @fulfill {string} The id of the cue point that was removed.
                 * @reject {InvalidCuePoint} The cue point with the specified id was not
                 *         found.
                 * @reject {UnsupportedError} Cue points are not supported with the current
                 *         player or browser.
                 */

                /**
                 * Remove a cue point from the video.
                 *
                 * @param {string} id The id of the cue point to remove.
                 * @return {RemoveCuePointPromise}
                 */

              }, {
                key: "removeCuePoint",
                value: function removeCuePoint(id) {
                  return this.callMethod('removeCuePoint', id);
                }
                /**
                 * A representation of a text track on a video.
                 *
                 * @typedef {Object} VimeoTextTrack
                 * @property {string} language The ISO language code.
                 * @property {string} kind The kind of track it is (captions or subtitles).
                 * @property {string} label The human‐readable label for the track.
                 */

                /**
                 * A promise to enable a text track.
                 *
                 * @promise EnableTextTrackPromise
                 * @fulfill {VimeoTextTrack} The text track that was enabled.
                 * @reject {InvalidTrackLanguageError} No track was available with the
                 *         specified language.
                 * @reject {InvalidTrackError} No track was available with the specified
                 *         language and kind.
                 */

                /**
                 * Enable the text track with the specified language, and optionally the
                 * specified kind (captions or subtitles).
                 *
                 * When set via the API, the track language will not change the viewer’s
                 * stored preference.
                 *
                 * @param {string} language The two‐letter language code.
                 * @param {string} [kind] The kind of track to enable (captions or subtitles).
                 * @return {EnableTextTrackPromise}
                 */

              }, {
                key: "enableTextTrack",
                value: function enableTextTrack(language, kind) {
                  if (!language) {
                    throw new TypeError('You must pass a language.');
                  }

                  return this.callMethod('enableTextTrack', {
                    language: language,
                    kind: kind
                  });
                }
                /**
                 * A promise to disable the active text track.
                 *
                 * @promise DisableTextTrackPromise
                 * @fulfill {void} The track was disabled.
                 */

                /**
                 * Disable the currently-active text track.
                 *
                 * @return {DisableTextTrackPromise}
                 */

              }, {
                key: "disableTextTrack",
                value: function disableTextTrack() {
                  return this.callMethod('disableTextTrack');
                }
                /**
                 * A promise to pause the video.
                 *
                 * @promise PausePromise
                 * @fulfill {void} The video was paused.
                 */

                /**
                 * Pause the video if it’s playing.
                 *
                 * @return {PausePromise}
                 */

              }, {
                key: "pause",
                value: function pause() {
                  return this.callMethod('pause');
                }
                /**
                 * A promise to play the video.
                 *
                 * @promise PlayPromise
                 * @fulfill {void} The video was played.
                 */

                /**
                 * Play the video if it’s paused. **Note:** on iOS and some other
                 * mobile devices, you cannot programmatically trigger play. Once the
                 * viewer has tapped on the play button in the player, however, you
                 * will be able to use this function.
                 *
                 * @return {PlayPromise}
                 */

              }, {
                key: "play",
                value: function play() {
                  return this.callMethod('play');
                }
                /**
                 * Request that the player enters fullscreen.
                 * @return {Promise}
                 */

              }, {
                key: "requestFullscreen",
                value: function requestFullscreen() {
                  if (screenfull.isEnabled) {
                    return screenfull.request(this.element);
                  }

                  return this.callMethod('requestFullscreen');
                }
                /**
                 * Request that the player exits fullscreen.
                 * @return {Promise}
                 */

              }, {
                key: "exitFullscreen",
                value: function exitFullscreen() {
                  if (screenfull.isEnabled) {
                    return screenfull.exit();
                  }

                  return this.callMethod('exitFullscreen');
                }
                /**
                 * Returns true if the player is currently fullscreen.
                 * @return {Promise}
                 */

              }, {
                key: "getFullscreen",
                value: function getFullscreen() {
                  if (screenfull.isEnabled) {
                    return npo_src.resolve(screenfull.isFullscreen);
                  }

                  return this.get('fullscreen');
                }
                /**
                 * Request that the player enters picture-in-picture.
                 * @return {Promise}
                 */

              }, {
                key: "requestPictureInPicture",
                value: function requestPictureInPicture() {
                  return this.callMethod('requestPictureInPicture');
                }
                /**
                 * Request that the player exits picture-in-picture.
                 * @return {Promise}
                 */

              }, {
                key: "exitPictureInPicture",
                value: function exitPictureInPicture() {
                  return this.callMethod('exitPictureInPicture');
                }
                /**
                 * Returns true if the player is currently picture-in-picture.
                 * @return {Promise}
                 */

              }, {
                key: "getPictureInPicture",
                value: function getPictureInPicture() {
                  return this.get('pictureInPicture');
                }
                /**
                 * A promise to unload the video.
                 *
                 * @promise UnloadPromise
                 * @fulfill {void} The video was unloaded.
                 */

                /**
                 * Return the player to its initial state.
                 *
                 * @return {UnloadPromise}
                 */

              }, {
                key: "unload",
                value: function unload() {
                  return this.callMethod('unload');
                }
                /**
                 * Cleanup the player and remove it from the DOM
                 *
                 * It won't be usable and a new one should be constructed
                 *  in order to do any operations.
                 *
                 * @return {Promise}
                 */

              }, {
                key: "destroy",
                value: function destroy() {
                  var _this5 = this;

                  return new npo_src(function (resolve) {
                    readyMap.delete(_this5);
                    playerMap.delete(_this5.element);

                    if (_this5._originalElement) {
                      playerMap.delete(_this5._originalElement);

                      _this5._originalElement.removeAttribute('data-vimeo-initialized');
                    }

                    if (_this5.element && _this5.element.nodeName === 'IFRAME' && _this5.element.parentNode) {
                      // If we've added an additional wrapper div, remove that from the DOM.
                      // If not, just remove the iframe element.
                      if (_this5.element.parentNode.parentNode && _this5._originalElement && _this5._originalElement !== _this5.element.parentNode) {
                        _this5.element.parentNode.parentNode.removeChild(_this5.element.parentNode);
                      } else {
                        _this5.element.parentNode.removeChild(_this5.element);
                      }
                    } // If the clip is private there is a case where the element stays the
                    // div element. Destroy should reset the div and remove the iframe child.


                    if (_this5.element && _this5.element.nodeName === 'DIV' && _this5.element.parentNode) {
                      _this5.element.removeAttribute('data-vimeo-initialized');

                      var iframe = _this5.element.querySelector('iframe');

                      if (iframe && iframe.parentNode) {
                        // If we've added an additional wrapper div, remove that from the DOM.
                        // If not, just remove the iframe element.
                        if (iframe.parentNode.parentNode && _this5._originalElement && _this5._originalElement !== iframe.parentNode) {
                          iframe.parentNode.parentNode.removeChild(iframe.parentNode);
                        } else {
                          iframe.parentNode.removeChild(iframe);
                        }
                      }
                    }

                    _this5._window.removeEventListener('message', _this5._onMessage);

                    if (screenfull.isEnabled) {
                      screenfull.off('fullscreenchange', _this5.fullscreenchangeHandler);
                    }

                    resolve();
                  });
                }
                /**
                 * A promise to get the autopause behavior of the video.
                 *
                 * @promise GetAutopausePromise
                 * @fulfill {boolean} Whether autopause is turned on or off.
                 * @reject {UnsupportedError} Autopause is not supported with the current
                 *         player or browser.
                 */

                /**
                 * Get the autopause behavior for this player.
                 *
                 * @return {GetAutopausePromise}
                 */

              }, {
                key: "getAutopause",
                value: function getAutopause() {
                  return this.get('autopause');
                }
                /**
                 * A promise to set the autopause behavior of the video.
                 *
                 * @promise SetAutopausePromise
                 * @fulfill {boolean} Whether autopause is turned on or off.
                 * @reject {UnsupportedError} Autopause is not supported with the current
                 *         player or browser.
                 */

                /**
                 * Enable or disable the autopause behavior of this player.
                 *
                 * By default, when another video is played in the same browser, this
                 * player will automatically pause. Unless you have a specific reason
                 * for doing so, we recommend that you leave autopause set to the
                 * default (`true`).
                 *
                 * @param {boolean} autopause
                 * @return {SetAutopausePromise}
                 */

              }, {
                key: "setAutopause",
                value: function setAutopause(autopause) {
                  return this.set('autopause', autopause);
                }
                /**
                 * A promise to get the buffered property of the video.
                 *
                 * @promise GetBufferedPromise
                 * @fulfill {Array} Buffered Timeranges converted to an Array.
                 */

                /**
                 * Get the buffered property of the video.
                 *
                 * @return {GetBufferedPromise}
                 */

              }, {
                key: "getBuffered",
                value: function getBuffered() {
                  return this.get('buffered');
                }
                /**
                 * @typedef {Object} CameraProperties
                 * @prop {number} props.yaw - Number between 0 and 360.
                 * @prop {number} props.pitch - Number between -90 and 90.
                 * @prop {number} props.roll - Number between -180 and 180.
                 * @prop {number} props.fov - The field of view in degrees.
                 */

                /**
                 * A promise to get the camera properties of the player.
                 *
                 * @promise GetCameraPromise
                 * @fulfill {CameraProperties} The camera properties.
                 */

                /**
                 * For 360° videos get the camera properties for this player.
                 *
                 * @return {GetCameraPromise}
                 */

              }, {
                key: "getCameraProps",
                value: function getCameraProps() {
                  return this.get('cameraProps');
                }
                /**
                 * A promise to set the camera properties of the player.
                 *
                 * @promise SetCameraPromise
                 * @fulfill {Object} The camera was successfully set.
                 * @reject {RangeError} The range was out of bounds.
                 */

                /**
                 * For 360° videos set the camera properties for this player.
                 *
                 * @param {CameraProperties} camera The camera properties
                 * @return {SetCameraPromise}
                 */

              }, {
                key: "setCameraProps",
                value: function setCameraProps(camera) {
                  return this.set('cameraProps', camera);
                }
                /**
                 * A representation of a chapter.
                 *
                 * @typedef {Object} VimeoChapter
                 * @property {number} startTime The start time of the chapter.
                 * @property {object} title The title of the chapter.
                 * @property {number} index The place in the order of Chapters. Starts at 1.
                 */

                /**
                 * A promise to get chapters for the video.
                 *
                 * @promise GetChaptersPromise
                 * @fulfill {VimeoChapter[]} The chapters for the video.
                 */

                /**
                 * Get an array of all the chapters for the video.
                 *
                 * @return {GetChaptersPromise}
                 */

              }, {
                key: "getChapters",
                value: function getChapters() {
                  return this.get('chapters');
                }
                /**
                 * A promise to get the currently active chapter.
                 *
                 * @promise GetCurrentChaptersPromise
                 * @fulfill {VimeoChapter|undefined} The current chapter for the video.
                 */

                /**
                 * Get the currently active chapter for the video.
                 *
                 * @return {GetCurrentChaptersPromise}
                 */

              }, {
                key: "getCurrentChapter",
                value: function getCurrentChapter() {
                  return this.get('currentChapter');
                }
                /**
                 * A promise to get the color of the player.
                 *
                 * @promise GetColorPromise
                 * @fulfill {string} The hex color of the player.
                 */

                /**
                 * Get the color for this player.
                 *
                 * @return {GetColorPromise}
                 */

              }, {
                key: "getColor",
                value: function getColor() {
                  return this.get('color');
                }
                /**
                 * A promise to set the color of the player.
                 *
                 * @promise SetColorPromise
                 * @fulfill {string} The color was successfully set.
                 * @reject {TypeError} The string was not a valid hex or rgb color.
                 * @reject {ContrastError} The color was set, but the contrast is
                 *         outside of the acceptable range.
                 * @reject {EmbedSettingsError} The owner of the player has chosen to
                 *         use a specific color.
                 */

                /**
                 * Set the color of this player to a hex or rgb string. Setting the
                 * color may fail if the owner of the video has set their embed
                 * preferences to force a specific color.
                 *
                 * @param {string} color The hex or rgb color string to set.
                 * @return {SetColorPromise}
                 */

              }, {
                key: "setColor",
                value: function setColor(color) {
                  return this.set('color', color);
                }
                /**
                 * A representation of a cue point.
                 *
                 * @typedef {Object} VimeoCuePoint
                 * @property {number} time The time of the cue point.
                 * @property {object} data The data passed when adding the cue point.
                 * @property {string} id The unique id for use with removeCuePoint.
                 */

                /**
                 * A promise to get the cue points of a video.
                 *
                 * @promise GetCuePointsPromise
                 * @fulfill {VimeoCuePoint[]} The cue points added to the video.
                 * @reject {UnsupportedError} Cue points are not supported with the current
                 *         player or browser.
                 */

                /**
                 * Get an array of the cue points added to the video.
                 *
                 * @return {GetCuePointsPromise}
                 */

              }, {
                key: "getCuePoints",
                value: function getCuePoints() {
                  return this.get('cuePoints');
                }
                /**
                 * A promise to get the current time of the video.
                 *
                 * @promise GetCurrentTimePromise
                 * @fulfill {number} The current time in seconds.
                 */

                /**
                 * Get the current playback position in seconds.
                 *
                 * @return {GetCurrentTimePromise}
                 */

              }, {
                key: "getCurrentTime",
                value: function getCurrentTime() {
                  return this.get('currentTime');
                }
                /**
                 * A promise to set the current time of the video.
                 *
                 * @promise SetCurrentTimePromise
                 * @fulfill {number} The actual current time that was set.
                 * @reject {RangeError} the time was less than 0 or greater than the
                 *         video’s duration.
                 */

                /**
                 * Set the current playback position in seconds. If the player was
                 * paused, it will remain paused. Likewise, if the player was playing,
                 * it will resume playing once the video has buffered.
                 *
                 * You can provide an accurate time and the player will attempt to seek
                 * to as close to that time as possible. The exact time will be the
                 * fulfilled value of the promise.
                 *
                 * @param {number} currentTime
                 * @return {SetCurrentTimePromise}
                 */

              }, {
                key: "setCurrentTime",
                value: function setCurrentTime(currentTime) {
                  return this.set('currentTime', currentTime);
                }
                /**
                 * A promise to get the duration of the video.
                 *
                 * @promise GetDurationPromise
                 * @fulfill {number} The duration in seconds.
                 */

                /**
                 * Get the duration of the video in seconds. It will be rounded to the
                 * nearest second before playback begins, and to the nearest thousandth
                 * of a second after playback begins.
                 *
                 * @return {GetDurationPromise}
                 */

              }, {
                key: "getDuration",
                value: function getDuration() {
                  return this.get('duration');
                }
                /**
                 * A promise to get the ended state of the video.
                 *
                 * @promise GetEndedPromise
                 * @fulfill {boolean} Whether or not the video has ended.
                 */

                /**
                 * Get the ended state of the video. The video has ended if
                 * `currentTime === duration`.
                 *
                 * @return {GetEndedPromise}
                 */

              }, {
                key: "getEnded",
                value: function getEnded() {
                  return this.get('ended');
                }
                /**
                 * A promise to get the loop state of the player.
                 *
                 * @promise GetLoopPromise
                 * @fulfill {boolean} Whether or not the player is set to loop.
                 */

                /**
                 * Get the loop state of the player.
                 *
                 * @return {GetLoopPromise}
                 */

              }, {
                key: "getLoop",
                value: function getLoop() {
                  return this.get('loop');
                }
                /**
                 * A promise to set the loop state of the player.
                 *
                 * @promise SetLoopPromise
                 * @fulfill {boolean} The loop state that was set.
                 */

                /**
                 * Set the loop state of the player. When set to `true`, the player
                 * will start over immediately once playback ends.
                 *
                 * @param {boolean} loop
                 * @return {SetLoopPromise}
                 */

              }, {
                key: "setLoop",
                value: function setLoop(loop) {
                  return this.set('loop', loop);
                }
                /**
                 * A promise to set the muted state of the player.
                 *
                 * @promise SetMutedPromise
                 * @fulfill {boolean} The muted state that was set.
                 */

                /**
                 * Set the muted state of the player. When set to `true`, the player
                 * volume will be muted.
                 *
                 * @param {boolean} muted
                 * @return {SetMutedPromise}
                 */

              }, {
                key: "setMuted",
                value: function setMuted(muted) {
                  return this.set('muted', muted);
                }
                /**
                 * A promise to get the muted state of the player.
                 *
                 * @promise GetMutedPromise
                 * @fulfill {boolean} Whether or not the player is muted.
                 */

                /**
                 * Get the muted state of the player.
                 *
                 * @return {GetMutedPromise}
                 */

              }, {
                key: "getMuted",
                value: function getMuted() {
                  return this.get('muted');
                }
                /**
                 * A promise to get the paused state of the player.
                 *
                 * @promise GetLoopPromise
                 * @fulfill {boolean} Whether or not the video is paused.
                 */

                /**
                 * Get the paused state of the player.
                 *
                 * @return {GetLoopPromise}
                 */

              }, {
                key: "getPaused",
                value: function getPaused() {
                  return this.get('paused');
                }
                /**
                 * A promise to get the playback rate of the player.
                 *
                 * @promise GetPlaybackRatePromise
                 * @fulfill {number} The playback rate of the player on a scale from 0.5 to 2.
                 */

                /**
                 * Get the playback rate of the player on a scale from `0.5` to `2`.
                 *
                 * @return {GetPlaybackRatePromise}
                 */

              }, {
                key: "getPlaybackRate",
                value: function getPlaybackRate() {
                  return this.get('playbackRate');
                }
                /**
                 * A promise to set the playbackrate of the player.
                 *
                 * @promise SetPlaybackRatePromise
                 * @fulfill {number} The playback rate was set.
                 * @reject {RangeError} The playback rate was less than 0.5 or greater than 2.
                 */

                /**
                 * Set the playback rate of the player on a scale from `0.5` to `2`. When set
                 * via the API, the playback rate will not be synchronized to other
                 * players or stored as the viewer's preference.
                 *
                 * @param {number} playbackRate
                 * @return {SetPlaybackRatePromise}
                 */

              }, {
                key: "setPlaybackRate",
                value: function setPlaybackRate(playbackRate) {
                  return this.set('playbackRate', playbackRate);
                }
                /**
                 * A promise to get the played property of the video.
                 *
                 * @promise GetPlayedPromise
                 * @fulfill {Array} Played Timeranges converted to an Array.
                 */

                /**
                 * Get the played property of the video.
                 *
                 * @return {GetPlayedPromise}
                 */

              }, {
                key: "getPlayed",
                value: function getPlayed() {
                  return this.get('played');
                }
                /**
                 * A promise to get the qualities available of the current video.
                 *
                 * @promise GetQualitiesPromise
                 * @fulfill {Array} The qualities of the video.
                 */

                /**
                 * Get the qualities of the current video.
                 *
                 * @return {GetQualitiesPromise}
                 */

              }, {
                key: "getQualities",
                value: function getQualities() {
                  return this.get('qualities');
                }
                /**
                 * A promise to get the current set quality of the video.
                 *
                 * @promise GetQualityPromise
                 * @fulfill {string} The current set quality.
                 */

                /**
                 * Get the current set quality of the video.
                 *
                 * @return {GetQualityPromise}
                 */

              }, {
                key: "getQuality",
                value: function getQuality() {
                  return this.get('quality');
                }
                /**
                 * A promise to set the video quality.
                 *
                 * @promise SetQualityPromise
                 * @fulfill {number} The quality was set.
                 * @reject {RangeError} The quality is not available.
                 */

                /**
                 * Set a video quality.
                 *
                 * @param {string} quality
                 * @return {SetQualityPromise}
                 */

              }, {
                key: "setQuality",
                value: function setQuality(quality) {
                  return this.set('quality', quality);
                }
                /**
                 * A promise to get the seekable property of the video.
                 *
                 * @promise GetSeekablePromise
                 * @fulfill {Array} Seekable Timeranges converted to an Array.
                 */

                /**
                 * Get the seekable property of the video.
                 *
                 * @return {GetSeekablePromise}
                 */

              }, {
                key: "getSeekable",
                value: function getSeekable() {
                  return this.get('seekable');
                }
                /**
                 * A promise to get the seeking property of the player.
                 *
                 * @promise GetSeekingPromise
                 * @fulfill {boolean} Whether or not the player is currently seeking.
                 */

                /**
                 * Get if the player is currently seeking.
                 *
                 * @return {GetSeekingPromise}
                 */

              }, {
                key: "getSeeking",
                value: function getSeeking() {
                  return this.get('seeking');
                }
                /**
                 * A promise to get the text tracks of a video.
                 *
                 * @promise GetTextTracksPromise
                 * @fulfill {VimeoTextTrack[]} The text tracks associated with the video.
                 */

                /**
                 * Get an array of the text tracks that exist for the video.
                 *
                 * @return {GetTextTracksPromise}
                 */

              }, {
                key: "getTextTracks",
                value: function getTextTracks() {
                  return this.get('textTracks');
                }
                /**
                 * A promise to get the embed code for the video.
                 *
                 * @promise GetVideoEmbedCodePromise
                 * @fulfill {string} The `<iframe>` embed code for the video.
                 */

                /**
                 * Get the `<iframe>` embed code for the video.
                 *
                 * @return {GetVideoEmbedCodePromise}
                 */

              }, {
                key: "getVideoEmbedCode",
                value: function getVideoEmbedCode() {
                  return this.get('videoEmbedCode');
                }
                /**
                 * A promise to get the id of the video.
                 *
                 * @promise GetVideoIdPromise
                 * @fulfill {number} The id of the video.
                 */

                /**
                 * Get the id of the video.
                 *
                 * @return {GetVideoIdPromise}
                 */

              }, {
                key: "getVideoId",
                value: function getVideoId() {
                  return this.get('videoId');
                }
                /**
                 * A promise to get the title of the video.
                 *
                 * @promise GetVideoTitlePromise
                 * @fulfill {number} The title of the video.
                 */

                /**
                 * Get the title of the video.
                 *
                 * @return {GetVideoTitlePromise}
                 */

              }, {
                key: "getVideoTitle",
                value: function getVideoTitle() {
                  return this.get('videoTitle');
                }
                /**
                 * A promise to get the native width of the video.
                 *
                 * @promise GetVideoWidthPromise
                 * @fulfill {number} The native width of the video.
                 */

                /**
                 * Get the native width of the currently‐playing video. The width of
                 * the highest‐resolution available will be used before playback begins.
                 *
                 * @return {GetVideoWidthPromise}
                 */

              }, {
                key: "getVideoWidth",
                value: function getVideoWidth() {
                  return this.get('videoWidth');
                }
                /**
                 * A promise to get the native height of the video.
                 *
                 * @promise GetVideoHeightPromise
                 * @fulfill {number} The native height of the video.
                 */

                /**
                 * Get the native height of the currently‐playing video. The height of
                 * the highest‐resolution available will be used before playback begins.
                 *
                 * @return {GetVideoHeightPromise}
                 */

              }, {
                key: "getVideoHeight",
                value: function getVideoHeight() {
                  return this.get('videoHeight');
                }
                /**
                 * A promise to get the vimeo.com url for the video.
                 *
                 * @promise GetVideoUrlPromise
                 * @fulfill {number} The vimeo.com url for the video.
                 * @reject {PrivacyError} The url isn’t available because of the video’s privacy setting.
                 */

                /**
                 * Get the vimeo.com url for the video.
                 *
                 * @return {GetVideoUrlPromise}
                 */

              }, {
                key: "getVideoUrl",
                value: function getVideoUrl() {
                  return this.get('videoUrl');
                }
                /**
                 * A promise to get the volume level of the player.
                 *
                 * @promise GetVolumePromise
                 * @fulfill {number} The volume level of the player on a scale from 0 to 1.
                 */

                /**
                 * Get the current volume level of the player on a scale from `0` to `1`.
                 *
                 * Most mobile devices do not support an independent volume from the
                 * system volume. In those cases, this method will always return `1`.
                 *
                 * @return {GetVolumePromise}
                 */

              }, {
                key: "getVolume",
                value: function getVolume() {
                  return this.get('volume');
                }
                /**
                 * A promise to set the volume level of the player.
                 *
                 * @promise SetVolumePromise
                 * @fulfill {number} The volume was set.
                 * @reject {RangeError} The volume was less than 0 or greater than 1.
                 */

                /**
                 * Set the volume of the player on a scale from `0` to `1`. When set
                 * via the API, the volume level will not be synchronized to other
                 * players or stored as the viewer’s preference.
                 *
                 * Most mobile devices do not support setting the volume. An error will
                 * *not* be triggered in that situation.
                 *
                 * @param {number} volume
                 * @return {SetVolumePromise}
                 */

              }, {
                key: "setVolume",
                value: function setVolume(volume) {
                  return this.set('volume', volume);
                }
              }]);

              return Player;
            }(); // Setup embed only if this is not a node environment


            if (!isNode) {
              screenfull = initializeScreenfull();
              initializeEmbeds();
              resizeEmbeds();
            }

            var i = Player;

            function fluorescentVideo_es(a$1,n$1){void 0===n$1&&(n$1={});var u,r=n$1.id,d=n$1.playerEl,p=n$1.type;if(r&&p){var y=a(),f=y.on,l=y.emit;return "youtube"===p?((u=t(d)).loadVideoById({videoId:r,suggestedQuality:"large"}),u.stopVideo(),u.on("stateChange",function(e){1===e.data?l("play"):2===e.data&&l("pause");}),u.on("ready",function(){l("ready"),m();})):"vimeo"===p&&((u=new i(d,{id:r})).on("play",function(){return l("play")}),u.on("pause",function(){return l("pause")}),u.ready().then(function(){l("ready"),m();})),{destroy:function(){},on:f,pause:function(){"youtube"===p?u.pauseVideo():"vimeo"===p&&u.pause();},play:function(){"youtube"===p?u.playVideo():"vimeo"===p&&u.play();}}}function m(){var o=n("iframe",a$1),t=o.height/o.width*100,i=o.parentNode;o.height="100%",o.width="100%","youtube"===p?i.style.paddingTop=t+"%":"vimeo"===p&&(i.parentNode.style.paddingTop=t+"%"),l("resized");}}

        })
    };
}));
//# sourceMappingURL=fluorescent-video.es-eaf88388.nomodule.js.map

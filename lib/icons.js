(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("icons", [], factory);
	else if(typeof exports === 'object')
		exports["icons"] = factory();
	else
		root["icons"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.index = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
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
  }

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var HREF = window.location.href;
  var USER_AGENT = navigator.userAgent;
  var IE11_OR_OLDER = USER_AGENT.indexOf('MSIE ') > -1 || USER_AGENT.indexOf('Trident/') > -1;

  var NS_SVG = 'http://www.w3.org/2000/svg';
  var NS_XLINK = 'http://www.w3.org/1999/xlink';

  /**
   * Icon manager class.
   *
   * @param {Object} options
   *   Overwrite the [default options]{@link IconManager.defaultOptions}.
   */

  var IconManager = exports.IconManager = function () {
    function IconManager(options) {
      _classCallCheck(this, IconManager);

      this.options = base.utils.object.extend({}, IconManager.defaultOptions, options);

      if (!this.options.svgJsonFile) {
        throw new Error('No SVG json data file given!');
      }

      if (!this.options.svgSpriteFile) {
        throw new Error('No SVG sprite file given!');
      }

      this.$svgSprite = document.createElement('div');
    }

    /**
     * Inject markup of svg sprite into the page.
     * @param {Function} cb - Callback when finished.
     * @param {Function} [polyfillAlreadyLoadedIcons=true] - Whether already loaded icons should be polyfilled (ie11)
     */


    _createClass(IconManager, [{
      key: 'injectSprite',
      value: function injectSprite(cb) {
        var _this = this;

        var polyfillAlreadyLoadedIcons = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

        var request = new XMLHttpRequest();

        request.open('GET', this.options.svgSpriteFile, true);
        request.send();
        request.onload = function (e) {
          _this.$svgSprite.innerHTML = request.responseText;
          document.body.insertBefore(_this.$svgSprite, document.body.childNodes[0]);

          if (polyfillAlreadyLoadedIcons && IE11_OR_OLDER) {
            var $icons = [].concat(_toConsumableArray(document.querySelectorAll('.' + _this.options.iconClass)));

            // replace use tag with the actual child nodes inside the svg
            $icons.forEach(function ($icon) {
              _this._replaceUseWithOriginalPaths($icon);
            });
          }

          cb(_this, e);
        };
      }

      /**
       * Load icon metadata.
       * @param {Function} cb - Callback when finished.
       */

    }, {
      key: 'loadData',
      value: function loadData(cb) {
        var _this2 = this;

        var request = new XMLHttpRequest();

        request.open('GET', this.options.svgJsonFile, true);
        request.send();
        request.onload = function (e) {
          _this2.iconsData = JSON.parse(request.responseText);
          cb(_this2, e);
        };
      }

      /**
       * Return metadata of given icon.
       *
       * @param   {String} iconId - Icon id to return metadata from.
       * @returns {Object}
       */

    }, {
      key: 'getIconFromData',
      value: function getIconFromData(iconId) {
        var iconData = this.iconsData.icons[iconId];
        if (!iconData) throw new Error('No icon "' + iconId + '" found in icon json data file "' + this.options.svgJsonFile + '"!');
        return this.iconsData.icons[iconId];
      }

      /**
       * Return svg element from sprite.
       *
       * @param   {String} iconId - Icon id of the element to return.
       * @returns {Element}
       */

    }, {
      key: 'getIconFromSprite',
      value: function getIconFromSprite(iconId) {
        var $spriteIcon = this.$svgSprite.querySelector('#' + this.options.prefixId + iconId);
        if (!$spriteIcon) throw new Error('No icon "' + iconId + '" found in svg sprite file "' + this.options.svgSpriteFile + '"!');
        return $spriteIcon;
      }

      /**
       * Replace use element with original svg paths/content.
       * Needed to polyfill icons on IE11 on windows 8 (displays weird crispy icons when "use" element is used).
       *
       * @private
       * @param   {Element} $icon SVG element
       * @returns {Boolean}
       */

    }, {
      key: '_replaceUseWithOriginalPaths',
      value: function _replaceUseWithOriginalPaths($icon) {
        var $use, id, $childNodes, xlink;

        $use = $icon.querySelector('use');
        if ($use) return false;

        xlink = $use.getAttribute('xlink:href');
        if (!xlink) return false;

        $childNodes = this.getIconFromSprite(xlink.split('#')[1]).childNodes;
        if (!$childNodes.length) return false;

        // clean use tag
        $icon.removeChild($use);

        // append child nodes (because innerHTML is not available in ie11 on svg tag, fuck ie again)
        $childNodes.forEach(function ($childNode) {
          $icon.appendChild($childNode.cloneNode(true));
        });

        return true;
      }
    }]);

    return IconManager;
  }();

  /**
   * Default options for icon manager.
   *
   * @type {Object}
   * @property {String}  svgJsonFile - JSON file with icon metadata (attributes).
   * @property {String}  svgSpriteFile - SVG sprite file with all the icons.
   * @property {Boolean} [wrap=false] - Whether the icons should have the same width by default.
   * @property {Boolean} [withSize=false] - Whether the icons should have their `width` and `height` attributes by default.
   * @property {String}  [prefixId='icon-'] - Prefix used for the icon ids.
   * @property {String}  [prefixClass='-icon-'] - Prefix used for the icon classes.
   * @property {String}  [iconClass='icon-svg'] - Class used for icons.
   * @property {String}  [wrapClass='icon-box'] - Class used for wrapper.
   * @property {String}  [wrapElement='span'] - Element tag used for wrapper.
   * @property {Boolean} [responsive=false] - Whether the icons should be responsive by default.
   * @property {String}  [responsiveClass='-responsive'] - Class used for responsive icons.
   */
  IconManager.defaultOptions = {
    svgJsonFile: null,
    svgSpriteFile: null,

    wrap: false,
    withSize: false,
    prefixId: 'icon-',
    prefixClass: '-icon-',
    iconClass: 'icon-svg',
    wrapClass: 'icon-box',
    wrapElement: 'span',
    responsive: false,
    responsiveClass: '-responsive'
  };

  /**
   * Icon feature class.
   */

  var Icon = exports.Icon = function (_base$features$Featur) {
    _inherits(Icon, _base$features$Featur);

    function Icon() {
      _classCallCheck(this, Icon);

      return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
    }

    _createClass(Icon, [{
      key: 'init',
      value: function init() {
        var _this4 = this;

        this.id = this.node.getAttribute('data-icon');
        this.polyfilled = false;

        if (!this.options.manager) {
          throw new Error('Icon "' + this.id + '" feature needs to be initialized with a IconManager instance!');
        }

        var manager = this.options.manager;
        var managerOpts = this.options.manager.options;

        this.responsive = this.node.getAttribute('data-responsive');
        this.responsive = this.responsive !== null ? this.responsive : managerOpts.responsive;

        this.wrap = this.node.getAttribute('data-wrap');
        this.wrap = this.wrap !== null ? this.wrap : managerOpts.wrap;

        this.withSize = this.node.getAttribute('data-with-size');
        this.withSize = this.withSize !== null ? this.withSize : managerOpts.withSize;

        var attributes = manager.getIconFromData(this.id).attributes;
        var $iconNodes = manager.getIconFromSprite(this.id).childNodes;

        var width = attributes.width ? parseFloat(attributes.width) : null;
        var height = attributes.height ? parseFloat(attributes.height) : null;

        if (!$iconNodes) {
          throw new Error('Icon "' + this.id + '" has no child nodes in svg sprite!');
        }

        for (var attribute in attributes) {
          if (attributes.hasOwnProperty(attribute)) {
            if (attribute != 'width' && attribute != 'height' || this.withSize) {
              this.node.setAttribute(attribute, attributes[attribute]);
            }
          }
        }

        this.node.classList.add(managerOpts.iconClass);
        this.node.classList.add('' + managerOpts.prefixClass + this.id);

        if (this.wrap || this.responsive) {
          var $parent = this.node.parentNode;

          if ($parent.nodeName.toLowerCase() == managerOpts.wrapElement && $parent.classList.contains(managerOpts.wrapClass)) {
            this.$wrap = $parent;
          } else {
            var $next = this.node.nextSibling;

            this.$wrap = document.createElement(managerOpts.wrapElement);
            this.$wrap.classList.add(managerOpts.wrapClass);
            this.$wrap.appendChild(this.node);

            if ($next) {
              $parent.insertBefore(this.$wrap, $next);
            } else {
              $parent.appendChild(this.$wrap);
            }
          }

          if (this.responsive) {
            if (!width || !height) {
              throw new Error('Can\'t calculate responsive icon\n              "' + this.id + '" because width and/or height attributes are missing!');
            }

            var ratioPadding = height / width * 100;
            this.$wrap.style.paddingBottom = ratioPadding + '%';
            this.$wrap.classList.add(managerOpts.responsiveClass);
            this.$wrap.classList.add('' + managerOpts.prefixClass + this.id);
          }
        }

        if (IE11_OR_OLDER) {
          $iconNodes.forEach(function ($iconNode) {
            _this4.node.appendChild($iconNode);
          });

          this.polyfilled = true;
        } else {
          var $use = document.createElementNS(NS_SVG, 'use');
          $use.setAttributeNS(NS_XLINK, 'href', HREF + '#' + managerOpts.prefixId + this.id);
          this.node.appendChild($use);
        }
      }
    }]);

    return Icon;
  }(base.features.Feature);

  /**
   * Default options for icon feature.
   *
   * @type {Object}
   * @property {IconManager} manager - IconManager instance.
   */
  Icon.defaultOptions = {
    manager: null
  };

  exports.default = Icon;
});

/***/ })
/******/ ]);
});
//# sourceMappingURL=icons.js.map
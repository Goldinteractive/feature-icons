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

      this.options = Object.assign({}, IconManager.defaultOptions, options);

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
    }]);

    return IconManager;
  }();

  /**
   * Default options for icon manager.
   *
   * @type {Object}
   * @property {String}  svgJsonFile - JSON file with icon metadata (attributes).
   * @property {String}  svgSpriteFile - SVG sprite file with all the icons.
   * @property {Boolean} [equal=false] - Whether the icons should have the same sizes by default.
   * @property {Boolean} [original=false] - Whether the icons should have their `width` and `height` attributes from the original svg by default.
   * @property {String}  [prefixId='icon-'] - Prefix used for the icon ids.
   * @property {String}  [prefixClass='-icon-'] - Prefix used for the icon classes.
   * @property {String}  [iconClass='icon-svg'] - Class used for icons.
   * @property {String}  [wrapClass='icon-box'] - Class used for wrapper.
   * @property {String}  [wrapElement='span'] - Element tag used for wrapper.
   * @property {Boolean} [responsive=false] - Whether the icons should be responsive by default.
   * @property {String}  [responsiveClass='-responsive'] - Class used for responsive icons.
   * @property {Number}  [width=200] - Default width when original is used if no width has been defined.
   * @property {Number}  [height=200] - Default height when original is if no height has been defined.
   */
  IconManager.defaultOptions = {
    svgJsonFile: null,
    svgSpriteFile: null,
    equal: false,
    original: false,
    prefixId: 'icon-',
    prefixClass: '-icon-',
    iconClass: 'icon-svg',
    wrapClass: 'icon-box',
    wrapElement: 'span',
    responsive: false,
    responsiveClass: '-responsive',
    width: 200,
    height: 200
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
        this.id = this.node.getAttribute('data-icon');
        this.polyfilled = false;

        if (!this.options.manager) {
          throw new Error('Icon "' + this.id + '" feature needs to be initialized with a IconManager instance!');
        }

        if (!this.id) {
          console.error('No "data-icon" attribute defined', this.node);
          return false;
        }

        var $icon = document.createElementNS(NS_SVG, 'svg');
        var $parent = this.node.parentElement;

        var manager = this.options.manager;
        var managerOpts = this.options.manager.options;

        var responsive = this.node.getAttribute('data-responsive');
        this.responsive = responsive !== null ? true : managerOpts.responsive;

        var equal = this.node.getAttribute('data-equal');
        this.equal = equal !== null ? true : managerOpts.equal;

        var original = this.node.getAttribute('data-original');
        this.original = original !== null ? true : managerOpts.original;

        var attributes = manager.getIconFromData(this.id).attributes;
        var $iconNodes = [].concat(_toConsumableArray(manager.getIconFromSprite(this.id).childNodes));

        if (!$iconNodes) {
          console.error('Icon "' + this.id + '" has no child nodes in svg sprite!', this.node);
          return false;
        }

        var width = attributes.width ? parseFloat(attributes.width) : null;
        var height = attributes.height ? parseFloat(attributes.height) : null;

        if (!width) {
          console.info('Default width taken for "' + this.id + '" icon.', $icon);
        }

        if (!height) {
          console.info('Default height taken for "' + this.id + '" icon.', $icon);
        }

        // take over node attributes to icon
        for (var attribute in this.node.attributes) {
          if (attributes.hasOwnProperty(attribute)) {
            $icon.setAttribute(attribute, attributes[attribute]);
          }
        }

        // take over original attributes
        for (var _attribute in attributes) {
          if (attributes.hasOwnProperty(_attribute)) {
            if (_attribute != 'width' && _attribute != 'height' || this.original) {
              $icon.setAttribute(_attribute, attributes[_attribute]);
            }
          }
        }

        // using setAttribute because ie11 and below doesn't support classList or setting className on svg
        $icon.setAttribute('class', managerOpts.iconClass + ' ' + managerOpts.prefixClass + this.id);

        if ($parent.nodeName.toLowerCase() == managerOpts.wrapElement && $parent.classList.contains(managerOpts.wrapClass)) {
          // use parent node as wrap
          this.$wrap = $parent;
        } else {
          var $next = this.node.nextSibling;

          this.$wrap = document.createElement(managerOpts.wrapElement);
          this.$wrap.classList.add(managerOpts.wrapClass);
          this.$wrap.classList.add(managerOpts.prefixClass + this.id);
          this.$wrap.appendChild(this.node);

          if ($next) {
            $parent.insertBefore(this.$wrap, $next);
          } else {
            $parent.appendChild(this.$wrap);
          }
        }

        // set classes and attributes based on settings
        if (this.original) {
          this.$wrap.classList.add('-original');
          this.$wrap.style.width = width + 'px';
          this.$wrap.style.height = height + 'px';
        }

        if (this.equal) {
          this.$wrap.classList.add('-equal');
        }

        if (this.responsive) {
          var ratioPadding = height / width * 100;
          this.$wrap.style.paddingBottom = ratioPadding + '%';
          this.$wrap.classList.add(managerOpts.responsiveClass);
        } else {
          // using to keep svg ratio for ie (http://nicolasgallagher.com/canvas-fix-svg-scaling-in-internet-explorer/)
          var $canvas = document.createElement('canvas');
          $canvas.classList.add('icon-canvas');
          $canvas.setAttribute('width', width);
          $canvas.setAttribute('height', height);
          this.$wrap.appendChild($canvas);
        }

        if (IE11_OR_OLDER) {
          // polyfill ie11 and older with appending icon paths directly
          $iconNodes.forEach(function ($iconNode) {
            $icon.appendChild($iconNode.cloneNode(true));
          });

          this.polyfilled = true;
        } else {
          // create use element to use svg from sprite
          var currentHref = '//' + window.location.host + window.location.pathname + window.location.search;
          var $use = document.createElementNS(NS_SVG, 'use');
          $use.setAttributeNS(NS_XLINK, 'href', currentHref + '#' + managerOpts.prefixId + this.id);
          $icon.appendChild($use);
        }

        this.replaceNode($icon);
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
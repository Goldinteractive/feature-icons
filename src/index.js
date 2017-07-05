const USER_AGENT = navigator.userAgent
const IE11_OR_OLDER = USER_AGENT.indexOf('MSIE ') > -1 || USER_AGENT.indexOf('Trident/') > -1

const NS_SVG = 'http://www.w3.org/2000/svg'
const NS_XLINK = 'http://www.w3.org/1999/xlink'

/**
 * Icon manager class.
 *
 * @param {Object} options
 *   Overwrite the [default options]{@link IconManager.defaultOptions}.
 */
export class IconManager {

  constructor(options) {
    this.options = Object.assign({}, IconManager.defaultOptions, options)

    if (!this.options.svgJsonFile) {
      throw new Error('No SVG json data file given!')
    }

    if (!this.options.svgSpriteFile) {
      throw new Error('No SVG sprite file given!')
    }

    this.$svgSprite = document.createElement('div')
  }

  /**
   * Inject markup of svg sprite into the page.
   * @param {Function} cb - Callback when finished.
   * @param {Function} [polyfillAlreadyLoadedIcons=true] - Whether already loaded icons should be polyfilled (ie11)
   */
  injectSprite(cb, polyfillAlreadyLoadedIcons = true) {
    var request = new XMLHttpRequest()

    request.open('GET', this.options.svgSpriteFile, true)
    request.send()
    request.onload = (e) => {
      this.$svgSprite.innerHTML = request.responseText
      document.body.insertBefore(this.$svgSprite, document.body.childNodes[0])
      cb(this, e)
    }
  }

  /**
   * Load icon metadata.
   * @param {Function} cb - Callback when finished.
   */
  loadData(cb) {
    var request = new XMLHttpRequest()

    request.open('GET', this.options.svgJsonFile, true)
    request.send()
    request.onload = (e) => {
      this.iconsData = JSON.parse(request.responseText)
      cb(this, e)
    }
  }

  /**
   * Return metadata of given icon.
   *
   * @param   {String} iconId - Icon id to return metadata from.
   * @returns {Object}
   */
  getIconFromData(iconId) {
    var iconData = this.iconsData.icons[iconId]
    if (!iconData) throw new Error(`No icon "${iconId}" found in icon json data file "${this.options.svgJsonFile}"!`)
    return this.iconsData.icons[iconId]
  }

  /**
   * Return svg element from sprite.
   *
   * @param   {String} iconId - Icon id of the element to return.
   * @returns {Element}
   */
  getIconFromSprite(iconId) {
    var $spriteIcon = this.$svgSprite.querySelector(`#${this.options.prefixId}${iconId}`)
    if (!$spriteIcon) throw new Error(`No icon "${iconId}" found in svg sprite file "${this.options.svgSpriteFile}"!`)
    return $spriteIcon
  }
}

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
}

/**
 * Icon feature class.
 */
export class Icon extends base.features.Feature {

  init() {
    this.id = this.node.getAttribute('data-icon')
    this.polyfilled = false

    if (!this.options.manager) {
      throw new Error(`Icon "${this.id}" feature needs to be initialized with a IconManager instance!`)
    }

    if (!this.id) {
      console.error('No "data-icon" attribute defined', this.node)
      return false
    }

    var $icon = document.createElementNS(NS_SVG, 'svg')
    var $parent = this.node.parentElement

    var manager = this.options.manager
    var managerOpts = this.options.manager.options

    var responsive = this.node.getAttribute('data-responsive')
    this.responsive = responsive !== null ? true : managerOpts.responsive

    var equal = this.node.getAttribute('data-equal')
    this.equal = equal !== null ? true : managerOpts.equal

    var original = this.node.getAttribute('data-original')
    this.original = original !== null ? true : managerOpts.original

    var attributes = manager.getIconFromData(this.id).attributes
    var $iconNodes = [...manager.getIconFromSprite(this.id).childNodes]

    if (!$iconNodes) {
      console.error(`Icon "${this.id}" has no child nodes in svg sprite!`, this.node)
      return false
    }

    var width = attributes.width ? parseFloat(attributes.width) : null
    var height = attributes.height ? parseFloat(attributes.height) : null

    // take over node attributes to icon
    for (let attribute in this.node.attributes) {
      if (attributes.hasOwnProperty(attribute)) {
        $icon.setAttribute(attribute, attributes[attribute])
      }
    }

    // take over original attributes
    for (let attribute in attributes) {
      if (attributes.hasOwnProperty(attribute)) {
        if ((attribute != 'width'
             && attribute != 'height')
            || this.original
        ) {
          $icon.setAttribute(attribute, attributes[attribute])
        }
      }
    }

    // using setAttribute because ie11 and below doesn't support classList or setting className on svg
    $icon.setAttribute('class', `${managerOpts.iconClass} ${managerOpts.prefixClass}${this.id}`)


    if ($parent.nodeName.toLowerCase() == managerOpts.wrapElement
        && $parent.classList.contains(managerOpts.wrapClass)
    ) {
      // use parent node as wrap
      this.$wrap = $parent
    } else {
      var $next = this.node.nextSibling

      this.$wrap = document.createElement(managerOpts.wrapElement)
      this.$wrap.classList.add(managerOpts.wrapClass)
      this.$wrap.classList.add(managerOpts.prefixClass + this.id)
      this.$wrap.appendChild(this.node)

      if ($next) {
        $parent.insertBefore(this.$wrap, $next)
      } else {
        $parent.appendChild(this.$wrap)
      }
    }

    // set classes and attributes based on settings
    if (this.original) {
      this.$wrap.classList.add('-original')
      this.$wrap.style.width = width + 'px'
      this.$wrap.style.height = height + 'px'
    }

    if (this.equal) {
      this.$wrap.classList.add('-equal')
    }

    if (this.responsive) {
      var ratioPadding = height / width * 100
      this.$wrap.style.paddingBottom = `${ratioPadding}%`
      this.$wrap.classList.add(managerOpts.responsiveClass)
    } else {
      // using to keep svg ratio for ie (http://nicolasgallagher.com/canvas-fix-svg-scaling-in-internet-explorer/)
      var $canvas = document.createElement('canvas')
      $canvas.classList.add('icon-canvas')
      $canvas.setAttribute('width', width)
      $canvas.setAttribute('height', height)
      this.$wrap.appendChild($canvas)
    }


    if (IE11_OR_OLDER) {
      // polyfill ie11 and older with appending icon paths directly
      $iconNodes.forEach(($iconNode) => {
        $icon.appendChild($iconNode.cloneNode(true))
      })

      this.polyfilled = true
    } else {
      // create use element to use svg from sprite
      this.$use = document.createElementNS(NS_SVG, 'use')
      this.updateUseLink()

      // change link of use tag if state has changed
      this.onHub('statechange', () => {
        this.updateUseLink()
      })

      this.onHub('icons:update', () => {
        this.updateUseLink()
      })

      $icon.appendChild(this.$use)
    }

    this.replaceNode($icon)
  }

  updateUseLink() {
    if (!this.$use) return
    var currentHref = '//' + window.location.host + window.location.pathname + window.location.search
    this.$use.setAttributeNS(NS_XLINK, 'href', `${currentHref}#${this.options.manager.options.prefixId}${this.id}`)
  }

}

/**
 * Default options for icon feature.
 *
 * @type {Object}
 * @property {IconManager} manager - IconManager instance.
 */
Icon.defaultOptions = {
  manager: null
}

export default Icon

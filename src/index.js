const HREF = window.location.href
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
    this.options = base.utils.object.extend({}, IconManager.defaultOptions, options)

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

      if (polyfillAlreadyLoadedIcons && IE11_OR_OLDER) {
        var $icons = [...document.querySelectorAll(`.${this.options.iconClass}`)]

        // replace use tag with the actual child nodes inside the svg
        $icons.forEach(($icon) => {
          this._replaceUseWithOriginalPaths($icon)
        })
      }

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

  /**
   * Replace use element with original svg paths/content.
   * Needed to polyfill icons on IE11 on windows 8 (displays weird crispy icons when "use" element is used).
   *
   * @private
   * @param   {Element} $icon SVG element
   * @returns {Boolean}
   */
  _replaceUseWithOriginalPaths($icon) {
    var $use, id, $childNodes, xlink

    $use = $icon.querySelector('use')
    if ($use) return false

    xlink = $use.getAttribute('xlink:href')
    if (!xlink) return false

    $childNodes = this.getIconFromSprite(xlink.split('#')[1]).childNodes
    if (!$childNodes.length) return false

    // clean use tag
    $icon.removeChild($use)

    // append child nodes (because innerHTML is not available in ie11 on svg tag, fuck ie again)
    $childNodes.forEach(($childNode) => {
      $icon.appendChild($childNode.cloneNode(true))
    })

    return true
  }
}

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

    var manager = this.options.manager
    var managerOpts = this.options.manager.options

    this.responsive = this.node.getAttribute('data-responsive')
    this.responsive = this.responsive !== null ? this.responsive : managerOpts.responsive

    this.wrap = this.node.getAttribute('data-wrap')
    this.wrap = this.wrap !== null ? this.wrap : managerOpts.wrap

    this.withSize = this.node.getAttribute('data-with-size')
    this.withSize = this.withSize !== null ? this.withSize : managerOpts.withSize

    var attributes = manager.getIconFromData(this.id).attributes
    var $iconNodes = manager.getIconFromSprite(this.id).childNodes

    var width = attributes.width ? parseFloat(attributes.width) : null
    var height = attributes.height ? parseFloat(attributes.height) : null

    if (!$iconNodes) {
      throw new Error(`Icon "${this.id}" has no child nodes in svg sprite!`)
    }

    for (let attribute in attributes) {
      if (attributes.hasOwnProperty(attribute)) {
        if ((attribute != 'width'
             && attribute != 'height')
            || this.withSize
        ) {
          this.node.setAttribute(attribute, attributes[attribute])
        }
      }
    }

    this.node.classList.add(managerOpts.iconClass)
    this.node.classList.add(`${managerOpts.prefixClass}${this.id}`)

    if (this.wrap || this.responsive) {
      var $parent = this.node.parentNode

      if ($parent.nodeName.toLowerCase() == managerOpts.wrapElement
          && $parent.classList.contains(managerOpts.wrapClass)
      ) {
        this.$wrap = $parent
      } else {
        var $next = this.node.nextSibling

        this.$wrap = document.createElement(managerOpts.wrapElement)
        this.$wrap.classList.add(managerOpts.wrapClass)
        this.$wrap.appendChild(this.node)

        if ($next) {
          $parent.insertBefore(this.$wrap, $next)
        } else {
          $parent.appendChild(this.$wrap)
        }
      }

      if (this.responsive) {
        if (!width || !height) {
            throw new Error(
              `Can't calculate responsive icon
              "${this.id}" because width and/or height attributes are missing!`
            )
        }

        var ratioPadding = height / width * 100
        this.$wrap.style.paddingBottom = `${ratioPadding}%`
        this.$wrap.classList.add(managerOpts.responsiveClass)
        this.$wrap.classList.add(`${managerOpts.prefixClass}${this.id}`)
      }
    }

    if (IE11_OR_OLDER) {
      $iconNodes.forEach(($iconNode) => {
        this.node.appendChild($iconNode)
      })

      this.polyfilled = true
    } else {
      var $use = document.createElementNS(NS_SVG, 'use')
      $use.setAttributeNS(NS_XLINK, 'href', `${HREF}#${managerOpts.prefixId}${this.id}`)
      this.node.appendChild($use)
    }
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

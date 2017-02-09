import { Icon, IconManager } from '../src'

var icons = new IconManager({
  svgJsonFile: 'icons.json',
  svgSpriteFile: 'icons.svg'
})

icons.injectSprite(() => {
  icons.loadData(() => {
    base.features.add('icon', Icon, { manager: icons })
    base.features.init(document.body, 'icon')
  })
})

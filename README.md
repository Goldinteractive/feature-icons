## `icons` feature

Fancy icons using a svg sprite file and `use` element with polyfill for IE11 and below.

### Usage

See [demo page](demo/index.html).

### Global dependencies

* [`gi-js-base`](https://github.com/Goldinteractive/js-base)

### Installation

Install this package with sackmesser:

    make feature-install-icons

or when sackmesser is not used:

    yarn install gi-feature-icons

After the installation has completed, you can import the module files:

#### JS:

```javascript
// import icon feature and icon manager
import { Icon, IconManager } from '../src'

var icons = new IconManager({
  svgJsonFile: 'assets/icons.json',
  svgSpriteFile: 'assets/icons.svg'
})

icons.injectSprite(() => {
  icons.loadData(() => {
    base.features.add('icon', Icon, { manager: icons })
    base.features.init(document.body, 'icon')
  })
})
```

Make sure you provide the global dependencies in your webpack config file:

```javascript
new webpack.ProvidePlugin({
  base: 'gi-js-base'
})
```

#### Styles:

```sass
@import 'gi-feature-icons/src/style';
```

### Browser compatibility

* Newest two browser versions of Chrome, Firefox, Safari and Edge
* IE 10 and above

### Development

* `make build` or `npm run build` - Build production version of the feature.
* `make dev` or `npm run dev` - Build demo of the feature, run a watcher and start browser-sync.
* `make test` or `npm run test` - Test the feature.
* `make jsdoc` - Update documentation inside the `docs` folder.
* `make publish` - Publish npm package.

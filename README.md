# HotPack

HotPack is a boilerplate for web developers who wants to start coding right now without the hustle of having to deal with older browser issues such as css prefixes or ecmascript versions. It gives you :

- Bootstrap with jQuery and popper.js
- Hashing for file name to prevent caching client side
- Image compression
- CSS property autoprefixing, local font support and file minification
- Javascript linting, old syntax transformation and file minification

# Installation

```
npm install
```

### What's included

| Plugin       | Notes                                                       |
| ------------ | ----------------------------------------------------------- |
| Bootstrap    | The most popular framework for responsive websites          |
| JQuery slim  | Bootstrap dependency, saved the frontend world 15 years ago |
| Popper.js    | Also Bootstrap dependency, every client asks for tooltips   |
| ESLint       | Force javascript good practices ( production build only )   |
| Babel        | Convert ES2015+ into old version of Javascript              |
| SCSS         | Gives the flexibility to work with Bootstrap components     |
| PostCSS      | Enhance your CSS files                                      |
| Autoprefixer | Prefix your CSS properties for old browsers                 |
| Mini Extract | Extract your CSS files into its own                         |
| Image Loader | Compress your images on the fly ( production build only )   |

## Workflow

#### Development phase

```
npm run dev
```

#### Production build

```
npm run build:prod
```

#### Stats nerd?

```
npm run stats:prod
```

## Helpers

- We provide some SCSS folder structure only as a guideline for your Bootstrap component customization.
- If you don't use `Popper.js`, you can remove it in the `webpack.dev.js` and `webpack.prod.js` configuration files for a lighter build.
- If you don't use Bootstrap's Javascript plugins at all, you can remove `import 'bootstrap';` from the `index.js` file.

### Configuration files

- `Webpack.dev.js`
  - Configuration file used for development phase. It doesn't contain backward compatibility transformation, and CSS is inline. We know developers hate slow builds.
- `Webpack.prod.js`
  - Configuration file used for production. Does file minification, image compression, css prefixing and extraction to its own file and javascript babel transformation. Use tomorrow syntax now!
- `.eslintrc.json`
  - Force basic rulesets for your javascript development. Helps you write better and consistent code.
- `.browserslistrc`
  - Help babel and autoprefixer to know which browsers are you targeting. Who wants some IE6 sweetness?
- `style.scss`
  - Entry point for your stylesheets. You can remove `_fonts.scss` file if you don't need it.

# Copyright and license

Code release under the MIT License. Feel free to use it, fork it, enhance it, build awesome stuff, criticize, brew beer.

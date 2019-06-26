# HotPack

HotPack is a boilerplate for web developers who wants to start coding right now without the hustle of having to deal with older browser issues such as css prefixes or ecmascript versions. It gives you :

- Bootstrap with jQuery and popper.js
- Hashing for file name to prevent caching client side
- CSS property autoprefixing, local font support and file minification
- Javascript and SCSS linting, old syntax transformation and file minification

# Requirements

- Node
- npm

# Installation

```
npm install
```

### What's included

| Plugin       | Notes                                                       |
| ------------ | ----------------------------------------------------------- |
| Bootstrap    | The most popular framework for responsive websites          |
| JQuery       | Bootstrap dependency, saved the frontend world 15 years ago |
| Popper.js    | Also Bootstrap dependency, every client asks for tooltips   |
| Standardjs   | Javascript style guide, linter & formatter                  |
| SCSS         | Gives the flexibility to work with Bootstrap components     |
| PostCSS      | Enhance your CSS files                                      |
| Mini Extract | Extract your CSS files into its own                         |
| Percy        | Visual review tool to avoid undesired css side effect       |

## Workflow

#### Development phase

```
npm run dev
```

#### Production build

```
npm run build:prod
```

## Helpers

- We provide some SCSS folder structure only as a guideline for your Bootstrap component customization.
- If you don't use `Popper.js`, you can remove it in the `webpack.dev.js` and `webpack.prod.js` configuration files for a lighter build.
- If you don't use Bootstrap's Javascript plugins at all, you can remove `import 'bootstrap';` from the `index.js` file.
- If you don't import custom fonts, you can remove `_fonts.scss` file if you don't need it.

### Configuration files

- `Webpack.dev.js`
  - Configuration file used for development phase. It doesn't contain backward compatibility transformation, and CSS is inline. We know developers hate slow builds.
- `Webpack.prod.js`
  - Configuration file used for production. Does file minification, image compression, css prefixing and extraction to its own file and javascript babel transformation. Use tomorrow syntax now!
- `style.scss`
  - Entry point for your stylesheets. Required imports for Bootstrap sits here.

# Copyright and license

Code release under the MIT License. Feel free to use it, fork it, enhance it, build awesome stuff, criticize, brew beer.

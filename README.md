![Slinkity starter project banner](/assets/social-media-banner.jpg)

<h1 align="center">Welcome to Slinkity starter project 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://slinkity.dev/docs/" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/slinkity/slinkity-starter/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/slinkity/slinkity-starter/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://twitter.com/bholmesdev" target="_blank">
    <img alt="Twitter: bholmesdev" src="https://img.shields.io/twitter/follow/bholmesdev.svg?style=social" />
  </a>
</p>

<h3 align="center">The all-in-one template for building your first Slinkity project</h3>

[Slinkity](https://slinkity.dev) is a framework that uses Vite to bring dynamic, client side interactions to your static 11ty sites. Slinkity enables turning existing `.html` or `.liquid` files into `.jsx` files. It allows you to insert components into pages with shortcodes such as, `{% react './path/to/Hello.jsx' %}`. Because component-driven pages are hydrated on the client, dynamic state management works in both development and production.

It aims to unify two competing camps in the current web development community:
* Lean, JavaScript-free static site generators driven by data and templating languages like Jekyll and Hugo.
* Dynamic, JavaScript-heavy web apps powered by data and React or Vue components like NextJS and NuxtJS.

## ⛔️ WARNING - ALPHA SOFTWARE ⛔️

Slinkity is in early alpha and not recommended for production use unless you like living on the edge and filing issues. You can report issues or log bugs [here](https://github.com/Holben888/slinkity/issues).

### Install dependencies and start development server

`yarn start` runs `slinkity --serve` to start [a Vite server](https://vitejs.dev/guide/#index-html-and-project-root) pointed at your 11ty build. The `--incremental` flag can be used for faster builds during development.

```bash
yarn
yarn start
```

Open [localhost:8080](http://localhost:8080/) to view your site. Vite enables processing a range of file types including SASS and React.

### Available Scripts

Commands include `yarn start` for `slinkity --serve` and `yarn build` for `slinkity`. Running `slinkity` creates a production build. Your new site will appear in the `_site` folder or [wherever you tell 11ty to build your site](https://www.11ty.dev/docs/config/#output-directory). For production builds, Eleventy first builds all your routes to a temporary directory and then Vite picks up all the resource bundling, minification, and final optimizations to build your intended output from this temporary directory.

When using the `slinkity` command, all arguments are passed directly to the `eleventy` CLI except `serve` and `port`:
* `serve` starts the [11ty dev server in `--watch` mode](https://www.11ty.dev/docs/usage/#re-run-eleventy-when-you-save) to listen for file changes.
* Slinkity spins up an independent Vite server instead of 11ty's Browsersync server. `port` is for our own server which needs to be picked up and passed to Vite.

The CLI checks for Eleventy configs and will look for any custom directories returned such as input or output. If found, those are passed off to the Vite server so it can look in the right place.

![01-slinkity-architecture](https://raw.githubusercontent.com/slinkity/slinkity/main/assets/architecture-diagram.jpg)

### `.eleventy.js`

Slinkity relies on 11ty's [latest 1.0 beta build](https://www.npmjs.com/package/@11ty/eleventy/v/beta) to work properly. Our `.eleventy.js` file includes setting the input directory to `src`.

```js
// .eleventy.js

module.exports = function (eleventyConfig) {
  return {
    dir: {
      input: 'src',
    },
  }
}
```

## Authors

👤 **Ben Holmes**

* Website: https://bholmes.dev
* Twitter: [@bholmesdev](https://twitter.com/bholmesdev)
* Github: [@Holben888](https://github.com/Holben888)

👤 **Anthony Campolo**

* Twitter: [@ajcwebdev](https://twitter.com/ajcwebdev)
* Github: [@ajcwebdev](https://github.com/ajcwebdev)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/slinkity/slinkity-starter/issues). 

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2021 [Ben Holmes](https://github.com/Holben888). This project is [MIT](https://github.com/slinkity/slinkity-starter/blob/master/LICENSE) licensed.

***

_This README was generated with ❤️ by Ben with [readme-md-generator](https://github.com/kefranabg/readme-md-generator) and then heavily edited by Anthony._

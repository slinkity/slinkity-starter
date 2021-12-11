# slinkity-starter

Your components will be included in a directory called `components` inside 11ty's [`_includes`](https://www.11ty.dev/docs/config/#directory-for-includes) directory. This is where all your imported components should live. Slinkity will always copy the contents of `_includes/components/` to the build for Vite to pick up. If you place your components anywhere outside of here, Vite won't be able to find them!

## Shortcodes

With the `react` [shortcode](https://www.11ty.dev/docs/shortcodes/), you can insert components into any static template that 11ty supports. Include `react` shortcode in `index.md` and pass the path to your components. `_includes` and `.jsx` are optional in our shortcode. This will find `_includes/component/Counter.jsx` and `_includes/component/Hello.jsx`, statically render the components, insert them as HTML, and then hydrate the HTML rendered with our JavaScript components.


{% react 'Logo' %}
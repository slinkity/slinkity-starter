import React from 'react'

export const frontMatter = {
  title: 'About me',
  layout: 'layout.html',
}

function About() {
  return (
    <>
      <h2>Component Pages, Layouts, and Front Matter</h2>

      <p>
        Component pages are like any other template on your 11ty site. Templates are the files that define your contents.
        In a blog, for instance, this could be the Markdown file that contains your blogpost.
        To create an <code>/about</code> page we place an <code>about.jsx</code> file alongside the other pages on our site.
      </p>

      <h3>Front matter</h3>

      <p>
        Including <code>frontMatter</code> in <code>about.jsx</code> wires up the layout and passes information "upstream" for other templates to read from.
        It works the same way for component-based pages as it does for <a href="https://www.11ty.dev/docs/data-frontmatter/">11ty's front matter</a>.
        The <code>title</code> and <code>content</code> keys are now accessible from any layout templates applied to our page.
      </p>

      <h3>Layouts</h3>

      <p>
        Slinkity is wrapping our component with some <code>html</code> and <code>body</code> tags automatically.
        However, if we have metadata or extra wrapper elements to include, it is useful to create a layout template by populating <code>layout.html</code> with content.
      </p>
    </>
  )
}

export default About
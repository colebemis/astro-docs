import {defineConfig} from 'astro/config'
import react from '@astrojs/react'
import mdx from '@astrojs/mdx'

export default defineConfig({
  integrations: [
    react(),
    mdx({
      // TODO: Replace with correct values
      site: 'https://colebemis.github.io',
      base: '/astro-docs',
      remarkPlugins: [remarkRawContent]
    })
  ]
})

/** Adds a `rawContent` frontmatter variable to every MDX file */
function remarkRawContent() {
  return function (tree, file) {
    file.data.astro.frontmatter.rawContent = file.value
  }
}

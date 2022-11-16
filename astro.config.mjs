import {defineConfig} from 'astro/config'
import react from '@astrojs/react'
import mdx from '@astrojs/mdx'

export default defineConfig({
  // TODO: Replace `site` and `base` with correct values
  site: 'https://colebemis.com',
  base: '/astro-docs',
  integrations: [
    react(),
    mdx({
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

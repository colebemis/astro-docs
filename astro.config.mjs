import {defineConfig} from 'astro/config'
import react from '@astrojs/react'
import mdx from '@astrojs/mdx'

export default defineConfig({
  integrations: [
    react(),
    mdx({
      remarkPlugins: [remarkRawContent]
    })
  ]
})

function remarkRawContent() {
  return function (tree, file) {
    file.data.astro.frontmatter.rawContent = file.value
  }
}

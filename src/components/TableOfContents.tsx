type Heading = {
  depth: number
  slug: string
  text: string
}

export function TableOfContents({headings}: {headings: Heading[]}) {
  // Only show headings with a depth of 2
  const h2s = headings.filter(heading => heading.depth === 2)
  return (
    // TODO: aria-label
    <nav>
      <span>On this page</span>
      <ul>
        {h2s.map(heading => (
          <li>
            <a href={`#${heading.slug}`}>{heading.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

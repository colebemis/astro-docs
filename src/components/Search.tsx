import React from 'react'
import {Searcher} from 'fast-fuzzy'

type Page = {
  title: string
  rawContent: string
  url: string
}

export function Search({pages}: {pages: Page[]}) {
  const [query, setQuery] = React.useState('')
  const [results, setResults] = React.useState<Page[]>([])
  const inputRef = React.useRef<HTMLInputElement>(null)

  // Create search index
  const searcher = React.useMemo(() => {
    console.log('creating searcher')
    return new Searcher(pages, {
      keySelector: page => [page.title, page.rawContent]
    })
  }, [pages])

  // Update search results when query changes
  React.useEffect(() => {
    React.startTransition(() => {
      // TODO: Search in a web worker to avoid blocking the main thread
      setResults(searcher.search(query))
    })
  }, [query, searcher])

  // Focus search input when user presses `/`
  React.useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === '/') {
        event.preventDefault()
        inputRef.current?.focus()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div>
      <input
        ref={inputRef}
        type="search"
        placeholder="Search..."
        value={query}
        onChange={event => setQuery(event.target.value)}
      />

      {query ? (
        // TODO: Naviate results with arrow keys
        <div style={{padding: 16, border: '1px solid gray'}}>
          {results.length > 0 ? (
            <ul style={{padding: 0, margin: 0, listStyle: 'none'}}>
              {results.map(page => (
                <li>
                  <a href={page.url}>{page.title}</a>
                </li>
              ))}
            </ul>
          ) : (
            <span>No results for &ldquo;{query}&rdquo;</span>
          )}
        </div>
      ) : null}
    </div>
  )
}

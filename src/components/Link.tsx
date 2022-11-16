import React from 'react'

// TODO: Reference `base` from Astro config instead of duplicating it here
const base = '/astro-docs'

export const Link = React.forwardRef<HTMLAnchorElement, React.ComponentPropsWithoutRef<'a'>>(
  ({href = '', ...props}, ref) => {
    const hrefWithBase = href.startsWith('/') && !href.startsWith(base) ? base + href : href
    return <a ref={ref} {...props} href={hrefWithBase} />
  }
)

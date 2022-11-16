import navItems from '~/nav.json'

export function Nav({}) {
  return (
    <nav>
      <ul>
        {navItems.map(item => (
          <NavItem {...item} />
        ))}
      </ul>
    </nav>
  )
}

type NavItem = {
  title: string
  href?: string
  children?: NavItem[]
}

function NavItem({title, href, children}: NavItem) {
  if (!children) {
    return (
      <li>
        <a href={href}>{title}</a>
      </li>
    )
  }

  return (
    <li>
      <span>{title}</span>
      <ul>
        {children.map(child => (
          <NavItem {...child} />
        ))}
      </ul>
    </li>
  )
}

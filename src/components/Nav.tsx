import navItems from '~/nav.json'
import {Link} from './Link'

export function Nav() {
  return (
    <nav>
      <ul>
        {navItems.map(item => (
          <NavItem key={item.title} {...item} />
        ))}
      </ul>
    </nav>
  )
}

type NavItem = {
  title: string
  url?: string
  children?: NavItem[]
}

function NavItem({title, url, children}: NavItem) {
  if (!children) {
    return (
      <li>
        <Link href={url}>{title}</Link>
      </li>
    )
  }

  return (
    <li>
      <span>{title}</span>
      <ul>
        {children.map(child => (
          <NavItem key={child.url || child.title} {...child} />
        ))}
      </ul>
    </li>
  )
}

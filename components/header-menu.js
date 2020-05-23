import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'

export default function HeaderMenu({ pages }) {
  return (
    <div>
      <nav className={utilStyles.navigation}>
        <ul>
          {pages.map((page) => (
            <li key={page.id}>
              <Link href={page.link}>
                <a>{page.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

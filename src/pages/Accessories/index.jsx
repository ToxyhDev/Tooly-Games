import { Link } from 'react-router-dom'
import { listTools } from '../../data/listTools'
import Button from '../../components/Button'
import Header from '../../components/Header'

export default function Accessories() {
  return (
    <>
      <Header />
      <nav className="nav">
        <section className="nav__main">
          {listTools.map(({ id, name, icon, path, tool }) => (
            <Link key={id} to={`/accessoires/${path}`}>
              <Button
                id={id}
                icon={icon}
                text={name}
                tool={tool}
                className={
                  'nav__main--button button__standard button__standard--flex'
                }
                svgClassName={'nav__main--button-svg'}
              />
            </Link>
          ))}
        </section>
      </nav>
    </>
  )
}

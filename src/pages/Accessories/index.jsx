import { Link } from 'react-router-dom'
import { listTools } from '../../data/listTools'
import Button from '../../components/Button'
import Header from '../../components/Header'

export default function Accessories() {
  return (
    <section>
      <Header />
      <nav className="nav">
        <section className="nav-main">
          {listTools.map(({ id, name, icon, path, tool }) => (
            <Link key={id} to={`/accessoires/${path}`}>
              <Button
                id={id}
                icon={icon}
                text={name}
                tool={tool}
                className={'nav--button button-Standard button-Standard__flex'}
              />
            </Link>
          ))}
        </section>
      </nav>
    </section>
  )
}

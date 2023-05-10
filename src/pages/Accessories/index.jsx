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
          {Object.entries(listTools[0]).map(([key, value]) => (
            <Link key={key} to={`/accessoires/${value.path}`}>
              <Button
                id={value.id}
                icon={value.icon}
                text={value.name}
                className={'nav--button button-Standard button-Standard__flex'}
              />
            </Link>
          ))}
        </section>
      </nav>
    </section>
  )
}

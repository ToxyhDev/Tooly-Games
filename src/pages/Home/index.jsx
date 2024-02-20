import Name from '../../components/Name'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'
import { buttonOthers } from '../../data/buttonOthers'
import Accessories from '../Accessories'

export default function Home() {
  return (
    <>
      <header className="header__margin">
        <Name />
      </header>

      <main className="nav">
        <Accessories />
        <section className="nav__main--others">
          {buttonOthers.map(({ id, className, icon, path, target }, index) => (
            <Link key={index} to={path} target={target}>
              <Button
                key={index}
                id={id}
                className={className}
                icon={icon}
                svgClassName={'button__small--size'}
              />
            </Link>
          ))}
        </section>
      </main>
    </>
  )
}

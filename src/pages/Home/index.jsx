import Name from '../../components/Name'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'
import { buttonOthers } from '../../data/buttonOthers'

export default function Home() {
  const buttonMenu = [
    {
      id: 1,
      className: 'button-CTA',
      text: 'Utiliser un accessoire',
      path: '/accessoires',
    },
    {
      id: 2,
      className: 'button-Standard',
      text: 'Prochainement',
      // text: 'Configurer votre interface',
      // path: '/config-interface',
    },
    {
      id: 3,
      className: 'button-Standard',
      text: 'Prochainement',
      // text: 'Interface préconfigurés',
      // path: '/preconf-interface',
    },
  ]

  return (
    <main className="whereMain">
      <header className="header__margin">
        <Name />
      </header>

      <nav className="nav">
        <section className="nav-main">
          {buttonMenu.map(({ id, className, text, path }, index) => (
            <Link key={index} to={path}>
              <Button
                id={id}
                className={`nav--button ${className}`}
                text={text}
              />
            </Link>
          ))}
        </section>
        <section className="nav-others">
          {buttonOthers.map(({ id, className, icon, path, target }, index) => (
            <Link key={index} to={path} target={target}>
              <Button key={index} id={id} className={className} icon={icon} />
            </Link>
          ))}
        </section>
      </nav>
    </main>
  )
}

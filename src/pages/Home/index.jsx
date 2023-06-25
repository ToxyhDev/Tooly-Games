import Name from '../../components/Name'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'
import { buttonOthers } from '../../data/buttonOthers'

export default function Home() {
  const buttonMenu = [
    {
      id: 1,
      className: 'button__cta',
      textClassName: 'button__cta--text',
      text: 'Utiliser un accessoire',
      path: '/accessoires',
    },
    {
      id: 2,
      className: 'button__standard',
      text: 'Prochainement',
      // text: 'Configurer votre interface',
      // path: '/config-interface',
    },
    {
      id: 3,
      className: 'button__standard',
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
        <section className="nav__main">
          {buttonMenu.map(
            ({ id, className, textClassName, text, path }, index) => (
              <Link key={index} to={path}>
                <Button
                  id={id}
                  className={`nav__main--button ${className}`}
                  text={text}
                  textClassName={textClassName}
                />
              </Link>
            )
          )}
        </section>
        <section className="nav__main--others">
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

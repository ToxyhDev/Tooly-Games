// import Button from '../../components/Button'
import Name from '../../components/Name'
import Button from '../../components/Button'

const iconBook = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
  >
    {' '}
    <path d="M 6 2 C 4.895 2 4 2.895 4 4 L 4 19 C 4 20.64497 5.3550302 22 7 22 L 20 22 L 20 20 L 7 20 C 6.4349698 20 6 19.56503 6 19 C 6 18.43497 6.4349698 18 7 18 L 20 18 L 20 17 L 20 16 L 20 2 L 16 2 L 16 12 L 13 10 L 10 12 L 10 2 L 6 2 z" />
  </svg>
)

const iconSettings = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill="#000000"
  >
    <g>
      <path d="M0,0h24v24H0V0z" fill="none" />
    </g>
    <g>
      <g>
        <path d="M4,18v-0.65c0-0.34,0.16-0.66,0.41-0.81C6.1,15.53,8.03,15,10,15c0.03,0,0.05,0,0.08,0.01c0.1-0.7,0.3-1.37,0.59-1.98 C10.45,13.01,10.23,13,10,13c-2.42,0-4.68,0.67-6.61,1.82C2.51,15.34,2,16.32,2,17.35V20h9.26c-0.42-0.6-0.75-1.28-0.97-2H4z" />
        <path d="M10,12c2.21,0,4-1.79,4-4s-1.79-4-4-4C7.79,4,6,5.79,6,8S7.79,12,10,12z M10,6c1.1,0,2,0.9,2,2s-0.9,2-2,2 c-1.1,0-2-0.9-2-2S8.9,6,10,6z" />
        <path d="M20.75,16c0-0.22-0.03-0.42-0.06-0.63l1.14-1.01l-1-1.73l-1.45,0.49c-0.32-0.27-0.68-0.48-1.08-0.63L18,11h-2l-0.3,1.49 c-0.4,0.15-0.76,0.36-1.08,0.63l-1.45-0.49l-1,1.73l1.14,1.01c-0.03,0.21-0.06,0.41-0.06,0.63s0.03,0.42,0.06,0.63l-1.14,1.01 l1,1.73l1.45-0.49c0.32,0.27,0.68,0.48,1.08,0.63L16,21h2l0.3-1.49c0.4-0.15,0.76-0.36,1.08-0.63l1.45,0.49l1-1.73l-1.14-1.01 C20.72,16.42,20.75,16.22,20.75,16z M17,18c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S18.1,18,17,18z" />
      </g>
    </g>
  </svg>
)

const iconCofee = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill="#000000"
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M16 5v8c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V5h10m4-2H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm-2 5V5h2v3h-2zm2 11H2v2h18v-2z" />
  </svg>
)

export default function Home() {
  const buttonMenu = [
    {
      id: 1,
      className: 'button-CTA',
      text: 'Accessoires de jeu',
    },
    {
      id: 2,
      className: 'button-Standard',
      text: 'Configurer son interface',
    },
    {
      id: 3,
      className: 'button-Standard',
      text: 'Interface préconfigurés',
    },
  ]

  const buttonOthers = [
    {
      id: 1,
      className: 'button--small button-others',
      text: iconBook,
    },
    {
      id: 2,
      className: 'button--small button-others',
      text: iconSettings,
    },
    {
      id: 3,
      className: 'button--small button-others',
      text: iconCofee,
    },
  ]

  return (
    <main className="main">
      <Name />
      <nav className="nav">
        <section className="nav-main">
          {buttonMenu.map(({ id, className, text }) => (
            <Button
              id={id}
              className={`nav--button ${className}`}
              text={text}
            />
          ))}
        </section>
        <section className="nav-others">
          {buttonOthers.map(({ id, className, text }) => (
            <Button id={id} className={className} text={text} />
          ))}
        </section>
      </nav>
    </main>
  )
}

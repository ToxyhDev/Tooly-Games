import Button from '../Button'
import Name from '../Name'
import { Link, useNavigate } from 'react-router-dom'

const iconHome = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="#000000"
    viewBox="0 0 256 256"
    className="svg__fill--color svg__size"
  >
    <path d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z"></path>
  </svg>
)

const iconBack = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="svg__stroke--color svg__size"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
    />
  </svg>
)

export default function Header() {
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <header className="header header__margin">
      <Button
        className={`button__small`}
        icon={iconBack}
        click={handleGoBack}
      />

      <Name></Name>

      <Link to={'/'}>
        <Button className={`button__small`} icon={iconHome}></Button>
      </Link>
    </header>
  )
}

import { Link } from 'react-router-dom'
import { listTools } from '../../data/listTools'
import Button from '../../components/Button'

export default function Accessories() {
  return (
    <section className="nav__main">
      {listTools.map(({ id, name, icon, path, tool }) => (
        <Link key={id} to={`/${path}`} className="nav__main--button">
          <Button
            id={id}
            icon={icon}
            text={name}
            tool={tool}
            className={'button__standard button__standard--flex'}
            svgClassName={'nav__main--button-svg'}
          />
        </Link>
      ))}
    </section>
  )
}

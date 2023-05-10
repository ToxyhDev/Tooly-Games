// import { useRouteError } from 'react-router-dom'
import Header from '../Header/index.jsx'
import { SvgError404 } from '../../assets/svgError404.jsx'

export default function ErrorPage() {
  // const error = useRouteError()
  // console.error(error)

  return (
    <div id="error-page">
      <Header></Header>
      <h1>Oops!</h1>
      <SvgError404 />
      <p>Erreur 404 | page introuvable</p>
      {/* <p>
        <i>{error.statusText || error.message}</i>
      </p> */}
    </div>
  )
}

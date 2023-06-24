// import { useRouteError } from 'react-router-dom'
import Header from '../Header/index.jsx'

export default function ErrorPage() {
  // const error = useRouteError()
  // console.error(error)

  return (
    <div id="error-page">
      <Header></Header>
      <h3>Oops!</h3>
      <p>Erreur 404 | page introuvable</p>
    </div>
  )
}

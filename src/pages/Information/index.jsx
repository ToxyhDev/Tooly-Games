import Header from '../../components/Header'
import TitleTools from '../../components/TitleTools'

export default function Information() {
  return (
    <>
      <Header />
      <TitleTools title={'Informations'} />
      <section className="information__items information__items-color">
        <p className="information__items--title">Versions :</p>
        <div className="information__items--text">
          <p className="information__items--text-version">BETA-2</p>
        </div>
      </section>

      <section className="information__items">
        <p className="information__items--title">Un bug ?</p>
        <div className="information__items--text">
          <p className="information__items--text-font">
            Si vous rencontrez un problème en utilisant Tooly, faites le moi
            savoir ⬇️
          </p>
          <a href="mailto:contact@tox-dev.fr">Me Contacter</a>
        </div>
      </section>

      <p className="information__dev">
        Créer par <a href="https://github.com/ToxyhDev">Tox</a> avec{' '}
        <span className="information__dev-underline">React</span> et{' '}
        <span className="information__dev-underline">Sass</span>.
      </p>
    </>
  )
}

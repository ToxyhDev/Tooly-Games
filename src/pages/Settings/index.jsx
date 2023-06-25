import { useState } from 'react'
import Header from '../../components/Header'
import TitleTools from '../../components/TitleTools'
import { IconDelete } from '../../assets/svgBoardController'
import Button from '../../components/Button'
// import { Link } from 'react-router-dom'

export default function Settings() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || '')
  const [deleteLocalStorage, setDeleteLocalStorage] = useState(true)

  function changeTheme(theme) {
    setTheme(theme)
    document.getElementById('body').className = theme
    localStorage.setItem('theme', theme)
  }
  const defaultTheme = 'theme-blue'
  const listTheme = [
    {
      id: 1,
      color: 'blue',
    },
    {
      id: 2,
      color: 'green',
    },
    {
      id: 3,
      color: 'red',
    },
    {
      id: 4,
      color: 'yellow',
    },
  ]
  return (
    <>
      <Header />
      <div>
        <TitleTools title={'Settings'} />
        <section className="settings__theme settings__items">
          <p className="settings__items--title">Thèmes :</p>
          <div className="settings__theme--color">
            {listTheme.map((themeColor) => {
              return (
                <button
                  key={themeColor.id}
                  onClick={() => changeTheme(`theme-${themeColor.color}`)}
                  className={`settings__theme--color-items settings__theme--color-${
                    themeColor.color
                  } ${
                    theme === `theme-${themeColor.color}`
                      ? 'settings__theme--color-active'
                      : ''
                  }`}
                ></button>
              )
            })}
          </div>
        </section>
        {/* Delete local data */}
        <section className="settings__localStorage settings__items">
          <p className="settings__items--title">Supprimer les données:</p>
          <div className="settings__localStorage--delete">
            {deleteLocalStorage === true ? (
              <>
                <Button
                  className={'settings__localStorage--delete-button'}
                  icon={<IconDelete />}
                  click={() => setDeleteLocalStorage(false)}
                />
                <p className="settings__localStorage--delete-attention">
                  Attention ! Cette action effacera toutes vos données
                  enregistrés en local.
                </p>
              </>
            ) : (
              <>
                <p className="settings__localStorage--delete-attention">
                  Voulez-vous supprimer ?
                </p>
                <div className="settings__localStorage--delete-choice">
                  <Button
                    text={'Oui'}
                    click={() => {
                      localStorage.clear()
                      localStorage.setItem('theme', defaultTheme)
                      setTheme(defaultTheme)
                      document.getElementById('body').className = defaultTheme
                      setDeleteLocalStorage(true)
                    }}
                    className={'yes'}
                  />
                  <Button
                    text={'Non'}
                    click={() => setDeleteLocalStorage(true)}
                    className={'no'}
                  />
                </div>
              </>
            )}
          </div>
        </section>
      </div>
    </>
  )
}

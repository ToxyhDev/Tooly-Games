import { useState } from 'react'
import Header from '../../components/Header'
import TitleTools from '../../components/TitleTools'

export default function Settings() {
  const [theme, setTheme] = useState('')

  function changeTheme(theme) {
    setTheme(theme)
    document.getElementById('body').className = theme
    localStorage.setItem('theme', theme)
  }

  const listTheme = [
    {
      id: 1,
      color: 'blue',
    },
    {
      id: 2,
      color: 'green',
    },
  ]
  //Add active border with color using
  return (
    <>
      <Header />
      <div>
        <TitleTools title={'Settings'} />
        <section className="settings__theme">
          {listTheme.map((themeColor) => {
            return (
              <button
                key={themeColor.id}
                onClick={() => changeTheme(`theme-${themeColor.color}`)}
                className={`settings__theme--color settings__theme--color-${themeColor.color}`}
              ></button>
            )
          })}
        </section>

        {/* <button onClick={() => changeTheme('theme-blue')}>Thème Bleu</button>
        <button onClick={() => changeTheme('theme-green')}>Thème Vert</button> */}
      </div>
    </>
  )
}

import { useState } from 'react'
import Header from '../../components/Header'

export default function Settings() {
  const [theme, setTheme] = useState('')

  function changeTheme(theme) {
    setTheme(theme)
    document.getElementById('body').className = theme
    localStorage.setItem('theme', theme)
  }

  return (
    <>
      <Header />
      <div>
        <h6 id="test_color">Ma Application</h6>
        <button onClick={() => changeTheme('theme-blue')}>Thème Bleu</button>
        <button onClick={() => changeTheme('theme-green')}>Thème Vert</button>
      </div>
    </>
  )
}

import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import ErrorPage from './components/Error/index.jsx'
import './style/style.css'
import Home from './pages/Home/index.jsx'
import Accessory from './pages/Accessory/index.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Settings from './pages/Settings/index.jsx'
import Information from './pages/Information/index.jsx'

function App() {
  const [theme, setTheme] = useState('')

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme) {
      setTheme(storedTheme)
      document.getElementById('body').className = storedTheme
    } else {
      const defaultTheme = 'theme-blue'
      setTheme(defaultTheme)
      document.getElementById('body').className = defaultTheme
      localStorage.setItem('theme', defaultTheme)
    }
  }, [])

  return (
    <section id="body" className={theme}>
      <BrowserRouter basename="Tooly-Games">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/:path" element={<Accessory />} />
          <Route path="/information" element={<Information />} />
          <Route path="/settings" element={<Settings />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </section>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

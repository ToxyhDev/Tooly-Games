import React from 'react'
import ReactDOM from 'react-dom/client'
import ErrorPage from './components/Error/index.jsx'
import './style/style.css'
import Home from './pages/Home/index.jsx'
import Accessories from './pages/Accessories/index.jsx'
import Accessory from './pages/Accessory/index.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <section id="body">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accessoires">
          <Route index element={<Accessories />} />
          <Route path="/accessoires/:path" element={<Accessory />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  </section>
)

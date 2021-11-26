import React from 'react'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { About } from './containers/About'
import { Contact } from './containers/Contact'
import { Footer } from './containers/Footer'
import { Header } from './containers/Header'
import { Server } from './containers/Server'
import { Services } from './containers/Services'
import { Home } from './Pages/Home'
import { Map } from './Pages/Map'

export const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/map' element={<Map />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </HashRouter>
  )
}

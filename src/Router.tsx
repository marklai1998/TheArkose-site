import React from 'react'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
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

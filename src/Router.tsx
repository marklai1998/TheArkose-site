import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'

import { Home } from './Pages/Home'
import { Map } from './Pages/Map'

export const Router = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/map" element={<Map />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </HashRouter>
)

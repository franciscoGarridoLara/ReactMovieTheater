import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Hub from './Hub'
import Login from './Login'
import Regsiter from './Register'

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Regsiter />} />
      <Route path="/hub" element={<Hub />} />
      {/* <Route path="/recipe/:name" element={<Recipe/>}/> */}
    </Routes>
  )
}

export default Pages
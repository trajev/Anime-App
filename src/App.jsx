import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Category from './pages/Category'
import Playerpage from './pages/playerpage'

const App = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/categories" element={<Category />} ></Route>
        <Route path="/playerpage" element={<Playerpage />} ></Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
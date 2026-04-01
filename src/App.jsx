import React, { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Error from './pages/Error'
import { ThemeProvider } from './theme/theme'
import Navbar from './component/navbar/Navbar'
import SingleProduct from './pages/SingleProduct'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product/:id' element={<SingleProduct />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

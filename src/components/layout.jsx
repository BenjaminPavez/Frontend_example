import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home_page'
import LightbulbPage from '../pages/lightbulb_page'
import Index from '../pages/index'

import NavBar from '../components/nav_bar'
import Footer from '../components/footer'
import Bottom from '../components/bottom'

const Layout = () => {
  return (
    <BrowserRouter>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <div className='layout'>
        <h1 className='layout__title'>Interfaz energética</h1>
        <NavBar />
        <div className='layout__page'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/lightbulb' element={<LightbulbPage />} />
            <Route path='/index' element={<Index />} />
            <Route path='/bottom' element={<Bottom />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default Layout

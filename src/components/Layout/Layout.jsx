import React from 'react'
import { useLocation } from 'react-router-dom'
import Routers from '../../routers/routers'
import { Header, Footer } from '../' 
import { AdminNav } from '../../Admin'

function Layout() {

  const location = useLocation()

  return (
    <>
      {location.pathname.startsWith('/dashboard') ? <AdminNav /> : <Header />}

      <div>
        <Routers />
      </div>
      <Footer />
    </>
  )
}

export default Layout
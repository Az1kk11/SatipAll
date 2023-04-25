import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { Cart, Checkout, Chop, Home, Login, ProductsDetalis, Signup } from '../pages/index'
import ProtectedRoute from './ProtectedRoute'
import { AllProducts, AddProducts, Dashboard, Users } from '../Admin/index'

function Routers() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='home' />} />
      <Route path='/home' element={<Home />} />
      <Route path='/shop' element={<Chop />} />
      <Route path='/shop/:id' element={<ProductsDetalis />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/*' element={<ProtectedRoute />}>
        <Route path='checkout' element={<Checkout />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='dashboard/all-products' element={<AllProducts />} />
        <Route path='dashboard/add-products' element={<AddProducts />} />
        <Route path='dashboard/users' element={<Users />} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>
  )
}

export default Routers
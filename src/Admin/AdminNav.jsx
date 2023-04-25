import React from 'react'
import { NavLink } from 'react-router-dom'

import useAuth from '../custom-hooks/useAuth'

import {Container, Row} from 'reactstrap'

import '../styles/admin-nav.css'

const adminNav = [
  { display: 'Dashboard', path: '/dashboard' },
  { display: 'Add-products', path: '/dashboard/add-products' },
  { display: 'All-Products', path: '/dashboard/all-products' },
  { display: 'Users', path: '/dashboard/users' },
]

function AdminNav() {
  const { currentUser } = useAuth()

  return (
    <>
    <header className='admin__header'>
      <div className="admin__nav-top">
        <Container>
          <div className='admin__nav-wrapper-top' >
            <div className="logo">
              <h2>SatipAll</h2>
            </div>
            <div className="admin__nav-top-right">
              <span><i className='ri-notification-3-line'></i></span>
              <span><i className='ri-settings-2-line'></i></span>
              <img src={currentUser?.photoURL} alt="" />
            </div>
          </div>
        </Container>
      </div>
    </header>
    <section className='admin__menu p-0'>
      <Container>
        <Row>
          <div className="admin__navigation">
            <ul className="admin__menu-list">
              {adminNav.map( (c, i) => (
                <li className="admin__nav-item" key={i} >
                  <NavLink to={c.path} 
                    className={navClass => 
                      navClass.isActive ? 'active__admin-menu' : ''} >{c.display}</NavLink>
                </li>
              ) )}
            </ul>
          </div>
        </Row>
      </Container>
    </section>
    </>
  )
}

export default AdminNav
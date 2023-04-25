import React, { useEffect, useRef } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { signOut } from 'firebase/auth'
import useAuth from '../../custom-hooks/useAuth'
import { auth } from '../../firebase.config'

import logo from '../../images/eco-logo.png'

import { motion } from 'framer-motion'
import { Container, Row } from 'reactstrap'
import { toast } from 'react-toastify'

import './Header.css'

function Header() {
  const headerRef = useRef(null)
  const menuRef = useRef(null)
  const navigate = useNavigate()
  const totalQuantity = useSelector(state => state.cart.totalQuantity)
  const { currentUser } = useAuth()
  const profileActionRef = useRef(null)

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if (
        document.body.scrollTop > 0 || document.documentElement.scrollTop > 0
      ) {
        headerRef.current.classList.add('sticky-header')
      } else {
        headerRef.current.classList.remove('sticky-header')
      }
    })
  }

  useEffect(() => {
    stickyHeaderFunc()
    return () => window.removeEventListener('scroll', stickyHeaderFunc)
  }, [])

  const logout = () => {
    signOut(auth).then(() => {
      toast.success('Logged out')
      navigate('/home')
    }).catch(err => {
      console.log(err);
      toast.error(err.message)
    })
  }

  const menuToggle = () => menuRef.current.classList.toggle('active_menu')

  const toggleProfileActions = () => profileActionRef.current.classList.toggle('show__profileActions')

  return (
    <header className='header' ref={headerRef} >
      <Container>
        <Row>
          <div className="nav-wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
              <>
                <h1>SatıpAll</h1>
                <p>2023 Jildan beri</p>
              </>
            </div>

            <div className="navigation" ref={menuRef} onClick={menuToggle} >
              <ul className="menu">
                {NavLinkName.map((item, index) => (
                  <li className="nav-item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) => navClass.isActive ? 'nav-active' : ''}
                    > {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav-icons">
              <span className='fav__icons' >
                <i className='ri-heart-line'></i>
                <span className="badge1">1</span>
              </span>
              <span className='cart__icon' onClick={() => navigate('/cart')} >
                <i className='ri-shopping-bag-line' ></i>
                <span className="badge1">{totalQuantity}</span>
              </span>
              <div className='profile'>
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={currentUser ? currentUser?.photoURL : 'https://top-arenda.by/images/lk/people-profile.png'}
                  alt=""
                  onClick={toggleProfileActions}
                />
                <div
                  className="profile__actions"
                  ref={profileActionRef}
                  onClick={toggleProfileActions}
                >
                  {
                    currentUser ? (
                      <span onClick={logout} >Logout</span>
                    ) : (
                      <div className='d-flex align-items-center 
                      justfy-content-center flex-column' >
                        <Link to={'/signup'}>Signup</Link>
                        <Link to={'/login'}>Login</Link>
                        <Link to={'/dashboard'}>Dashboard</Link>
                      </div>
                    )
                  }
                </div>
              </div>
              <div className="mobile-menu">
                <span onClick={menuToggle} >
                  <i className='ri-menu-line' ></i>
                </span>
              </div>
            </div>

          </div>
        </Row>
      </Container>
    </header>
  )
}
export default Header

const NavLinkName = [
  {
    path: 'home', display: <i className="ri-home-2-line fs-5"></i>,
  },
  {
    path: 'shop', display: <i className="ri-store-2-line fs-5"></i>,
  },
  {
    path: 'cart', display: <i className="ri-shopping-cart-2-line fs-5"></i>,
  },
]
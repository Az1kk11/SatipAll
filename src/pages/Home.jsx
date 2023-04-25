import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import useGetData from '../custom-hooks/useGetData'

import { motion } from 'framer-motion'

import { ProductsList, Clock, Helmet, Services } from '../components'

import heroimg from '../images/hero-img.png'
import counterImg from '../images/counter-timer-img.png'

import { Col, Container, Row } from 'reactstrap'

import '../styles/home.css'

function Home() {
  const { data: products, loading } = useGetData('products')
  const [bestSales, setBestSales] = useState([])
  const [mobileProducts, setMobileProducts] = useState([])
  const [wirelessProducts, setWirelessProducts] = useState([])
  const [popularProducts, setPopularProducts] = useState([])

  const year = new Date().getFullYear()

  useEffect(() => {

    const filteredBestSalesProducts = products.filter(
      item => item.category === 'sofa'
    );
    const filteredMobileProducts = products.filter(
      item => item.category === 'mobile'
    );
    const filteredWirelessProducts = products.filter(
      item => item.category === 'wireless'
    );
    const filteredPopularProducts = products.filter(
      item => item.category === 'watch'
    );

    setBestSales(filteredBestSalesProducts);
    setMobileProducts(filteredMobileProducts)
    setWirelessProducts(filteredWirelessProducts)
    setPopularProducts(filteredPopularProducts)
  }, [products])

  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="hero__content">
                <p className="hero__subtitle">{year} shi jilda eń zor ha'm sapali onimler tek bizde </p>
                <h2>Uyinizdiń dizayinin minimalistik hám zamanagóy etiń</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut quas sunt reiciendis, consequatur nihil cupiditate qui deserunt dolorem esse modi.</p>
                <Link to='/shop' >
                  <motion.button whileTap={{ scale: 0.9 }}
                    className="buy__btn">
                    Magazin
                  </motion.button>
                </Link>
              </div>
            </Col>
            <Col lg='6' md='6'>
              <div className="hero__img">
                <img src={heroimg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section className="best-sales">
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section-title'>Eng jaqsi onimler</h2>
            </Col>
            {
              loading ? <h5 className='fw-bold'>Juklenbekte...</h5> :
                <ProductsList data={bestSales} />
            }
          </Row>
        </Container>
      </section>
      <section className="timer_count">
        <Container>
          <Row>
            <Col lg='6' md='12' className='count_down-col' >
              <div className="clock_top-content">
                <h4 className='text-white fs-6 mb-2'>Sheklengen usinislar</h4>
                <h4 className='text-white fs-5 mb-3'>Sapali Kreslolar</h4>
              </div>
              <Clock />
              <motion.button whileTap={{ scale: 0.9 }} className="buy__btn store_btn">
                <Link to='/shop'>Magazin</Link>
              </motion.button>
            </Col>
            <Col lg='6' md='12' className='text-end counter-img '>
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="new_arrivals">
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-3'>
              <h2 className="section-title">Jan'a kelgenler</h2>
            </Col>
            {
              loading ? <h5 className='fw-bold'>Juklenbekte...</h5> :
                <ProductsList data={mobileProducts} />
            }
            {
              loading ? <h5 className='fw-bold'>Juklenbekte...</h5> :
                <ProductsList data={wirelessProducts} />
            }
          </Row>
        </Container>
      </section>
      <section className="popular_cotegory">
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h2 className="section-title">Kop satip alinganlar</h2>
            </Col>
            {
              loading ? <h5 className='fw-bold'>Juklenbekte...</h5> :
                <ProductsList data={popularProducts} />
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Home
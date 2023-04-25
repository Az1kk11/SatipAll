import React from 'react'
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  const year = new Date().getFullYear() 
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='4' className='mb-4' >
            <div className="logo">
              <>
                <h1 className='text-white'>SatıpAll</h1>
              </>
            </div>
            <p className='footer-text mt-4' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quas in, numquam reiciendis nemo dolores? Optio nobis molestiae architecto ipsum enim ea dolor eius? Sapiente, recusandae numquam. Maxime, eum a!</p>
          </Col>
          <Col lg='3' className='mb-4'>
            <div className="footer_quick-links">
              <h4 className="quick-links-title">Eń jaqsı taypalar </h4>
              <ListGroup  >

                <ListGroupItem className='ps-0 border-0' >
                  <Link to='#' >Mobil telefonlar</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0' >
                  <Link to='#' >Zamanagóy divan</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0' >
                  <Link to='#' >Kreslo</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0' >
                  <Link to='#' >Aqilli saatlar </Link>
                </ListGroupItem>

              </ListGroup>
            </div>
          </Col>
          <Col lg='2' className='mb-4'>
            <div className="footer_quick-links">
              <h4 className="quick-links-title">Paydalı siltemeler</h4>
              <ListGroup>

                <ListGroupItem className='ps-0 border-0' >
                  <Link to='/shop' >Dúkan</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0' >
                  <Link to='/cart' >Sebet</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0' >
                  <Link to='/login' >Kiriw</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0' >
                  <Link to='#' >Jasırınlıq siyasatı </Link>
                </ListGroupItem>

              </ListGroup>
            </div>
          </Col>
          <Col lg='1'>
            <div className="footer_quick-links"> 
              <h4 className="quick-links-title">Baylanıs </h4>
              <ListGroup className='footer-contact' >

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2' >
                  <span>
                    <i className='ri-map-pin-line' ></i>
                  </span>
                  <p>Uzbekstan Qaraqalpaqstan Nukus Qaraqalpaqstan koshesi 143 uy</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2' >
                  <span>
                    <i className='ri-phone-line' ></i>
                  </span>
                  <p>+998909559595</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2' >
                  <span>
                    <i className="ri-mail-line"></i>
                  </span>
                  <p>satipal@gmail.com</p>
                </ListGroupItem>

              </ListGroup>
            </div>
          </Col>
          <Col lg='12'>
            <p className="footer-copyright">Copyright {year} developed by Azizbek. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
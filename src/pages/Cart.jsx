import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Helmet, CommonSection } from '../components'

import { cartActions } from '../redux/slice/cartSlice'

import { motion } from 'framer-motion';
import { Col, Container, Row } from 'reactstrap';

import '../styles/cart.css'

const Cart = () => {
  const cartItems = useSelector(state => state.cart.cartItems)
  const totalAmount = useSelector(state => state.cart.totalAmount)

  return (
    <Helmet title='Cart'>
      <CommonSection title='Satıp alınǵan zatlar' />
      <section>
        <Container>
          <Row>
            <Col lg='9'>
              {cartItems.length === 0 ? (
                <h2 className='fs-4 text-center'>Sebetke hesh nárse qosılmaǵan </h2>
              ) : (
                <table className='table bordered' >
                  <thead>
                    <tr>
                      <th>Poto</th>
                      <th>Ati</th>
                      <th>Senasi</th>
                      <th>Mug'adri</th>
                      <th>Oshiriw</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <Tr item={item} key={index} />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>
            <Col lg='3' className='inf-box'>
              <>
                <h6 className='d-flex align-items=center justify-content-between' >
                  Ja'mi bolip
                  <span className='fs-5 fw-bold'>${totalAmount}</span>
                </h6>
              </>
              <p className="fs-6 mt-2" >Satıp alınǵan zatlar kassada esaplab shıǵıladı </p>
              <div>
                <button className='buy__btn mt-3 w-100'>
                  <Link to={'/shop'}>
                    Satıp alıwda dawam etiw
                  </Link>
                </button>
                <button className='buy__btn mt-2 w-100'>
                  <Link to={'/checkout'}>
                    Satıp alıw
                  </Link>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
};

const Tr = ({ item }) => {
  const dispatch = useDispatch()

  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id))
  }

  return (
    <tr>
      <td>
        <img src={item.imgUrl} alt="" />
      </td>
      <td>{item.title}</td>
      <td>${item.price}</td>
      <td>{item.quantity}px</td>
      <td>
        <motion.i
          whileTap={{ scale: 0.9 }}
          className="ri-delete-bin-line"
          onClick={deleteProduct}
        ></motion.i>
      </td>
    </tr>
  )
}

export default Cart
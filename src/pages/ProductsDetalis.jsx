import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { cartActions } from '../redux/slice/cartSlice'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase.config'
import useGetData from '../custom-hooks/useGetData'

import { Helmet, CommonSection, ProductsList } from '../components'

import { toast } from 'react-toastify'
import { Col, Container, Row } from 'reactstrap'
import { motion } from 'framer-motion'
import '../styles/productsDetalis.css';

const ProductsDetalis = () => {
  const [product, setProduct] = useState({})
  const [tab, setTab] = useState('desc')
  const dispatch = useDispatch()
  const [rating, setRating] = useState(null)
  const reviewUser = useRef('')
  const reviewMsg = useRef('')
  const { id } = useParams()
  const { data: products } = useGetData('products')
  const docRef = doc(db, 'products', id)

  useEffect(() => {
    const getProducts = async () => {
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        setProduct(docSnap.data())
      } else {
        console.log('no product');
      }
    }
    getProducts()
  }, [])

  // const product = products.find((item) => item.id === id)

  const {
    imgUrl,
    title,
    price,
    // avgRating, 
    // reviews, 
    description,
    shortDesc,
    category
  } = product

  const relatedProducts = products.filter(item => item.category === category)

  const submitHandler = e => {
    e.preventDefault()
    const reviewUserName = reviewUser.current.value
    const reviewUserMsg = reviewMsg.current.value

    const reviewObj = {
      userName: reviewUserName,
      text: reviewUserMsg,
      rating
    }
    toast.success('Review submited')
  }


  const addToCart = () => {
    dispatch(cartActions.addItem({
      id,
      image: imgUrl,
      title,
      price
    }));
    toast.success('Product added successfully')
  }

  useEffect(() => {
    window.scrollTo(0, 170)
  }, [product])

  return (
    <Helmet title={title} >
      <CommonSection title={title} />
      <section className='pt-0' >
        <Container>
          <Row>
            <Col lg='6' >
              <img src={imgUrl} alt="" />
            </Col>
            <Col lg='6' >
              <div className="product__details">
                <h2>{title}</h2>
                <div className="product__rating d-flex align-items-center gap-5 mb-3 ">
                  <div>
                    <span><i className='ri-star-s-fill' ></i></span>
                    <span><i className='ri-star-s-fill' ></i></span>
                    <span><i className='ri-star-s-fill' ></i></span>
                    <span><i className='ri-star-s-fill' ></i></span>
                    <span><i className='ri-star-half-s-fill' ></i></span>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-5">
                  <span className='price'>${price}</span>
                  <span>Category: <span className='text-capitalize'>{category}</span></span>
                </div>
                <p className='mt-3' >{shortDesc}</p>

                <motion.button
                  whileTap={{ scale: .9 }}
                  className='buy__btn'
                  onClick={addToCart}
                >
                  Add to Cart
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <div className="tab__wrapper d-flex align-items-center gap-5 ">
                <h6 className={`${tab === 'desc' ? 'active__tab' : ''}`}
                  onClick={() => setTab('desc')}
                >
                  Description
                </h6>
                <h6 className={`${tab === 'desc' ? 'active__tab' : ''}`}
                  onClick={() => setTab('rev')}
                >
                  Reviews
                </h6>
              </div>
              {tab === 'desc' ? (
                <div className="tab__content mt-4">
                  <p>{description}</p>
                </div>
              ) : (
                <div className="product__review mt-5 ">
                  <div className="review__wrapper">
                    <div className="review__form">
                      <form action="" onSubmit={submitHandler}>
                        <h4>Leave your experience</h4>
                        <div className="form__group">
                          <input
                            type="text"
                            placeholder='Enter name'
                            ref={reviewUser}
                            required
                          />
                        </div>

                        <div className="form__group d-flex align-items-center gap-5 rating__group">
                          <motion.span whileTap={{ scale: .8 }} onClick={() => setRating(1)} >
                            1
                            <i className="ri-star-s-fill"></i>
                          </motion.span>
                          <motion.span whileTap={{ scale: .8 }} onClick={() => setRating(2)}>
                            2
                            <i className="ri-star-s-fill"></i>
                          </motion.span>
                          <motion.span whileTap={{ scale: .8 }} onClick={() => setRating(3)}>
                            3
                            <i className="ri-star-s-fill"></i>
                          </motion.span>
                          <motion.span whileTap={{ scale: .8 }} onClick={() => setRating(4)}>
                            4
                            <i className="ri-star-s-fill"></i>
                          </motion.span>
                          <motion.span whileTap={{ scale: .8 }} onClick={() => setRating(5)}>
                            5
                            <i className="ri-star-s-fill"></i>
                          </motion.span>
                        </div>

                        <div className="form__group">
                          <textarea ref={reviewMsg} required rows={4} type="text" placeholder='Review Message...' />
                        </div>
                        <motion.button whileTap={{ scale: .9 }} type='submit' className='buy__btn mt-0'>Submit</motion.button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </Col>
            <Col lg='12' className='mt-5'>
              <h2 className='related__title'>You might also like</h2>
            </Col>
            <ProductsList data={relatedProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default ProductsDetalis
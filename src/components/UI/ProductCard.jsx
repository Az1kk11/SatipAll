import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../redux/slice/cartSlice'

import { Col } from 'reactstrap'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify';

import '../../styles/productCard.css'

const ProductCard = ({ item }) => {

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(cartActions.addItem({
      id: item.id,
      title: item.title,
      price: item.price,
      imgUrl: item.imgUrl
    }))
    toast.success('Ónim qosıldı ')
  }

  return (
    <Col lg='3' md='4' className='mb-2' >
      <div className="product_item">
        <div className="product_img">
          <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt="" />
        </div>
        <div className="p-2 product-info">
          <Link to={`/shop/${item.id}`} >
            <h3 className='product_name'>{item.productName || item.title}</h3>
          </Link>
          <span>{item.cotegory}</span>
        </div>
        <div className="product-card-bottom d-flex align-items-center justify-content-between p-2">
          <span className='price'>${item.price}</span>
          <motion.span whileTap={{ scale: 0.9 }} onClick={addToCart} >
            <i className='ri-add-line' ></i>
          </motion.span>
        </div>
      </div>
    </Col>
  )
}

export default ProductCard
import React from 'react'
import { useState } from 'react';

import { Col, Container, Row } from 'reactstrap';
import { Helmet, CommonSection, ProductsList } from '../components';

import useGetData from '../custom-hooks/useGetData';
import '../styles/chop.css'

const Chop = () => {
  const { data: products } = useGetData('products')

  const [productsData, setProductsData] = useState(products)

  const handlerFilter = e => {
    const filterValue = e.target.value;

    if (filterValue === 'all') {
      setProductsData(products)
    }

    if (filterValue === 'sofa') {
      const filteredProducts = products.filter(
        (item) => item.category === 'sofa'
      );
      setProductsData(filteredProducts)
    }

    if (filterValue === 'mobile') {
      const filteredProducts = products.filter(
        (item) => item.category === 'mobile'
      );
      setProductsData(filteredProducts)
    }

    if (filterValue === 'chair') {
      const filteredProducts = products.filter(
        (item) => item.category === 'chair'
      );
      setProductsData(filteredProducts)
    }

    if (filterValue === 'watch') {
      const filteredProducts = products.filter(
        (item) => item.category === 'watch'
      );
      setProductsData(filteredProducts)
    }

    if (filterValue === 'wireless') {
      const filteredProducts = products.filter(
        (item) => item.category === 'wireless'
      );
      setProductsData(filteredProducts)
    }
  }

  const handlerSearch = e => {
    const searchTerm = e.target.value;

    const searchedProducts = products.filter
      (item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    setProductsData(searchedProducts)
  }

  return (
    <Helmet title='Onimler'>
      <CommonSection title={"Ónimler"} />
      <section>
        <Container>
          <Row>
            <Col lg='3' md='6'>
              <div className="filter-widget">
                <select onChange={handlerFilter} >
                  <option value='all'>filtrlew</option>
                  <option value="sofa">Divan</option>
                  <option value="mobile">Mabil telefon</option>
                  <option value="chair">Stul</option>
                  <option value="watch">Saat</option>
                  <option value="wireless">Simsiz nawishnik</option>
                </select>
              </div>
            </Col>
            <Col lg='3' md='6' className='text-end'>
              <div className="filter-widget">
                <select>
                  <option>Saralaw túri</option>
                  <option value="ascending">Kóteriliw</option>
                  <option value="descending">Kemiyiw</option>
                </select>
              </div>
            </Col>
            <Col lg='6' md='12'>
              <div className="search-box">
                <input type="text" placeholder='Search......'
                  onChange={handlerSearch}
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='pt-0' >
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <ProductsList data={products} />
            ) : (
              <ProductsList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Chop
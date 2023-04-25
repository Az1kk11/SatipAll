import React from 'react'
import { Col, Container, Row } from 'reactstrap'

import { motion } from 'framer-motion'
import './Services.css'

const serviceData = [
    {
        icon: "ri-truck-line",
        title: "Jetkezip beriw tegin",
        subtitle: "Lorem ipsum dolor sit amet.",
        bg: "#fdefe6",
    },
    {
        icon: "ri-refresh-line",
        title: "Qayta tapsiriw",
        subtitle: "Lorem ipsum dolor sit amet.",
        bg: "#ceebe9",
    },
    {
        icon: "ri-secure-payment-line",
        title: "Qawipsiz tolem",
        subtitle: "Lorem ipsum dolor sit amet.",
        bg: "#e2f2b2",
    },
    {
        icon: "ri-exchange-dollar-line",
        title: "Mudetli tolem",
        subtitle: "Lorem ipsum dolor sit amet.",
        bg: "#d6e5fb",
    },
];

function Services() {
    return (
        <section className="services">
            <Container>
                <Row>
                    {serviceData.map((item, index) => (
                        <Col lg='3' md='4' key={index} >
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="services_item"
                                style={{ background: `${item.bg}` }}>
                                <span>
                                    <i className={item.icon} ></i>
                                </span>
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.subtitle}</p>
                                </div>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}

export default Services
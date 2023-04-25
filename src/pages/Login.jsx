import React, { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'

import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase.config'

import { Helmet } from '../components'

import { Col, Container, Form, FormGroup, Row } from 'reactstrap'
import { toast } from 'react-toastify'

import '../styles/login.css'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const signIn = async e => {
    e.preventDefault()
    setLoading(true)

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)

      const user = userCredential.user

      setLoading(false)
      toast.success('Successfully logged in')
      navigate('/home')
    } catch (error) {
      setLoading(false)
      console.log(error);
      toast.error(error.message)
    }
  }

  return (
    <Helmet title={'Login'} >
      <section>
        <Container>
          <Row>
            {loading ? (
              <Col lg='12' className='text-center'>
                <h5 className='fw-bold'>
                  Loading....
                </h5>
              </Col>
            ) : (
              <Col lg='6' className='m-auto text-center'>
                <h3 className='fw-bold mb-4 '>Login</h3>
                <Form className='auth__form' onSubmit={signIn} >
                  <FormGroup className='form__group' >
                    <input type="email" placeholder='Enter your email'
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </FormGroup>

                  <FormGroup className='form__group' >
                    <input type="password" placeholder='Enter your password'
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                  </FormGroup>

                  <button type='submit' className='buy__btn auth__btn'>Login</button>
                  <p>
                    Don't have an account?{" "}
                    <Link to={'/signup'}>Create an account</Link>
                  </p>
                </Form>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Login
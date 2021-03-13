import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Student from '../components/Student'

const Home = () => {
  return (
    <Container className='py-4'>
      <Row>
        <Student />
        <Student />
        <Student />
        <Student />
        <Student />
        <Student />
        <Student />
        <Student />
      </Row>
    </Container>
  )
}

export default Home

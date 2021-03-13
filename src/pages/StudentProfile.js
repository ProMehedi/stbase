import React from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const StudentProfile = () => {
  return (
    <Container className='py-4'>
      <Row className='justify-content-center'>
        <Col md={10}>
          <LinkContainer to='/'>
            <Button variant='dark mb-2'>Back to Home</Button>
          </LinkContainer>
          <Card className='mb-3'>
            <Card.Body>
              <Row>
                <Col md={4}>
                  <Image
                    src='https://picsum.photos/300/300'
                    className='border'
                  />
                </Col>
                <Col md={8}>
                  <Card.Title className='border-bottom pb-2'>
                    Mehedi Hasan
                  </Card.Title>
                  <p className='border-bottom mb-1 pb-1'>
                    <strong>Email:</strong> name@example.com
                  </p>
                  <p className='border-bottom mb-1 pb-1'>
                    <strong>Phone:</strong> +880 1782 927 925
                  </p>
                  <p className='border-bottom mb-1 pb-1'>
                    <strong>Class:</strong> 12
                  </p>
                  <p className='border-bottom mb-1 pb-1'>
                    <strong>Grade:</strong> 3.90
                  </p>
                  <p className='border-bottom mb-1 pb-1'>
                    <strong>Full Address:</strong> Mirpur-1, Dhaka 1216,
                    Bangladesh
                  </p>
                  <p className='border-bottom mb-1 pb-1'>
                    <strong>Father's Name:</strong> Md. Abul Kasem
                  </p>
                  <p className='border-bottom mb-1 pb-1'>
                    <strong>Mother's Name:</strong> Lilyfa Begum
                  </p>
                  <div className='profileAction d-flex justify-content-between mt-3'>
                    <Button variant='danger btn-sm'>Delete Profile</Button>
                    <LinkContainer to='/student/edit'>
                      <Button variant='warning btn-sm'>Edit Profile</Button>
                    </LinkContainer>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default StudentProfile

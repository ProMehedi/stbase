import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Student = () => {
  return (
    <Col xl={3} lg={4} md={6}>
      <Card className='mb-3'>
        <Card.Img variant='top' src='https://picsum.photos/300/200' />
        <Button className='delProfileBtn' variant='danger btn-sm'>
          Delete Profile
        </Button>
        <Card.Body>
          <Card.Title className='border-bottom pb-2'>Najmin Hasan</Card.Title>
          <div className='profileAction d-flex justify-content-between mt-3'>
            <LinkContainer to='/student/1'>
              <Button variant='info btn-sm'>View Profile</Button>
            </LinkContainer>
            <LinkContainer to='/student/edit'>
              <Button variant='warning btn-sm'>Edit Profile</Button>
            </LinkContainer>
          </div>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Student

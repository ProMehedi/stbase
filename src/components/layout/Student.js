import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'

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
          <p className='border-bottom mb-1 pb-1'>
            <strong>Email:</strong> name@example.com
          </p>
          <p className='border-bottom mb-1 pb-1'>
            <strong>Class:</strong> 12
          </p>
          <p className='border-bottom mb-1 pb-1'>
            <strong>Grade:</strong> 3.90
          </p>
          <div className='profileAction d-flex justify-content-between mt-3'>
            <Button variant='info btn-sm'>View Profile</Button>
            <Button variant='warning btn-sm'>Edit Profile</Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Student

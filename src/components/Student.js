import React from 'react'
import { Button, Card, Col, Image } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Student = ({ student }) => {
  const avatar = student.image ? student.image : 'https://i.pravatar.cc/150'
  return (
    <Col xl={3} lg={4} md={6}>
      <Card className='mb-3'>
        <Button className='delProfileBtn' variant='danger btn-sm'>
          Delete
        </Button>
        <Card.Body className='text-center'>
          <Image roundedCircle width='100' src={avatar} />
          <Card.Title>
            {student.fName} {student.lName}
          </Card.Title>
          <div className='profileAction d-flex justify-content-between mt-3'>
            <LinkContainer to={`/student/${student.id}`}>
              <Button variant='info btn-sm'>View Profile</Button>
            </LinkContainer>
            <LinkContainer to={`/student/edit/${student.id}`}>
              <Button variant='warning btn-sm'>Edit Profile</Button>
            </LinkContainer>
          </div>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Student

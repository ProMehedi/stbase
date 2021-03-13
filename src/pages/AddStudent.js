import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const AddStudent = () => {
  const [fName, setFName] = useState('')
  const [lName, setLName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [classN, setClassN] = useState('')
  const [grade, setGrade] = useState('')
  const [address, setAddress] = useState('')
  const [father, setFather] = useState('')
  const [mother, setMother] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log({
      fName,
      lName,
      email,
      phone,
      classN,
      grade,
      address,
      father,
      mother,
    })
  }

  return (
    <Container className='py-4'>
      <Row className='justify-content-center'>
        <Col md={8}>
          <LinkContainer to='/'>
            <Button variant='dark mb-2'>Back to Home</Button>
          </LinkContainer>
          <Card className='mb-3'>
            <Card.Body>
              <Card.Title>Add New Student</Card.Title>
              <Form onSubmit={submitHandler}>
                <Form.Group>
                  <Form.Row>
                    <Col>
                      <Form.Control
                        type='text'
                        placeholder='First Name'
                        value={fName}
                        onChange={(e) => setFName(e.target.value)}
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        type='text'
                        placeholder='Last Name'
                        value={lName}
                        onChange={(e) => setLName(e.target.value)}
                      />
                    </Col>
                  </Form.Row>
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type='email'
                    placeholder='Email Address'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type='phone'
                    placeholder='Phone Number'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type='text'
                    placeholder='Class Name'
                    value={classN}
                    onChange={(e) => setClassN(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type='text'
                    placeholder='Grade'
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type='text'
                    placeholder='Full Address'
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type='text'
                    placeholder='Father Name'
                    value={father}
                    onChange={(e) => setFather(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type='text'
                    placeholder='Mother Name'
                    value={mother}
                    onChange={(e) => setMother(e.target.value)}
                  />
                </Form.Group>
                <Button type='submit' variant='danger'>
                  ADD STUDENT
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default AddStudent

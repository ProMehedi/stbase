import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const EditStudent = () => {
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
              <Card.Title>Edit Student</Card.Title>
              <Form onSubmit={submitHandler}>
                <Form.Group>
                  <Form.Row>
                    <Col>
                      <Form.Label htmlFor='fName'>First Name</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='First Name'
                        id='fName'
                        value={fName}
                        onChange={(e) => setFName(e.target.value)}
                      />
                    </Col>
                    <Col>
                      <Form.Label htmlFor='lName'>Last Name</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='Last Name'
                        id='lName'
                        value={lName}
                        onChange={(e) => setLName(e.target.value)}
                      />
                    </Col>
                  </Form.Row>
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor='email'>Email Address</Form.Label>
                  <Form.Control
                    type='email'
                    placeholder='Email Address'
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor='phone'>Phone Number</Form.Label>
                  <Form.Control
                    type='phone'
                    placeholder='Phone Number'
                    id='phone'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor='classN'>Class Name</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Class Name'
                    id='classN'
                    value={classN}
                    onChange={(e) => setClassN(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor='grade'>Grade</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Grade'
                    id='grade'
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor='address'>Full Address</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Full Address'
                    id='address'
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor='father'>Father's Name</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Father Name'
                    id='father'
                    value={father}
                    onChange={(e) => setFather(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor='mother'>Mother's Name</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Mother Name'
                    id='mother'
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

export default EditStudent

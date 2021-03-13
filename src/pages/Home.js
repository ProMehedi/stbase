import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import Student from '../components/Student'

const Home = () => {
  // Get Data from Firestore
  useFirestoreConnect([{ collection: 'students' }])

  // Collect Students From React-Redux
  const firestore = useSelector((state) => state.firestore)
  const { students } = firestore.ordered

  console.log(students)

  return (
    <Container className='py-4'>
      <Row>
        {students.map((student) => (
          <Student key={student.id} student={student} />
        ))}
      </Row>
    </Container>
  )
}

export default Home

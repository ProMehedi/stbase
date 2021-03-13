import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import { SyncLoader } from 'react-spinners'
import Student from '../components/Student'

const Home = () => {
  // Get Data from Firestore
  useFirestoreConnect([{ collection: 'students' }])

  // Collect Students From React-Redux
  const firestore = useSelector((state) => state.firestore)
  const { students } = firestore.ordered

  if (!students) {
    return (
      <div className='loaderWrapper'>
        <h4 className='mb-4 text-white'>Loading Students...</h4>
        <SyncLoader size={15} color='red' />
      </div>
    )
  }

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

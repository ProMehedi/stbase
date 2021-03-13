import React from 'react'
import { Route } from 'react-router'
import Header from './components/layout/Header'
import AddStudent from './pages/AddStudent'
import EditStudent from './pages/EditStudent'
import Home from './pages/Home'
import StudentProfile from './pages/StudentProfile'

const App = () => {
  return (
    <>
      <Header />
      <Route exact path='/' component={Home} />
      <Route exact path='/add-student' component={AddStudent} />
      <Route exact path='/student/:id' component={StudentProfile} />
      <Route exact path='/student/edit/:id' component={EditStudent} />
    </>
  )
}

export default App

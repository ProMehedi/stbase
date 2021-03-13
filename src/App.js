import React from 'react'
import { Route } from 'react-router'
import Header from './components/layout/Header'
import Home from './pages/Home'
import StudentProfile from './pages/StudentProfile'

const App = () => {
  return (
    <>
      <Header />
      <Route exact path='/' component={Home} />
      <Route exact path='/student/:id' component={StudentProfile} />
    </>
  )
}

export default App

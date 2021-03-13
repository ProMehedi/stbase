import React from 'react'
import { Route } from 'react-router'
import Header from './components/layout/Header'
import Home from './pages/Home'

const App = () => {
  return (
    <>
      <Header />
      <Route exact path='/' component={Home} />
    </>
  )
}

export default App

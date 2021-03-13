import React from 'react'
import {
  Button,
  Container,
  Image,
  Nav,
  Navbar,
  NavDropdown,
} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <>
      <Navbar bg='light' expand='md'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand className='font-weight-bold'>
              STUDENT<span className='text-danger'>BASE</span>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <Button variant='danger mr-3'>Add Student</Button>
              <Nav.Link className='avater-img py-0 pr-0'>
                <Image
                  src='https://picsum.photos/80/80'
                  roundedCircle
                  className='border '
                />
              </Nav.Link>
              <NavDropdown
                title='Mehedi Hasan'
                id='basic-nav-dropdown'
                alignRight
              >
                <LinkContainer to='/profile'>
                  <NavDropdown.Item>Dashboard</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/edit-profile'>
                  <NavDropdown.Item>Edit Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header

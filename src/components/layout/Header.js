import React from 'react'
import {
  Button,
  Container,
  Image,
  Nav,
  Navbar,
  NavDropdown,
} from 'react-bootstrap'

const Header = () => {
  return (
    <>
      <Navbar bg='light' expand='md'>
        <Container>
          <Navbar.Brand href='#home'>
            STUDENT<span className='text-danger'>BASE</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <Nav.Link href='#home'>Home</Nav.Link>
              <Nav.Link href='#link'>Link</Nav.Link>
            </Nav>
            <Nav>
              <Button variant='danger mr-3'>Danger</Button>
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
                <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>
                  Something
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header

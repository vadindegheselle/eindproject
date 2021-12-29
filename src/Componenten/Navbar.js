import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import {Link} from 'react-router-dom'


const  navStyle = {
    color: '#82E0AA',
    fontFamily: 'Helvetica',
    fontSize: 18,
     lineHeight: 0.8,
     padding: '0.25em',
     display: 'flex',
    }
const NavbarComponent = () => {
    return (
        <div style={navStyle}>
            <Navbar bg="dark" variant="light" fixed="top">
                
                
      <Navbar.Brand as={Link} to="/"> 
              <div class="col" style={navStyle}>
            <img src="http://localhost:5000/vadindegheselle/images/logo2.png" 
                class="rounded-circle"
                width="65"
                height="65"/>
                </div>
               </Navbar.Brand>
                <Nav>
                    <Nav.Link as={Link} to='/'><div style={navStyle}>Home
                        </div></Nav.Link>
                    <Nav.Link as={Link} to='/architecture'><div style={navStyle}>Architecture
                        </div></Nav.Link>
                    <Nav.Link as={Link} to='/joinus'><div style={navStyle}>About us
                        </div></Nav.Link>
                    
                </Nav>
            </Navbar>
        </div>
        
    )
}

export default NavbarComponent
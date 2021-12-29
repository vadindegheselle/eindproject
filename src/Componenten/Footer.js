import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import {Link} from 'react-router-dom'

const  footerStyle = {
    color: '#82E0AA',
    fontFamily: 'Helvetica',
    fontSize: 14,
     lineHeight: 0.25,
     padding: '1.5em',
    }
const Footer = () => {
    return (
        <div style={footerStyle}>
   
            <Navbar bg="dark" variant="light" fixed="bottom">

            <div class="blockquote text-left" style={footerStyle}>
              <p> VDG Architecture</p> 
              <p>Vadin De Gheselle</p>
              <p>+32494786100</p>
              <p>Vadin.DeGheselle@UGent.be</p>
              
              
                
            </div>
            <Nav> 
                <Nav.Link as={Link} to='/contact'>
                <div class="col" style={footerStyle}>
                Contact                    
              </div>
                </Nav.Link>
           
                <div class="col" style={footerStyle}>
                    <a href="https://www.instagram.com/vadin.degheselle/"> Instagram</a>
                </div>
                
            </Nav>
            </Navbar>
        </div>
        
        
    )
}

export default Footer
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { FaHome, FaUser,FaProjectDiagram, FaTools, FaEnvelope, FaLaptopCode } from 'react-icons/fa'; // Import icons
import './style.css';

export default function Navbari() {
  let location = useLocation();

  return (
    <div>
      <Navbar expand="lg" className=" custom-navbar" style={{border:'none'}}>
        <Container>
    
          <Navbar.Brand as={Link} to="/"  style={{color:"black",   fontFamily: "Rubik, serif"}}><FaLaptopCode size={25} style={{ marginBottom: '3px', marginRight: '0px' ,color: 'black' }} /> Sumit Pandey</Navbar.Brand>

       
          <Navbar.Toggle aria-controls="navbar-collapse" />

      
          <Navbar.Collapse id="navbar-collapse">
            <Nav className="me-auto">
       
              <Nav.Link as={Link} className={location.pathname === "/Home" ? "active" : ""} to="/Home" style={{color:"black"}}>
                <FaHome size={18} style={{ marginBottom: '3px', marginRight: '5px' ,color: 'black' }} /> Home
              </Nav.Link>
              <Nav.Link as={Link} className={location.pathname === "/About" ? "active" : "" } to="/About" style={{color:"black"}}>
                <FaUser size={18} style={{ marginBottom: '3px', marginRight: '5px' ,color: 'black'}} /> About Me
              </Nav.Link>
              <Nav.Link as={Link} className={location.pathname === "/Projects" ? "active" : ""} to="/Projects" style={{color:"black"}}>
                <FaProjectDiagram size={18} style={{ marginBottom: '3px', marginRight: '5px' ,color: 'black'}} /> Projects
              </Nav.Link>
              <Nav.Link as={Link} className={location.pathname === "/Skills" ? "active" : ""} to="/Skills" style={{color:"black"}}> 
                <FaTools size={18} style={{ marginBottom: '3px', marginRight: '5px',color: 'black' }} /> Skills
              </Nav.Link>
              <Nav.Link as={Link} className={location.pathname === "/Contact" ? "active" : ""} to="/Contact" style={{color:"black"}}>
                <FaEnvelope size={18} style={{ marginBottom: '3px', marginRight: '5px',color: 'black' }} /> Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

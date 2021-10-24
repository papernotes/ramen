import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function Toolbar() {
    return(
        <Navbar>
        <Container>
          <Navbar.Brand>
              <Link style={{textDecoration: 'none'}} to='/ramen'>
                <h2>jon's ramen list</h2>
              </Link>
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
              <Link style={{textDecoration: 'none'}} to='/faq'>
                <h3>faq</h3>
              </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Toolbar;
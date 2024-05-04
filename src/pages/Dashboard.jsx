import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../styles.css'

const Dashboard = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/dashboard">Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/dashboard/service">Services</Nav.Link>
            <Nav.Link as={Link} to="/dashboard/appointment">Appointment</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar>


      <div>
        <Outlet/>
      </div>
      
    </div>
  );
};

export default Dashboard;

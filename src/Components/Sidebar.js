import React from 'react';
import { Nav } from 'react-bootstrap';
import { House, PlusSquare, Compass, Heart, Person, CameraVideo, PersonPlus, Book } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

function SidebarLeft() {
  return (
    <div className="sidebar p-3">
      <Nav className="flex-column">
        <Nav.Link as={Link} to="/"><House /> Home</Nav.Link>
        <Nav.Link as={Link} to="/explore"><Compass /> Explore</Nav.Link>
        <Nav.Link as={Link} to="/notifications"><Heart /> Notifications</Nav.Link>
        <Nav.Link as={Link} to="/create"><PlusSquare /> Create</Nav.Link>
        <Nav.Link as={Link} to="/login"><Person /> Login</Nav.Link>
        <Nav.Link as={Link} to="/register"><PersonPlus /> Register</Nav.Link>
        <Nav.Link as={Link} to="/profile"><Person /> Profile</Nav.Link>
        <Nav.Link as={Link} to="/stories"><Book /> Stories</Nav.Link>
        <Nav.Link as={Link} to="/reels"><CameraVideo /> Reels</Nav.Link>
      </Nav>
    </div>
  );
}

export default SidebarLeft;

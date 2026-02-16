import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {
  FaThLarge,
  FaUser,
  FaBriefcase,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
} from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar-container bg-dark text-white p-3">
      <div className="sidebar-logo mb-5 text-center">
        <NavLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h4 className="fw-bold" style={{ cursor: 'pointer' }}>
            UI DESIGNER
          </h4>
        </NavLink>
      </div>
      <Nav className="flex-column gap-2">
        <Nav.Link
          as={NavLink}
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'sidebar-link active-link' : 'sidebar-link'
          }
        >
          <FaThLarge className="me-2" /> Dashboard
        </Nav.Link>
        <Nav.Link
          as={NavLink}
          to="/profile"
          className={({ isActive }) =>
            isActive ? 'sidebar-link active-link' : 'sidebar-link'
          }
        >
          <FaUser className="me-2" /> My Profile
        </Nav.Link>
        <Nav.Link href="#" className="sidebar-link">
          <FaBriefcase className="me-2" /> Projects
        </Nav.Link>

        <Nav.Link href="#" className="sidebar-link">
          <FaChartBar className="me-2" /> Analytics
        </Nav.Link>

        <hr className="my-4 border-secondary" />

        <Nav.Link href="#" className="sidebar-link">
          <FaCog className="me-2" /> Settings
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;

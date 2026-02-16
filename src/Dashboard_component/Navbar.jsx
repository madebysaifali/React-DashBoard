import React from 'react';
import {
  Navbar,
  Container,
  Form,
  InputGroup,
  Nav,
  Dropdown,
  Image,
} from 'react-bootstrap';
import {
  FaSearch,
  FaBell,
  FaEnvelope,
  FaRegSun,
  FaRegMoon,
} from 'react-icons/fa';

const TopNavbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <Navbar
      bg={darkMode ? 'dark' : 'white'}
      variant={darkMode ? 'dark' : 'light'}
      expand="lg"
      className={`px-4 py-3 shadow-sm sticky-top border-bottom ${darkMode ? 'border-secondary' : 'border-light'}`}
    >
      <Container fluid>
        <Form className="d-none d-md-flex" style={{ width: '300px' }}>
          <InputGroup
            className={`${darkMode ? 'bg-secondary bg-opacity-25' : 'bg-light'} border-0 rounded-pill px-3`}
          >
            <InputGroup.Text className="bg-transparent border-0 text-muted">
              <FaSearch />
            </InputGroup.Text>
            <Form.Control
              type="search"
              placeholder="Search anything..."
              className={`bg-transparent border-0 shadow-none ps-0 ${darkMode ? 'text-white' : 'text-dark'}`}
              style={{ fontSize: '14px' }}
            />
          </InputGroup>
        </Form>
        <Nav className="ms-auto align-items-center flex-row gap-3">
          <div
            onClick={toggleDarkMode}
            style={{ cursor: 'pointer' }}
            className={`p-2 rounded-circle ${darkMode ? 'bg-secondary bg-opacity-25' : 'bg-light'}`}
          >
            {darkMode ? (
              <FaRegSun size={18} color="#f59e0b" />
            ) : (
              <FaRegMoon size={18} color="#64748b" />
            )}
          </div>

          {/* Notification Icon */}
          <Nav.Link className="text-muted position-relative p-0">
            <FaBell size={18} />
            <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle"></span>
          </Nav.Link>

          <div
            className={`vr mx-2 d-none d-md-block ${darkMode ? 'text-secondary' : 'text-light'}`}
            style={{ height: '25px' }}
          ></div>

          {/* User Profile Dropdown */}
          <Dropdown align="end">
            <Dropdown.Toggle
              as="div"
              className="d-flex align-items-center gap-2"
              id="user-dropdown"
              style={{ cursor: 'pointer' }}
            >
              <div className="text-end d-none d-lg-block">
                <p
                  className={`mb-0 fw-bold lh-1 ${darkMode ? 'text-white' : 'text-dark'}`}
                  style={{ fontSize: '14px' }}
                >
                  Saif Ali
                </p>
                <small className="text-muted" style={{ fontSize: '11px' }}>
                  UI/UX Designer
                </small>
              </div>
              <Image
                src="https://ui-avatars.com/api/?name=Saif+Ali&background=0D6EFD&color=fff"
                roundedCircle
                width={38}
                height={38}
                className="border border-primary border-opacity-25"
              />
            </Dropdown.Toggle>

            <Dropdown.Menu
              className={`${darkMode ? 'dropdown-menu-dark shadow-lg border-secondary' : 'shadow-sm border-0'} mt-3 p-2`}
            >
              <Dropdown.Item href="/profile">My Profile</Dropdown.Item>
              <Dropdown.Item href="#">Settings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#" className="text-danger">
                Sign Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;

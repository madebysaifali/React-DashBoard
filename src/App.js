import React, { useState } from 'react';
// 1. Ye imports missing the, inko dhyan se check karein
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './Dashboard_component/MainLayout';
import Dashboard from './Dashboard_component/Dashboard';
import Profile from './Dashboard_component/Profile';

// UI Components aur Icons
import { Modal, Button, Form } from 'react-bootstrap';
import { FaGoogle, FaFacebook, FaGithub } from 'react-icons/fa';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setShowLogin(false);
  };

  return (
    <div className={darkMode ? 'dark-theme' : 'light-theme'}>
      {/* LOGIN MODAL - Jab tak login nahi hoga yahi dikhega */}
      <Modal show={showLogin} centered backdrop="static">
        <Modal.Body
          className={`p-5 text-center shadow-lg border-0 ${darkMode ? 'bg-dark text-white' : 'bg-white'}`}
          style={{ borderRadius: '20px' }}
        >
          <h3 className="fw-bold mb-4">Saif's Dashboard Login</h3>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3 text-start">
              <Form.Label className="small opacity-75">User ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="saif_ali"
                className="rounded-pill border-0 bg-light"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3 text-start">
              <Form.Label className="small opacity-75">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="admin123"
                className="rounded-pill border-0 bg-light"
                required
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="w-100 rounded-pill py-2 mb-3 shadow"
            >
              Sign In
            </Button>

            <div className="d-flex justify-content-between small mb-4 px-2">
              <a href="#" className="text-decoration-none">
                Forgot Password?
              </a>
              <span className="text-muted">Sign up</span>
            </div>

            <p className="text-muted small mb-2">Or continue with</p>
            <div className="d-flex justify-content-center gap-3 mb-4">
              <FaGoogle className="cursor-pointer text-danger" size={20} />
              <FaFacebook className="cursor-pointer text-primary" size={20} />
              <FaGithub className="cursor-pointer text-dark" size={20} />
            </div>

            <div className="bg-light p-3 rounded-4 small border-0 text-muted">
              <p className="mb-1 fw-bold">Demo Access:</p>
              ID: <code>saif_ali</code> | Pass: <code>admin123</code>
            </div>
          </Form>
        </Modal.Body>
      </Modal>

      {/* DASHBOARD - Login ke baad ye dikhega */}
      {isLoggedIn && (
        <Router>
          <MainLayout darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
            <Routes>
              <Route path="/" element={<Dashboard darkMode={darkMode} />} />
              <Route
                path="/profile"
                element={<Profile darkMode={darkMode} />}
              />
            </Routes>
          </MainLayout>
        </Router>
      )}
    </div>
  );
}

export default App;

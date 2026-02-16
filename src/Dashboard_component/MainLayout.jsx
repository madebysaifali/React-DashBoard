import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const MainLayout = ({ children, darkMode, toggleDarkMode }) => {
  // Props receive karein
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar darkMode={darkMode} />
      <div style={{ flex: 1, marginLeft: '260px' }}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;

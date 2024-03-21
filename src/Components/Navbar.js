import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  const handleToggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };

  const handleCloseOffcanvas = () => {
    setIsOffcanvasOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" onClick={handleToggleOffcanvas}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`offcanvas offcanvas-end${isOffcanvasOpen ? ' show' : ''}`} tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasRightLabel">Fitness Plus</h5>
            <button type="button" className="btn-close" onClick={handleCloseOffcanvas} aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link" onClick={handleCloseOffcanvas}>Home</Link>
              </li>
              <li className="nav-item ms-lg-4"> {/* Added margin for spacing */}
                <Link to="/membership" className="nav-link" onClick={handleCloseOffcanvas}>Membership</Link>
              </li>
              <li className="nav-item ms-lg-4"> {/* Added margin for spacing */}
                <Link to="/diet" className="nav-link" onClick={handleCloseOffcanvas}>Diet/Workout</Link>
              </li>
              <li className="nav-item ms-lg-4"> {/* Added margin for spacing */}
                <Link to="/login" className="nav-link" onClick={handleCloseOffcanvas}>Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

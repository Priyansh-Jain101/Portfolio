import React from 'react';
import { Link } from 'react-router-dom';
// import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure this import is included for FontAwesome
import './style.css'
function Navbar() {
  return (
    <nav className='Nbar'>
      <div className="nav-left">
        <h1>
          <Link to='/' style={{ textDecoration: "none", color: "black" }}>Portfolio</Link>
        </h1>
      </div>

      <div className="nav-right">
        <Link to="/about">About </Link>
        <Link to="/projects">Projects</Link>
        
        {/* Download Resume */}
        <a href="/Priyansh Resume.pdf" download="Priyansh Jain.pdf">
          <button style={{ border: 'none', backgroundColor: 'white' }}>Resume 📄</button>
        </a>
        <Link to="#">
          <h5>Contact <i className="fa-solid fa-arrow-right-long"></i></h5>
          <div className='green'></div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

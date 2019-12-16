import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        
        <div>
          <Link to="/" className = "nav-link">Home</Link>
        </div>
       
        <div>
          <Link to="/about" className = "nav-link">About</Link>
        </div>
       
        <div>
          <Link to="/contact"className = "nav-link">Contact</Link>
        </div>
     
      </div>
    </div>
  );
};

export default Navigation;

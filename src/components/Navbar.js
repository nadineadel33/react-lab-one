import React, { useState } from 'react';
import defaultLogo from '../images/hand.jpg'; 
import './Navbar.css'; 

function Navbar() {
  const [logo, setLogo] = useState(defaultLogo);

  const handleLogoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newLogoUrl = URL.createObjectURL(file);
      setLogo(newLogoUrl);
    }
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li className="profile-tab">Profile</li>
      </ul>
      <input type="file" onChange={handleLogoChange} />
    </nav>
  );
}

export default Navbar;

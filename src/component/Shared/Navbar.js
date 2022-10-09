import React from 'react';
import './Navbar.css';
import logo1 from './../../assets/Vector (1).png';
import logo from './../../assets/Company Logo.png';

const Navbar = () => {
    return (
        <nav class="navbar navbar-light  ">
          
  <div class="container-fluid ">
   <span class="mx-auto"> <img  src={logo1} alt="logo" />
    <img  src={logo} alt="logo" /></span>
  </div>
  <hr class="w-100"/>
</nav>
    );
};

export default Navbar;
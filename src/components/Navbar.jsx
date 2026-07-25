import React from 'react'
import icelogo from "./ice.png"
const Navbar = () => {
  return (
    <nav className="navbar">
      <h2><i>𝐹𝓇𝑜𝓈𝓉𝑒𝒹 𝒟𝐸𝐿𝐼𝒢𝐻𝒯𝒮</i></h2>
      <img src={icelogo} alt="Ice Cream Logo" />
      <div>
        <a href="#about">About</a>
        <a href="#flavours">Flavors</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar
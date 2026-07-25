import React from "react";

export const Hero = () => {
  return (
    <section className="hero">
        <h1>Indulge in Frosted Delights </h1>
        <p>Crafted small-batch bliss</p>
        <button onClick={() => document.getElementById('flavours').scrollIntoView({behavior:'smooth'})}>Order Now</button>
    </section>
  )
}

export default Hero
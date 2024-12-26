import React, { Component } from "react";
import "./Home.css";

function Home() {
  return (
    <div className="homepage">
 
      <section className="content-section">  <h1>Welcome to Our Restaurant</h1>
        <h2>Discover Our Delicious Menu</h2>
        <p>
          Explore a wide variety of mouthwatering dishes crafted with love and
          passion.
        </p>
        <a href="/customersignin">
          <button className="btn" >View Menu</button>
        </a>
      </section>

    </div>
  );
}

export default Home;

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

      <section className="image-section mt-5">
        <img
          src="https://images.unsplash.com/photo-1640114162784-20c35f7aec3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmVzdGF1cmFudCUyMGJlYXV0aWZ1bHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="Food 1"
        />
        <img
          src="https://plus.unsplash.com/premium_photo-1667177234644-6c165e3c9264?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudCUyMGJlYXV0aWZ1bHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="Food 2"
        />
        <img
          src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
          alt="Food 3"
        />
      </section>
    </div>
  );
}

export default Home;

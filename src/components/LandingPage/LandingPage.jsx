import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <header>
        <nav>
          <Link to="/">
            <img src="./img/apple-watch-logo.png" alt="logo" />
          </Link>
        </nav>
      </header>
      <main className="hero-section">
        <div className="content">
          <p>Apple Watch Studio</p>
          <h1>
            Choose a case.
            <br />
            Pick a band.
            <br />
            Create your own style.
          </h1>
          {/* <a href="./watch-collection.html">
            <button className="btn btn-primary">Get started</button>
          </a> */}
          <Link to="/shop">
            <button className="btn btn-primary">Get started</button>
          </Link>
        </div>
        <div className="img-container hero-container">
          <img src="./img/hero-img.png" alt="hero-img" />
        </div>
      </main>
    </>
  );
};

export default LandingPage;

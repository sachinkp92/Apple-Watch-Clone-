import React from "react";
import "./WatchBand.css";
import { Link } from "react-router-dom";

const WatchBand = () => {
  return (
    <>
      <header>
        <nav className="collection-nav">
          <Link to="/">
            <img src="./img/apple-watch-logo.png" alt="logo" />
          </Link>
          <select>
            <option value="Collection">Collection</option>
            <option value="Apple Watch Series">Apple Watch Series</option>
          </select>
          <a href="&">
            <button className="btn btn-primary">Save</button>
          </a>
        </nav>
      </header>
      <main className="collection">
        <div className="watch-case">
          <img src="./img/next.png" className="arrow-left" />
          <img src="./img/strap1.png" className="straps" />
          <img src="./img/strap2.png" className="straps" />
          <img src="./img/strap3.png" className="straps center-watch" />
          <img src="./img/strap4.png" className="straps" />
          <img src="./img/watch1.png" className="watches center-watch" />
          <img src="./img/strap5.png" className="straps" />
          <img src="./img/strap6.png" className="straps" />
          <img src="./img/strap7.png" className="straps" />
          <img src="./img/strap8.png" className="straps" />
          <img src="./img/next.png" className="arrow arrow-right" />
        </div>
        <div className="collection-content">
          <a>Side View</a>
          <p>APPLE WATCH SERIES 10</p>
          <h2>46mm Jet Black Aluminum Case with Black Solo Loop</h2>
          <h3>From $429</h3>
        </div>
      </main>
      <footer>
        <div className="collection-btn-container">
          <Link to="/watch-sizes">
            <button className="btn btn-secondary btn-align">
              <svg
                height="25"
                viewBox="0 0 19 25"
                width="19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m0 0h19v25h-19z" fill="none"></path>
                <path
                  d="m18.25 9.038v1.7427c0 .2972-.0833.5382-.25.7227-.1665.1847-.385.277-.6553.277h-.3447v5.1904c0 2.2253-1.804 4.0293-4.0293 4.0293h-2.3643c.3291-.2865.6082-.6216.8301-1h1.5342c1.6704 0 3.0293-1.3589 3.0293-3.0293v-8.9414c0-1.6704-1.3589-3.0293-3.0293-3.0293h-6.9414c-1.3074 0-2.4136.8372-2.8372 2h-.1748c-.3113 0-.6113.0437-.9026.1111.417-1.781 2.0063-3.1111 3.9146-3.1111h6.9414c2.2253 0 4.0293 1.804 4.0293 4.0293v.0225h.3447c.2703 0 .4888.0902.6553.2703.1667.1803.25.4187.25.7159zm-7.25 8.9447c0 1.6664-1.3508 3.0173-3.0173 3.0173h-4.9654c-1.6665 0-3.0173-1.351-3.0173-3.0173v-6.9653c0-1.6664 1.3508-3.0173 3.0173-3.0173h4.9653c1.6665 0 3.0173 1.351 3.0173 3.0173v.1215h.3076c.2068 0 .3738.069.5012.2067.1274.1379.1912.3202.1912.5475v1.3326c0 .2273-.0637.4116-.1912.5526-.1274.1412-.2944.2118-.5012.2118h-.3076v3.9927zm-1-6.9653c0-1.1123-.905-2.0173-2.0173-2.0173h-4.9654c-.0059 0-.0115.0017-.0173.0017-.366.0032-.7048.1096-1 .2837-.5952.3511-1 .9922-1 1.7319v6.9653c0 1.1123.905 2.0173 2.0173 2.0173h4.9653c1.1123 0 2.0173-.905 2.0173-2.0173v-6.9653z"
                  fill="#1d1d1f"
                ></path>
              </svg>
              Size
            </button>
          </Link>
          <Link to="/watch-cases">
            <button className="btn btn-secondary btn-align">
              <svg
                height="25"
                viewBox="0 0 19 25"
                width="19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m0 0h19v25h-19z" fill="none"></path>
                <path
                  d="m18.25 9.038v1.7427c0 .2972-.0833.5382-.25.7227-.1665.1847-.385.277-.6553.277h-.3447v5.1904c0 2.2253-1.804 4.0293-4.0293 4.0293h-2.3643c.3291-.2865.6082-.6216.8301-1h1.5342c1.6704 0 3.0293-1.3589 3.0293-3.0293v-8.9414c0-1.6704-1.3589-3.0293-3.0293-3.0293h-6.9414c-1.3074 0-2.4136.8372-2.8372 2h-.1748c-.3113 0-.6113.0437-.9026.1111.417-1.781 2.0063-3.1111 3.9146-3.1111h6.9414c2.2253 0 4.0293 1.804 4.0293 4.0293v.0225h.3447c.2703 0 .4888.0902.6553.2703.1667.1803.25.4187.25.7159zm-7.25 8.9447c0 1.6664-1.3508 3.0173-3.0173 3.0173h-4.9654c-1.6665 0-3.0173-1.351-3.0173-3.0173v-6.9653c0-1.6664 1.3508-3.0173 3.0173-3.0173h4.9653c1.6665 0 3.0173 1.351 3.0173 3.0173v.1215h.3076c.2068 0 .3738.069.5012.2067.1274.1379.1912.3202.1912.5475v1.3326c0 .2273-.0637.4116-.1912.5526-.1274.1412-.2944.2118-.5012.2118h-.3076v3.9927zm-1-6.9653c0-1.1123-.905-2.0173-2.0173-2.0173h-4.9654c-.0059 0-.0115.0017-.0173.0017-.366.0032-.7048.1096-1 .2837-.5952.3511-1 .9922-1 1.7319v6.9653c0 1.1123.905 2.0173 2.0173 2.0173h4.9653c1.1123 0 2.0173-.905 2.0173-2.0173v-6.9653z"
                  fill="#1d1d1f"
                ></path>
              </svg>
              Case
            </button>
          </Link>
          <Link to="/watch-bands">
            <button className="btn btn-secondary btn-align">
              <svg
                height="25"
                viewBox="0 0 19 25"
                width="19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m0 0h19v25h-19z" fill="none"></path>
                <path
                  d="m18.25 9.038v1.7427c0 .2972-.0833.5382-.25.7227-.1665.1847-.385.277-.6553.277h-.3447v5.1904c0 2.2253-1.804 4.0293-4.0293 4.0293h-2.3643c.3291-.2865.6082-.6216.8301-1h1.5342c1.6704 0 3.0293-1.3589 3.0293-3.0293v-8.9414c0-1.6704-1.3589-3.0293-3.0293-3.0293h-6.9414c-1.3074 0-2.4136.8372-2.8372 2h-.1748c-.3113 0-.6113.0437-.9026.1111.417-1.781 2.0063-3.1111 3.9146-3.1111h6.9414c2.2253 0 4.0293 1.804 4.0293 4.0293v.0225h.3447c.2703 0 .4888.0902.6553.2703.1667.1803.25.4187.25.7159zm-7.25 8.9447c0 1.6664-1.3508 3.0173-3.0173 3.0173h-4.9654c-1.6665 0-3.0173-1.351-3.0173-3.0173v-6.9653c0-1.6664 1.3508-3.0173 3.0173-3.0173h4.9653c1.6665 0 3.0173 1.351 3.0173 3.0173v.1215h.3076c.2068 0 .3738.069.5012.2067.1274.1379.1912.3202.1912.5475v1.3326c0 .2273-.0637.4116-.1912.5526-.1274.1412-.2944.2118-.5012.2118h-.3076v3.9927zm-1-6.9653c0-1.1123-.905-2.0173-2.0173-2.0173h-4.9654c-.0059 0-.0115.0017-.0173.0017-.366.0032-.7048.1096-1 .2837-.5952.3511-1 .9922-1 1.7319v6.9653c0 1.1123.905 2.0173 2.0173 2.0173h4.9653c1.1123 0 2.0173-.905 2.0173-2.0173v-6.9653z"
                  fill="#1d1d1f"
                ></path>
              </svg>
              Band
            </button>
          </Link>
        </div>
      </footer>
    </>
  );
};

export default WatchBand;

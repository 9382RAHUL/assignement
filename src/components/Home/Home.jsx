import React from "react";
// import "./home.css";
import "../Home/home.css";
import { GrLinkNext } from "react-icons/gr";
const Home = () => {
  return (
    <>
      <div className="container">
        <nav className="navbar">
          <div className="left">
            <img src={"./image.png"} alt="" className="image" />
          </div>
          <div className="right">
            <ul>
              <li className="first">Company</li>
              <li>Services</li>
              <li>Bussines Model</li>
              <li>Blogs</li>
              <li>Contact us</li>
            </ul>
          </div>
        </nav>
        <div className="mid">
          <h1>
            WELCOME <br />
            TO <span className="span">CHAINTECH</span>
          </h1>
          <p className="desc">
            From square one to engineering excellence! PixelPlex assists in
            full-cycle software development, jumps in to take it over, or brings
            dedicated top-demanded skills.
          </p>

          <button className="btn">
            Get Started
            <span className="stock">
              <GrLinkNext size={16} width={60} height={60} />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;

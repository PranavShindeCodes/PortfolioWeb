import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      style={{
        height: "10vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        // background: "#333",
        color: "#000",
      }}
    >
      <div className="logo">
        <h2>Rion</h2>
      </div>
      <ul
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "20%",
        }}
      >
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
        <Link to="visit">
          <li>Visit</li>
        </Link>
      </ul>
      <div className="btn">
        <button>Click</button>
      </div>
    </div>
  );
};

export default Header;

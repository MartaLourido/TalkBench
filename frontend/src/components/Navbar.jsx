import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ onLogout }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      {/* <Link className="navbar-brand" to="/">
      <img      className="AvatarWrap"
     src="https://i.ibb.co/znyPmZf/ourpet.png" alt="logo" border="0"></img>
      </Link> */}

<img width="70px" height="auto" className="img-responsive"  src="https://i.ibb.co/znyPmZf/ourpet.png"  alt="logo" />
      TalkBench
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/posts" className="nav-link">
              Posts
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/chat" className="nav-link">
              Chat
            </Link>
          </li>
        </ul>

        <button
          className="btn btn-outline-info my-2 my-sm-0"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
import React, { useState } from "react";
import Auth from "../../services/Auth";
import Features from "./Features";
import { Link } from "react-router-dom";

export default function SignUp({ onSubmite }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="signup-form">
      <div className="form-component">
        <div className="AvatarWrap">
          <img
            width="70px"
            height="auto"
            className="img-responsive"
            src="https://i.ibb.co/znyPmZf/ourpet.png"
            alt="logo"
          />
        </div>
       
        <div className="form-component">
          <h4 className="card-title">Sign up</h4>
          <div>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>

            <div className="form-component">
              <label htmlFor="fullName">Full name</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                placeholder="Email"
              />
            </div>

            <div className="form-component">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="AvatarWrap">
              <button
                className="btn btn-info"
                onClick={(e) => onSubmite({ name, email, password })}
              >
                Create account
              </button>
            </div>
            <div className="AvatarWrap">
              <Link to="/" variant="body2">
                Already have an account? Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

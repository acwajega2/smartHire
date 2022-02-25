import React from "react";

import { Link } from "react-router-dom";

import "./customHeader.styles.scss";
const CustomHeader = () => (
  <div className="header">
    <label className="logo">smartHire</label>
    <div className="options">
      <Link to="/" className="option">
        Home
      </Link>
      <Link to="/" className="option">
        Feedback
      </Link>
      <Link to="/" className="option active">
        Sign In
      </Link>
    </div>
  </div>
);

export default CustomHeader;

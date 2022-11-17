import "./App.jsx"
import "./navbar.css"
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./index.js";

// The navbar
class Navbar extends Component {


  render() {
    return (
      <div className="navbar">
        <nav>
        <div className="navbar-header">     
        <h1>Made by alchemy university</h1>       
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
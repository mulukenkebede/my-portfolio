import React from "react"
import logo from "../logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
<div className="container">

    <div className="container-fluid">
      <a className="navbar-brand" href="#"><img className='logo' src={logo} alt="logo"/></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse"  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <FontAwesomeIcon icon={faBars} style={{color:"#fff"}}/>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item active">
            <a className="nav-link" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item ">
            <a className="nav-link ">about me</a>
          </li>
          <li className="nav-item ">
            <a className="nav-link">services</a>
          </li>
          <li className="nav-item ">
            <a className="nav-link">experience</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">contact</a>
          </li>

        </ul>
        
      </div>
    </div>
</div>
  </nav>
  )
}

export default Navbar;

import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/state">State</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/reduxex">Redux Example</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/game">Game Example</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/list">List Example</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/curdaxio">Curd-Axios</Link>
          </li>
        </ul>
        
          <div className={`form-check form-switch d-flex text-${props.mode === 'light'? 'dark': 'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Change theme color</label>
            
          </div>

      </div>
        </div>
      </nav>
    </>
  )
}

Navbar.prototype = {title: PropTypes.string.isRequired,
                    aboutText: PropTypes.string}

                    // default props type ex 
Navbar.defaultProps = {
 title : "Navbar2",
}
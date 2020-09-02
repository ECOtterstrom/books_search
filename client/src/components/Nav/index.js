import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

function Nav() {
  const location = useLocation();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-custom">
      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-primary"></nav> */}
        <Link className="navbar-brand" to="/"> 
          Google Book Search
      </Link>
        {/* <form className="form-inline">
        <a href="#" className="btn btn-primary">View</a>
        <a href="#" className="btn btn-primary">Save</a>
      </form> */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className={location.pathname === "/" ? "nav-item active" : "nav-item"}>
              <Link className="nav-link" to="/">Search <span color="white" className=" sr-only">(current)</span></Link>
            </li>
            <li className={location.pathname === "/saved" ? "nav-item active" : "nav-item"}>
              <Link className="nav-link" to="/saved">Saved</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;

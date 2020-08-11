import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Google Book Search
      </a>
      <form className="form-inline">
        <a href="#" className="btn btn-primary">View</a>
        <a href="#" className="btn btn-primary">Save</a>
      </form>
    </nav>
  );
}

export default Nav;

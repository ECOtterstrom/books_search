import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 100, clear: "both", paddingTop: 20, paddingBottom: 100, textAlign: "center" }}
      className="jumbotron"
    >
      <h1>Google Book Search</h1>
      <p>Search for and Save Books of Interest</p>
      {children}
    </div>
  );
}

export default Jumbotron;

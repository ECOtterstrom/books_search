import React from "react";
import "./style.css";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 100, clear: "both", paddingTop: 20, paddingBottom: 100, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;

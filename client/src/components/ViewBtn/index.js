import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function ViewBtn(props) {
  return (
    <span className="view-btn" href={props.link} role="button" tabIndex="0">
      <a className="btn btn-sm btn-outline-primary float-right">View</a>
      {/* <a href={props.link} className="viewBtn">View Book</a> */}
    </span>
  );
}

export default ViewBtn;

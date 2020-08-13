import React from "react";

function SearchCard(props) {
  return (
    <div className="card w-100">
    <div className="card-body">
      <h5 className="card-title">Book Search</h5>
      <p className="card-text">Book</p>
      <div className="form-group">
      <input type="text" className="form-control" {...props} 
        onChange={props.handleInputChange}
        name="title"
        placeholder="Title (required)"
      />
      </div>
      <a className="btn btn-primary" 
      onClick={props.handleFormSubmit}>Search</a>
    </div>
  </div>
  );
}

export default SearchCard;

import React from "react";
import { Container } from "../Grid";
import "./style.css";

function SearchCard(props) {

    return (
        <Container>
            <div className="jumbotron border border-dark p-2">
               <b>Book Search</b>
            <form className="search" >
                    <div className="form-group text-right">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your search"
                            id="book"
                            onChange={props.inputChange}
                        />
                        <button id="submitbtn" type="submit" onClick={props.handler} className="btn btn-info mt-2">Submit</button>
                    </div>
                </form>
            </div>
        </Container>
    )

};

export default SearchCard;
import React from "react";
import { Container } from "../Grid";

function SearchCard(props) {

    return (
        <Container>
            <div className="jumbotron border border-dark p-2">
                Book Search
            <form className="search" >
                    <div className="form-group text-right">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your search"
                            id="book"
                            onChange={props.inputChange}
                        />
                        <button type="submit" onClick={props.handler} className="btn btn-info mt-2">Submit</button>
                    </div>
                </form>
            </div>
        </Container>
    )

};

export default SearchCard;
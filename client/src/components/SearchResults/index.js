import React from "react";
import { Container } from "../Grid";
import API from "../../utils/API";
import "./style.css";

function SearchResults(props) {

    function saveBooks(event) {
        event.preventDefault();
        alert("Saved " + props.title + "!")
        const data = {
            title: props.title,
            authors: props.authors,
            description: props.description,
            image: props.image,
            link: props.link
        }
        API.saveBook(data)
            .catch(err => console.log(err));
    }

    return (
        <li className="list-group-item border border-dark p-2 m-2 p-1">
            <Container>
                <div className="row">
                    <div className="col-8">
                        <h4>{props.title}</h4>
                        {props.authors.length ?
                            <p> Written by {props.authors.map((author, index, arr) => (index === arr.length - 1 ? author : author + ", "))}
                            </p> : <p>No authors to display</p>}
                    </div>
                    <div className="col-4 text-right">
                        <a href={props.link}><button id="btncolor" className="btn btn-info m-1" type="button">View</button></a>
                        <button id="btncolor" className="btn btn-info m-1" onClick={saveBooks} type="button">Save</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                        <img src={props.image} alt={props.title} />
                    </div>
                    <div className="col-10">
                        {props.description}
                    </div>
                </div>

            </Container>
        </li>
    )
};

export default SearchResults;
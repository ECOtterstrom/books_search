import React from "react";
import { Container } from "../Grid";
import "./style.css";

function SavedCard(props) {

    return (


        <li className="list-group-item border border-dark p-2 m-2 p-1">
            <Container>
                <div className="row">
                    <div className="col-8">
                        <h4>{props.title}</h4>
                        <p> Written by {props.authors.map((author, index, arr) => (
                            (index === arr.length - 1 ? author : author + ", ")
                        ))}
                        </p>
                    </div>
                    <div className="col-4 text-right">
                        <a href={props.link}><button className="btn btn-info m-1 btncolor" type="button">View</button></a>
                        <button onClick={props.deleteBook} id={props.id} className="btn btn-info m-1 btncolor" type="button">Delete</button>
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

export default SavedCard;
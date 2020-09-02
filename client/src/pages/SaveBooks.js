import React, { useState, useEffect } from "react";
import { Container } from "../components/Grid";
import API from "../utils/API";
import { List } from "../components/List";
import SavedCard from "../components/SavedCard";

function Saved(props) {

    const [savedBooks, setSavedBooks] = useState([])

    useEffect(() => loadSavedBooks(),
        []);


    function deleteBook(event) {
        event.preventDefault();
        const { id } = event.target;
        API.deleteBook(id)
            .then(res => loadSavedBooks())
            .catch(err => console.log(err));
    }

    function loadSavedBooks() {
        API.getSavedBooks()
            .then(res => {
                if (res.data === undefined) {
                    setSavedBooks([]);
                } else {
                    setSavedBooks(res.data)
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <>
            <Container>
                <div className="jumbotron border border-dark p-2">
                    <strong>Saved Books</strong>
                    <br />
                    {/* {props.children} */}

                    {savedBooks.length !== 0 ? (<List>
                        {savedBooks.map(result => (
                            <SavedCard
                                key={result._id}
                                id={result._id}
                                title={result.title}
                                authors={result.authors === undefined ? [] : result.authors}
                                description={result.description}
                                image={result.image}
                                link={result.link}
                                deleteBook={deleteBook}
                            />))}
                    </List>) : (<h1>No saved books!</h1>)}
                </div>
            </Container>

        </>
    )
};

export default Saved;

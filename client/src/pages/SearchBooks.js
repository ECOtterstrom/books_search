import React, { useState, useEffect } from "react";
import SearchCard from "../components/SearchCard";
import { Container } from "../components/Grid";
import SearchResults from "../components/SearchResults";
import { List, ListItem } from "../components/List";
import API from "../utils/API";


function Search(props) {

    const [books, setBooks] = useState({ results: [] });
    const [userQuery, setUserQuery] = useState("");

    useEffect(() => searchBooks("Coding"), []);

    function handleInputChange(event) {
        const { value } = event.target;
        setUserQuery(value);
    };

    function searchBooks(query) {
        API.getSearch(query)
            .then(res => {
                if (res.data === undefined) {
                    setBooks({ results: [] });
                } else {
                    setBooks({ results: res.data.items })
                }
            })
            .catch(err => console.log(err));
    };

    function handleSearchSubmit(event) {
        event.preventDefault();
        searchBooks(userQuery);
    };


    return (
        <div>
            <SearchCard inputChange={handleInputChange} handler={handleSearchSubmit} />
            <>
                <Container>
                    <div className="jumbotron border border-dark p-2">
                        <strong>Book Results</strong>
                        <br />
                        {/* {props.children} */}
                    {/* </div> */}

                    {books.results.length ?
                        <List>
                            {books.results.map(result => (
                                <SearchResults
                                    key={result.id}
                                    title={result.volumeInfo.title}
                                    authors={result.volumeInfo.authors === undefined ? [] : result.volumeInfo.authors}
                                    description={result.volumeInfo.description}
                                    image={result.volumeInfo.imageLinks === undefined ? "https://via.placeholder.com/150" : result.volumeInfo.imageLinks.thumbnail}
                                    link={result.volumeInfo.infoLink}
                                />))}
                        </List> : (<h1>No results to show!</h1>)
                    }
                    </div>
                </Container>
            </>
        </div>
    )
};


export default Search;

import React from "react";
import '../App.css';

function Quote({ quote, favClick, removeClick }) {

    const {author, content} = quote

    return (
        <div className="card text-center quoteCard">
            <div className="card-body">
                <blockquote className="blockquote mb-0">
                <p>"{content}"</p>
                <footer className="blockquote-footer authorText">{author}</footer>
                </blockquote>
                <br />
                <button className="btn btn-outline-danger" onClick={() => favClick === null ? removeClick(quote) : favClick(quote)}>
                    {favClick === null ? "Remove" : "Add to Favorites"}
                </button>
            </div>
        </div>
    )
}

export default Quote
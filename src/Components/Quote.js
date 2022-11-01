import React from "react";
import '../App.css';

function Quote({ quote, favClick, removeClick }) {

    return (
        <div className="card text-center">
            <div className="card-body">
                <blockquote className="blockquote mb-0">
                <p>"{quote.content}"</p>
                <footer className="blockquote-footer">{quote.author}</footer>
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
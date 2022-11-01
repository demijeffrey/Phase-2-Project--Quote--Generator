import React from "react";
import Quote from "./Quote";

function Favorites({ favQuotes, removeClick }) {

    return (
        <div>
            <h2 className="header3">Favorite Quotes</h2>
            {favQuotes.map(quote => {
                return <Quote key={quote.id} quote={quote} removeClick={removeClick} favClick={null} />
            })}
        </div>
    )
}

export default Favorites
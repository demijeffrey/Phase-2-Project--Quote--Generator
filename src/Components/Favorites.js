import React from "react";
import Quote from "./Quote";

function Favorites({ favQuotes, removeClick }) {

    let displayFavorites = favQuotes.map(quote => {
        return <Quote key={quote.id} quote={quote} removeClick={removeClick} favClick={null} />
    })

    return (
        <div>
            <h2 className="header3">Favorite Quotes</h2>
            {displayFavorites}
        </div>
    )
}

export default Favorites
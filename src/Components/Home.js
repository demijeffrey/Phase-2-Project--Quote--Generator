import React, { useEffect, useState } from "react";
import Quote from "./Quote";

function Home({ favClick }) {

    const [quote, setQuote] = useState([])

    useEffect(() => {
        fetch('https://api.quotable.io/random')
            .then(res => res.json())
            .then(data => setQuote(data))
    }, [])

    return (
        <div>
            <h2 className="header3">Over 2000 quotes!</h2>
            <Quote quote={quote} favClick={favClick} />
        </div>
    )
}

export default Home
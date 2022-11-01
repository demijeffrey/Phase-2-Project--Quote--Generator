import React, { useEffect, useState } from "react";
import Quote from "./Quote";
import '../App.css';

function Home({ favClick }) {

    const [quote, setQuote] = useState([])

    useEffect(() => {
        fetch('https://api.quotable.io/random')
            .then(res => res.json())
            .then(data => setQuote(data))
    }, [])

    return (
        <div>
            <h2 className="header3">Loaded with over 2000 inspirational quotes!</h2>
            <br />
            <img className="image" src="https://viveconstyle.com/wp-content/uploads/2022/01/Start-where-you-are.jpg" />
            <Quote quote={quote} favClick={favClick} className="randomQuote" />
        </div>
    )
}

export default Home
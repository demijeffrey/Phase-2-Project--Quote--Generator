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
            <div className="allImages">
            <img className="image" src="https://viveconstyle.com/wp-content/uploads/2022/01/Start-where-you-are.jpg" alt="" />
            <img className="image2" src="https://graciousquotes.com/wp-content/uploads/2020/02/Short-Inspirational-Quotes-To-Inspire-You-Quickly-Gracious-Quotes-scaled.jpg" alt="" />
            <img className="image3" src="https://t3.ftcdn.net/jpg/02/59/04/18/360_F_259041853_cp094Ywgt7OID8GgociBYZ5gL6KUrgUJ.jpg" alt="" />
            </div>
            <Quote quote={quote} favClick={favClick} className="randomQuote" />
        </div>
    )
}

export default Home
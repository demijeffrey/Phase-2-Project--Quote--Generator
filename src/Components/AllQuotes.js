import React, { useEffect, useState } from "react";
import Quote from "./Quote";
import '../App.css';
import Filter from "./Filter";

function AllQuotes({ favClick }) {

    const [quotes, setQuotes] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        fetch(`https://quotable.io/quotes?page=${page}`)
            .then(res => res.json())
            .then(quotes => setQuotes(quotes.results))
    }, [page])

    let displayQuotes = quotes.map(quote => {
        return <Quote key={quote._id} quote={quote} favClick={favClick} />
    })

    function next20() {
        setPage(page + 1)
    }

    function last20() {
        return page === 1 ? null : setPage(page - 1)
    }

    function categoryChange(e) {
        let category = e.target.value
        category === 'all' ?
            fetch(`https://quotable.io/quotes?page=1`)
                .then(res => res.json())
                .then(quotes => setQuotes(quotes.results)) :
            fetch(`https://quotable.io/quotes?tags=${category}`)
                .then(res => res.json())
                .then(quotes => setQuotes(quotes.results))
    }

    return (
        <div className="allQuotesContainer">
            <h2 className="header3">All Quotes</h2>

            {/* <select className="filter" onChange={categoryChange}>
                <option value="" disabled selected>Categories</option>
                <option value="all">All</option>
                <option value="love%7Chappiness">Love | Happiness</option>
                <option value="history%7Ccivil-rights">History | Civil Rights</option>
                <option value="technology,famous-quotes">Technology | Famous Quotes</option>
            </select> */}
            <br />

            <button className="prevBtn" onClick={last20}>Previous Page</button><button className="nextBtn" onClick={next20}>Next Page</button>
            {quotes === [] ? "Loading..." : displayQuotes}
            <button className="prevBtn" onClick={last20}>Previous Page</button><button className="nextBtn" onClick={next20}>Next Page</button>
        </div>
    )
}

export default AllQuotes
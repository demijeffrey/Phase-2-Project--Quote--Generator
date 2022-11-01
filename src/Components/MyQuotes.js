import React, { useEffect, useState } from "react";
import Quote from "./Quote";
import '../App.css';

function MyQuotes() {

    const [myQuotes, setMyQuotes] = useState([])
    const [content, setContent] = useState('')
    const [author, setAuthor] = useState('')

    useEffect(() => {
        fetch('http://localhost:3001/myQuotes')
            .then(res => res.json())
            .then(quotes => setMyQuotes(quotes))
    }, [])

    function onSubmit(e) {
        e.preventDefault()
        fetch('http://localhost:3001/myQuotes', {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({
                "content": content,
                "author": author
            })
        })
        .then(res => res.json())
        .then(data => setMyQuotes([...myQuotes, data]))
        setContent("")
        setAuthor("")
    }

    function removeMyQuote(quote) {
        fetch(`http://localhost:3001/myQuotes/${quote.id}`, {
          method: 'DELETE'
        })
        setMyQuotes(myQuotes.filter(myQuote => myQuote.id !== quote.id))
      }

    return (
        <div>
            <form>
                <textarea className="form-control form-control-lg" type="text" placeholder="quote" value={content} onChange={(e) => setContent(e.target.value)} />
                <input className="form-control" type="text" placeholder="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
                <button className="btn btn-success" type="submit" onClick={(e) => onSubmit(e)}>Submit</button>
            </form>
            <br />
            <h2 className="header2">My Quotes</h2>
            {myQuotes.map(quote => {
                return <Quote key={quote.id} quote={quote} removeClick={removeMyQuote} favClick={null} />
            })}
        </div>
    )
}

export default MyQuotes
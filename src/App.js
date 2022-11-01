import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, Switch } from "react-router-dom";
import NavBar from './Components/NavBar';
import AllQuotes from './Components/AllQuotes';
import Favorites from './Components/Favorites';
import Home from './Components/Home';
import MyQuotes from './Components/MyQuotes';

function App() {

  const [favQuotes, setFavQuotes] = useState([])

  useEffect(() => {
      fetch('http://localhost:3001/favorites')
          .then(res => res.json())
          .then(quotes => setFavQuotes(quotes))
  }, [])


  function favClick(quote) {
    fetch('http://localhost:3001/favorites', {
      method: 'POST',
      headers: {
        'Content-type' : 'application/json'
      },
      body: JSON.stringify(quote)
    })
    .then(res => res.json())
    .then(data => setFavQuotes([...favQuotes, data]))
  }

  function removeClick(quote) {
    fetch(`http://localhost:3001/favorites/${quote.id}`, {
      method: 'DELETE'
    })
    setFavQuotes(favQuotes.filter(favQuote => favQuote._id !== quote._id))
  }

  return (

    <div>
      <h1 className="header">Quotathalon</h1>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home favClick={favClick} />
        </Route>
        <Route exact path="/all">
          <AllQuotes favClick={favClick} />
        </Route>
        <Route exact path="/favorites">
          <Favorites favQuotes={favQuotes} removeClick={removeClick} />
        </Route>
        <Route exact path="/my-quotes">
          <MyQuotes />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

import React from "react";
import '../App.css';
import { NavLink } from "react-router-dom"

function NavBar() {

    const linkStyles = {
		// width: "100px",
		// padding: "12px",
		// margin: "0 6px 6px",
		// background: "red",
		textDecoration: "none",
		// color: "white",
	  };

    return (
        <nav className="nav justify-content-center nav-fill">
            <NavLink
                to="/"
                exact
                className="linkStyles"
                style={linkStyles}
                activeStyle={{
                background: "grey",
                }}
                >
                Home
            </NavLink>
            <NavLink
                to="/all"
                exact
                className="linkStyles"
                style={linkStyles}
                activeStyle={{
                background: "grey",
                }}
                >
                All Quotes
            </NavLink>
            <NavLink
                to="/my-quotes"
                exact
                className="linkStyles"
                style={linkStyles}
                activeStyle={{
                background: "grey",
                }}
                >
                My Quotes
            </NavLink>
            <NavLink
                to="/favorites"
                exact
                className="linkStyles"
                style={linkStyles}
                activeStyle={{
                background: "grey",
                }}
                >
                Favorite Quotes
            </NavLink>
        </nav>
    )
}

export default NavBar
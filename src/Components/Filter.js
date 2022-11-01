import React from "react";
import '../App.css';

function Filter() {
    return (
        <div>
            <select className="filter" onChange={categoryChange}>
                <option value="" disabled selected>Categories</option>
                <option value="all">All</option>
                <option value="love%7Chappiness">Love | Happiness</option>
                <option value="history%7Ccivil-rights">History | Civil Rights</option>
                <option value="technology,famous-quotes">Technology | Famous Quotes</option>
            </select>
        </div>
    )
}

export default Filter
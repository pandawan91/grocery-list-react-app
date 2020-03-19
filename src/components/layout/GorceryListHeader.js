import React from 'react';
import { Link } from 'react-router-dom'

import './GroceryListHeader.css'

function GorceryListHeader() {
    return(
        <header className="header">            
            <h1>Grocery List React Example</h1>
            <Link to="/">Home</Link>
            <Link to="/list">Grocery List</Link>
        </header>
    );
}

export default GorceryListHeader;
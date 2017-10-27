import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/topics">Topics</Link>
    </div>
);
export default Navbar;

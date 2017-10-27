import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <h1>
           404 - Nothing Found
    </h1>
    <p>
        Try <Link to="/">here</Link>
    </p>
  </div>
);
export default NotFound;

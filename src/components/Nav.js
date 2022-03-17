import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <div>
      <h1>Bookmarks</h1>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
}

export default Nav;

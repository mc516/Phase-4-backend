import React from "react";
import { Link } from "react-router-dom"

function NavBar() {
    return (
        <nav className="links">              
                <Link className="nav-links" to="/">Home</Link>
                <Link className="nav-links" to="/camps">Camps</Link>
                <Link className="nav-links" to="/login">Login</Link>
                <Link className="nav-links" to="/signup">Register</Link>
                {/* <Link className="nav-links" to="/account">Account</Link>          */}
        </nav>
    )
}

export default NavBar;
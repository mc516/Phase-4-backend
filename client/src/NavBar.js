import React from "react";
import { Link } from "react-router-dom"

function NavBar({user}) {
    return (
        <nav className="links">              
                <Link className="nav-links" to="/">Home</Link>
                <Link className="nav-links" to="/camps">Camps</Link>
                {/* <Link className="nav-links" to="/login">Login</Link>  */}
                {/* { user ? <button>Sign out</button> : <Link className="nav-links" to="/account">Account</Link> }          */}
                { user ? <button>Sign out</button> : null } 
        </nav>
    )
}

export default NavBar;
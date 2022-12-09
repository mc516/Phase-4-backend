import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {
    return (
        <nav>
            <NavLink className="nav-links" to="/">Home</NavLink>
            <NavLink className="nav-links" to="/camps">Camps</NavLink>
            <NavLink className="nav-links" to="/enroll">Enroll</NavLink>
        </nav>
    )
}

export default NavBar;
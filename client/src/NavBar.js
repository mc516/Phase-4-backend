import React from "react";
import { Link } from "react-router-dom"

function NavBar({user, setUser}) {

    function handleLogout(){
        fetch("/logout", { 
            method: "DELETE" })
            .then((res) => {
                if (res.ok) {
                setUser(null);
            }
          });
    }

    return (
        <nav className="links">              
                <Link className="nav-links" to="/home">Home</Link>
                <Link className="nav-links" to="/camps">Camps</Link>
                {/* <Link className="nav-links" to="/login">Login</Link>  */}
                {/* { user ? <button>Sign out</button> : <Link className="nav-links" to="/account">Account</Link> }          */}
                {/* { user ? <button>Sign out</button> : null }  */}
                { user ? null : <button onClick={handleLogout}>Sign out</button> } 
        </nav>
    )
}

export default NavBar;
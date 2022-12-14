import React from "react";
import Account from "./Account";
import LogInOrSignup from "./LogInOrSignup";

function Home({user, onLogin}) {
    return (
        <div className="home">
            { user ? <Account /> : <LogInOrSignup onLogin={onLogin}/> }
        </div>
        
    )
}

export default Home;
import React from "react";
import Account from "./Account";
import LogInOrSignup from "./LogInOrSignup";

function Home({user, setUser}) {
    return (
        <div className="home">
            { user ? <Account /> : <LogInOrSignup setUser={setUser}/> }
        </div>
        
    )
}

export default Home;
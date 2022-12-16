import React from "react";
import Account from "./Account";
import LogInOrSignup from "./LogInOrSignup";

function Home({user, setUser}) {
    return (
        <div className="home">
            { <Account setUser={setUser}/> }
            {user.name}
        </div>
        
    )
}

export default Home;
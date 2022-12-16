import React from "react";
import Account from "./Account";

function Home({user}) {
    return (
        <div className="home">
            { <Account /> }
            {user.name}
        </div>
        
    )
}

export default Home;
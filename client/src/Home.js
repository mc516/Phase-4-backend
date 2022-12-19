import React from "react";

function Home({user}) {
    return (
        <div className="home">
            Welcome back, {user.name}!
        </div>
        
    )
}

export default Home;
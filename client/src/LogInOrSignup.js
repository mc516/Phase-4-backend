import React from "react";
import Login from "./Login";
import Signup from "./Signup";


function LogInOrSingup({setUser}) {
    return (
        <div>
            <Login setUser={setUser}/>
            <Signup setUser={setUser}/>
        </div>
    )
}

export default LogInOrSingup;
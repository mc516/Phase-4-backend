import React from "react";
import Login from "./Login";
import Signup from "./Signup";


function LogInOrSingup({onLogin}) {
    return (
        <div>
            <Login onLogin={onLogin}/>
            <Signup onLogin={onLogin}/>
        </div>
    )
}

export default LogInOrSingup;
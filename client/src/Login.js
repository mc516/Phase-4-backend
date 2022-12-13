import React from "react";
import Signup from "./Signup";
import LoginCard from "./LoginCard";

function Login() {
    return (
        <div className="login-signup">
            {<LoginCard />}
            {<Signup />}
            
        </div>
    )
}

export default Login;
import React from "react";

function LoginCard() {
    return (
        <div className="login">
            <h1>Login</h1>
            <form className="login-form-container">
                <label htmlFor="email">Email: </label>
                <input type="text" id="email" autoComplete="off"></input><br></br>

                <label htmlFor="password">Password: </label>
                <input type="password" id="password" autoComplete="off"></input><br></br>
            
                <button className="login-btn"type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginCard;
import React from "react";

function Login() {

    function handleSubmit(e){
        e.preventDefault()
        console.log('login click')
    }
    return (
        <div className="login">
            <h1>Login</h1>
            <form className="login-form-container" onSubmit={handleSubmit}>
                <label htmlFor="login-email">Email: </label>
                <input type="text" id="login-email" autoComplete="off"></input><br></br>

                <label htmlFor="password">Password: </label>
                <input type="password" id="password" autoComplete="off"></input><br></br>
            
                <button className="login-btn"type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;
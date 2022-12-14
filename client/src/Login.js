import React from "react";
import { useState } from 'react'

function Login({onLogin}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    function handleSubmit(e){
        e.preventDefault()
        console.log('login click')
        fetch("/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          }).then((r) => {
            // setIsLoading(false);
            if (r.ok) {
              r.json().then((user) => onLogin(user));
            } else {
              r.json().then((err) => setErrors(err.errors));
            }
          });
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <form className="login-form-container" onSubmit={handleSubmit}>
                <label htmlFor="login-email">Email: </label>
                <input 
                    type="text" 
                    id="login-email" 
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                    >
                </input><br></br>

                <label htmlFor="password">Password: </label>
                <input 
                    type="password" 
                    id="password" 
                    autoComplete="off"
                    onChange={(e) => setPassword(e.target.value)}
                    >
                    </input><br></br>
            
                <button className="login-btn"type="submit">Login</button>
            </form>
            
            {errors.map((err) => console.log(err) )}
        </div>
    )
}

export default Login;
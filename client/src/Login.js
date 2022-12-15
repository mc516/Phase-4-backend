import React from "react";
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

function Login({setUser}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault()
        console.log('login click')
        setIsLoading(true);
        fetch("/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          }).then((res) => {
            setIsLoading(false);
            if (res.ok) {
              res.json().then(setUser);
              navigate('/home');
            } else {
              res.json().then((err) => setErrors(err.errors));
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

            { errors ? <p>{errors}</p>: null}
        </div>
    )
}

export default Login;
import React from "react";
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

function Signup({setUser}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault()
        fetch("/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                email_address: email.toLowerCase(),
                password,
                confirm_password: passwordConfirmation,  
            }),
          }).then((res) => {
            if (res.ok) {
              res.json().then(setUser);
              navigate('/home')
            } else {
              res.json().then((err) => setErrors(err.errors));
            }
          });
    }

    return (
        <div className="signup">
            <h1>Sign Up</h1>
            <form className="sign-up-form-container" onSubmit={handleSubmit}>
                <label htmlFor="name">Full Name: </label>
                <input 
                    type="text" 
                    id="name" 
                    autoComplete="off"
                    onChange={(e) => setName(e.target.value)} 
                />
                <br></br>

                <label htmlFor="signup-email">Email Address: </label>
                <input 
                    type="email" 
                    id="signup-email" 
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br></br>

                <label htmlFor="signup-password">Password: </label>
                <input 
                    type="password" 
                    id="signup-password" 
                    autoComplete="off"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br></br>

                <label htmlFor="confirm-password">Confirm Password: </label>
                <input 
                    type="password" 
                    id="confirm-password" 
                    autoComplete="off"
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
                <br></br>

                <button className="register-btn"type="submit">Register</button>
            </form>

            { errors ? <p>{errors[0]}</p>: null}
        </div>
    )
}

export default Signup;
import React from "react";

function Signup() {
    return (
        <div className="signup">
            <h1>Sign Up</h1>
            <form className="sign-up-form-container">
                <label htmlFor="name">Full Name: </label>
                <input type="text" id="name" autoComplete="off"></input><br></br>

                <label htmlFor="email">Email Address: </label>
                <input type="text" id="email" autoComplete="off"></input><br></br>

                <label htmlFor="password">Password: </label>
                <input type="password" id="password" autoComplete="off"></input><br></br>

                <label htmlFor="confirm-password">Confirm Password: </label>
                <input type="text" id="confirm-password" autoComplete="off"></input><br></br>

                <button className="register-btn"type="submit">Register</button>
            </form>

        </div>
    )
}

export default Signup;
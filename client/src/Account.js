import React from "react";

function Account({user, comments}) {
    const userComments = comments.filter(comment => {return comment.user_id === user.id})
    
    const latestComment = userComments.sort((a,b) => a.created_at - b.created_at).slice(-1)

    return (
        <div className="account-container">
            <div className="account-info">
            <h2>Account info</h2>
                <p>Name: {user.name}</p>
                <p>Email: {user.email_address}</p>
                {<p>Account created on: {user.created_at.split("", 10)}</p>}
                <br></br>
                {userComments.length !== 0 ? <p>latest comment: '{latestComment[0].body}' for {latestComment[0].camp.name} Camp</p> : <p>No recent comments</p> }

            </div> 
        </div>
    )  
}

export default Account;
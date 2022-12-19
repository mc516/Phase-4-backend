import React from "react";

function Account({user}) {
    const recentComment = user.comments.sort((a,b) => (a.created_at > b.created_at ? -1 : 1))
    const recentCamp = user.camps.filter(camp => {return camp.id === recentComment[0].camp_id})
    console.log(recentComment)
    console.log(recentComment[0].created_at)
    console.log(recentCamp)

    return (
        <div className="account-container">
            <div className="account-info">
            <h2>Account info</h2>
                <p>Name: {user.name}</p>
                <p>Email: {user.email_address}</p>
                <br></br>
                <p>Most recent comment: '{recentComment[0].body}' for {recentCamp[0].name} Camp</p>
            </div>
            
        </div>
    )  
}

export default Account;
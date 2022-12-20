import React from "react";
import {useState} from "react"
function Account({user}) {
    // const [recentComment, setRecenComment] = useState(null)
    // const [recentCamp, setRecenCamp] = useState(null)
    
    // if (user.comments.length !== 0) {
    //     setRecenComment(user.comments.sort((a,b) => (a.created_at > b.created_at ? -1 : 1)))
    //     setRecenCamp(user.camps.filter(camp => {return camp.id === recentComment[0].camp_id}))
    // }
  
    // const recentCampComment = () => {
    //     let recentComments = null
    //     let recentCamp = null
    //     if (user.comments.length !== 0) {
    //         let recentComments = user.comments.sort((a,b) => (a.created_at > b.created_at ? -1 : 1))
    //         let recentCamp = user.camps.filter(camp => {return camp.id === recentComments[0].camp_id})
    //     }
    //     return recentComments, recentCamp
    // }
   
    // console.log(recentCampComment)
    // console.log(recentComments)
    // // console.log(recentCamp)
  
    return (
        <div className="account-container">
            <div className="account-info">
            <h2>Account info</h2>
                <p>Name: {user.name}</p>
                <p>Email: {user.email_address}</p>
                <br></br>
                {<p>Account created on: {user.created_at.split("", 10)}</p>}
                {/* {user.comments.length !== 0 ? <p>Most recent comment: '{recentComments[0].body}' for {recentCamp.name} Camp</p> : <p>No recent comments</p> } */}

            </div> 
        </div>
    )  
}

export default Account;
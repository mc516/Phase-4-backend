import React from "react";
import CampCard from "./Campcard";

function Camps({camps, addComment, user, comments, removeComment, updateComment}) {
    return (
        <div className="camps">
            <h1>Camps</h1>
            <div className="camps-container">
                {camps.map(camp => <CampCard key={camp.name} camp={camp} addComment={addComment} user={user} comments={comments} removeComment={removeComment} updateComment={updateComment}/> )}
            </div>
        </div>
       
    )
}

export default Camps;
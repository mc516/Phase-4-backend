import React from "react";
import Comments from "./Comments";
function CampCard({camp, image, addComment, user, comments, removeComment, updateComment}) {
    return (  
        <div className="camps-card" >   
            <img className="card-image" src={image} alt={camp.name}/>     
            <p className="card-name">{camp.name}</p>
            <p className="card-activity">Main Attraction: {camp.main_activity}</p>
            <p className="card-description">{camp.description}</p>
            {<Comments  addComment={addComment} user={user} camp={camp} comments={comments} removeComment={removeComment} updateComment={updateComment}/>}
        </div>
    )
}

export default CampCard;
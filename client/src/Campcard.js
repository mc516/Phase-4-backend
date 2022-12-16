import React from "react";
import Reviews from "./Reviews";
function CampCard({camp, image, addComment, user}) {

    //destructure camp for comment here later to pasas into Reviews

    return (  
        <div className="camps-card" >   
            <img className="card-image" src={image} alt={camp.name}/>     
            <p className="card-name">{camp.name}</p>
            <p className="card-activity">Main Attraction: {camp.main_activity}</p>
            <p className="card-description">{camp.description}</p>
            {<Reviews addComment={addComment} user={user} camp={camp}/>}
        </div>
    )
}

export default CampCard;
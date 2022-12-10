import React from "react";

function CampCard({camp, image}) {
    console.log(camp)

    return (
        <div className="camps-item">   
            <img className="card-image" src={image} />     
            <p className="card-name">{camp.name}</p>
            <p className="card-description">{camp.description}</p>
        </div>
    )
}

export default CampCard;
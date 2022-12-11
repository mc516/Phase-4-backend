import React from "react";
import { useNavigate } from "react-router-dom";

function CampCard({camp, image}) {
    let navigate = useNavigate();

    const routeChange = () =>{ 
        let path = `/enroll`; 
        navigate(path);
      }

    return (
       
        <div className="camps-item" onClick={routeChange}>   
            <img className="card-image" src={image} />     
            <p className="card-name">{camp.name}</p>
            {/* <p className="card-description">{camp.description}</p> */}
            <p className="card-activity">Main Attraction: {camp.main_activity}</p>
            <p>Click to learn more!</p>
        </div>
    )
}

export default CampCard;
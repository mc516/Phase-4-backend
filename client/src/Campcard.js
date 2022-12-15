import React from "react";
import { useNavigate } from "react-router-dom";

function CampCard({camp, image}) {
    const navigate = useNavigate();

    const routeChange = () =>{  
        navigate('/home');
      }

    return (
       
        <div className="camps-item" >   
            <img className="card-image" src={image} alt={camp.name}/>     
            <p className="card-name">{camp.name}</p>
            {/* <p className="card-description">{camp.description}</p> */}
            <p className="card-activity">Main Attraction: {camp.main_activity}</p>
            <p onClick={routeChange} className="learn-more">Click to learn more!</p>
        </div>
    )
}

export default CampCard;
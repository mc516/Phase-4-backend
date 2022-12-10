import React from "react";
import { useNavigate } from "react-router-dom";
import CampCard from "./Campcard";


function Camps({camps}) {
    let navigate = useNavigate();
    const images = {
        summer:"https://images.wagwalkingweb.com/media/articles/dog/summer-season-allergies/summer-season-allergies.jpg",
        fall: "https://wps3.dbknews.com/uploads/2022/09/pexels-pixabay-33109.jpeg",
        winter:"https://cdn.mos.cms.futurecdn.net/8Zw7hWD5ZaquyftsRbEmof-1200-80.jpg",
        spring:"https://guideposts.org/wp-content/uploads/2018/04/cherry_blossoms-1024x576.jpg.optimal.jpg",      
    }

    const routeChange = () =>{ 
        let path = `/enroll`; 
        navigate(path);
      }

    return (
        <div className="camps">
            <h1>Camps</h1>
            <div className="camps-container">
                {<CampCard camp={camps[0]} image={images.summer}/>}
                {<CampCard camp={camps[1]} image={images.fall}/>}
                {<CampCard camp={camps[2]} image={images.winter}/>}
                {<CampCard camp={camps[3]} image={images.spring}/>}
            </div>
            <button className="join-now-btn" onClick={routeChange}>Join Now</button>
        </div>
       
    )
}

export default Camps;
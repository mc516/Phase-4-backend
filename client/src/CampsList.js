import React from "react";
import CampCard from "./Campcard";

function Camps({camps, addComment, user, comments, removeComment, updateComment}) {
    return (
        <div className="camps">
            <h1>Camps</h1>
            <div className="camps-container">
                {/* {<CampCard camp={camps[0]} image={images.summer} addComment={addComment} user={user} comments={comments} removeComment={removeComment} updateComment={updateComment}/>}
                {<CampCard camp={camps[1]} image={images.fall} addComment={addComment} user={user} comments={comments} removeComment={removeComment} updateComment={updateComment}/>}
                {<CampCard camp={camps[2]} image={images.winter} addComment={addComment} user={user} comments={comments} removeComment={removeComment} updateComment={updateComment}/>}
                {<CampCard camp={camps[3]} image={images.spring} addComment={addComment} user={user} comments={comments} removeComment={removeComment} updateComment={updateComment}/>} */}
                {camps.map(camp => <CampCard key={camp.name} camp={camp} addComment={addComment} user={user} comments={comments} removeComment={removeComment} updateComment={updateComment}/> )}
            </div>
        </div>
       
    )
}

export default Camps;
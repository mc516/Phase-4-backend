import React from "react";
import { useState } from "react"
import NewComment from "./NewComment";

function Reviews({addComment}) {
    const [isNewCommentClicked, setIsNewCommentClicked] = useState(false)
    const [isEdit, setIsEdit] = useState(false) 
    const [isEditIndex, setIsEditIndex] = useState()

    //Filter comments to display here later

    function handleAddCommentClick(){
        setIsNewCommentClicked((isNewCommentClicked) => !isNewCommentClicked)
    }
    return (
        <div className="reviews">
            <h3>Comments</h3>
            <p>Comment1</p>
            <p>Comment2</p>
            <p>Comment3</p>
            {isNewCommentClicked ? <NewComment setIsNewCommentClicked={setIsNewCommentClicked} addComment={addComment}/> : null}
            <button onClick={handleAddCommentClick}>Add comment</button>

        </div>
    )
}

export default Reviews;
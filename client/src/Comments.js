import React from "react";
import { useState } from "react"
import NewComment from "./NewComment";

function Reviews({addComment, user, camp}) {
    const [isNewCommentClicked, setIsNewCommentClicked] = useState(false)
    const [isEdit, setIsEdit] = useState(false) 
    const [isEditIndex, setIsEditIndex] = useState()

    const comments = camp.comments
    console.log(comments)

    function handleAddCommentClick(){
        setIsNewCommentClicked((isNewCommentClicked) => !isNewCommentClicked)
    }
    
    return (
        <div className="comments">
            <h3>Comments</h3>
            {comments.map((comment, index) => {
                return <ul key={camp.id}>
                    <li>
                        <strong><p>{user.name} says:</p></strong>
                        <p>{comment.body}</p>
                    </li>
                </ul>
            })}

            <p>Comment1</p>
            <p>Comment2</p>
            <p>Comment3</p>
            {isNewCommentClicked ? <NewComment setIsNewCommentClicked={setIsNewCommentClicked} addComment={addComment} user={user} camp={camp}/> : null}
            <button onClick={handleAddCommentClick}>Add comment</button>

        </div>
    )
}

export default Reviews;
import React from "react";
import { useState } from "react"
import NewComment from "./NewComment";

function Comments({addComment, user, camp, comments, removeComment}) {
    const [isNewCommentClicked, setIsNewCommentClicked] = useState(false)
    const [isEdit, setIsEdit] = useState(false) 
    const [isEditIndex, setIsEditIndex] = useState()

    const commentsToDisplay = comments.filter(comment => {return comment.camp_id === camp.id })

    function handleAddCommentClick(){
        setIsNewCommentClicked((isNewCommentClicked) => !isNewCommentClicked)
    }

    function handleDeleteClick(comment){
        if (window.confirm('Delete this comment?')) {
            fetch(`/comments/${comment.id}`, {
                method: "DELETE",
            })
            removeComment(comment.id)
        }
        
        console.log(camp)
        console.log(comment)
    }
    return (
        <div className="comments">
            <h3>Comments</h3>
            {commentsToDisplay.map((comment, index) => {
                return <ul key={comment.id}>
                    <li className="li-comments">
                        <>
                            <strong><p>{user.name.split(' ')[0] + " " + user.name.split(' ')[1][0]}:</p></strong>
                            <p>{comment.body}</p>
                        </>
                        <button onClick={() => handleDeleteClick(comment)}>Delete</button> 
                    </li>
                </ul>
            })}

            {isNewCommentClicked ? <NewComment setIsNewCommentClicked={setIsNewCommentClicked} addComment={addComment} user={user} camp={camp}/> : null}
            <button onClick={handleAddCommentClick}>Add comment</button>

        </div>
    )
}

export default Comments;
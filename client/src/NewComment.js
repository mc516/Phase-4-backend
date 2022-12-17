import React from "react";
import {useState} from "react"

function NewComment({setIsNewCommentClicked, addComment, user, camp}) {
    const userId = user.id
    const campId = camp.id
    const [newComment, setNewComment] = useState({
        body:"",
        user_id: userId,
        camp_id: campId
    })

    function handleChange(e) {
        setNewComment({
            ...newComment,
            [e.target.id]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`/comments`, {
            method:"POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newComment)
        }) 
        .then(res => res.json())
        .then(newComment => {
            console.log(newComment)
            addComment(newComment)  
        })
        setIsNewCommentClicked(false)
    }

    return (
        <div className="new-comment">
            <form onSubmit={handleSubmit}>
                <textarea
                    type="text-box"
                    id="body"
                    autoComplete="off"
                    rows="5" 
                    cols="40"
                    placeholder="Leave a comment here!"
                    onChange={handleChange}
                />
                <input type="submit" value="enter"/>
            </form>
        </div>
    )
}

export default NewComment;
import React from "react";
import {useState} from "react"

function NewComment({setIsNewCommentClicked}) {
    const [newComment, setNewComment] = useState({body:""})

    function handleChange(e) {
        setNewComment({
            ...newComment,
            [e.target.name]: e.target.value
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
            // addReview(newReview)  
        })
        setIsNewCommentClicked(false)
    }

    return (
        <div className="new-comment">
            <form onSubmit={handleSubmit}>
                <textarea
                    type="text-box"
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
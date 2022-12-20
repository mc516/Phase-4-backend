import React from "react";
import {useState} from 'react'

function EditComment({comment, setIsEdit, updateComment, user}) {
    const [newComment, setNewComment] = useState(comment)

    function handleChange(e){
        console.log(e.target.value)
        setNewComment({
            ...newComment,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e){
        fetch(`/comments/${comment.id}`, {
            method:'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                body: newComment.body
            })
        })
        .then(res => res.json())
        .then(updatedComment => updateComment(updatedComment)) 
        setIsEdit(false)   
    }
    
    return(
        <div className="edit-comment">
            <form onSubmit={handleSubmit}> 
                <strong><p>{comment.user.name.split(' ')[0] + " " + user.name.split(' ')[1][0]} :</p></strong>
                <textarea
                    type="text-box"
                    name="body"
                    autoComplete="off"
                    rows="5" 
                    cols="40"
                    value={newComment.body}
                    onChange={handleChange}
                />
                <input type="submit" value="save"/>
            </form>
        </div>
    )
}

export default EditComment;
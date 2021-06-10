import React from 'react'
import {useState} from 'react'
import ReactStars from "react-rating-stars-component";


function RatingItem(props) {
    const {rating, handleSend, removeRating} = props
    const [name, setName] = useState("");
    const [editRatingInput, setEditRatingInput] = useState("");
    const [comment, setComment] = useState("");
    const [editMode, setEditMode] = useState(false)
    return(
        <div className='review-boss' key={rating.id}>
                { editMode ? (
                    <div>
                    <input value={name} onChange={(e) => setName(e.target.value)} placeholder={rating.name}/>
                    <input value={editRatingInput} onChange={(e) => setEditRatingInput(e.target.value)} placeholder={rating.rating}/>
                    <input value={comment} onChange={(e) => setComment(e.target.value)} placeholder={rating.comment}/>
                    </div>
                ) : null }
                <h3>{rating.name}</h3>
                <p>
                    <ReactStars value={rating.rating} />
                </p>
                <p>{rating.comment}</p>
                <p>{rating.user_name}</p>
                <p>{rating.date_created}</p>
                <div className='edit-delete-btns'>
                <button className='edit-btn' onClick={() => setEditMode(!editMode)}>Edit</button>
                <button className='edit-btn' onClick={() => handleSend(rating.id, name || rating.name, comment || rating.comment, editRatingInput || rating.rating)}>Save</button>
                <button className='delete-btn' onClick={() => removeRating(rating.id)}>Delete</button>
                </div>


            </div>
    )
}

export default RatingItem
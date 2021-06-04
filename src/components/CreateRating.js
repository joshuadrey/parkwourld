import ReactStars from "react-rating-stars-component";
import React, { Component } from 'react'
import axios from 'axios'

class CreateRating extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            rating: 0,
            comment: '',
            userName: '',
            isOpen: true
        }
    }

    ratingChanged = (newRating) => {
        this.setState({ rating: newRating })
        console.log(newRating)
    }

    handleInput = (e) => {
        const { value, name } = e.target
        this.setState({ [name]: value })
    }

    handleSend = () => {
        const { name, rating, comment, userName } = this.state
        axios.post('/rating/create', { name, rating, comment, userName })
            .then((res) => {
                this.setState({
                    name: '',
                    rating: 0,
                    comment: '',
                    userName: '',
                })
            })
    }



    render() {
        const { name, rating, comment, userName } = this.state
        return (
            <div className='whole-page'>
                <div className="create-form">
                    <h1 className='create-rating-title'>Create A Review</h1>
                    <input
                        className='place-name-box'
                        placeholder="Place Name"
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.handleInput}
                    />

                    <ReactStars
                        classNames='stars'
                        count={5}
                        onChange={this.ratingChanged}
                        size={26}
                        color='white'
                        activeColor="#ffd700"
                        type="number"
                        name="rating"
                        value={rating}
                    />
                    <input
                        className="your-review"
                        placeholder="Your Review"
                        type="text"
                        name="comment"
                        value={comment}
                        onChange={this.handleInput}
                    />

                    <button className="submit-review" onClick={this.handleSend}>
                        Submit
                    </button>
                </div>
            </div >

        )

    }


}



export default CreateRating
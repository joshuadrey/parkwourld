import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactStars from "react-rating-stars-component";
import Modal from 'react-modal'
import { connect } from 'react-redux'
import CreateRating from './CreateRating'
import RatingItem from './RatingItem'
import Header from './Header'
import { Link } from 'react-router-dom'

const RatingsPage = () => {

    const [ratings, setRating] = useState([]);
    const [remove, setRemove] = useState()
    const [modalIsOpen, setIsOpen] = useState(false);
    const [ratingInput, setRatingsInput] = useState("");




    useEffect(() => {
        console.log(modalIsOpen)
    }, [modalIsOpen])

    const openModal = () => {
        setIsOpen(true)
    }

    function afterOpenModal() {

    }

    function closeModal() {
        setIsOpen(false)
    }

    const ratingSearch = () => {
        axios.post('/rating/name', { name: ratingInput })
            .then((res) => {
                console.log(res.data)
                setRating(res.data)
            }).catch((err) => {
                console.log(err, 'No Ratings Available')
            })
    }


    const removeRating = (id) => {
        axios.delete(`/rating/delete/${id}`)
            .then((res) => {
                console.log(res.data)
                ratingSearch()
            }).catch((err) => {
                console.log(err, 'Cant delete')
            })
    }

    

    function ratingReset() {
        closeModal()
        ratingSearch()
    }

    const handleSend = (id, a, b, c) => {
        axios.put(`/rating/edit/${id}`, {a, b, c})
            .then((res) => {
                ratingSearch()
            }).catch(err => console.log(err))
    }


    const mappedRatings = ratings.map((rating) => {
        return (
            <RatingItem
            rating={rating}
            handleSend={handleSend}
            removeRating={removeRating}/>
            // <div className='review-boss' key={rating.id}>
            //     <h3>{rating.name}</h3>
            //     <p>
            //         <ReactStars value={rating.rating} />
            //     </p>
            //     <p>{rating.comment}</p>
            //     <p>{rating.user_name}</p>
            //     <p>{rating.date_created}</p>
            //     <div className='edit-delete-btns'>
            //     <button className='edit-btn' onClick={() => handleSend(rating.id, name || rating.name, comment || rating.comment, editratingInput || rating.rating)}>Edit</button>
            //     <button className='delete-btn' onClick={() => removeRating(rating.id)}>Delete</button>
            //     </div>


            // </div>

        );
    });
    return (
        <div className='ratings'>
            <div className='title2'>
                <Link className='header-link1' to='/places'>Places</Link>
                <h1 className='ratings-title'>RATINGS</h1>
                <Header />
            </div>
            <div className='search-container'>
                <input
                    className="searchbar"
                    type="text"
                    value={ratingInput}
                    placeholder="SEARCH REVIEWS"
                    onChange={(e) => setRatingsInput(e.target.value)}

                ></input>
                <button
                    type="button"
                    onClick={ratingSearch}
                >
                    SEARCH
            </button>

                <button onClick={openModal}>Create Review</button>
            </div>
            {/* <InfiniteScroll pageStart={0}
              loadMore={loadFunc}
              hasMore={true || false}
        loader={<div className="loader" key={0}>Loading ...</div>}> */}

            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
            >{<CreateRating handleSend={handleSend} />}
                <div className='reset-btn-page'>
                    <button className='reset-btn' onClick={ratingReset}>X</button>
                </div>
            </Modal>

            <div className='mapped-reviews'>{mappedRatings}</div>
            {/* </InfiniteScroll> */}
        </div >
    );
};
const mapStateToProps = function (state) {
    return state;
};

export default connect(mapStateToProps)(RatingsPage);





import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactStars from "react-rating-stars-component";
import Modal from 'react-modal'
import { connect } from 'react-redux'
import CreateRating from './CreateRating'
import Header from './Header'
import { Link } from 'react-router-dom'

const RatingsPage = () => {

    const [ratings, setRatings] = useState([]);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [ratingInput, setRatingsInput] = useState("");

    const [update, setUpdate] = useState({
        name: "",
        rating: "",
        comment: "",
        userName: "",

    });

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
                setRatings(res.data)
            }).catch((err) => {
                console.log(err, 'No Ratings Available')
            })
    }

    function ratingReset() {
        closeModal()
        ratingSearch()
    }

    const handleSend = () => {
        const { name, rating, comment, userName } = this.state
        axios.post('/rating/create', update)
            .then((res) => {
                setUpdate(res.data)
            })
    }


    const mappedRatings = ratings.map((rating) => {
        return (
            <div className='review-boss' key={rating.id}>
                <h3>{rating.name}</h3>
                <p>
                    <ReactStars value={rating.rating} />
                </p>
                <p>{rating.comment}</p>
                <p>{rating.user_name}</p>
                <p>{rating.date_created}</p>



            </div>

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





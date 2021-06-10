import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const SubscribersPage = () => {

    const [subs, setSubs] = useState([]);
    


    //n.id, user_id, subscribed, user_name


    // const mappedRatings = news_letter.map((news) => {
    //     return (
    //         <div className='review-boss' key={news.n.id}>
    //             <h3>{news.name}</h3>
    //             <p>{news.comment}</p>
    //             <p>{news.user_name}</p>
    //             <p>{news.date_created}</p>
    //             <div className='edit-delete-btns'>
    //             <button className='edit-btn'>Edit</button>
    //             <button className='delete-btn'>Delete</button>
    //             </div>


    //         </div>

    //     );
    // });
    return (
        <div className='subs'>
            <div className='title2'>
                <Link className='header-link1' to='/register'>Back</Link>
                <h1 className='sub-title'>SUBSCRIBERS</h1>
            </div>
           
               
                

                
            

        

            {/* <div className='mapped-subs'>{mappedSubs}</div> */}
        </div >
    );
};



export default SubscribersPage





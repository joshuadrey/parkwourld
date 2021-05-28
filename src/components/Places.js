import Header from './Header'
import react from 'react'
import axios from 'axios'
import { useState } from 'react'


const Places = () => {
    // const [place, setPlace] = useState([])
    const [create, setCreate] = useState({
        name: "",
        pay: "",
        image: ""
    });
    // const handleSend = () => {

    //     const { name, pay, image } = this.state
    //     axios.post('/location/create', create)
    //         .then((res) => {
    //             setCreate(res.data)
    //         })
    // }

    // const mappedPlace = place.map((place) => {
        return (
            <div className='places'>
                <div className='title1'>
                <Header />
                <h1 className='place-title'>Places</h1>
                </div>
                <div className='btn-filters'>
                <button className='btn1'>Pay</button>
                <button className='btn2'>Free</button>
                <button className='btn3'>Add</button>
                </div>
                {/* <div className='mapped-place'>{mappedPlace}</div> */}
            </div>
        ) 
    // })

}

export default Places
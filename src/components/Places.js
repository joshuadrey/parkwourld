import Header from './Header'
import AddPlace from './AddPlace'
import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'


const Places = (props) => {
    const [place, setPlace] = useState([])
    const [pay, setPay] = useState(false)
    const [free, setFree] = useState(false)
    const [add, setAdd] = useState(false)
    const [create, setCreate] = useState({
        name: "",
        pay: "",
        image: ""
    });

    useEffect(() => {
        axios.get('/location/get').then((res) => {
            setPlace(res.data)
        }).catch(err => console.log(err))
    }, [])

    // const handleSend = () => {

    //     const { name, pay, image } = this.state
    //     axios.post('/location/create', create)
    //         .then((res) => {
    //             setCreate(res.data)
    //         })
    // }

    const toggleAdd = () => {
        setAdd(!add)
    }








    return (
        <div className='places'>
             {add&& < AddPlace/>}
            <div className='title1'>
                <Header />
                <h1 className='place-title'>Places</h1>
            </div>
            <div className='btn-filters'>
                <button className='btn1' onClick={() => {setPay(true)
                setFree(false)}}>Pay</button>
                <button className='btn2' onClick={() => {setFree(true)
                setPay(false)}}>Free</button>
                <button className='btn3' onClick={() => {setPay(false)
                setFree(false)}}>All</button>
                <button className='btn4' onClick={toggleAdd}>Add</button>
            </div>

               

            <div className='location-images'>
                {place.filter((e) => {
                    if (pay === true) {
                        return e.pay
                    }
                    else if (free === true) {
                        return !e.pay
                    }else {
                        return true
                    }

                }).map((place) => {
                    return (
                        <div className='individual-locations' key={place.id}>
                            <h4 className='place-name'>{place.name}</h4>
                            <img className='pics' src={place.image} />
                            <Link to='/ratings' className='ratings-btn'>Rate</Link>
                        </div>
                    )
                })}
            </div>





        </div>
    )
}



export default Places
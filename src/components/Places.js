import Header from './Header'
import react from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'


const Places = (props) => {
    const [place, setPlace] = useState([])
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








    return (
        <div className='places'>
            <div className='title1'>
                <Header />
                <h1 className='place-title'>Places</h1>
            </div>
            <div className='btn-filters'>
                <button className='btn1' onClick={() => this.props.filterArray("pay")}>Pay</button>
                <button className='btn2' onClick={() => this.props.filterArray("free")}>Free</button>
                <button className='btn3' onClick={() => this.props.filterArray("all")}>All</button>
                <button className='btn4'>Add</button>
            </div>


            <div className='location-images'>
                {place.map((place) => {
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
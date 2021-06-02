import Header from './Header'
import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'


const Tricks = () => {
    const [tricks, setTrick] = useState([])
    const [create, setCreate] = useState({
        name: "",
        video: "",
        description: ""
    });


    useEffect(() => {
        axios.get('/tricks/get').then((res) => {
            setTrick(res.data)
        }).catch(err => console.log(err))
    }, [])



    return (
        <div className='tricks'>
            <div className='title1'>
                <Header />
                <h1 className='tricks-title'>Tricks</h1>
            </div>





            <div className='tricks-images'>
                {tricks.map((tricks) => {
                    return (
                        <div className='individual-tricks' key={tricks.id}>
                            <h4 className='tricks-name'>{tricks.name}</h4>
                            {/* <video className='vids' src={tricks.video} /> */}
                            {/* <video width="320" height="240" >
                                <source className='vids' src={tricks.video} type="video/mp4"/>
                            </video> */}
                                    <p className='description'> {tricks.description} </p>
                        </div>
                    )
                })}
            </div>


                        </div>

                    )

                }

export default Tricks
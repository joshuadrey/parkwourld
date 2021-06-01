import Header from './Header'
import react from 'react'
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
                <Header/>
                <h1 className='tricks-title'>Tricks</h1>
                </div>





                <div className='tricks-images'>
                {tricks.map((tricks) => {
                    return (
                        <div className='individual-tricks' key={tricks.id}>
                            <h4 className='tricks-name'>{tricks.name}</h4>
                            <img className='vids' src={tricks.video} />
                            <img className='description' src={tricks.description} />
                        </div>
                    )
                })}
            </div>


            </div>

        )

}

export default Tricks
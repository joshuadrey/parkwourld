import react from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='home'>
            <h1 className='home-title'>PARKWOURLD</h1>
            <Link to='/place' className='places-btn'>Places</Link>
        </div>
    )
}

export default Home
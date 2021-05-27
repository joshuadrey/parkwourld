import react from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

const Home = () => {
    return (
        <div className='home'>
            <Header/>
            <h1 className='home-title'>PARKWOURLD</h1>
            <Link to='/place' className='places-btn'>Places</Link>
        </div>
    )
}

export default Home
import react from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

const Home = () => {
    return (
        <div className='home'>
            <div className = 'title1'>
            <h1 className='home-title'>PARKWOURLD</h1>
            <Header/>
            </div>
            <div className = 'buttons'>
            <Link to='/places' className='places-btn'>Places</Link>
            </div>
        </div>
    )
}

export default Home
import react from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

const Ratings = (props) => {

    return (
        <div className='ratings'>
            <div className='title2'>
                <Link to='/places' className='header-link1'>Places</Link>
                <h1 className='ratings-title'>RATINGS</h1>
                <Header/>
            </div>

        </div>
    )

}

export default Ratings
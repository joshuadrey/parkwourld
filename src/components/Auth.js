import React from 'react'
import { useState } from 'react'
import { getUser } from '../redux/userReducer'
import { connect } from 'react-redux'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const Auth = ({ getUser }) => {
    const [state, setState] = useState({
        userName: '',
        password: ''
    })



    const history = useHistory()
    const loginUser = async (e) => {
        e.preventDefault()
        const { userName, password } = state

        try {
            const user = await axios.post('/auth/login', { userName, password })
            getUser(user.data)
            history.push('/home')
        } catch (err) {
            console.log(err)
        }
    }


    const registerUser = async (e) => {
        e.preventDefault()
        const { userName, password } = state

        try {
            const user = await axios.post('/auth/register', { userName, password })
            getUser(user.data)
            history.push('/home')
        } catch (err) {
            console.log(err)
        }
    }




    const changeHandler = e => setState({
        ...state,
        [e.target.name]: e.target.value
    })

    return (
        <div className='auth'>
            <div className='auth-title'>SIGN IN</div>
            <form className='auth-sign-in' onSubmit={(e => loginUser(e))}>
                <input
                    className='auth-input-username'
                    placeholder='Username'
                    name='userName'
                    onChange={(e) => changeHandler(e)}
                />
                <input
                    className='auth-input-password'
                    placeholder='Password'
                    name='password'
                    type='password'
                    onChange={(e) => changeHandler(e)}
                />
                <div className = 'btn'>
                <button className='sign-in-button' type='submit' onClick={loginUser}>Sign In</button>
                
                <button className='register-button' type='submit' onClick={registerUser}>Register</button>
                </div>
            </form>

        </div>
    )
}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps, { getUser })(Auth)
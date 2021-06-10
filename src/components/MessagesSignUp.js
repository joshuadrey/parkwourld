import React, { Component } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import { logoutUser } from "../redux/userReducer";
var nodemailer = require('nodemailer');



class MessagesSignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            number: 0,
            isOpen: true,
            signUp: false
        }
    }

    handleSend = () => {
        const { email } = this.state
        axios.post('/subscribe/register', { email })
            .then((res) => {
                this.setState({
                    email: '',
                })
            })
    }

 

    

    handleInput = (e) => {
        const { value, name } = e.target
        this.setState({ [name]: value })
    }





    render() {
        const { email} = this.state
        return (
            <div className='whole-page2'>
                <div className="create-form3">
                    <div className='back-btns'>
                    <Link className='header-link4' to='/places'>Places</Link>
                    <Link className='header-link4' to='/tricks'>Tricks</Link>
                    <Link className='header-link4' to = '/home'>Home </Link>
                    <Link className='header-link4' to = '/register'>Sign-Up</Link>
                    <Link className='header-link4' to = '/' onClick = {() => {logoutUser()}}>Logout</Link>
                    </div>
                    <h1 className='sub-title'>SUBSCRIBE</h1>
                    <p className='notes'>Sign up to recive updates on Parkwourld</p>
                    <input
                        className='email'
                        placeholder="Email"
                        type="text"
                        name="email"
                        value={email}
                        onChange={this.handleInput}
                    />

                    <button className="subscribe-btn" onClick={this.handleSend}>
                        Register
                    </button>

                    <div className='hidden-box'>
                    <Link className='hidden-button'  to='/hiddenSubscribers'>subscribers</Link>
                    </div>


                    
                </div>
            </div >

        )

    }


}



export default MessagesSignUp
import React, { Component } from 'react'
import axios from 'axios'
import Header from './Header'
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
            <div className='whole-page1'>
                <div className="create-form2">
                    <h1 className='create-rating-title'>SUBSCRIBE</h1>
                    <p>Sign up to recive updates on Parkwourld</p>
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

                    <Header/>

                    
                </div>
            </div >

        )

    }


}



export default MessagesSignUp
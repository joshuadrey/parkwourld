import React, { Component } from 'react'
var nodemailer = require('nodemailer');
import axios from 'axios'



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
        const { name, payBool, image } = this.state
        axios.post('/location/create', { name, pay: payBool, image })
            .then((res) => {
                this.setState({
                    name: '',
                    payBool: false,
                    image: ''
                })
            })
    }

    handleInput = (e) => {
        const { value, name } = e.target
        this.setState({ [name]: value })
    }





    render() {
        const { name, pay, image } = this.state
        return (
            <div className='whole-page1'>
                <div className="create-form2">
                    <h1 className='create-rating-title'>ADD A PLACE</h1>
                    <input
                        className='place-name-box'
                        placeholder="Place Name"
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.handleInput}
                    />

                    <label className='pay-checked'>Pay</label>

                    <input
                        className='pay-boolean'
                        type="checkbox" checked={this.state.payBool}
                        name="pay"
                        onChange={(e) => this.setState({payBool: e.target.checked})}
                    />
                    <input
                        className="image-url"
                        placeholder="image-url"
                        type="text"
                        name="image"
                        value={image}
                        onChange={this.handleInput}
                    />

                    <button className="submit-place" onClick={this.handleSend}>
                        Submit
                    </button>

                    
                </div>
            </div >

        )

    }


}



export default MessagesSignUp
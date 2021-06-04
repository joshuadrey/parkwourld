import React, { Component } from 'react'
import axios from 'axios'

class AddPlace extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            pay: '',
            image: '',
            isOpen: true
        }
    }

 

    handleSend = () => {
        const { name, pay, image } = this.state
        axios.post('/location/create', { name, pay, image })
            .then((res) => {
                this.setState({
                    name: '',
                    pay: '',
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
            <div className='whole-page'>
                <div className="create-form2">
                    <h1 className='create-rating-title'>Add A Place</h1>
                    <input
                        className='place-name-box'
                        placeholder="Place Name"
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.handleInput}
                    />

                    <input
                        classNames='pay-boolean'
                        type="checkbox" checked="true" 
                        type="checkbox" checked="false"
                        name="pay"
                        value={pay}
                        // onChange={this.}
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



export default AddPlace
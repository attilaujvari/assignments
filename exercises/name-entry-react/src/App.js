import React, { Component } from 'react'
import FormInput from "./FormInput.js"

class App extends Component {
    constructor(){
        super();
        this.state = {
            nameInput: "",
            ageInput: "",
            names: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (e) => {
        // console.log(e.target.name)
        // console.log(e.target.value)
        // e.target.name: The literal name we gave the input that MUST match the input name in state
        // e.target.value: The literal value the user just typed into the input box. 
        this.setState({
            [e.target.name]: e.target.value,
            [e.target.ageInput]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // You will need to use prevState here when you add your 'names' array so that you can maintain previous entries to the array while adding the new one.
        this.setState(prevState => {
            return {
                nameInput: "",
                ageInput: "",
                names : [...prevState.names, ...e.target.name.value ]
            }
        })
    }

    render(){

        const namesArr = this.state.names.map((name, i) => <FormInput key={i} />)

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {namesArr}
                </form>
                <h1>{this.state.nameInput}</h1>
                <h1>{this.state.ageInput}</h1>
                <div>
                    {/* This is where you would map out your state names Array */}
                </div>
            </div>
        )
    }
}

export default App
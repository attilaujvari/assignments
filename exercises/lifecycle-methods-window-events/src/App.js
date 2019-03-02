import React, { Component } from 'react'

class App extends Component{
    constructor(){
        super()
        this.state = {
            arr : []
        }
    }

    componentDidMount() {
        window.addEventListener("keydown", e => {
            console.log(e.which)

        })
    }

    componentWillUnmount() {
        window.removeEventListener("keydown")
    }

    render() {
        return(
            <div>
                <h1>Keys pressed:</h1>
                <p>{this.state.arr}</p>
            </div>
        )
    }

}

export default App
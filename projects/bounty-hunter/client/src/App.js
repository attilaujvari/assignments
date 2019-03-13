import React, {Component} from "react"
import axios from "axios"
import MappingBounties from "./MappingBounties.js"

export default class App extends Component {
    constructor(){
        super()
        this.state = {
            fetchedData: []
        }
    }

    componentDidMount() {
        this.getData()
    }

    getData = () => {
        axios.get("/bounties")
            .then(res => (this.setState({fetchedData : res.data})))
            .catch(err => console.log(err))
    }

    render() {
        console.log(this.state.fetchedData)
        return(
            <div>
                <h1>Bounty Hunter's Nest</h1>
                <MappingBounties  fetchedData = {this.state.fetchedData}/>
            </div>
        )
    }
}
import React, {Component} from "react"
import {withBounty} from "./context/BountyProvider";
import MappingBounties from "./components/MappingBounties.js"


class App extends Component {
    constructor(){
        super()
        this.state = {
            firstName : "",
            lastName : "",
            isLiving : true,
            bountyAmount: 0,
            type : "",
            imgUrl: ""
        }
    }

    handleChange = e => {
        const value = e.target.type === "checkbox"
            ? e.target.checked
            : e.target.value
        this.setState({
            [e.target.name]:value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const newBounty = {
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            isLiving : this.state.isLiving,
            bountyAmount: this.state.bountyAmount,
            type : this.state.type,
            imgUrl: this.state.imgUrl
        }
        this.props.addBounty(newBounty)
        this.setState({ firstName : "", lastName : "", isLiving : true, bountyAmount: 0, type : "", imgUrl: ""})
    }

    componentDidMount() {
        this.props.getData()
    }

    render() {
        return(
            <div className={"bodyBackground"}>
                <h1>Bounty Hunter's Nest</h1>
                <MappingBounties  fetchedData = {this.props.fetchedData} deleteBounty={this.props.deleteBounty}/>
            </div>
        )
    }
}

export default withBounty(App)
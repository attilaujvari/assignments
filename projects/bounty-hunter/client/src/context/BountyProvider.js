import React, {Component} from "react"
import axios from "axios"

const BountyContext = React.createContext()

class BountyProvider extends Component{
    constructor(){
        super()
        this.state = {
            fetchedData: []
        }
    }

    getData = () => {
        axios.get("/bounties")
            .then(res => (this.setState({fetchedData : res.data})))
            .catch(err => console.log(err))
    }

    deleteBounty = (_id) => {
        axios.delete(`/bounties/${_id}`)
            .then(res => this.setState(prevState => {
                return{
                    fetchedData: prevState.fetchedData.filter(item => item._id !== _id)
                }
            }))
            .catch(err => console.log(err))
    }

    addBounty = newBounty => {
        axios.post("/bounties", newBounty)
            .then(res => {this.setState(prevState => ({
                fetchedData: [...prevState.fetchedData, res.data]
            }))
            })
    }

    render() {
        return (
            <BountyContext.Provider
                value={{fetchedData: this.state.fetchedData,
                getData:this.getData,
                deleteBounty: this.deleteBounty}}
                    >
                {this.props.children}
            </BountyContext.Provider>
        );
    }
}

export const withBounty = C => props => (
    <BountyContext.Consumer>
        {value => <C {...props} {...value}/>}
    </BountyContext.Consumer>
)

export default BountyProvider
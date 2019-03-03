import React, {Component} from "react"
import InputForm from "../InputForm.js"

export default class Ugly extends Component{
    constructor (props){
        super(props)
        this.state = {
            isToggled : false,
            title : props.title,
            imgUrl : props.imgUrl,
            description : props.description
        }
    }

    toggler = () => {
        this.setState(prevState => ({
            isToggled: !prevState.isToggled
        }))
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault()
        const updates = {
            title: this.state.title,
            description: this.state.description,
            imgUrl: this.state.imgUrl,
        }
        this.props.handleEdit(this.props._id, updates)
        this.toggler()
    }

    render() {
        const {title, description, imgUrl, handleDelete, _id} = this.props

        return(
            <div>
                { !this.state.isToggled
                    ?   <div className="ugly-div" style={{ backgroundImage: `url(${imgUrl})`}}>
                        <h1>{title}</h1>
                        <h3>{description}</h3>
                        <button onClick={() => handleDelete(_id)}>Delete</button>
                        <button onClick={this.toggler}>Edit</button>
                    </div>
                    :   <div className="edit-ugly-div">
                        <InputForm
                            {...this.state}
                            btnText="Submit Edit"
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                        />
                        <button onClick={this.toggler}>Close</button>
                    </div>
                }
            </div>
        )

    }
}
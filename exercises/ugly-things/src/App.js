import React, {Component} from "react"
import Toggle from "./shared/Toggle.js";
import Form from "./shared/Form.js";
import InputForm from "./InputForm.js"
import {withUglies} from "./context/UglyProvider";
import UglyList from "./components/UglyList";

class App extends Component {
    constructor(){
        super()
        this.state = {
            title: "",
            imgUrl: "",
            description: ""
        }
    }

    componentDidMount (){
        this.props.getUglies()
    }

    handleChange = e => {
        const {name, value} = e.target
        this.setState({ [name] : value})
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addUgly(this.state)
        this.setState({
            title: "",
            imgUrl: "",
            description: ""
        })
    }

    render(){
        return(
            <div className={"form-container"}>
                <Toggle render={({isToggled, toggler}) =>
                    <>
                        { isToggled
                            ? <Form
                                render = {props =>
                                    <InputForm {...props}
                                               toggler = {toggler}
                                               formTitle="New submission"/>}
                                inputs={{title: "",
                                    imgUrl: "",
                                    description: ""}}
                                submit={inputs => alert(inputs.title)}
                            />
                            : <span onClick={toggler}>I'd like to submit a new ugly</span>
                        }
                    </>
                }/>
                <UglyList
                uglies = {this.props.uglies}
                handleDelete = {this.props.handleDelete}
                handleEdit = {this.props.handleEdit}/>
            </div>
        )
    }

}

export default withUglies(App)
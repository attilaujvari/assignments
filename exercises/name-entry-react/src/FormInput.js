import React, {Component} from "react"

class FormInput extends Component{

    render(){
        return(
            <div>
            <input type="text" name="nameInput" value={this.state.nameInput} onChange={this.handleChange} placeholder="Name"/>
            <input type="text" name="ageInput" value={this.state.ageInput} onChange={this.handleChange} placeholder="Age"/>
            <button>Submit</button>
            </div>
    )
    }

}

export default FormInput
import React from "react"
import Toggle from "./shared/Toggle.js";
import Form from "./shared/Form.js";
import InputForm from "./InputForm.js"

const App = () => {

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
                            imgURL: "",
                            description: ""}}
                        submit={inputs => alert(inputs.title)}
                        />
                    : <span onClick={toggler}>I'd like to submit a new ugly</span>
                }
            </>
            }/>
        </div>
    )
}

export default App
import React from "react"

function Form(props) {
    return(
        <form onSubmit={props.handleSubmit} id={"myForm"}>
            <input
                type="text"
                name="fName"
                value={props.fName}
                onChange={props.handleChange}
                placeholder="First Name"
                pattern=".{3,}"
                required
            />
            <input
                type="text"
                name="lName"
                value={props.lName}
                onChange={props.handleChange}
                placeholder="Last Name"
                pattern=".{3,}"
                required
            />
            <input
                type="text"
                name="email"
                value={props.email}
                onChange={props.handleChange}
                placeholder="Email"
                pattern=".{3,}"
                required
            />
            <input
                type="text"
                name="placeOfB"
                value={props.placeOfB}
                onChange={props.handleChange}
                placeholder="Place of birth"
                pattern=".{3,}"
                required
            />
            <input
                type="text"
                name="phone"
                value={props.phone}
                onChange={props.handleChange}
                placeholder="Phone number"
                pattern="[0-9]{10}"
                required
            />
            <input
                type="text"
                name="favFood"
                value={props.favFood}
                onChange={props.handleChange}
                placeholder="Favorite Food"
                pattern=".{3,}"
                required
            />

            <input
                type="text"
                name="about"
                value={props.about}
                onChange={props.handleChange}
                placeholder="Tell us about yourself:"
                id="aboutSection"
                pattern=".{3,}"
                required
            />
            <button id={"submitButton"}>Submit</button>
        </form>
        )

}

export default Form
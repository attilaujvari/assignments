import React from "react"

const Footer = () =>{
    return(
        <div className={"footer"}>
            <h1>Footer</h1>
            <img id={"schoolLogo"} src={require("./logoWhite.png")} alt="V School Logo"/>
            <br/>
            <p style={{color:"white"}}>Dope</p>
            <h6>Dope Footer</h6>
        </div>
    )
}

export default Footer
import React from "react"

const Header = () =>{
    return(
        <div className={"header"}>
            <img id={"schoolLogo"} src={require("./logoWhite.png")} alt="V School Logo"/>
            <h1>V School Tribune</h1>
        </div>
    )
}

export default Header
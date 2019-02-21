import React from "react"

function Box(props) {
    return(
        <div className="box" style= {props.background}>
            <h4>{props.title}</h4>
            <h5>{props.subtitle}</h5>
            <p>{props.info}</p>
        </div>
    )
}

export default Box
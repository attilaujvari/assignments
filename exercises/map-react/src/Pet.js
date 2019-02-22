import React from "react"

const Pet = (props) => {
    return (
        <div>
            <p>Pet: "{props.name}" of breed {props.breed}.
            </p>
        </div>
    )
}

export default Pet
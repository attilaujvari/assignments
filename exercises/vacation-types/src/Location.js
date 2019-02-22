import React from "react"

function Location(props) {
    
    let back = backgroundColor();
    function backgroundColor() {
        if (props.time === "Summer"){
            back = "yellow"
        } else if (props.time === "Spring") {
            back = "green"
        } else if (props.time === "Fall"){
            back = "orange"
        } else if (props.time === "Winter"){
            back = "blue"
        }
        return {background: back}
    }
    
    let price = pricey();
    function pricey(){
        if (props.price < 500){
            price = "$"
        } else if (props.price < 1000){
            price = "$$"
        } else {
            price = "$$$"
        }
        return price
    }


    return(
        <div className={"location"} style={back}>
            <p>Location: {props.place}</p>
            <p>Price: {props.price}</p>
            <p>Time to go: {props.time}</p>
            <h4 className={"dollar"}>{price}</h4>
        </div>
    )
}

export default Location
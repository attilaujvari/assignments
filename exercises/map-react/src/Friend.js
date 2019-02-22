import React from "react"
import Pet from "./Pet"

const Friend = (props) =>{

    const pets = props.pets.map((pet, i) => <Pet name={pet.name} breed={pet.breed} key={i}/>)

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return {color: color};
    }
    let color = getRandomColor();

    return (
        <div className={"friendItem"} style={color}>
            <p>Their name is: {props.name} </p>
            <p>Their age is: {props.age} </p>
            <p>Their pet(s):</p>
            <ul>{pets}</ul>
        </div>
    )
}

export default Friend


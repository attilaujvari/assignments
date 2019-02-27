import React from 'react'

const SuperHero = props => {

    const styleObj = {
        backgroundImage: `url(${props.imgUrl})`
    }

    return (
        <div onClick={() => props.sayCatchPhrase(props.catchPhrase)} style={styleObj} className="superHero-div">
            <h1>{props.name}</h1>
        </div>
    )
}

export default SuperHero



// div.addEventListener("click", () => {
//     props.sayCatchPhrase(props.catchPhrase)
// })
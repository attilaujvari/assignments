import React from "react"
import Friend from "./Friend.js"

const FriendList = (props) => {

    const friendsArr = props.friends.map((person, i) => <Friend name={person.name} age={person.age} key={i} pets={person.pets}/>)

    return(
        <div className={"itemContainer"}>
            {friendsArr}
        </div>
    )
}

export default FriendList
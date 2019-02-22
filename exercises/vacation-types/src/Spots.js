import React from "react"
import Location from "./Location.js"

function Spots (props) {

    const spotsArr = props.spots.map((spot, i) => <Location place={spot.place} price={spot.price} time={spot.timeToGo} key={i}/>)

    return (
        <div className={"spotContainer"}>
            {spotsArr}
        </div>
    )
}


export default Spots
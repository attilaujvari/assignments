import React from "react"

const Bounty = (props) => {
    const {firstName, lastName, isLiving, bountyAmount, imgUrl, type} = props;

    return(
        <div className={"bountyItem"}>
            <h3>{firstName} {lastName}</h3>
            <p>
                Are they alive? {isLiving}
                Type: {type}
            </p>
            <p>Bounty amount: {bountyAmount}</p>
            <img src={imgUrl} alt={"no alternative description set"} className={"bountyImage"}/>
        </div>
    )
}

export default Bounty
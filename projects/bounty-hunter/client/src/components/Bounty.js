import React from "react"


const Bounty = (props) => {
    const {firstName, lastName, isLiving, bountyAmount, imgUrl, type, deleteBounty, _id} = props;
    console.log(props)

    return(
        <div className={"bountyItem"}>
            <h3>{firstName} {lastName}</h3>
            <p>
                Are they alive? {isLiving ? "Yes" : "No"} <br/>
                Type: {type} <br/>
                Bounty amount: {bountyAmount}
            </p>
            <img src={imgUrl} alt={"no alternative description set"} className={"bountyImage"}/>
            <br/>
            <button className={"buttonDelete"} onClick= {()=> deleteBounty(_id)}>Delete</button>
            <button className={"buttonEdit"}>Edit</button>
        </div>
    )
}

export default Bounty
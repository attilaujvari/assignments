import React from "react"
import Bounty from "./Bounty";

const MappingBounties = props => {
    console.log(props)

    return(
        <div className={"bountyContainer"}>
            <h2>The following bounties have posted:</h2>
            <>
            {props.fetchedData.map(bounty =>
                <Bounty {...bounty} deleteBounty={props.deleteBounty} key={bounty._id}/>)}
            </>
        </div>
    )
};

export default MappingBounties
const express = require("express");
const bountyRouter = express.Router();
const uuid = require ("uuid/v4")

let bounties = [
    {
        firstName : "TestF",
        lastName : "TestL",
        isLiving : true,
        bountyAmount: 0,
        type : "Jedi",
        imgUrl: "https://www.thoughtco.com/thmb/sjQO1TD3gKWwPPkYzkGJC1Wixv8=/640x634/filters:no_upscale():max_bytes(150000):strip_icc()/star-wars-memes-hit-tat-tree-58b8c8975f9b58af5c8c6be6.jpg",
        _id: uuid()
    },
    {
        firstName : "First",
        lastName : "Last",
        isLiving : true,
        bountyAmount: 0,
        type : "Jedi",
        imgUrl: "https://img.buzzfeed.com/buzzfeed-static/static/2017-12/15/16/campaign_images/buzzfeed-prod-fastlane-01/20-memes-only-star-wars-fans-will-understand-2-20035-1513373661-7_dblbig.jpg",
        _id: uuid()
    }
]


bountyRouter.route("/")
    .get((req, res) => {
        res.send(bounties)
    })
    .post((req, res) => {
        // Add ID to the request body
        req.body._id = uuid()
        // Add it to database
        bounties.push(req.body)
        // sending back updated object
        res.send(req.body)
    })

bountyRouter.route("/:_id")
    .get((req, res) => {
        const ID = req.params._id
        const foundBounty = bounties.find(bounty => bounty._id === ID)
        res.send(foundBounty)
    })
    .delete((req, res) => {
        bounties = bounties.filter(bounty => bounty._id !== req.params._id)
        res.send(bounties)
    })
    .put((req, res) => {
        // use the ID to find object
        const foundBounty = bounties.find(bounty => bounty._id === req.params._id)
        // update object
        Object.assign(foundBounty, req.body)
        res.send(foundBounty)
    })

bountyRouter.get("*", (req, res) => {
    res.send("No doggie here. But for real, your GET request is messed up. Or it's me, dunno... I'm in bounties.js")
    console.log(req)
})

module.exports = bountyRouter
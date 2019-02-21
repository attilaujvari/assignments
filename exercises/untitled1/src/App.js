import React from "react"
import Box from "./ColoredBox.js"

function App() {

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return {background: color};
    }

    let colorsArr = []
    for (let i = 0; i < 10; i++){
        colorsArr.push(getRandomColor())
    }




    return(
        <div>
            <h1>Here are some boxes:</h1>
            <h2>Or at least one... lol</h2>
            <div className={"boxContainer"}>
            <Box background={colorsArr[0]} title={"First title"} subtitle={"1st sub"} info={"info numero uno"}/>
            <Box background={colorsArr[1]} title={"First title"} subtitle={"1st sub"} info={"info numero uno"}/>
            <Box background={colorsArr[2]} title={"First title"} subtitle={"1st sub"} info={"info numero uno"}/>
            <Box background={colorsArr[3]} title={"First title"} subtitle={"1st sub"} info={"info numero uno"}/>
            <Box background={colorsArr[4]} title={"First title"} subtitle={"1st sub"} info={"info numero uno"}/>
            <Box background={colorsArr[5]} title={"First title"} subtitle={"1st sub"} info={"info numero uno"}/>
            <Box background={colorsArr[6]} title={"First title"} subtitle={"1st sub"} info={"info numero uno"}/>
            <Box background={colorsArr[7]} title={"First title"} subtitle={"1st sub"} info={"info numero uno"}/>
            <Box background={colorsArr[8]} title={"First title"} subtitle={"1st sub"} info={"info numero uno"}/>
            <Box background={colorsArr[9]} title={"First title"} subtitle={"1st sub"} info={"info numero uno"}/>
            </div>
        </div>
    )
}

export default App
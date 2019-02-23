import React from "react"
import SuperHero from "./SuperHero";

class App extends React.Component{
    // constructor(){
    //     super()
    // }

    render() {
        return(
            <div className={"hero-container"}>
                <SuperHero />
            </div>
        )
    }
}
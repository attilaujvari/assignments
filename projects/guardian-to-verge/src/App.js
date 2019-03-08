import React from "react"
import {Switch, Route, withRouter} from "react-router-dom";
import Home from "./components/Home.js";
import Nav from "./components/Nav.js"
import Header from "./components/Header";

const App = () => {

    return(
        <div>
            <Header/>
            <Nav />
            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>
        </div>
    )
}

export default App
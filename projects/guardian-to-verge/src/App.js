import React from "react"
import {Switch, Route} from "react-router-dom";
import Home from "./components/Home.js";
import Nav from "./components/Nav.js"
import Header from "./components/Header";
import Feed from "./components/Feed";
import Footer from "./components/Footer";

const App = () => {

    return(
        <div>
            <Header/>
            <Nav />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/feed" component={Feed}/>
            </Switch>
            <Footer/>
        </div>
    )
}

export default App
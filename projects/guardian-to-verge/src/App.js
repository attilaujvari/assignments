import React, {Component} from "react"
import {Switch, Route, withRouter} from "react-router-dom";
import Home from "./components/Home.js";
import Nav from "./components/Nav.js"
import Header from "./components/Header";
import Feed from "./components/Feed";
import Footer from "./components/Footer";
import Topic from "./components/Topic"
import {PageFade} from "./transitions"

class App extends Component {
    constructor(){
        super();
        this.state = {
            navToggle: false
        }
    }

    toggler = () => this.setState(prevState => ({ navToggle: !prevState.navToggle }))

    render(){
        return(
            <div>
                <Header/>
                <Nav
                    navToggle={this.state.navToggle}
                    toggler={this.toggler}
                />
                <PageFade location={this.props.location}>
                    <Switch location={this.props.location}>
                        <Route exact path="/" component={Home}/>
                        <Route path="/feed" component={Feed}/>
                        <Route path="/topic" component={Topic}/>
                    </Switch>
                </PageFade>
                <Footer/>
            </div>
        )
    }
}

export default withRouter(App)
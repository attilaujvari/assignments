import React, {Component} from "react"
import {withData} from "../providers/NewsProvider";
import MappingNews from "../MappingNews";

class Home extends Component {
    componentDidMount() {
        this.props.getData("topstories/v2/world")
    }

    render() {
        return(
            <div>
                <h1>{this.props.errMsg}</h1>
                <div>
                    <MappingNews />
                </div>
            </div>
        )
    }

}

export default withData(Home)
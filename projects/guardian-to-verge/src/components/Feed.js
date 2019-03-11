import React, {Component} from "react"
import {withData} from "../providers/NewsProvider";
import MappingNews from "../MappingNews";

class Feed extends Component {
    componentDidMount() {
        this.props.getData("news/v3/content/all/all")
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

export default withData(Feed)
import React, {Component} from "react"
import {withData} from "../providers/NewsProvider";
import MappingNews from "../MappingNews";

class Topic extends Component {

    componentDidMount() {
        console.log(this.props)
        this.props.getData()
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

export default withData(Topic)
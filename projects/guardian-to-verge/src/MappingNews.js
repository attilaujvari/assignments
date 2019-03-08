import React, {Component} from "react";
import {withData} from "./providers/NewsProvider";
import NewsItem from "./NewsItem";

class MappingNews extends Component{

    render() {
        return (
            <div>
                {this.props.fetchedData.map(item =>
                    <NewsItem {...item} key={item.url}/>)}
            </div>
        );
    }
}

export default withData(MappingNews)
import React, {Component} from "react"
import axios from "axios";
const API = process.env.REACT_APP_NYT;

const NewsContext = React.createContext();

class NewsProvider extends Component{
    constructor () {
        super();
        this.state = {
            fetchedData: [],
            errMsg: ""
        }
    }

    getData = (link) => {
        axios.get(`https://api.nytimes.com/svc/${link}.json?api-key=${API}`)
            .then(res => this.setState({fetchedData: res.data.results}))
            .catch(err => console.log(err))
    }

    render() {
        return(
            <NewsContext.Provider
                value={{...this.state,
            fetchedData: this.state.fetchedData,
                getData : this.getData}}>
                {this.props.children}
            </NewsContext.Provider>
        )
    }
}

export const withData = C => props => (
    <NewsContext.Consumer>
        {value => <C {...props} {...value} />}
    </NewsContext.Consumer>
)

export default NewsProvider
import React, {Component} from "react"
import axios from "axios"
import Header from "./Header";

class App extends Component {
    constructor(){
        super()
        this.state = {
            hitListArr: [],
        }
    }

    componentDidMount() {
        axios.get("http://s3.amazonaws.com/v-school/data/hitlist.json").then(response => {

            this.setState({
                hitlistArr : response.data
            }, () => console.log(this.state.hitlistArr))

        }).catch(error => console.log(error))
    }

    // myMapFunc = () => {
    //     let myArray = this.state.hitlistArr
    //
    //     console.log(myArray)
    //     console.log(this.testMap)
    //
    //     this.testMap = myArray.map(item => {
    //         return (
    //             <div>{item.name}</div>
    //         )
    //     } )
    //     console.log(this.testMap)
    // }

    render() {
        console.log(this.state.hitlistArr)
        let mappedItems = this.state.hitlistArr.map(item => console.log(item))
        // const mappedHitList = this.state.hitListArr.map(item => ))

        // let testArr = this.state.hitlistArr
        // console.log(testArr)
        // // console.log(mappedHitList)
        // const mappedHitList = this.state.hitlistArr.map(item => console.log(item))

        return(

            <div>
                {/*<Header/>*/}
                {mappedItems}

            </div>
        )
    }
}

export default App
import React from "react"
import Form from "./Form.js"

class App extends React.Component {
    constructor(){
        super()
        this.state ={
            fName : "",
            lName : "",
            email : "",
            placeOfB : "",
            phone : "",
            favFood : "",
            about : "",
            badgeCollection : []
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const badge = {
            fName : this.state.fName,
            lName : this.state.lName,
            email : this.state.email,
            placeOfB : this.state.placeOfB,
            phone : this.state.phone,
            favFood : this.state.favFood,
            about : this.state.about
        }

        this.setState(prevState => {
            return {
                badgeCollection : [...prevState.badgeCollection, badge],

                fName : "",
                lName : "",
                email : "",
                placeOfB : "",
                phone : "",
                favFood : "",
                about : ""
            }
        })
    }

    render() {
        return(
            <div id={"page"}>
                <Form handleSubmit={this.handleSubmit}
                      handleChange={this.handleChange}
                      fName={this.state.fName}
                      lName={this.state.lName}
                      email={this.state.email}
                      placeofB={this.state.placeOfB}
                      phone={this.state.phone}
                      favFood={this.state.favFood}
                      about={this.state.about}
                />

            <div id={"badges"}>
                {this.state.badgeCollection.map((badge, i) => {
                    let background = {};
                    i % 2 === 0
                    ? background = {background : "yellow"}
                    : background = {background : "red"};

                    return(
                        <div id={"retOuter"} key={i}>
                        <h3 id={"badgeHeader"} style={background}>Badge:</h3>
                        <div id={"returnBadge"}>
                            <div>Name: {badge.fName} {badge.lName}</div>
                            <div>Phone: {badge.phone}</div>
                            <div>Place of birth: {badge.placeOfB}</div>
                            <div>Favorite food: {badge.favFood}</div>
                            <div>Email: {badge.email}</div>
                            <div id={"badgeAbout"}>{badge.about}</div>
                        </div>
                        </div>
                    )
                })}
            </div>
            </div>
        )
    }
}

export default App
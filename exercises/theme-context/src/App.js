import React from "react"
import {themed} from "./context/ThemeProvider.js";

const App = props => {
    return(
        <div>
            <div className={`home-${props.theme}`}>
                <h1>This is a literally whatever.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur autem consectetur delectus dolores doloribus ea exercitationem fugit ipsa labore laboriosam magni mollitia neque odit quasi saepe sunt suscipit, tempora voluptatibus.</p>
                <button onClick={props.toggleTheme}>Change theme to {props.theme === "fun" ? "boring" : "fun"} ;)</button>
            </div>
        </div>
    )
}

export default themed(App)
import React, {Component} from "react"

const ThemeContext = React.createContext();

export default class ThemeProvider extends Component{
    constructor(){
        super();
        this.state = {
            theme: "fun"
        }
    }

    toggleTheme = () => {
        this.setState(prevState => ({
            theme: prevState.theme === "fun" ? "boring" : "fun"
        }))
    };

    render() {
        return(
            <ThemeContext.Provider
                value={{
                    theme: this.state.theme,
                    toggleTheme: this.toggleTheme
                }}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

export const themed = C => props => (
    <ThemeContext.Consumer>
        {value => <C {...value} {...props}/> }
    </ThemeContext.Consumer>
);
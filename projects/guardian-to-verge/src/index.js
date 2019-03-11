import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter} from "react-router-dom";
import App from "./App.js"
import "./style.css"
import NewsProvider from "./providers/NewsProvider.js";

ReactDOM.render(
        <BrowserRouter>
            <NewsProvider>
                <App/>
            </NewsProvider>
        </BrowserRouter>,
document.getElementById("root"))

// To-dos:
    // Fade in each article
    // Fix footer fade upon page load
    // Navbar toggle dropdown per topic
import React from "react"

const NewsItem = (props) => {

    const { multimedia, title, abstract } = props
    const background = {
        backgroundImage : ""
    }
    if (multimedia.length > 0) {
        background.backgroundImage = `url(${multimedia[4].url})`
    }

    return (
        <div>
            <h4>{title}</h4>
            <p>{abstract}</p>
            <div className="pictureArticle" style={multimedia[4] ? {...background, height: 300} : {display: "none"}}/>
        </div>
    );
}

export default NewsItem
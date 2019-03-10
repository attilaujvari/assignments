import React from "react"

const NewsItem = (props) => {

    const { multimedia, title, abstract } = props
    const background = {
        backgroundImage : ""
    }
    if (multimedia.length > 0) {
        background.backgroundImage = `url(${multimedia[4].url})`
        console.log(props)
    }

    return (
        <div className={"articleItem"}>
            <h4>{title}</h4>
            <p>{abstract}</p>
            {multimedia[4] ? <img className={"articlePicture"} src={`${multimedia[4].url}`} alt={`${multimedia[4].caption}`} />: null}
            <div className={"byline"}>{props.byline}</div>
        </div>
    );
}

export default NewsItem
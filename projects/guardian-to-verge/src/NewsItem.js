import React from "react"

const NewsItem = (props) => {

    const { multimedia, title, abstract, url, byline } = props;
    // console.log(props)

    return (
        <a href={`${url}`} target="_blank" rel="noopener noreferrer" className={"articleItem"}>
        <div>
            <h4>{title}</h4>
            <p>{abstract}</p>

            {multimedia[4] ? <img className={"articlePicture"} src={`${multimedia[4].url}`} alt={`${multimedia[4].caption}`} />:
                multimedia[3] ? <img className={"articlePicture"} src={`${multimedia[3].url}`} alt={`${multimedia[3].caption}`} />: null}

            <div className={"byline"}>{byline}</div>
        </div>
        </a>
    );
}

export default NewsItem
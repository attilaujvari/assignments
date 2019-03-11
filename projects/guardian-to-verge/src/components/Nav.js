import React from 'react'
import { Link } from 'react-router-dom'

const Nav = props => {
    console.log(props)

    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/feed">Feed</Link>
            <div onClick={props.toggler}>
                Topic
                <div className={`navDrop navDrop-${props.navToggle ? "open" : "closed"}`}>
                    <ul>
                        <div>Arts</div>
                        <div>Automobiles</div>
                        <div>Books</div>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Nav
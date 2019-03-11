import { TransitionGroup, CSSTransition } from 'react-transition-group'
import React from 'react'


export const PageFade = props => {
    return (
        <TransitionGroup component={null}>
            <CSSTransition
                in={true}
                appear={true}
                classNames="page-fade"
                timeout={1000}
                key={props.location.key}
                >
                { props.children }
            </CSSTransition>
        </TransitionGroup>
    )
}
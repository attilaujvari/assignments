import React from 'react'

const InputForm = props => {
    const { handleChange, handleSubmit, inputs: { title, imgUrl, description }} = props
    return (
        <form onSubmit={handleSubmit}>
            <h1>{props.formTitle}</h1>
            <input
                type="text"
                onChange={handleChange}
                value={title}
                name="title"
                placeholder="Title"/>
            <input
                type="imgUrl"
                onChange={handleChange}
                value={imgUrl}
                name="imgUrl"
                placeholder="Image link/URL"/>
            <input
                type="text"
                onChange={handleChange}
                value={description}
                name="description"
                placeholder="Description"/>
            <button>Send it in!</button>
            <span onClick={props.toggler}>Nevermind, I just want to look at other uglies</span>
        </form>
    )
}

export default InputForm
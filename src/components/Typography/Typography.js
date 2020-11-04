import React from 'react'

import './Typography.css'

// Montserrat semi-bold
const Typography1 = ({text}) => {
    return (
    <div >
        <h1 className = "semibold-title"> {text} </h1>
    </div>
    )
}

const Typography2 = ({text}) => {
    return (
    <div >
        <h1 className = "medium-title"> {text} </h1>
    </div>
    )
}

const Typography3 = ({text}) => {
    return (
    <div >
        <h1 className = "regular-italic-title"> {text} </h1>
    </div>
    )
}

const Typography4 = ({text}) => {
    return (
    <div  className = "bold-titles">
        <h1> {text} </h1>
    </div>
    )
}

const Typography5 = ({text}) => {
    return (
    <div  className = "semiBold-titles">
        <h1> {text} </h1>
    </div>
    )
}


export { 
    Typography1, 
    Typography2, 
    Typography3, 
    Typography4,
    Typography5
}
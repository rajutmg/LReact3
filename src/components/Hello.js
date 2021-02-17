import React from 'react'

// arrow function  (Functional Component) 
const Hello = props => {
    const { name, nickname } = props
    console.log(props)
    return (
        <div className="friend">
            <h1>Hello My Goregious Friends {name} a.k.a {nickname}</h1>
            {props.children}
        </div>
    )
}
export default Hello
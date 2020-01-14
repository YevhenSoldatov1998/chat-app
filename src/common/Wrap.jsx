import React from 'react'
const Wrap = (props) => {
    return (
        <div style={props.style}>
            {props.children}
        </div>
    )
}
export default Wrap
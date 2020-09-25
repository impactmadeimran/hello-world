import React from 'react'

function childcomponent(props) {
    return (
        <div>
            <button onClick = {props.greethandler} >Greet Parent</button>
        </div>
    )
}

export default childcomponent

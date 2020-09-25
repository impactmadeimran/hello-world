import React, { Component } from 'react'

 class RegComp extends Component {
    render() {
        console.log('Regular Componet');
        const name = this.props.name
        return(
            <div>
                Regular Component {name}
            </div>
        )
    }
}

export default RegComp

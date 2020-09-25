import React from 'react'

class Greet extends React.Component{
    render(){
    return <h1>Hello {this.props.name}</h1>
    }
}

export default Greet;
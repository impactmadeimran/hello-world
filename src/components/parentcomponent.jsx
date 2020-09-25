import React, { Component } from 'react'
import Childcomponent from './childcomponent'

 class parentcomponent extends Component {
constructor(props) {
    super(props)

    this.state = {
         message : 'hi there!'
    }
    this.greetfunction = this.greetfunction.bind(this)
}
greetfunction(){
    alert(`${this.state.message}`)
}

    render() {
        return (
            <div>
                <Childcomponent greethandler = {this.greetfunction}/>
            </div>
        )
    }
}

export default parentcomponent

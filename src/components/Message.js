import React from 'react'

class Message extends React.Component {
    constructor() {
        super()
        this.state = {
            Message: 'Welcome visitor'
        }
    }



    /*changeMessage() {
        this.setState({
            Message: 'Thanks for subscribing'
        })
    }*/

    changeMessage = () =>{
        this.setState({
            Message:'Thanks For Subscribing'
        })
    }

    
    render() {
        return (
            <div>
                <h1>{this.state.Message}</h1>
                {//<button onClick={() => this.changeMessage()}>Subscribe</button>
    }
                <button onClick={this.changeMessage}>Subscribe</button>
            </div>
        )
    }
}

export default Message;
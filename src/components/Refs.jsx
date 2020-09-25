import React, { Component } from 'react'

class Refs extends Component {
    constructor(props) {
        super(props)
    
       this.refinput = React.createRef()
    }
    componentDidMount(){
       this.refinput.current.focus()
        console.log(this.refinput);
    }
    
    clickhandler = () =>{
        alert(this.refinput.current.value)
    }



    render() {
        return (
            <div>
              <input type = 'text' ref = {this.refinput}></input>
              <button type = 'submit' onClick = {this.clickhandler}>Click Here</button>  
            </div>
        )
    }
}

export default Refs


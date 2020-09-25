import React, { Component } from 'react'

 class usergreeting extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              isLoggedIn : true
         }
     }
     
    render() {
        if(this.state.isLoggedIn){
         return   <div><strong>Hello Imran</strong></div>
        }
        else{
          return  <div>Hello Guest</div>
        }



       // return this.state.isLoggedIn ?
       // (<div>Hello Imran</div>) :
       // (<div>Hello Guest</div>)



      {/* let message
       if(this.state.isLoggedIn){
           message = <div>Hello Imran</div>
       }
       else {
           message = <div>Hello Guest</div>
       }
    return message*/}
    }
}

export default usergreeting

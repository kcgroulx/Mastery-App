// rce
import React, { Component } from 'react'

class UserGreeting extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            isLoggedIn: true
        }
    }
    
    render() {

        return this.state.isLoggedIn && <div>Welcome Kyle</div>

        // return this.state.isLoggedIn ? <div>Welcome Kyle</div> : <div>Welcome Guest</div>

        // let message
        // if (this.state.isLoggedIn){
        //     message = <div>Welcome Kyle</div>
        // }
        // else{
        //     message = <div>Welcome Guest</div>
        // }
        // return message


        // if (this.state.isLoggedIn){
        //     return <div>Welcome Kyle!</div>
        // }
        // else{
        //     return <div>Welcome Guest</div>
        // }

        // return (
        //     <div>
        //         <div>Welcome Kyle!</div>
        //         <div>Welcome Guest</div>
        //     </div>
        //     )
        }
    }
    
    export default UserGreeting
    
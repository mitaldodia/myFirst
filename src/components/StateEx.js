import React, { Component } from 'react';
import bellA from './inc/bellA.png';
import bellB from './inc/bellB.png';


export class StateEx extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "subscribe to simplilearn",
         sub : 'subscribe',
         imageURL : bellA
      };
    }
    Buttonchange=()=>{
        this.setState({
            message:"hit the bell icon to never miss an updates....",
            sub: "subscribed"
        });
    };
    imageChange=()=>{
        this.setState({
            imageURL: bellB,
            message :'thank you happy learning!!!!!.........'
        })
    }
  render() {
    return (
            <div className='new-state container'>
                <h3>{this.state.message}</h3>
                <button onClick={this.Buttonchange}>{this.state.sub}</button>
                <p>
                    <img style={{width: "50px", height:"50px"}} src={this.state.imageURL} onClick={this.imageChange} alt=""/> 
                </p>
            </div>
      
    )
  }
}

export default StateEx

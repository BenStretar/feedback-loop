import React, { Component } from 'react';
import { connect } from 'react-redux'
//import { withRouter } from 'react-router-dom'

class Feeling extends Component{

    state={
        support: ''
    }

    //Input
    handleInput=(event)=>{
        console.log('In handleInput with', event.target.value)
        this.setState({
            support: event.target.value
        })
    }

    //Button
    handleNext=()=>{
        console.log('clickedSupport')
        this.props.history.push('/comments'); // Move user to Comments page
        this.props.dispatch({type: 'SUPPORT', payload: this.state.support})
    }

    render(){
        return(
            <>
                <h2>How well are you being supported? </h2>
                <input type="number" placeholder="Enter number 1-5" max="5" onChange={this.handleInput}/>
                <button onClick={this.handleNext}>Next</button>
            </>
        )
    }
}

export default connect()(Feeling);
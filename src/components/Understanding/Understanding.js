import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class understanding extends Component{

    state = {
        understanding: ''
    }

    //Input
    handleInput=(event)=>{
        console.log('In handleInput with', event.target.value)
        this.setState({
            understanding: event.target.value
        })
    }

    // Button
    handleNext=()=>{
        console.log('clickedUnderstanding')
        this.props.history.push('/support');
        this.props.dispatch({type: 'UNDERSTANDING', payload: this.state.understanding})
    }

    render(){
        return(
            <>
                <h2>How well are you understanding the content? </h2>
                <input type="number" placeholder="Enter number 1-5" max="5" onChange={this.handleInput}/>
                <button onClick={this.handleNext}>Next</button>
            </>
        )
    }
}

export default withRouter(connect()(understanding));
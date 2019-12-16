import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Feeling extends Component{

    state={
        comment: ''
    }

    //Input
    handleInput=(event)=>{
        console.log('In handleInput with', event.target.value)
        this.setState({
            comment: event.target.value
        })
    }

    //Button
    handleNext=()=>{
        console.log('clickedComments')
        this.props.history.push('/review');
        this.props.dispatch({type: 'COMMENT', payload: this.state.comment})
    }

    render(){
        return(
            <>
                <h2>Any comments you want to leave? </h2>
                <input type="text" placeholder="" onChange={this.handleInput}/>
                <button onClick={this.handleNext}>Next</button>
            </>
        )
    }
}

export default withRouter(connect()(Feeling));
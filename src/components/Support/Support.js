import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Feeling extends Component{

    state={
        aSupport: ''
    }

    handleInput=(event)=>{
        this.setState({
            aSupport: event.target.value
        })
    }

    handleNext=()=>{
        console.log('clickedSupport')
        this.props.history.push('/comments');
        this.props.dispatch({type: 'SUPPORT', payload: this.state.aSupport})
    }

    render(){
        return(
            <>
                <h2>How well are you being supported? </h2>
                <input type="number" placeholder="" max="10" onChange={this.handleInput}/>
                <button onClick={this.handleNext}>Next</button>
            </>
        )
    }
}

export default withRouter(connect()(Feeling));
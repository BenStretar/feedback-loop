import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Feeling extends Component{

    state={
        aFeeling: ''
    }

    handleInput=(event)=>{
        this.setState({
            aFeeling: event.target.value
        })        
    }

    //button
    handleNext=()=>{
        console.log('clickedFeelings')
        this.props.history.push('/understanding');
        this.props.dispatch({type: 'FEELING', payload: this.state.aFeeling})
    }

    render(){
        return(
            <>
                <h2>How are you feeling?</h2>
                <input type="number" placeholder="" max="10" onChange={this.handleInput}/>
                <button onClick={this.handleNext}>Next</button>
            </>
        )
    }
}

export default withRouter(connect()(Feeling));
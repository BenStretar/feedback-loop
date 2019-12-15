import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Feeling extends Component{

    state={
        aComment: ''
    }

    handleImport=(event)=>{
        this.setState({
            aComment: event.target.value
        })
    }

    handleNext=()=>{
        console.log('clickedComments')
        this.props.history.push('/review');
        this.props.dispatch({type: 'COMMENT', payload: this.state.aComment})
    }

    render(){
        return(
            <>
                <h2>Any comments you want to leave? </h2>
                <input type="text" placeholder="" onChange={this.handleImport}/>
                <button onClick={this.handleNext}>Next</button>
            </>
        )
    }
}

export default withRouter(connect()(Feeling));
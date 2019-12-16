import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Success extends Component{
    goToFeel = () => (
        this.props.history.push('/') // Move user back to the start
    )

    render(){
        return(
            <>
            <p>Success!</p>
            <p>Thank you for adding feedback!</p>
            <button onClick={this.goToFeel}>Submit new feedback</button>
            </>
        )
    }
}

export default withRouter(connect()(Success));
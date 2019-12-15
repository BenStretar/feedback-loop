import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Review extends Component{

    render(){
        return(
            <>
                <h2>Review Your Feedback</h2>
                <p>Feeling: </p>
                <p>Understanding: </p>
                <p>Support: </p>
                <p>Comments: </p>
                <button>Submit</button>
            </>
        )
    }
}

export default withRouter(connect()(Review));
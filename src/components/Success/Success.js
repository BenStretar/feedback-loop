import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Success extends Component{
    render(){
        return(
            <>
            <p>Hello There</p>
            </>
        )
    }
}

export default withRouter(connect()(Success));
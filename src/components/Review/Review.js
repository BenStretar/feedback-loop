import React, { Component } from 'react';
import { connect } from 'react-redux'
//import { withRouter } from 'react-router-dom'
import Axios from 'axios';

class Review extends Component{

    //Takes user to next page
    postReview = () => {
        let feedback = {
            feeling: this.props.reduxState.feelingReducer.feeling,
            understanding: this.props.reduxState.feelingReducer.understanding,
            support: this.props.reduxState.feelingReducer.support,
            comments: this.props.reduxState.feelingReducer.comment
        }

        Axios.post('/feedback', feedback) // realizing to late that I need to create server stuff
            .then(response => {
                console.log(response)
            this.props.history.push('/success'); 
        }).catch(error => {
            console.log('Error adding feedback', error)
            alert('Error adding feedback. See the console for details')
        })
    }

    render(){
        console.log(this.props.reduxState)
        return(
            <>
            {JSON.stringify(this.props.reduxState)}
                <h2>Review Your Feedback</h2>
                <p>Feeling: {this.props.reduxState.feelingReducer}</p>
                <p>Understanding: {this.props.reduxState.understandingReducer}</p>
                <p>Support: {this.props.reduxState.supportReducer}</p>
                <p>Comments: {this.props.reduxState.commentsReducer}</p>
                <button onClick={this.postReview}>Submit</button> {/* takes user to Success */}
            </>
        )
    }
}

const putPropsOnRedux = (reduxState) => ({
    reduxState
})

export default connect(putPropsOnRedux)(Review);
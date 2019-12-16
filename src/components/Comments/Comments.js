import React, { Component } from 'react';
import { connect } from 'react-redux'
//import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
  });

class Comments extends Component{

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
        const {classes} = this.props;
        return(
            <>
                <h2>Any comments you want to leave? </h2>
                <input type="text" placeholder="Enter a comment" onChange={this.handleInput}/>
                <Button color="primary" className={classes.button} onClick={this.handleNext}>Next</Button>
            </>
        )
    }
}

export default connect()(withStyles(styles)(Comments));
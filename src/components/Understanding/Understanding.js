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

class Understanding extends Component{

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
        const {classes} = this.props;
        return(
            <>
                <h2>How well are you understanding the content? </h2>
                <input type="number" placeholder="Enter number 1-5" max="5" onChange={this.handleInput}/>
                <Button color="primary" className={classes.button} onClick={this.handleNext}>Next</Button>
            </>
        )
    }
}

export default connect()(withStyles(styles)(Understanding));
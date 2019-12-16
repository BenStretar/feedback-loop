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

class Feeling extends Component{

    state={
        feeling: ''
    }

    handleInput=(event)=>{
        console.log('In handleInput with', event.target.value)
        this.setState({
            feeling: event.target.value
        })        
    }

    //button
    handleNext=()=>{
        console.log('clickedFeelings')
        this.props.history.push('/understanding');
        this.props.dispatch({type: 'FEELING', payload: this.state.feeling})
    }

    render(){
        const {classes} = this.props;
        return(
            <>
                <h2>How are you feeling?</h2>
                <input type="number" placeholder="Enter number 1-5" max="5" 
                value={this.state.feeling}onChange={this.handleInput}/>
                <Button color="primary" className={classes.button} onClick={this.handleNext}>Next</Button>
            </>
        )
    }
}

export default connect()(withStyles(styles)(Feeling));
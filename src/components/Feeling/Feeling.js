import React, { Component } from 'react';

class Feeling extends Component{

    handleNext=()=>{
        console.log('clickedFeelings')
        this.props.history.push('/understanding');
    }

    render(){
        return(
            <>
                <h2>How are you feeling?</h2>
                <input type="number" placeholder="" max="10"/>
                <button onClick={this.handleNext}>Next</button>
            </>
        )
    }
}

export default Feeling;
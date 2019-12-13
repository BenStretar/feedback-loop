import React, { Component } from 'react';

class understanding extends Component{

    handleNext=()=>{
        console.log('clickedUnderstanding')
    }

    render(){
        return(
            <>
                <h2>How well are you understanding the content? </h2>
                <input type="number" placeholder="" max="10"/>
                <button onClick={this.handleNext}>Next</button>
            </>
        )
    }
}

export default understanding;
import React, { Component } from 'react';

class Feeling extends Component{

    handleNext=()=>{
        console.log('clickedComments')
    }

    render(){
        return(
            <>
                <h2>Any comments you want to leave? </h2>
                <input type="text" placeholder="" />
                <button onClick={this.handleNext}>Next</button>
            </>
        )
    }
}

export default Feeling;
import React, { Component } from 'react';

class Feeling extends Component{

    handleNext=()=>{
        console.log('clickedSupport')
        this.props.history.push('/comments');
    }

    render(){
        return(
            <>
                <h2>How well are you being supported? </h2>
                <input type="number" placeholder="" max="10"/>
                <button onClick={this.handleNext}>Next</button>
            </>
        )
    }
}

export default Feeling;
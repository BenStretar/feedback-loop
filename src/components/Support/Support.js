import React, { Component } from 'react';

class Feeling extends Component{

    handleNext=()=>{
        console.log('clicked')
    }

    render(){
        return(
            <>
                <label>How well are you being supported? </label><br/>
                <input type="number" placeholder="" />

                <br />
                <button onClick={this.handleNext}>Next</button>
            </>
        )
    }
}

export default Feeling;
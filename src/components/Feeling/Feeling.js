import React, { Component } from 'react';

class Feeling extends Component{

    handleNext=()=>{
        console.log('clicked')
    }

    render(){
        return(
            <>
                <label>How are you feeling? </label><br />
                <input type="number" placeholder="" />

                <br />
                <button onClick={this.handleNext}>Next</button>
            </>
        )
    }
}

export default Feeling;
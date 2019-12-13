import React, { Component } from 'react';

class Feeling extends Component{

    handleNext=()=>{
        console.log('clicked')
    }

    render(){
        return(
            <>
                <label>Any comments you want to leave? </label><br/>
                <input type="text" placeholder="" />

                <br />
                <button onClick={this.handleNext}>Next</button>
            </>
        )
    }
}

export default Feeling;
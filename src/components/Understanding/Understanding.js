import React, { Component } from 'react';

class understanding extends Component{
    render(){
        return(
            <>
                <label>How well are you understanding the content? </label><br/>
                <input type="number" placeholder="" />

                <br />
                <button onClick={this.handleNext}>Next</button>
            </>
        )
    }
}

export default understanding;
import React, { Component } from 'react';

class FeelingForm extends Component{
    render(){
        return(
            <form>
                <label>How are you feeling? </label><br />
                <input type="number" placeholder="" />

                <br/>

                <label>How well are you understanding the content? </label><br/>
                <input type="number" placeholder="" />

                <br/>
                
                <label>How well are you being supported? </label><br/>
                <input type="number" placeholder="" />

                <br/>
                
                <label>Any comments you want to leave? </label><br/>
                <input type="text" placeholder="" />
            </form>
        )
    }
}

export default FeelingForm;
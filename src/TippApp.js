import React, { Component } from 'react';
import NumbersContainer from './NumbersContainer';
import RowContainer from './RowContainer';

class TippApp extends Component{
    constructor(){
        super();
        this.state = {
            clickedNumbers: [3,15,32]
        }
    }
    render(){
        return(
            <div className="col-sm-12">
                <div className="col-sm-5 jumbotron">
                    <NumbersContainer />
                </div>
                <div className="col-sm-7">
                    <RowContainer selectRow={this.state.clickedNumbers} />
                </div>
            </div>
        )
    }
}

export default TippApp;

import React, { Component } from 'react';
import RowListing from './RowListing';

class RowContainer extends Component{
    render(){
        return(
            <div className="jumbotron col-sm-12">
                <RowListing selectRow={this.props.selectRow} />
            </div>

        )
    }
}

export default RowContainer;
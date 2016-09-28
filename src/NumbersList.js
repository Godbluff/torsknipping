import React, {Component} from 'react';
import NumberInstance from './NumberInstance';

class NumbersList extends Component {
    constructor() {
        super();
        this.state = {
            clickedNumbers: []
        };
    }

    // Called when clicking on a number.
    // Checks number for uniqueness in the array, then adds, if array is not full (max 7).
    showNumber(number){
        //simplification of syntax
        var clickedNumbers = this.state.clickedNumbers;
        //
        if (clickedNumbers.indexOf(number) === -1 ){
            if (clickedNumbers.length === 7) {
                console.log('All 7 numbers selected. Not adding any more.');
            }
            else {
                clickedNumbers.push(number);
                clickedNumbers.sort((a,b) => {return a-b});
            }
        }
        else{
            console.log(number+' is already selected.')
        }
        console.log('You have selected: ' + clickedNumbers);
    }

    render(){
        // numbers array for creating all numbers elements.
        var numbers = [];

        // Generation of each clickable number
        for(var i = 1; i<=34; i++){
            var className = "col-sm-2 text-center numberslist number-" + i;
            numbers.push(
                <NumberInstance
                    number={i}
                    key={i}
                    className={className}
                    clickedNumbers={this.state.clickedNumbers}
                    showNumber={this.showNumber.bind(this,i)}
                />
            );
        }
        // DOM output
        return(
            <div>
                {numbers}
            </div>
        );
    }
}
NumbersList.PropTypes = {
    number: React.PropTypes.number.isRequired,
    key: React.PropTypes.number.isRequired,
    className: React.PropTypes.string.isRequired,
    clickedNumbers: React.PropTypes.array.isRequired,
    showNumber: React.PropTypes.func.isRequired,
};

export default NumbersList;
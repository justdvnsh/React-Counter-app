import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {connect} from 'react-redux';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 15" clicked={this.props.onSubCounter}  />
                <hr />
                <button onClick={this.props.StoreResult}>Store Result</button>
                <ul>
                  {this.props.storedResults.map(result => {
                    return <li key={ result.id } onClick={() => this.props.DeleteResult(result.id)}>{result.val}</li>
                  })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.counter,
    storedResults: state.result                            // connect actually returns the function which retuns the HOC.
  }                                     // state is automatically passed on by the redux by which we can access it.
}

const mapDispatchToProps = (dispatch) => {      //These dispactha nd state args are provided by the react-redux;
  return {
    onIncCounter: () => dispatch({type: 'INC'}),   // We pass a method we want to dispatch.
    onDecCounter: () => dispatch({type: 'DEC'}),
    onAddCounter: () => dispatch({type: 'ADD', val: 10}),
    onSubCounter: () => dispatch({type: 'SUB', val: 15}),
    StoreResult: () => dispatch({type: 'STORE'}),
    DeleteResult: (elId) => dispatch({type: 'DELETE', id: elId})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

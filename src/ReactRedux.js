import React, { Component } from "react";
import { debounce } from 'lodash';
import { connect } from "react-redux";
import * as actionTypes from './store/actionTypes';
import Radium from 'radium';

class ReactRedux extends Component {
  lblClass = {
    backgroundColor: 'green',
    color: 'white',
    width: '300px',
    height: '30px',
    margin: '10px',
    padding: '10px',
    textAlign: 'center',
    ':hover': {
      backgroundColor: 'red',
      color: 'black'
    }
  }
  render() {
    return (
      <>
        <div style={this.lblClass}><label>{this.props.cntr}</label></div>
        
        <br />
        <button onClick={this.props.onIncrementBy1Counter}>
          Increment By 1
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={this.props.onIncrementBy10Counter}>
          Increment By 10
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={this.props.onDecrementBy1Counter}>
          Decrement By 1
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={this.props.onDecrementBy10Counter}>
          Decrement By 10
        </button>
        <hr />
        <button onClick={()=>this.props.onStoreResult(this.props.cntr)}>Track the Store</button>
        <ul>
          {this.props.storedResults.map(result => (
            <li key={result.id}>
              {result.value}
              <button onClick={() => this.props.onDeleteResult(result.id)}>
                Remove Item
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    cntr: state.ctr.counter,
    storedResults: state.res.result
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementBy1Counter: () => dispatch({ type: actionTypes.INCREMENTBY1 }),
    onIncrementBy10Counter: () => dispatch({ type: actionTypes.INCREMENTBY10 }),
    onDecrementBy1Counter: () => dispatch({ type: actionTypes.DECREMENTBY1 }),
    onDecrementBy10Counter: () => dispatch({ type: actionTypes.DECREMENTBY10 }),
    onStoreResult: debounce((result) => dispatch({ type: actionTypes.STORE_RESULT, result: result }), 500),
    onDeleteResult: debounce((id) => dispatch({ type: actionTypes.DELETE_RESULT, resultElId: id }), 500)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Radium(ReactRedux));
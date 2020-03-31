import React, { Component } from "react";
import { debounce } from 'lodash';
import { connect } from "react-redux";
import * as actionTypes from './store/actionTypes';
import Radium, { StyleRoot } from 'radium';

class ReactRedux extends Component {
  lblClass = {
    'lableClass':{
      backgroundColor: 'green',
      color: 'white',
      padding: '25px'
    },
    'mainDiv': {
      width: '500px',
      height: '200px',
      margin: '10px',
      padding: '10px',
      textAlign: 'center',
      clear: 'both'
    },
    'btnClass': {
      marginTop: '10px',
      clear: 'both', 
      display: 'flex',
      flexDirection: 'row'
    },
    ':hover': {
      backgroundColor: 'red',
      color: 'black'
    }
  }
  render() {
    return (
      <>
        <StyleRoot>
        <div style={this.lblClass.mainDiv}>
        
        <label style={this.lblClass.lableClass}>{this.props.cntr}</label>
        
        <br />
        <div style={this.lblClass.btnClass}>
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
        </div>
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
        </div>
        </StyleRoot>
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
const redux = require('redux');

const createStore = redux.createStore;

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    if(action.type === 'INC_COUNTER'){
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if(action.type === 'ADD_COUNTER'){
        return {
            ...state,
            counter: state.counter + action.value
        }
    }

    return state;
}

const store = createStore(reducer);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});



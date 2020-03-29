import * as actionTypes from './actionTypes';

const initalState = {
    counter: 0
}

const reducer = (state=initalState, action) => {
    switch(action.type){
        case actionTypes.INCREMENTBY1:
            return{
                ...state,
                counter: state.counter + 1
            }
        case actionTypes.INCREMENTBY10:
            return{
                ...state,
                counter: state.counter + 10
            }
        case actionTypes.DECREMENTBY1:
            return{
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.DECREMENTBY10:
            return{
                ...state,
                counter: state.counter - 10
            }
        default:
            return state;
    }
}

export default reducer;
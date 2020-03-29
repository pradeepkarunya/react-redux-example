import * as actionTypes from './actionTypes';

const initalState = {
    counter: 0,
    result: []
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
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                result: state.result.concat({id: new Date(), value: state.counter})
            }
        case actionTypes.DELETE_RESULT:
            let newArr = state.result.filter( res => res.id !== action.resultElId)
            return {
                ...state,
                result: newArr
            }
        default:
            return state;
    }
}

export default reducer;
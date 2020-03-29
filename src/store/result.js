import * as actionTypes from './actionTypes';

const initalState = {
    result: []
}

const reducer = (state=initalState, action) => {
    switch(action.type){
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                result: state.result.concat({id: new Date(), value: action.result})
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
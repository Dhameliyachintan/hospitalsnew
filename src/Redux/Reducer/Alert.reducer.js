
import * as ActionTypes from "../ActionTypes"

const initialState = {
    text: '',
    color: ''
}


export const alertreducer = (state = initialState, action) => {
    console.log(action.type, action.payload);
    switch (action.type) {
        case ActionTypes.SET_ALERT:
            return {
                ...state,
                text: action.payload.text,
                color: action.payload.color
            }
        case ActionTypes.RESET_ALERT:
            return {
                ...state,
                text: '',
                color: ''
            }
        default:
            return state

    }

}

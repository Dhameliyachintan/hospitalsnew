import * as ActionTypes from "../ActionTypes"

const initialState = {
    isLoading: false,
    user: null,
    error: ''
}

export const SignupReducer = (state = initialState, action, user) => {
    console.log(user);
    console.log(action.type, action.payload);
    switch (action.type) {
        case ActionTypes.EMAIL_VERIFY:
            return {
                ...state,
                isLoading: false,
                user: action.payload,
                error: ''
            }
        case ActionTypes.LOGGED_USER:
            return {
                ...state,
                isLoading: false,
                user: action.payload,
                error: ''
            }

        default:
            return state
    }
}
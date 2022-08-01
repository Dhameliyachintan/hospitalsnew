import * as ActionTypes from "./ActionTypes"

const initialState = {
    isLoading: false,
    user: null,
    error: ''
}

export const SignupReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.EMAIL_VERIFY:
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
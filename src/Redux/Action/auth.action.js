import *as ActionTypes from "../ActionTypes"

export const SignupAction = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.SIGNUP_USER, payload: data })
    console.log(data);
}

export const emailverify = (user) => (dispatch) => {
    dispatch({ type: ActionTypes.EMAIL_VERIFY, payload: user })
}

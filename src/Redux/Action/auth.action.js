import *as ActionTypes from "../ActionTypes"

export const SignupAction = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.SIGNUP_USER, payload: data })
    console.log(data);
}

export const LoginAction = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.LOGIN_USER, payload: data })
    console.log(data);
}

export const Loggeduser = (data) => (dispatch) => {
    dispatch({type : ActionTypes.LOGGED_USER, payload : data})
}

export const emailverify = (user) => (dispatch) => {
    dispatch({ type: ActionTypes.EMAIL_VERIFY, payload: user })
}

import *as ActionTypes from "../ActionTypes"

export const SignupUser = (data) => (dispatch) => {
    console.log(data);
    dispatch({type: ActionTypes.SIGNUP_USER,payload : data})
}

export const emailverify = (user) => (dispatch) => {
    dispatch({type: ActionTypes.EMAIL_VERIFY,payload : user})
}

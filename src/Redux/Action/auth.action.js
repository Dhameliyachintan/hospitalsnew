import *as ActionTypes from "../ActionTypes"

export const SignupAction = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.SIGNUP_USER, payload: data })
    console.log(data);
}

export const emailverify = (user) => (dispatch) => {
    dispatch({ type: ActionTypes.EMAIL_VERIFY, payload: user })
}

// LoginAction // Loggeduser

export const LoginAction = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.LOGIN_USER, payload: data })
    console.log(data);
}

export const Loggeduser = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.LOGGED_USER, payload: data })
}

// Loggeduser end


// LogoutUser/LoggedinUser

export const LogoutUser = () => (dispatch) => {
    dispatch({ type: ActionTypes.LOGOUT_USER })
}

export const LoggedinUser = () => (dispatch) => {
    dispatch({ type: ActionTypes.LOGGEDINOUT_USER })
}

// googleLoginUser


export const googleActionLogin = () => (dispatch) => {
    dispatch({ type: ActionTypes.GOOGLE_USER })
}



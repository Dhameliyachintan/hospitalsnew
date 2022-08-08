import *as ActionTypes from "../ActionTypes"

export const SetAlert = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.SET_ALERT, payload: data })
    console.log(data);
}

export const ResetAlert = () => (dispatch) => {
    dispatch({ type: ActionTypes.RESET_ALERT })
}
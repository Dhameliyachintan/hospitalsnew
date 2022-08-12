import * as ActionTypes from "../ActionTypes"
import { call, put, takeEvery, all } from 'redux-saga/effects'
import { LoginAPI, LogoutAPI, SignAPI } from "../../common/api/Auth.api";
import { SetAlert } from "../Action/Alert.action";
import { emailverify, LoggedinUser, Loggeduser } from "../Action/auth.action";
import { history } from "../../History";

function* Signup(action) {
    try {
        console.log(action.payload);
        const user = yield call(SignAPI, action.payload);    //request
        yield put(SetAlert({ text: user.payload, color: "Success" }))
        console.log(user);
        yield put(emailverify(user));
    } catch (e) {
        console.log(e);
        yield put({ type: "USER_FETCH_FAILED", message: e.message });
        yield put(SetAlert({ text: e.payload, color: "error" }))
    }
}

function* Login(action) {
    try {
        // console.log(action.payload);
        const user = yield call(LoginAPI, action.payload);    //request
        // console.log(user);
        history.push("/")
        yield put(SetAlert({ text: "Login successfull", color: "Success" }))
        yield put(Loggeduser(user))
        // yield put(emailverify(user));
    } catch (e) {
        // console.log(e);
        yield put({ type: "USER_FETCH_FAILED", message: e.message });
        yield put(SetAlert({ text: e.payload, color: "error" }))
    }
}

function* Logout(action) {
    try {
        // console.log(action.payload);
        const user = yield call(LogoutAPI, action.payload);    //request
        console.log(user);
        yield put(SetAlert({ text: user.payload, color: "Success" }))
        yield put(LoggedinUser());
        history.push("/")
    } catch (e) {
        console.log(e);
        yield put(SetAlert({ text: e.payload, color: "error" }))
    }
}




function* watchsaga() {
    yield takeEvery(ActionTypes.SIGNUP_USER, Signup);
    yield takeEvery(ActionTypes.LOGIN_USER, Login);
    yield takeEvery(ActionTypes.LOGOUT_USER, Logout);
}

export function* authsagacall() {
    yield all([
        watchsaga()
    ])
}




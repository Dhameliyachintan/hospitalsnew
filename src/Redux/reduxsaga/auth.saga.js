import * as ActionTypes from "../ActionTypes"
import { call, put, takeEvery, all } from 'redux-saga/effects'
import { forgetpasswordAPI, googleLoginAPI, LoginAPI, LogoutAPI, SignAPI } from "../../common/api/Auth.api";
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
        yield put(Loggeduser(user))
        yield put(SetAlert({ text: "Login successfull", color: "Success" }))
    } catch (e) {
        // console.log(e);
        // yield put({ type: "USER_FETCH_FAILED", message: e.message });
        yield put(SetAlert({ text: e.payload, color: "error" }))
    }
}

function* Logout(action) {
    try {
        // console.log(action.payload);
        const user = yield call(LogoutAPI, action.payload);    //request
        console.log(user);
        history.push("/Login")
        yield put(LoggedinUser());
        yield put(SetAlert({ text: user.payload, color: "Success" }))
    } catch (e) {
        console.log(e);
        yield put(SetAlert({ text: e.payload, color: "error" }))
    }
}


function* googleLogin(action) {
    try {
        // console.log(action.payload);
        const user = yield call(googleLoginAPI);    //request
        history.push("/")
        yield put(Loggeduser(user))
        yield put(SetAlert({ text: "Login successfull", color: "Success" }))
    } catch (e) {
        console.log(e);
        yield put(SetAlert({ text: e.payload, color: "error" }))
    }
}


function* forgetpassword(action) {
    try {
        // console.log(action.payload);
        const user = yield call(forgetpasswordAPI, action.payload);    //request
        console.log(user);
        yield put(SetAlert({ text: user.payload, color: "Success" }))
        history.push("/")
    } catch (e) {
        console.log(e);
        yield put(SetAlert({ text: e.payload, color: "error" }))
    }
}




function* watchsignuser() {
    yield takeEvery(ActionTypes.SIGNUP_USER, Signup);
}

function* watchLoginuser() {
    yield takeEvery(ActionTypes.LOGIN_USER, Login);
}

function* watchLogoutuser() {
    yield takeEvery(ActionTypes.LOGOUT_USER, Logout);
}

function* watchLogingoogle() {
    yield takeEvery(ActionTypes.GOOGLE_USER, googleLogin);
}

function* watchforgetpassword() {
    yield takeEvery(ActionTypes.FORGET_PASSWORD_USER, forgetpassword);
}



export function* authsagacall() {
    yield all([
        watchLogoutuser(),
        watchsignuser(),
        watchLoginuser(),
        watchLogingoogle(),
        watchforgetpassword()
    ])
}




import * as ActionTypes from "../ActionTypes"
import { call, put, takeEvery, all } from 'redux-saga/effects'
import { LoginAPI, SignAPI } from "../../common/api/Auth.api";
import { SetAlert } from "../Action/Alert.action";
import { emailverify, Loggeduser } from "../Action/auth.action";

function* Signup(action) {
    try {
        console.log(action.payload);
        const user = yield call(SignAPI, action.payload);
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
        const user = yield call(LoginAPI, action.payload);
        console.log(user);
        yield put(SetAlert({ text: "Login successfull", color: "Success" }))
        yield put(Loggeduser(user))
        // yield put(emailverify(user));
    } catch (e) {
        console.log(e);
        yield put({ type: "USER_FETCH_FAILED", message: e.message });
        yield put(SetAlert({ text: e.payload, color: "error" }))
    }
}




function* watchsignuser() {
    yield takeEvery(ActionTypes.SIGNUP_USER, Signup);
}

function* watchLoginuser() {
    yield takeEvery(ActionTypes.LOGIN_USER, Login);
}


export function* authsagacall() {
    yield all([
        watchLogoutuser(),
        watchsignuser()
    ])
}




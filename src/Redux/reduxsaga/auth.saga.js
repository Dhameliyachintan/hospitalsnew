import * as ActionTypes from "./ActionTypes"
import { call, put, takeEvery, all } from 'redux-saga/effects'
import { SignAPI } from "../../common/api/Auth.api";
import { emailverify } from "./Action/auth.action";

function* SignupUser(action) {
    try {
        console.log(action.payload);
        const user = yield call(SignAPI, action.payload);
        yield put(emailverify(user));
    } catch (e) {
        yield put({ type: "USER_FETCH_FAILED", message: e.message });
    }
}


function* watchsaga() {
    yield takeEvery(ActionTypes.SIGNUP_USER, SignupUser);
}

export function* authsagacall () {
    yield all ([
        watchsaga()
    ])
}




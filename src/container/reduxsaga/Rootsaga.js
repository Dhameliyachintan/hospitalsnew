import { all } from "redux-saga/effects"
import { authsagacall } from "./auth.saga"

export function* rootSaga() {
    yield all([
        authsagacall()
    ])
}
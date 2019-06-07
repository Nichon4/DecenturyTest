import { all } from 'redux-saga/effects'
import {
  watchCreateContact,
  watchDeleteContact,
  watchFetchAll,
  watchFetchContact,
  watchUpdateContact
} from "./sagas";

export default function* rootSaga() {
  yield all([
    watchFetchAll(),
    watchFetchContact(),
    watchCreateContact(),
    watchUpdateContact(),
    watchDeleteContact()
  ])
}
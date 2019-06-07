import {
  createContact,
  deleteContact,
  fetchAllContacts,
  fetchContact,
  updateContact
} from "../services/calls";
import {takeLatest, call, put} from "redux-saga/effects";
import {API_PENDING} from "../actions";


function* fetchAllContactSaga() {
  yield put({type: "API_PENDING"});

  try {
    const contacts = yield call(fetchAllContacts);
    yield put({type: "FETCH_ALL_CONTACTS_SUCCESS", payload: contacts});
  } catch (error) {
    yield put({type: "FETCH_ALL_CONTACTS_FAILURE", payload: error});
    console.log(error);
  }
}

export function* watchFetchAll() {
  yield takeLatest('FETCH_ALL_CONTACTS', fetchAllContactSaga)
}

function* fetchContactSaga(action) {
  yield put({type: "API_PENDING"});

  try {
    const contact = yield call(fetchContact, action.payload);
    yield put({type: "FETCH_CONTACT_SUCCESS", payload: contact})
  } catch (error) {
    yield put({type: "API_FAILURE", payload: error});
    console.log(error);
  }
}

export function* watchFetchContact() {
  yield takeLatest('FETCH_CONTACT', fetchContactSaga)
}

function* createContactSaga(action) {
  yield put({type: API_PENDING});

  try {
    const contact = yield call(createContact, action.payload);
    yield ({type: "CREATE_CONTACT_SUCCESS", payload: contact})
  } catch (error) {
    yield put({type: "API_FAILURE", payload: error});
    const {response} = error;
    console.log(response);
  }
}

export function* watchCreateContact() {
  yield takeLatest('CREATE_CONTACT', createContactSaga)
}

function* updateContactSaga(action) {
  yield put({type: API_PENDING});

  try {
    const contact = yield call(updateContact, action.payload);
    yield ({type: "UPDATE_CONTACT_SUCCESS", payload: contact})
  } catch (error) {
    yield put({type: "API_FAILURE", payload: error});
    const {response} = error;
    console.log(response);
  }
}

export function* watchUpdateContact() {
  yield takeLatest('UPDATE_CONTACT', updateContactSaga)
}

function* deleteContactSaga(action) {
  yield put({type: API_PENDING});

  try {
    yield call(deleteContact, action.payload);
    yield ({type: "DELETE_CONTACT_SUCCESS", payload: action.payload});
  } catch (error) {
    yield put({type: "API_FAILURE", payload: error});
    const {response} = error;
    console.log(response);
  }
}

export function* watchDeleteContact() {
  yield takeLatest('DELETE_CONTACT', deleteContactSaga)
}
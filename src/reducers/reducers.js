import {handleActions} from "redux-actions";
import {omit} from "../services/helpers";



const initialStore = {
  loading: false,
  status: "",
  contacts: {},
  editContact: null
};

export const reducer = handleActions(
  {
    API_PENDING: (state) => ({
      ...state,
      loading: true,
      status: "loading"
    }),
    FETCH_ALL_CONTACTS_SUCCESS: (state, action) => ({
      ...state,
      loading: false,
      status: "contacts -> ok",
      contacts: action.payload
    }),
    FETCH_ALL_CONTACTS_FAILURE: (state, action) => ({
      ...state,
      loading: false,
      status: action.payload,
      contacts: {}
    }),
    FETCH_CONTACT_SUCCESS: (state, action) => ({
      ...state,
      loading: false,
      status: "contact -> ok",
      contacts: Object.assign(state.contacts, {[action.payload.id]: action.payload})
    }),
    CREATE_CONTACT_SUCCESS: (state, action) => ({
      ...state,
      loading: false,
      status: "contact create -> ok",
      contacts: Object.assign(state.contacts, {[action.payload.id]: action.payload})
    }),
    UPDATE_CONTACT_SUCCESS: (state, action) => ({
      ...state,
      loading: false,
      status: "contact update -> ok",
      contacts: Object.assign(state.contacts, {[action.payload.id]: action.payload})
    }),
    DELETE_CONTACT_SUCCESS: (state, action) => ({
      ...state,
      loading: false,
      status: "contact delete -> ok",
      contacts: omit(state.contacts, action.payload.id)
    }),
    API_FAILURE: (state, action) => ({
      ...state,
      loading: false,
      status: action.payload
    }),
    EDIT_CONTACT: (state, action) => ({
      ...state,
      editContact: action.payload
    }),
    CANCEL_EDIT: (state) => ({
      ...state,
      editContact: null
    })
  },
  initialStore
);
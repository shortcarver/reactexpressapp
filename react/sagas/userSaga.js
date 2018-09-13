import Axios from 'axios';
import { takeEvery, put, select } from 'redux-saga/effects';

const USER_GET_BY_ID = 'USER_GET_BY_ID';
const USER_GET_BY_NAME = 'USER_GET_BY_NAME';
const USER_REMOVE = 'USER_REMOVE';
const USER_ADD = 'USER_ADD';
const USER_STORE = 'USER_STORE';

/*--------------------------*/
/*          Actions         */
/*--------------------------*/
const getUserById = id => ({ type: USER_GET_BY_ID, id });

const getUserByName = username => ({ type: USER_GET_BY_NAME, username });

const addUser = user => ({ type: USER_ADD, user });

const storeUser = user => ({ type: USER_STORE, user });

const actions = {
  getUserById,
  getUserByName,
  addUser,
  USER_GET_BY_ID,
  USER_GET_BY_NAME,
  USER_STORE,
};

/*--------------------------*/
/*          Reducer         */
/*--------------------------*/
const userReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_STORE:
      return {
        ...action.user,
      };
    case USER_REMOVE:
      return {};
    default:
      return state;
  }
};

const reducer = (state = {}, action) => ({
  ...state,
  user: userReducer(state.user, action),
});

/*-------------------------------*/
/*          Selectors            */
/*-------------------------------*/
const userSelector = state => state.user;

const selectors = {
  userSelector,
};

/*---------------------------------------*/
/*          Watchers and Workers         */
/*---------------------------------------*/
function* addUserWorker(action) {
  try {
    // CHeck users for existing email
    // add to the list
  } catch (e) {
    console.log(e);
    throw e;
  }
}

function* getUserByIdWorker(action) {
  // search the list by id
  // store result
}

function* getUserByNameWorker(action) {
  // search the list by email
  // store result
}

const watchers = [
  takeEvery(USER_ADD, addUserWorker),
  takeEvery(USER_GET_BY_ID, getUserByIdWorker),
  takeEvery(USER_GET_BY_NAME, getUserByNameWorker),
];

export default {
  actions, reducer, selectors, watchers,
};

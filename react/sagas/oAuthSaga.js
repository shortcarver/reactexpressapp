import Axios from 'axios';
import { takeEvery, put, select } from 'redux-saga/effects';

const OAUTH_GET = 'OAUTH_GET';
const OAUTH_REMOVE = 'OAUTH_REMOVE';
const OAUTH_STORE = 'OAUTH_STORE';

/*--------------------------*/
/*          Actions         */
/*--------------------------*/
const getOAuth = (username, password) => ({ type: OAUTH_GET, username, password });

const removeOAuth = () => ({ type: OAUTH_REMOVE });

const storeAuth = auth => ({ type: OAUTH_STORE, auth });

const actions = {
  getOAuth,
  removeOAuth,
  OAUTH_STORE,
  OAUTH_REMOVE,
  OAUTH_GET,
};

/*--------------------------*/
/*          Reducer         */
/*--------------------------*/
const reducer = (state = {}, action) => {
  switch (action.type) {
    case OAUTH_STORE:
      return {
        ...state,
        ...action.auth,
      };
    case OAUTH_REMOVE:
      return {};
    default:
      return {
        ...state,
      };
  }
};

/*-------------------------------*/
/*          Selectors            */
/*-------------------------------*/
const tokenSelector = state => state.auth;

const selectors = {
  tokenSelector,
};

/*---------------------------------------*/
/*          Watchers and Workers         */
/*---------------------------------------*/
function* authenticateWorker(action) {
  try {
    const auth = yield select(tokenSelector);
    // need to check the access toekn because auth can be an empty access
    if (auth.access_token) {
      console.log('has token');
      yield put(storeAuth(auth));
    } else {
      console.log('needs token');

      const result = yield Axios.post('http://localhost:3000/oauth/token', {
        grant_type: 'password',
        client_id: 'app',
        client_secret: 'password',
        username: action.username,
        password: action.password,
      });

      console.log(result);
      yield put(storeAuth(result.data));
    }
  } catch (e) {
    console.log(e);
    throw e;
  }
}

const watchers = [
  takeEvery(OAUTH_GET, authenticateWorker),
];

export default {
  actions, reducer, selectors, watchers,
};

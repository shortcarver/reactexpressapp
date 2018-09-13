import { all } from 'redux-saga/effects';
import oAuthSaga from './oAuthSaga';

const actions = {
  ...oAuthSaga.actions,
};

function* watchers() {
  yield all([
    ...oAuthSaga.watchers,
  ]);
}

const reducer = (state = {}, action) => [
  oAuthSaga.reducer,
].reduce((accum, current) => current(accum, action), state);

export default { watchers, actions, reducer };

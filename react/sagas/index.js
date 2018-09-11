import { all } from 'redux-saga/effects';
import oAuthSaga from './oAuthSaga';
// import { budgetSaga } from './budgetSaga'
// import { transSaga } from './transSaga'
// import { planSaga } from './planSaga'
// import { navSaga } from '../navigation/navSaga';

const actions = {
  ...oAuthSaga.actions,
  // ...budgetSaga.actions,
  // ...transSaga.actions,
  // ...planSaga.actions,
  // ...navSaga.actions,
};

function* watchers() {
  yield all([
    ...oAuthSaga.watchers,
    // ...budgetSaga.watchers,
    // ...transSaga.watchers,
    // ...planSaga.watchers,
    // ...navSaga.watchers,
  ]);
}


const reducer = (state = {}, action) => {
  return {
    ...state,
    auth: oAuthSaga.reducer(state.auth, action),
  };
};

export default { watchers, actions, reducer };

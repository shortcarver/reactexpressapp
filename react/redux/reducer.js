import sagas from '../sagas';

export default (state = {}, action) => [
  // appState.reducer,
  sagas.reducer,
].reduce((accum, current) => current(accum, action), state);

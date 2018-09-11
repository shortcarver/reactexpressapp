import { applyMiddleware, createStore } from 'redux';
// import { persistReducer, persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import sagas from '../sagas';
import reducer from './reducer';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, reducer);

const sagaMiddleware = createSagaMiddleware();

// let store = createStore(persistedReducer, applyMiddleware(thunk, sagaMiddleware));
const store = createStore(reducer, applyMiddleware(thunk, sagaMiddleware));
sagaMiddleware.run(sagas.watchers);
// let persistor = persistStore(store);

export default () => ({ store /* persistor, */ });

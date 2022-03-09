import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import Reducers from './Reducers';
import rootSaga from './Sagas';

const sagaMiddleware = createSagaMiddleware();

const initial_state = window.__REDUX_STATE__
  ? window.__REDUX_STATE__
  : undefined;

const configureStore = () => {
  const Store = createStore(
    Reducers,
    initial_state,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  );
  sagaMiddleware.run(rootSaga);
  return Store;
};

const store = configureStore();

export default store;

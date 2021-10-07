import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga';
import RootReducers from './Store/RootReducers'
import RootSaga from './Store/RootSaga';
const saga = createSagaMiddleware();

const store = createStore(RootReducers, composeWithDevTools(applyMiddleware(saga)));
saga.run(RootSaga);
export default store
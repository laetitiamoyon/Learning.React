import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './root.reducer';
import {initialApplicationState} from './root.state'
import rootSagas, { sagaMiddleware } from './root.saga';

const middlewares = composeWithDevTools({})(applyMiddleware(sagaMiddleware))
const store = createStore(rootReducer, initialApplicationState, middlewares)

sagaMiddleware.run(rootSagas)

export default store;
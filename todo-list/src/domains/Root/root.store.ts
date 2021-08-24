import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './root.reducer';
import {initialApplicationState} from './root.state'

const middlewares = composeWithDevTools({})()
const store = createStore(rootReducer, initialApplicationState, middlewares)

export default store;
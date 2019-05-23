import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

const loggerMiddleware = createLogger();

export const sagaMiddleware = createSagaMiddleware();
export const configureStore = () => (createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware, loggerMiddleware),
  ),
));

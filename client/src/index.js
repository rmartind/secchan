import React from 'react';
import { render } from 'react-dom';
import { configureStore, sagaMiddleware } from './configureStore';
import Root from './components/Root';
import initSagas from './initSagas';

const store = configureStore();
initSagas(sagaMiddleware);
render(<Root store={store} />, document.getElementById('root'));

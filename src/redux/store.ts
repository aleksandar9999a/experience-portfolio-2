import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { allReducers } from './reducers';
import middlewares from './../sagas/middlewares';

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(allReducers, applyMiddleware(sagaMiddleware));

middlewares.forEach(middleware => {
    sagaMiddleware.run(middleware);
})
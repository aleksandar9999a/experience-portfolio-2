import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { allReducers } from './reducers';
import middlewares from './../sagas/middlewares';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
    typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;

const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware),
);

export const store = createStore(allReducers, enhancer);

middlewares.forEach(middleware => {
    sagaMiddleware.run(middleware);
})
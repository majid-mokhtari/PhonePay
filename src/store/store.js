import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
    
const loggerMiddleware = createLogger({
  predicate: (getState, action) => __DEV__ 
});

export function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    ),
  ); 
    return createStore(
      rootReducer, initialState, enhancer
    )
  };
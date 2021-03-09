import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import reducer from './reducer';

const presistConfig: PersistConfig<any> = {
  version: 1,
  key: 'base',
  storage,
};

const persistedReducer = persistReducer(presistConfig, reducer);

const configureStore = (initialState = {}) => {
  let composeEnhancers = compose;

  if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
    composeEnhancers = composeWithDevTools({});
  }

  const middlewares = [];
  const enhancers = [];

  const sagaMiddleware = createSagaMiddleware();

  middlewares.push(sagaMiddleware);
  enhancers.push(applyMiddleware(...middlewares));

  const store = createStore(
    persistedReducer,
    initialState,
    composeEnhancers(...enhancers)
  );
  const persistor = persistStore(store);

  return { store, persistor };
};

export default configureStore;

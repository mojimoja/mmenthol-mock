import { configureStore } from "@reduxjs/toolkit";
import { createInjectorsEnhancer, forceReducerReload } from "redux-injectors";
import createSagaMiddleware from "redux-saga";
import { createAppReducer } from "./reducers";

export function configureAppStore() {
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  const { run: runSaga } = sagaMiddleware;
  // Create the store with saga middleware
  const middlewares = [sagaMiddleware];
  const enhancers = [
    createInjectorsEnhancer({
      createReducer: createAppReducer,
      runSaga,
    }),
  ];

  const store = configureStore({
    reducer: createAppReducer(),
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware({
        serializableCheck: false,
      }),
      ...middlewares,
    ],
    devTools: process.env.NODE_ENV !== "production" || process.env.PUBLIC_URL.length > 0,
    enhancers,
  });

  // Make reducers hot reloadable, see http://mxs.is/googmo
  //@ts-ignore
  if (module.hot) {
    //@ts-ignore
    module.hot.accept("./reducers", () => {
      forceReducerReload(store);
    });
  }
  return store;
}

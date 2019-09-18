import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";

import { Provider } from "react-redux";
import { reducer as topVideos } from "./features/hot-videos/reducer";
import { reducer as foundVideos } from "./features/find-videos/reducer";
import createSagaMiddleware from "redux-saga";
import { all, fork } from "redux-saga/effects";
import { getVideosStart } from "./features/hot-videos/saga";
import { getVideoByTitleStart } from "./features/find-videos/saga";

import { composeWithDevTools } from "redux-devtools-extension";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const rootReducer = combineReducers({
  topVideos,
  foundVideos
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

function* rootSaga() {
  yield all([fork(getVideosStart), yield fork(getVideoByTitleStart)]);
}
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

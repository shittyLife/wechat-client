import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { qrcodeReducer } from "./QRCode/reducers";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import qrcodeSaga from "./QRCode/sagas";
import { loginReducer } from "./loginResult/reducer";

const rootReducer = combineReducers({
  qrcode: qrcodeReducer,
  login: loginReducer
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, sagaMiddleware))
);

sagaMiddleware.run(qrcodeSaga);

export type AppState = ReturnType<typeof rootReducer>;

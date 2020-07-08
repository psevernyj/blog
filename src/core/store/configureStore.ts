import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "../reducers/rootReducer";
import rootSaga from "../sagas/rootSaga";

interface ConfigureStore {

}

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
    const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(rootSaga);
    return store;
};

export default configureStore;

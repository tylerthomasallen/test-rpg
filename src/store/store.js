import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import rootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => {
    return (
        createStore(
            rootReducer,
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );
};

export default configureStore;
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import currentUser from './reducers/currentUser';
import loginForm from './reducers/loginForm';
import signUpForm from './reducers/signUp';
import loveForm from './reducers/loveForm';
import goodAtForm from './reducers/goodAtForm';
import worldNeedForm from './reducers/worldNeedForm';
import worksheet from './reducers/worksheet'

const rootReducer = combineReducers({
    currentUser,
    loginForm,
    signUpForm,
    loveForm,
    goodAtForm,
    worldNeedForm,
    worksheet
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
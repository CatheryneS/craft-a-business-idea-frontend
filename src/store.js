import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import currentUser from './reducers/currentUser';
import loginForm from './reducers/loginForm';
import signUpForm from './reducers/signUp';
import loveForm from './reducers/loveForm';

const rootReducer = combineReducers({
    currentUser,
    loginForm,
    signUpForm,
    loveForm
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './Reducer';
import thunk from 'redux-thunk'
import data from '../Data';

const initialState = {};
const reducer = (state, action) => {
    return {products: data.products}
}
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store
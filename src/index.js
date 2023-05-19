import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {combineReducers, createStore} from 'redux';
import {Provider} from "react-redux";
import userReducer from "./common/redux/users/userReducer";
import clothesReducer from "./common/redux/clothes/clothesReducer";

// TODO to read deprecation note
export let store = createStore(combineReducers({users: userReducer,clothes:clothesReducer}));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

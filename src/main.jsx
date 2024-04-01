import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// Setting up bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
// Setting up redux
import {createStore, applyMiddleware, compose} from "redux";
// Setting up Provider react ni redux bilan boglash uchun ishlatilinadi
// react va reduxni bir-biriga ulash uchun kerak, store imizni manage qilish uchun kere boladi.
import {Provider} from "react-redux";
// Importing rootReducer, createStore faqat bitta reducer qabul qiladi.
import rootReducer from "./redux/reducer/index.js";
// Importing thunk
import {thunk} from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
)

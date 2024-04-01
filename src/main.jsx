import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// Setting up bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
// Setting up redux
import {createStore} from "redux";
// Setting up Provider react ni redux bilan boglash uchun ishlatilinadi
// react va reduxni bir-biriga ulash uchun kerak, store imizni manage qilish uchun kere boladi.
import {Provider} from "react-redux";
// Importing rootReducer, createStore faqat bitta reducer qabul qiladi.
import rootReducer from "./redux/reducer/index.js";

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
)

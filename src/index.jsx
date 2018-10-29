import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import Promise from 'redux-promise'
import Multi from 'redux-multi'
import { HashRouter } from 'react-router-dom'
import Reducers from './reducers/reducers'

import App from './app/app'

const store = applyMiddleware(Multi, Promise)(createStore)(Reducers)

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </HashRouter>
, document.getElementById('app'))
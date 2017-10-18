import { createStore, applyMiddleware, compose } from 'redux'
import {createLogger} from 'redux-logger'

import reducer from './rootReducer'

const composeEnhancers = (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const middleware = []

if( process.env.NODE_ENV !== 'production' ){
    middleware.push(createLogger())
}

const configureStore = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware( ...middleware)
    )
)

export default configureStore
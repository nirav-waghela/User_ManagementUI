import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {logger, injectClient} from './middlewares/index'

export const configureStore = (client, preloadedState, reducers) => {
    const store = compose(applyMiddleware(injectClient(client),thunk,logger))(createStore)
    return store(reducers,preloadedState)
}
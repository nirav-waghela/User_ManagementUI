import { loadingBarReducer } from 'react-redux-loading'
import { combineReducers } from 'redux'
import { Root } from './root'

export default combineReducers({
    Root,
    loadingBar : loadingBarReducer
})
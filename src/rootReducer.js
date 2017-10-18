import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    teams: () => ({}),
    matches: () => ({}),
    navigation: () => ({})
})

export default rootReducer
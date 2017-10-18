import { combineReducers } from 'redux'

import navigation from './reducers/navigation'

const rootReducer = combineReducers({
    teams: () => ({}),
    matches: () => ({}),
    navigation
})

export default rootReducer
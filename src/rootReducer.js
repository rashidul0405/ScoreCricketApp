import { combineReducers } from 'redux'

import navigation from './reducers/navigation'
import teams from './reducers/teams'
import players from './reducers/players'

const rootReducer = combineReducers({
    teams,
    players,
    matches: () => ({}),
    navigation
})

export default rootReducer
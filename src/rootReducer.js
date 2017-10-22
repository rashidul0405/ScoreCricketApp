import { combineReducers } from 'redux'

import teams from './reducers/teams'

const rootReducer = combineReducers({
    matches: () => ({}),
    teams,
})

export default rootReducer
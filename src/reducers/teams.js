import { ADD_TEAM } from '../actions'

const teams = (state = [], action) => {
    switch (action.type){
        case ADD_TEAM:
            return [
                ...state,
                action.name
            ]
        default:
            return state
    }
}

export default teams


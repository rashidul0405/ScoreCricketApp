import { combineReducers } from 'redux'

import { ADD_PLAYER, UPDATE_PLAYER } from '../actions'

const byId = (state = {}, action) => {
    switch (action.type){
        case ADD_PLAYER:
        case UPDATE_PLAYER:
            return {
                ...state,
                [action.id]: player(state[action.id], action)
            }
        default:
            return state
    }
}

const allIds = ( state = [], action ) => {
    switch (action.type){
        case ADD_PLAYER:
            return [...state, action.id]
        default:
            return state
    }
}

const player = ( state, action ) => {
    switch ( action.type ){
        case ADD_PLAYER:
            return {
                id: action.id,
                name: action.name
            }
        case UPDATE_PLAYER:
            return {
                ...state,
                name: action.name
            }
        default:
            return state
    }
}

const players = combineReducers({
    byId,
    allIds
})

export default players


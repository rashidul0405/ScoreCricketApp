import { combineReducers } from 'redux'
import { createSelector } from 'reselect'

import { ADD_TEAM, ADD_PLAYER, UPDATE_TEAM } from '../actions'

const byId = (state = {}, action) => {
    switch (action.type){
        case ADD_TEAM:
        case UPDATE_TEAM:
            return {
                ...state,
                [action.id]: team( state[action.id], action )
            }
        case ADD_PLAYER:
            return {
                ...state,
                [action.teamId]: team( state[action.teamId], action )
            }
        default:
            return state
    }
}

const allIds = ( state = [], action ) => {
    switch (action.type){
        case ADD_TEAM:
            return [...state, action.id]
        default:
            return state
    }
}

const team = ( state, action ) => {
    switch ( action.type ){
        case ADD_TEAM:
            return {
                id: action.id,
                name: action.name,
                players: []
            }
        case UPDATE_TEAM:
            return {
                ...state,
                name: action.name
            }
        case ADD_PLAYER:
            return {
                ...state,
                players: [ ...state.players, action.id ]
            }
        default:
            return state
    }
}

const teams = combineReducers({
    byId,
    allIds
})

export default teams


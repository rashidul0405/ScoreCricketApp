import v4 from 'uuid/v4'

export const SWITCH_TAB = 'SWITCH_TAB'
export const ADD_TEAM='ADD_TEAM'
export const UPDATE_TEAM='UPDATE_TEAM'
export const ADD_PLAYER='ADD_PLAYER'
export const UPDATE_PLAYER='UPDATE_PLAYER'

export const switchTab = (tab) => ({
    type: SWITCH_TAB,
    tab
})

export const addTeam = (name) => ({
    type: ADD_TEAM,
    id: v4(),
    name
})

export const addPlayer = (name, teamId) => ({
    type: ADD_PLAYER,
    id: v4(),
    teamId,
    name
})
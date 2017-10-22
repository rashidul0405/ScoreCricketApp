import { SWITCH_TAB } from '../actions'

const navigation = (state = {}, action) => {
    switch (action.type){
        case SWITCH_TAB:
            return {
                ...state,
                tab: action.tab
            }
        default:
            return state
    }
}

export default navigation
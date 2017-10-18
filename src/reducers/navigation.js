const navigation = (state = {}, action) => {
    switch (action.type){
        case 'SWITCH_TAB':
            return {
                ...state,
                tab: action.tab
            }
        default:
            return state
    }
}

export default navigation
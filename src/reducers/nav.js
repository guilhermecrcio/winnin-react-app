const STATE = {
    activeItem: null
}

export default (state = STATE, action) => {
    switch (action.type) {
        case 'NAV_ACTIVE_ITEM':
            return { ...state, activeItem: action.payload }
    
        default:
            return state
    }
}
const STATE = {
    list: [],
    page: null,
    total: 0,
    error: null
}

export default (state = STATE, action) => {
    switch (action.type) {
        case 'GET_NEWS_POSTS':
            if (typeof action.payload.data === 'undefined') {
                return { ...state, error: 'Erro ao carregar postagens' }
            } else {
                return { ...state, list: [...state.list, ...action.payload.data.data], total: action.payload.data.total, error: null }
            }

        case 'SET_NEWS_POSTS_PAGE':
            return { ...state, page: action.payload }
            
        default:
            return state
    }
}
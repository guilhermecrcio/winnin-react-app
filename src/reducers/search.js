const STATE = {
    text: '',
    filterText: '',
    list: [],
    page: 0,
    total: 0,
    error: null
}

export default (state = STATE, action) => {
    switch (action.type) {
        case 'SEARCH_POSTS':
            if (typeof action.payload.data === 'undefined') {
                return { ...state, error: 'Erro ao carregar postagens' }
            } else if (action.payload.data.data.length == 0) {
                return { ...state, error: 'Nenhum resultado encontrado' }
            } else {
                return { ...state, list: [...state.list, ...action.payload.data.data], total: action.payload.data.total, error: null }
            }

        case 'SET_SEARCH_POSTS_PAGE':
            return { ...state, page: action.payload }
            
        case 'SET_SEARCH_TEXT':
            return { ...state, text: action.payload }
            
        case 'SET_SEARCH_FILTER_TEXT':
            return { ...state, filterText: action.payload }
            
        case 'CLEAR_SEARCH':
            return STATE
            
        default:
            return state
    }
}
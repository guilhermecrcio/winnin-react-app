const STATE = {
    text: '',
    list: [],
    page: 0,
    total: 0,
    error: null
}

export default (state = STATE, action) => {
    switch (action.type) {
        case 'SEARCH_POSTS':
            if (typeof action.payload.data === 'undefined') {
                console.log('ERROR')
                console.log(action.payload)
                return { ...state, error: 'Erro ao carregar postagens' }
            } else {
                console.log('SUCCESS')
                console.log(action.payload.data)
                return { ...state, list: [...state.list, ...action.payload.data.data], total: action.payload.data.total, error: null }
            }

        case 'SET_SEARCH_POSTS_PAGE':
            return { ...state, page: action.payload }
            
        case 'SET_SEARCH_TEXT':
            return { ...state, text: action.payload }
            
        case 'CLEAR_SEARCH':
            return STATE
            
        default:
            return state
    }
}
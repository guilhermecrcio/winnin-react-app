import axios from 'axios'
import URL from '../helpers/url'

export const searchPosts = (searchText, page) => {
    if (searchText.length == 0) {
        return {
            type: 'CLEAR_SEARCH'
        }
    } else {
        const skip = 5 * page
        const request = axios.get(`${URL}?&title__regex=/${searchText}/ig&limit=5&skip=${skip}&count=true`)

        return [{
            type: 'SEARCH_POSTS',
            payload: request
        }, {
            type: 'SET_SEARCH_POSTS_PAGE',
            payload: page + 1
        }]
    }
}

export const getHotPosts = (currentPage = null, page = 0, force = false) => {
    if (currentPage != page || force === true) {
        const skip  = 5 * page
        const request = axios.get(`${URL}?sort=-ups&limit=5&skip=${skip}&count=true`)
        
        return [{
            type: 'GET_HOT_POSTS',
            payload: request
        }, {
            type: 'SET_HOT_POSTS_PAGE',
            payload: page
        }]
    }
    
    return {
        type: 'NOTHING'
    }
}

export const getNewsPosts = (currentPage = null, page = 0, force = false) => {
    if (currentPage != page || force === true) {
        const skip  = 5 * page
        
        //não entendi se era para mostrar os mais recentes ou somente os do dia
        //se for somente os do dia o código seria
        //const currentDate = new Date()
        //const initialDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 0, 0, 0, 0)
        //const finalDate   = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 23, 59, 59, 0)
        //const request = axios.get(`${URL}?createdAt__gt=${initialDate.toISOString()}&createdAt__lt=${finalDate.toISOString()}&sort=-createdAt&limit=5&skip=${skip}&count=true`)
        const request = axios.get(`${URL}?sort=-createdAt&limit=5&skip=${skip}&count=true`)
        
        return [{
            type: 'GET_NEWS_POSTS',
            payload: request
        }, {
            type: 'SET_NEWS_POSTS_PAGE',
            payload: page
        }]
    }
    
    return {
        type: 'NOTHING'
    }
}

export const getRisingPosts = (currentPage = null, page = 0, force = false) => {
    if (currentPage != page || force === true) {
        const skip  = 5 * page
        const request = axios.get(`${URL}?sort=-comments&limit=5&skip=${skip}&count=true`)
        
        return [{
            type: 'GET_RISING_POSTS',
            payload: request
        }, {
            type: 'SET_RISING_POSTS_PAGE',
            payload: page
        }]
    }
    
    return {
        type: 'NOTHING'
    }
}
import { combineReducers } from 'redux'
import Hot from './hot'
import News from './news'
import Rising from './rising'
import Search from './search'

const reducer = combineReducers({
    hot: Hot,
    news: News,
    rising: Rising,
    search: Search
})

export default reducer
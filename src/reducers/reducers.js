import { combineReducers } from 'redux'
import Hot from './hot'
import News from './news'
import Rising from './rising'
import Search from './search'
import Nav from './nav'

const reducer = combineReducers({
    hot: Hot,
    news: News,
    rising: Rising,
    search: Search,
    nav: Nav
})

export default reducer
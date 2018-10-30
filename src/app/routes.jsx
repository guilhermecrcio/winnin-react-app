import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Hot from '../pages/hot'
import News from '../pages/news'
import Rising from '../pages/rising'
import Search from '../pages/search'

export default (props) => (
    <div className='container'>
        <Switch>
            <Route path='/hot' component={Hot} />
            <Route path='/news' component={News} />
            <Route path='/rising' component={Rising} />
            <Route path='/search' component={Search} />
            <Redirect from='*' to='/hot' />
        </Switch>
    </div>
)
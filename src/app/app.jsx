import 'modules/jquery/dist/jquery.min.js'
import 'modules/popper.js/dist/popper.min.js'
import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/bootstrap/dist/js/bootstrap.min.js'
import 'modules/font-awesome/css/font-awesome.min.css'
import './app.css'
import 'modules/bootstrap-notify/bootstrap-notify.min.js'

import React from 'react'
import Header from './header'
import Routes from './routes'

export default (props) => (
    <div>
        <Header />
        <div className='container'>
            <Routes />
        </div>
    </div>
)
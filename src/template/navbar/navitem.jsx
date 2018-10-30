import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { navActiveItem } from '../../dispatch/nav'

import Icon from '../icon'
import { Link } from 'react-router-dom'

const Navitem = (props) => {
    let itemClass = 'text-primary'
    
    if (props.activeItem !== null && props.activeItem.match(new RegExp(`${props.link}\$`))) {
        itemClass = 'text-warning'
    }
    
    return (
        <li className='nav-item'>
            <Link className={'nav-link '+itemClass} to={props.link} >
                <Icon icon={props.icon} /> {props.title}
            </Link>
        </li>
    )
}

const mapStateToProps = (state) => ({
    activeItem: state.nav.activeItem
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    navActiveItem
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Navitem)
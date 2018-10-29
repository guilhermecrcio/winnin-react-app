import React from 'react'
import Icon from '../icon'
import { Link } from 'react-router-dom'

export default (props) => {
    const path = window.location.hash.replace(/^#\//, '')
    
    let textClass = 'text-primary'
    
    if (path == props.link) {
        textClass = 'text-warning'
    }
    
    return (
        <li className='nav-item'>
            <Link className={'nav-link '+textClass} to={props.link}>
                <Icon icon={props.icon} /> {props.title}
            </Link>
        </li>
    )
}
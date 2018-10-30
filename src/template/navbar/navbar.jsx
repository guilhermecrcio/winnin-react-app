import React from 'react'
import Icon from '../icon'
import If from '../../helpers/if'
import { Button } from '../button'

export default (props) => (
    <nav className='navbar navbar-expand-xl navbar-light bg-light fixed-top'>
        <a className='navbar-brand' href='#'>
            <strong><Icon icon={props.brandIcon} /> {props.brandName}</strong>
        </a>
        <button className='navbar-toggler hidden-lg-up' 
            type='button' 
            data-toggle='collapse' 
            data-target='#menu' 
            aria-controls='menu'
            aria-expanded='false' 
            aria-label='Toggle navigation'>
            <Icon icon='minus' />
            <Icon icon='minus' />
            <Icon icon='minus' />
        </button>
        <div className='collapse navbar-collapse' id='menu'>
            <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
                {props.children}
            </ul>
            <If test={props.search} >
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" placeholder="Search" onChange={props.searchOnChange} onKeyUp={props.searchOnKeyUp} value={props.searchText} />
                    <Button className='btn-primary btn-search' onClick={props.searchOnClick} icon={<Icon icon='search' />} text='Search' />
                    <Button className='btn-warning btn-clear-search' onClick={props.clearOnClick} icon={<Icon icon='remove' />} text='Clear' />
                </form>
            </If>
        </div>
    </nav>
)
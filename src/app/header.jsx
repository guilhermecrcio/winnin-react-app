import React , { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router-dom'
import { newSearchPosts, clearSearch } from '../dispatch/posts'
import { inputChange } from '../dispatch/form'
import $ from 'jquery'

import Navbar from '../template/navbar/navbar'
import Navitem from '../template/navbar/navitem'
import If from '../helpers/if'

class Header extends Component {
    constructor(props) {
        super(props)
        this.inputChange   = this.inputChange.bind(this)
        this.searchOnClick = this.searchOnClick.bind(this)
        this.clearOnClick  = this.clearOnClick.bind(this)
        this.searchOnEnter = this.searchOnEnter.bind(this)
    }
    
    inputChange(e) {
        this.props.inputChange('SET_SEARCH_TEXT', e.target.value)
    }
    
    componentWillUpdate() {
        $('.btn-search').find('i').removeClass('fa-spinner fa-pulse').addClass('fa-search')
    }
    
    searchOnEnter(e) {
        if (e.key === 'Enter') {
            this.props.newSearchPosts(this.props.searchText)
        } else if (e.key === 'Escape') {
            this.props.clearSearch()
        }
    }
    
    searchOnClick(e) {
        $('.btn-search').find('i').removeClass('fa-search').addClass('fa-spinner fa-pulse')
        
        this.props.newSearchPosts(this.props.searchText)
    }
    
    clearOnClick(e) {
        this.props.clearSearch()
    }
    
    render() {
        if (this.props.searchError !== null) {
            $.notify({
                icon: 'fa fa-exclamation-triangle ',
                message: this.props.searchError,
            }, {
                type: 'danger',
                timer: 1000,
                delay: 3000
            })    
        }
        
        return (
            <div>
                <Navbar brandIcon='code' brandName='Winnin App' search={true} searchText={this.props.searchText} searchOnChange={this.inputChange} searchOnKeyUp={this.searchOnEnter} searchOnClick={this.searchOnClick} clearOnClick={this.clearOnClick} >
                    <Navitem link='hot' icon='fire' title='Hot' />
                    <Navitem link='news' icon='asterisk' title='News' />
                    <Navitem link='rising' icon='comments' title='Rising' />
                </Navbar>
                <If test={this.props.searchList.length > 0 && !window.location.hash.match(/\/search$/)} >
                    <Redirect to='/search' />
                </If>
                <If test={window.location.hash.match(/\/search$/) && this.props.searchList.length == 0} >
                    <Redirect to='/hot' />
                </If>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    searchText: state.search.text,
    searchList: state.search.list,
    searchPage: state.search.page,
    searchError: state.search.error
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    newSearchPosts,
    clearSearch,
    inputChange
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Header)
import React , { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import $ from 'jquery'
import { Redirect } from 'react-router-dom'
import { searchPosts } from '../dispatch/posts'
import { inputChange } from '../dispatch/form'

import Navbar from '../template/navbar/navbar'
import Navitem from '../template/navbar/navitem'

class Header extends Component {
    constructor(props) {
        super(props)
        this.inputChange   = this.inputChange.bind(this)
        this.searchOnClick = this.searchOnClick.bind(this)
    }
    
    inputChange(e) {
        this.props.inputChange('SET_SEARCH_TEXT', e.target.value)
    }
    
    componentWillUpdate() {
        console.log('UPDATE')
        console.log(this.props.searchList)
        if (this.props.searchList.length > 0) {
            console.log('REDIRECT')
            return <Redirect to='/search' />
        }
    }
    
    searchOnClick(e) {
        this.props.searchPosts(this.props.searchText, this.props.searchPage)
    }
    
    render() {
        return (
            <Navbar brandIcon='code' brandName='Winnin App' search={true} searchOnChange={this.inputChange} searchOnClick={this.searchOnClick} >
                <Navitem link='hot' icon='fire' title='Hot' />
                <Navitem link='news' icon='asterisk' title='News' />
                <Navitem link='rising' icon='comments' title='Rising' />
            </Navbar>
        )
    }
}

const mapStateToProps = (state) => ({
    searchText: state.search.text,
    searchList: state.search.list,
    searchPage: state.search.page,
    searchTotal: state.search.total,
    searchError: state.search.error
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    searchPosts,
    inputChange
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Header)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { searchPosts } from '../dispatch/posts'
import { navActiveItem } from '../dispatch/nav'
import { Redirect } from 'react-router-dom'
import $ from 'jquery'

import List from '../template/list'
import { ButtonBlock } from '../template/button'
import Icon from '../template/icon'
import If from '../helpers/if'
import { Col } from '../template/grid'

class Search extends Component {
    constructor(props) {
        super(props)
    }
    
    componentWillMount() {
        this.props.navActiveItem(window.location.hash)
    }
    
    componentWillUpdate() {
        $('.btn-load').find('i').removeClass('fa-spinner fa-pulse').addClass('fa-plus')
    }
    
    searchPosts() {
        $('.btn-load').find('i').removeClass('fa-plus').addClass('fa-spinner fa-pulse')
        this.props.searchPosts(this.props.filterText, this.props.page)
    }
    
    render() {
        if (this.props.error !== null) {
            $.notify({
                icon: 'fa fa-exclamation-triangle ',
                message: this.props.error,
            }, {
                type: 'danger',
                timer: 1000,
                delay: 3000
            })    
        }
        
        if (this.props.list.length == 0) {
            return (
                <Redirect to='/hot' />
            )    
        }
        
        return(
            <div>
                <Col cols='10' className='offset-md-1 offset-lg-1 bg-primary filter-text' >
                    <strong>Search results for "{this.props.filterText}"</strong>
                </Col>
                <List>
                    {List.renderItens(this.props.list)}
                </List>
                <If test={this.props.list.length < this.props.total}>
                    <Col cols='10' className='offset-md-1 offset-lg-1 col-button-search' >
                        <ButtonBlock className='btn-primary btn-load' text='Ver Mais' icon={<Icon icon='plus' />} onClick={() => this.searchPosts()} />
                    </Col>
                </If>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    filterText: state.search.filterText,
    list: state.search.list,
    page: state.search.page,
    total: state.search.total,
    error: state.search.error
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    searchPosts,
    navActiveItem
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Search)
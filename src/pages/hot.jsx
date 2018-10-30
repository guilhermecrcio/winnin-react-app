import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getHotPosts } from '../dispatch/posts'
import { navActiveItem } from '../dispatch/nav'
import $ from 'jquery'

import List from '../template/list'
import { ButtonBlock } from '../template/button'
import Icon from '../template/icon'
import If from '../helpers/if'
import { Col } from '../template/grid'

class Hot extends Component {
    constructor(props) {
        super(props)
    }
    
    componentWillMount() {
        this.props.navActiveItem(window.location.hash)
        
        if (this.props.page == null) {
            this.props.getHotPosts(this.props.page)
        } else if (this.props.error !== null) {
            this.props.getHotPosts(this.props.page, this.props.page, true)
        }
    }
    
    componentWillUpdate() {
        $('.btn-load').find('i').removeClass('fa-spinner fa-pulse').addClass('fa-plus')
    }
    
    getHotPosts() {
        $('.btn-load').find('i').removeClass('fa-plus').addClass('fa-spinner fa-pulse')
        
        let nextPage = 0
        
        if (this.props.page !== null) {
            nextPage = this.props.page + 1
        }
        
        this.props.getHotPosts(this.props.page, nextPage)
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
        
        return(
            <div>
                <List>
                    {List.renderItens(this.props.list)}
                </List>
                <If test={this.props.list.length < this.props.total}>
                    <Col cols='10' className='offset-md-1 offset-lg-1 col-button-search' >
                        <ButtonBlock className='btn-primary btn-load' text='Ver Mais' icon={<Icon icon='plus' />} onClick={() => this.getHotPosts()} />
                    </Col>
                </If>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.hot.list,
    page: state.hot.page,
    total: state.hot.total,
    error: state.hot.error
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getHotPosts,
    navActiveItem
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Hot)
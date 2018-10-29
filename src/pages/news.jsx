import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getNewsPosts } from '../dispatch/posts'
import $ from 'jquery'

import List from '../template/list'
import { ButtonBlock } from '../template/button'
import Icon from '../template/icon'
import If from '../helpers/if'
import { Col } from '../template/grid'

class News extends Component {
    constructor(props) {
        super(props)
    }
    
    componentWillMount() {
        if (this.props.page == null) {
            this.props.getNewsPosts(this.props.page)
        } else if (this.props.error !== null) {
            this.props.getNewsPosts(this.props.page, this.props.page, true)
        }
    }
    
    componentWillUpdate() {
        $('.btn-load').find('i').removeClass('fa-spinner fa-pulse').addClass('fa-plus')
    }
    
    getNewsPosts() {
        $('.btn-load').find('i').removeClass('fa-plus').addClass('fa-spinner fa-pulse')
        
        let nextPage = 0
        
        if (this.props.page !== null) {
            nextPage = this.props.page + 1
        }
        
        this.props.getNewsPosts(this.props.page, nextPage)
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
                        <ButtonBlock className='info btn-load' text='Ver Mais' icon={<Icon icon='plus' />} onClick={() => this.getNewsPosts()} />
                    </Col>
                </If>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.news.list,
    page: state.news.page,
    total: state.news.total,
    error: state.news.error
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getNewsPosts
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(News)
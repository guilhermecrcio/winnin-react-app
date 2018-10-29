import React, { Component } from 'react'
import ListItem from './listItem'
import { Col } from './grid'

export default class List extends Component {
    constructor(props) {
        super(props)
    }
    
    static renderItens(list = []) {
        return list.map((item) => (
            <ListItem key={item._id}
                image={item.image}
                title={item.title}
                titleOnClick={() => window.open(item.url)}
                author={item.author}
                createdAt={item.createdAt}
                ups={item.ups}
                comments={item.comments}
                url={item.url} />
        ))
    }
    
    render() {
        return (
            <Col id='list' cols='12 12 10 10' className='offset-lg-1 offset-md-1'>
                {this.props.children}
            </Col>  
        )  
    }
}
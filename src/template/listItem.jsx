import React from 'react'
import Icon from '../template/icon'
import { Row, Col } from './grid'
import Image from './image'
import If from '../helpers/if'

export default (props) => (
    <Row className="row-list bg-light">
        <Col cols='2' >
            <If test={props.image !== null}>
                <Image src={props.image} />
            </If>
            <If test={props.image === null}>
                <Icon icon='image image-not-found' />
            </If>
        </Col>
        <Col cols="10 10">
            <Row>
                <Col cols="12">
                    <h3 onClick={props.titleOnClick} >{props.title}</h3>
                </Col>
                <Col cols="12" className="info-envio">
                    <label className='data-envio'>enviado em {props.createdAt}</label> por <label className='autor-envio'>{props.author}</label>
                </Col>
                <Col cols="2">
                    <Icon icon='thumbs-up' /> {props.ups}
                </Col>
                <Col cols="2">
                    <Icon icon='comments' /> {props.comments}
                </Col>
            </Row>
        </Col>
    </Row>
)
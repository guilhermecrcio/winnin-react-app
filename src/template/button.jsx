import React from 'react'

export const ButtonBlock = (props) => (
    <button type="button" className={"btn "+props.className+" btn-lg btn-block"} onClick={props.onClick} >
        {props.icon} {props.text}
    </button>
)

export const Button = (props) => (
    <button className={"btn my-2 my-sm-0 "+props.className} onClick={props.onClick} >
        {props.icon} {props.text}
    </button>
)
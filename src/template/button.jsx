import React from 'react'

export const ButtonBlock = (props) => (
    <button type="button" className={"btn btn-"+props.className+" btn-lg btn-block"} onClick={props.onClick} >
        {props.icon} {props.text}
    </button>
)
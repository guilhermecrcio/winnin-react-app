import React from 'react'

export const Row = (props) => (
    <div className={'row '+props.className} >
        {props.children}
    </div>
)

export const Col = (props) => {
    const colType = [
        'xs',
        'sm',
        'md',
        'lg'
    ]
    
    let cols = props.cols.split(' ')
    
    if (cols.length < 4) {
        for (let i = cols.length; i < 4; i++) {
            cols.push(cols[i - 1])
        }
    }
    
    cols = cols.map((col, i) => (
        'col-'+colType[i]+'-'+col
    )).join(' ')
    
    const className = props.className || ''

    return (
        <div id={props.id} className={cols+className} >
            {props.children}
        </div>
    )
}
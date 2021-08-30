import React from 'react'

const SectionHeader = ({props}) => {
    return (
        <h1 className='my-h1' style={{color:`${props.color}`, marginTop: `3rem`, marginBottom: `1rem`}}><a href={props.url} style={{color: 'inherit'}}>{props.title}</a></h1>
    )
}

export default SectionHeader
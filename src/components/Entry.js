import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

export const LoveEntry = ({ content }) => {
    return (
        <>
            <ListGroup.Item style={{ color: 'black' }}><p style={{ fontSize: '25px' }}>{content}</p></ListGroup.Item>
        </>
    )
}

export const GoodAtEntry = ({ content }) => {
    return (
        <>
            <ListGroup.Item style={{ color: 'black' }}><p style={{ fontSize: '25px' }}>{content}</p></ListGroup.Item>
        </>
    )
}

export const WorldNeedEntry = ({ content }) => {
    return (
        <>
            <ListGroup.Item style={{ color: 'black' }}><p style={{ fontSize: '25px' }}>{content}</p></ListGroup.Item>
        </>
    )
}
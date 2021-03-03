import React, { Component } from 'react'
import { connect } from 'react-redux'
import { LoveEntry, GoodAtEntry, WorldNeedEntry } from '../components/Entry';
import { fetchWorksheet } from '../actions/worksheet';
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

export class Generator extends Component {
    render() {
        const { worksheet } = this.props
        return (
            <div className="generator">
                <h1>ELEMENTS OF CHANCE</h1>
                <p style={{ color: 'red' }}>Here are your picks! Take a screenshoot to save them.</p>
                <p>Order for each group: Love, Good At, World Need</p>
                <p>Next step is to come up with a tangible, digital, and/or service by combinding the ideas together.</p>
                <p>Follow along with Chris Do on the futur for examples.</p>

                <CardDeck>
                    <Card bg="secondary">
                        <Card.Header style={{ color: 'black' }}><h3>Group 1</h3></Card.Header>
                        <ListGroup variant="flush">
                            <LoveEntry content={worksheet.loves[Math.floor(Math.random() * worksheet.loves.length)]} />
                            <GoodAtEntry content={worksheet.goodAts[Math.floor(Math.random() * worksheet.goodAts.length)]} />
                            <WorldNeedEntry content={worksheet.worldNeeds[Math.floor(Math.random() * worksheet.worldNeeds.length)]} />
                        </ListGroup>
                    </Card>
                    <Card bg="secondary">
                        <ListGroup variant="flush">
                            <Card.Header style={{ color: 'black' }}><h3>Group 2</h3></Card.Header>
                            <LoveEntry content={worksheet.loves[Math.floor(Math.random() * worksheet.loves.length)]} />
                            <GoodAtEntry content={worksheet.goodAts[Math.floor(Math.random() * worksheet.goodAts.length)]} />
                            <WorldNeedEntry content={worksheet.worldNeeds[Math.floor(Math.random() * worksheet.worldNeeds.length)]} />
                        </ListGroup>
                    </Card>
                    <Card bg="secondary">
                        <ListGroup variant="flush">
                            <Card.Header style={{ color: 'black' }}><h3>Group 3</h3></Card.Header>
                            <LoveEntry content={worksheet.loves[Math.floor(Math.random() * worksheet.loves.length)]} />
                            <GoodAtEntry content={worksheet.goodAts[Math.floor(Math.random() * worksheet.goodAts.length)]} />
                            <WorldNeedEntry content={worksheet.worldNeeds[Math.floor(Math.random() * worksheet.worldNeeds.length)]} />
                        </ListGroup>
                    </Card>
                </CardDeck>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    worksheet: state.currentWorksheet
})

export default connect(mapStateToProps, { fetchWorksheet })(Generator)

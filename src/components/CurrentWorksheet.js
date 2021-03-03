import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchWorksheet } from '../actions/worksheet';
import { LoveEntry, GoodAtEntry, WorldNeedEntry } from './Entry';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'

export class CurrentWorksheet extends Component {
    componentDidMount() {
        this.props.fetchWorksheet(this.props.id);
    }

    loadLoves = () => {
        const { worksheet } = this.props;
        return worksheet.loves.map((love, i) => < LoveEntry key={i} content={love} />)
    }

    loadGoodAt = () => {
        const { worksheet } = this.props;
        return worksheet.goodAts.map((g, i) => < GoodAtEntry key={i} content={g} />)
    }

    loadWorldNeed = () => {
        const { worksheet } = this.props;
        return worksheet.worldNeeds.map((wn, i) => < WorldNeedEntry key={i} content={wn} />)
    }

    render() {
        return (
            <div className="completed">
                <h1>Completed Worksheet</h1>
                <CardDeck>
                    <Card bg="danger" style={{ width: '18rem' }}>
                        <Card.Header style={{ color: 'white' }}><h2 style={{ textAlign: 'center', paddingTop: '20px', fontSize: '50px' }}>Love</h2></Card.Header>
                        <ListGroup variant="flush">
                            {this.loadLoves()}
                        </ListGroup>
                    </Card>
                    <Card bg="success" style={{ width: '18rem' }}>
                        <Card.Header style={{ color: 'white' }}><h2 style={{ textAlign: 'center', paddingTop: '20px', fontSize: '50px' }}>Good At</h2></Card.Header>
                        <ListGroup variant="flush">
                            {this.loadGoodAt()}
                        </ListGroup>
                    </Card>
                    <Card bg="info" style={{ width: '18rem' }}>
                        <Card.Header style={{ color: 'white' }}><h2 style={{ textAlign: 'center', paddingTop: '20px', fontSize: '50px' }}>World Need</h2></Card.Header>
                        <ListGroup variant="flush">
                            {this.loadWorldNeed()}
                        </ListGroup>
                    </Card>
                </CardDeck>
                <br />
                <Button block size="lg" variant="light" className="ideas-button"><Link style={{ color: "black" }} to={{
                    pathname: "/generator",
                    state: {
                        currentWorksheet: this.props.worksheet
                    }
                }}><h1 style={{ fontSize: '50px', paddingTop: '10px' }}>Generate Ideas</h1></Link></Button>

                <br />
                <br />

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    worksheet: state.currentWorksheet
})

export default connect(mapStateToProps, { fetchWorksheet })(CurrentWorksheet)
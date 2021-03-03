import React from 'react';
import { connect } from 'react-redux';
import GoodAtForm from './GoodAtForm';
import LoveForm from './LoveForm';
import WorldNeedForm from './WorldNeedForm';
import { submitWorksheet } from '../actions/worksheet'
import Button from 'react-bootstrap/Button'


export class Worksheet extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.submitWorksheet(this.props.worksheet, this.props.userId, this.props.history)
    };
    render() {
        return (
            <div className="worksheet-form">
                <h1>Worksheet</h1>
                <LoveForm />
                <GoodAtForm />
                <WorldNeedForm />
                <Button block size="lg" variant="light" type="submit" onClick={this.handleSubmit}>Submit Worksheet</Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const userId = state.currentUser ? state.currentUser.data.id : ""
    return {
        worksheet: state.worksheet,
        userId
    }
}

export default connect(mapStateToProps, { submitWorksheet })(Worksheet)
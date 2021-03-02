import React from 'react';
import { connect } from 'react-redux';
import GoodAtForm from './GoodAtForm';
import LoveForm from './LoveForm';
import WorldNeedForm from './WorldNeedForm';
import { submitWorksheet } from '../actions/worksheet'


export class Worksheet extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.submitWorksheet(this.props.worksheet, this.props.userId)
    };
    render() {
        return (
            <div className="worksheet-form">
                <h1>Worksheet</h1>
                <LoveForm />
                <GoodAtForm />
                <WorldNeedForm />
                <button type="submit" onClick={this.handleSubmit}>Submit Worksheet</button>
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
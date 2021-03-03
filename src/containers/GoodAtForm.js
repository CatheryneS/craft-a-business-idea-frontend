import React, { Component } from 'react'
import { connect } from 'react-redux'
import GoodAtInput from '../components/GoodAtInput';
import { updateGoodAtForm } from '../actions/goodAtForm';
import { addGoodAtsToWorksheet } from '../actions/worksheet';

export class GoodAtForm extends Component {
    render() {
        return (
            <div className="GoodAtForm">
                <h1>Good At</h1>
                <ul>
                    <li>What are you paid to do?</li>
                    <li>What do you excel at naturally?</li>
                    <li>What did/will you study in school or been trained to do?</li>
                    <li>What do others often say you do easily? (Ask a friend if you need to.)</li>
                </ul>

                <GoodAtInput
                    goodAtContent={this.props.goodAtContent}
                    updateGoodAtForm={this.props.updateGoodAtForm}
                    addGoodAtsToWorksheet={this.props.addGoodAtsToWorksheet}
                    userId={this.props.userId}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const userId = state.currentUser ? state.currentUser.data.id : ""
    return {
        goodAtContent: state.goodAtForm.goodAtContent,
        userId
    }
}

export default connect(mapStateToProps, { updateGoodAtForm, addGoodAtsToWorksheet })(GoodAtForm)
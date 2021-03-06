import React, { Component } from 'react'
import { connect } from 'react-redux'
import WorldNeedInput from '../components/WorldNeedInput';
import { updateWorldNeedForm } from '../actions/worldNeedForm';
import { addWorldNeedsToWorksheet } from '../actions/worksheet';

export class WorldNeedForm extends Component {
    render() {
        return (
            <div className="WorldNeedForm">
                <h1>World Needs</h1>
                <ul>
                    <li>Think big(the world)</li>
                    <li>Think small(neighborhoods)</li>
                    <li>What opportunity to serve others?</li>
                    <li>What's trending right now?</li>
                </ul>
                <WorldNeedInput
                    worldNeedContent={this.props.worldNeedContent}
                    updateWorldNeedForm={this.props.updateWorldNeedForm}
                    addWorldNeedsToWorksheet={this.props.addWorldNeedsToWorksheet}
                    userId={this.props.userId}
                />
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    const userId = state.currentUser ? state.currentUser.data.id : ""
    return {
        worldNeedContent: state.worldNeedForm.worldNeedContent,
        userId
    }
}

export default connect(mapStateToProps, { updateWorldNeedForm, addWorldNeedsToWorksheet })(WorldNeedForm)
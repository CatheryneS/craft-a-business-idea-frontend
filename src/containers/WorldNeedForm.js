import React, { Component } from 'react'
import { connect } from 'react-redux'
import WorldNeedInput from '../components/WorldNeedInput';
import { updateWorldNeedForm, submitWorldNeedForm } from '../actions/worldNeedForm';

export class WorldNeedForm extends Component {
    render() {
        return (
            <div className="WorldNeedForm">
                <h1>World Needs</h1>
                <WorldNeedInput
                    worldNeedContent={this.props.worldNeedContent}
                    updateWorldNeedForm={this.props.updateWorldNeedForm}
                    submitWorldNeedForm={this.props.submitWorldNeedForm}
                    userId={this.props.userId}
                />
            </div>
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

export default connect(mapStateToProps, { updateWorldNeedForm, submitWorldNeedForm })(WorldNeedForm)
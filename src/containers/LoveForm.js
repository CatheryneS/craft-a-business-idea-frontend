import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoveInput from '../components/LoveInput';
import { updateLoveForm } from '../actions/loveForm';
import { addLovesToWorksheet } from '../actions/worksheet';

export class LoveForm extends Component {
    render() {
        return (
            <div className="LoveForm-form">
                <h1>Love</h1>
                <LoveInput
                    loveContent={this.props.loveContent}
                    updateLoveForm={this.props.updateLoveForm}
                    addLovesToWorksheet={this.props.addLovesToWorksheet}
                    userId={this.props.userId}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const userId = state.currentUser ? state.currentUser.data.id : ""
    return {
        loveContent: state.loveForm.loveContent,
        userId
    }
}

export default connect(mapStateToProps, { updateLoveForm, addLovesToWorksheet })(LoveForm)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoveInput from '../components/LoveInput';
import { updateLoveForm, submitWorksheet } from '../actions/worksheet';

export class Worksheet extends Component {
    render() {
        return (
            <div className="worksheet-form">
                <h1>Worksheet</h1>
                <LoveInput
                    loveContent={this.props.loveContent}
                    updateLoveForm={this.props.updateLoveForm}
                    submitWorksheet={this.props.submitWorksheet}
                    userId={this.props.userId}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const userId = state.currentUser ? state.currentUser.data.id : ""
    return {
        loveContent: state.worksheet.loveContent,
        userId
    }
}

export default connect(mapStateToProps, { updateLoveForm, submitWorksheet })(Worksheet)

// t.string "name"
// t.bigint "user_id"
// t.datetime "created_at", null: false
// t.datetime "updated_at", null: false
// t.index ["user_id"], name: "index_worksheets_on_user_id"
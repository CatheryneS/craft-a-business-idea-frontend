import React, { Component } from 'react'
import { connect } from 'react-redux'
import GoodAtInput from '../components/GoodAtInput';
import { updateGoodAtForm, submitGoodAtForm } from '../actions/goodAtForm';

export class GoodAtForm extends Component {
    render() {
        return (
            <div className="GoodAtForm">
                <h1>GoodAtContent</h1>
                <GoodAtInput
                    goodAtContent={this.props.goodAtContent}
                    updateGoodAtForm={this.props.updateGoodAtForm}
                    submitGoodAtForm={this.props.submitGoodAtForm}
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

export default connect(mapStateToProps, { updateGoodAtForm, submitGoodAtForm })(GoodAtForm)
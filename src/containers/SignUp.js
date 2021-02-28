import React, { Component } from 'react';
import { connect } from 'react-redux';

import SignUpInput from '../components/SignUpInput'
import { updateSignUpForm, signUpUser, resetSignUpForm } from '../actions/signup';

export class SignUp extends Component {
    render() {
        return (
            <div>
                <SignUpInput
                    credentials={this.props.credentials}
                    updateSignUpForm={this.props.updateSignUpForm}
                    signUpUser={this.props.signUpUser}
                    resetSignUpForm={this.props.resetSignUpForm}
                    history={this.props.history}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    credentials: state.signUpForm
})

export default connect(mapStateToProps, { updateSignUpForm, resetSignUpForm, signUpUser })(SignUp)

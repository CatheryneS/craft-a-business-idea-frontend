import React, { Component } from 'react';
import { connect } from 'react-redux';

import SignUpInput from '../components/SignUpInput'
import { updateSignUpForm, signUpUser } from '../actions/signup';

export class SignUp extends Component {
    render() {
        return (
            <div>
                <SignUpInput
                    credentials={this.props.credentials}
                    updateSignUpForm={this.props.updateSignUpForm}
                    signUpUser={this.props.signUpUser}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    credentials: state.signUpForm
})

export default connect(mapStateToProps, { updateSignUpForm, signUpUser })(SignUp)

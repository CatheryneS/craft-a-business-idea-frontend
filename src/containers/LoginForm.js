import React, { Component } from 'react'
import { connect } from 'react-redux'

import LoginInput from '../components/LoginInput';

import { updateLoginForm } from '../actions/loginForm';
import { login } from '../actions/currentUser';

export class LoginForm extends Component {
    render() {
        return (
            <div>
                <LoginInput
                    credentials={this.props.credentials}
                    updateLoginForm={this.props.updateLoginForm}
                    login={this.props.login}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    credentials: state.loginForm
})

export default connect(mapStateToProps, { updateLoginForm, login })(LoginForm)

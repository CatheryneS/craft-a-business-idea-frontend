import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoginInput from '../components/LoginInput';
import { updateLoginForm } from '../actions/loginForm';

export class LoginForm extends Component {
    render() {
        return (
            <div>
                <LoginInput
                    credentials={this.props.credentials}
                    updateLoginForm={this.props.updateLoginForm}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    credentials: state.loginForm
})

export default connect(mapStateToProps, { updateLoginForm })(LoginForm)

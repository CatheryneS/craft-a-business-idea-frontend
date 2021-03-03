import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/currentUser';
import Form from 'react-bootstrap/Form'

const Logout = ({ logout }) => {
    return (
        <Form onSubmit={logout}>
            <Form.Control type="submit" value="Log Out" />
        </Form>
    )
}

export default connect(null, { logout })(Logout)

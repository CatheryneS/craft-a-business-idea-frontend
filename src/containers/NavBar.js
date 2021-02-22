import React from 'react';
import { connect } from 'react-redux';

import LoginForm from '../containers/LoginForm';
import Logout from '../components/Logout';

const NavBar = ({ currentUser }) => {
    return (
        <div>
            {currentUser ? <Logout /> : <LoginForm />}
        </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return { currentUser }
}

export default connect(mapStateToProps)(NavBar)
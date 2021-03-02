import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Logout from '../components/Logout';

const NavBar = ({ currentUser }) => {
    return (
        <div>
            <Link to={"/"}>Home</Link> | <Logout />
        </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return { currentUser }
}

export default connect(mapStateToProps)(NavBar)
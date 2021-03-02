import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import Logout from '../components/Logout';

const NavBar = ({ currentUser }) => {
    return (
        <div>
            <NavLink exact activeClassName="active" to="/"  >Home</NavLink> | <NavLink exact activeClassName="active" to="/worksheets"> My Worksheets</NavLink> | <Logout />
        </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return { currentUser }
}

export default connect(mapStateToProps)(NavBar)
import React from 'react';
import { connect } from 'react-redux';

import { fetchCurrentUser } from './actions/currentUser';

import NavBar from './containers/NavBar';
import SignUp from './containers/SignUp';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchCurrentUser()
  }

  render() {
    return (
      <div>
        <NavBar />
        <SignUp />
      </div>
    )
  }

}

const mapStateToProps = ({ currentUser }) => {
  return { currentUser }
}

export default connect(mapStateToProps, { fetchCurrentUser })(App);

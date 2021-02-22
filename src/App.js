import React from 'react';
import { connect } from 'react-redux';

import { fetchCurrentUser } from './actions/currentUser';

import NavBar from './containers/NavBar';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchCurrentUser()
  }

  render() {
    return (
      <NavBar />
    )
  }

}

const mapStateToProps = ({ currentUser }) => {
  return { currentUser }
}

export default connect(mapStateToProps, { fetchCurrentUser })(App);

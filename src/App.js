import React from 'react';
import LoginForm from './containers/LoginForm';
import { connect } from 'react-redux';
import { fetchCurrentUser } from './actions/currentUser';

class App extends React.Component {
  componentDidMount() {
    fetchCurrentUser()
  }

  render() {
    return (
      <div>
        <LoginForm />
      </div >
    )
  }

}

export default connect(null, fetchCurrentUser)(App);

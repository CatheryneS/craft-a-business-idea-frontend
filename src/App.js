import React from 'react';
import { connect } from 'react-redux';

import { fetchCurrentUser } from './actions/currentUser';

import LoginForm from './containers/LoginForm';
import Logout from './components/Logout'

class App extends React.Component {
  componentDidMount() {
    this.props.fetchCurrentUser()
  }

  render() {
    return (
      <div>
        {this.props.currentUser ? <Logout /> : <LoginForm />}
      </div >
    )
  }

}

const mapStateToProps = ({ currentUser }) => {
  return { currentUser }
}

export default connect(mapStateToProps, { fetchCurrentUser })(App);

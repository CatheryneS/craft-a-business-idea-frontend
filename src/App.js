import React from 'react';
import { connect } from 'react-redux';

import { fetchCurrentUser } from './actions/currentUser';

import NavBar from './containers/NavBar';
import SignUp from './containers/SignUp';
import LoginForm from './containers/LoginForm';
import StartingPage from './components/StartingPage';
import Worksheet from './containers/Worksheet';

import { Route } from "react-router-dom";
import Homepage from './containers/Homepage';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchCurrentUser()
  }

  render() {
    return (
      <div>
        <NavBar />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/worksheet" component={Worksheet} />
        <Route exact path="/" render={(() => this.props.currentUser ? <StartingPage /> : < Homepage />)} />
      </div>
    )
  }

}

const mapStateToProps = ({ currentUser }) => {
  return { currentUser }
}

export default connect(mapStateToProps, { fetchCurrentUser })(App);

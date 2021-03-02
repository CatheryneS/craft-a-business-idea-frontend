import React from 'react';
import { connect } from 'react-redux';

import { fetchCurrentUser } from './actions/currentUser';

import NavBar from './containers/NavBar';
import SignUp from './containers/SignUp';
import LoginForm from './containers/LoginForm';
import StartingPage from './components/StartingPage';
import Worksheet from './containers/Worksheet';
import CurrentWorksheet from './components/CurrentWorksheet'

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
        <Route exact path="/worksheets/new" component={Worksheet} />
        <Route exact path="/worksheets/:id" render={props => <CurrentWorksheet id={props.match.params.id} />} />
        <Route exact path="/" render={(() => this.props.currentUser ? <StartingPage /> : < Homepage />)} />
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return ({
    currentUser: state.currentUser,
    worksheet: state.worksheets
  })
}

export default connect(mapStateToProps, { fetchCurrentUser })(App);

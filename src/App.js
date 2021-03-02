import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from "react-router-dom";

import { fetchCurrentUser } from './actions/currentUser';

import NavBar from './containers/NavBar';
import SignUp from './containers/SignUp';
import LoginForm from './containers/LoginForm';
import StartingPage from './components/StartingPage';
import Worksheet from './containers/Worksheet';
import CurrentWorksheet from './components/CurrentWorksheet'
import Generator from './containers/Generator';
import Homepage from './containers/Homepage';
import Logout from './components/Logout';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchCurrentUser()
  }

  render() {
    return (
      <div>
        {this.props.currentUser ? <NavBar location={this.props.location} /> : null}
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/worksheets/new" component={Worksheet} />
          <Route exact path="/worksheets/:id" render={props => <CurrentWorksheet id={props.match.params.id} />} />
          <Route exact path="/generator" render={props => <Generator id={props.match.params.id} />} />
          <Route exact path="/" render={(() => this.props.currentUser ? <StartingPage /> : < Homepage />)} />
        </Switch>
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

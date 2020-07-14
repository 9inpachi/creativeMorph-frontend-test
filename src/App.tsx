import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import AuthPage from './components/auth';
import ViewProgrammers from './components/viewProgrammersList';
import TinderForDogs from './components/tinderForDogs';
import './App.css';
import viewTinderData from './components/tinderForDogs/ViewTinderData';

interface Props {}
interface State {}
class App extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={AuthPage} />
          <Route exact path="/view-programmers" component={ViewProgrammers} />
          <Route exact path="/tinder-for-dogs" component={TinderForDogs} />
          <Route exact path="/tinder-for-dogs-data" component={viewTinderData} />
          <div />
        </div>
      </Router>
    );
  }
}

export default App;

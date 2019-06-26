import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
// import PrivateRoute from './axios/PrivateRoute';
import './App.css';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Posts from './components/Posts';
import { HomePage } from './components/HomePage';

class App extends React.Component {
  render() {
    return (
      <Router>
        <>
          <NavBar />
          <Route path="/" component={HomePage} />
          <Route path="/login" component={Login} />
          <Route exact path="/posts" component={Posts} />
          
        </>
      </Router>
    )
  }
}

export default App;
import React from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

class App extends React.Component {

  state = {
    openNav: false
  }
  
  openNav = () => {
    this.setState({openNav : true});
  }

  closeNav = () => {
    this.setState({openNav: false});
  }

  render() {
    return (
      <Router>
        <Header openNav={this.openNav}></Header>
        <Nav navToggle={this.state.openNav} closeNav={this.closeNav}></Nav>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/projects" component={Projects}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;

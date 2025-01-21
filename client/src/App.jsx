import React from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import NameTag from './components/NameTag';
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
      <div>
        <Header openNav={this.openNav}></Header>
        <Nav navToggle={this.state.openNav} closeNav={this.closeNav}></Nav>
        <NameTag></NameTag>
      </div>
    );
  }
}

export default App;

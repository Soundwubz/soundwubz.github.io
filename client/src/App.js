import React from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';

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
      <div className="App">
        <Header openNav={this.openNav}></Header>
        <Nav navToggle={this.state.openNav} closeNav={this.closeNav}></Nav>
      </div>
    );
  }
}

export default App;

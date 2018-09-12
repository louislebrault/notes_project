import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  getNotes() {
    let notes = [];
    if (this.props.notes && this.props.notes.length > 0) {
      notes = this.props.notes.map((note, index) => {
        return (<li className='note' key={index}>{note}</li>);
      });
    }
    return notes;
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          {this.getNotes()}
        </ul>
      </div>
    );
  }
}

export default App;

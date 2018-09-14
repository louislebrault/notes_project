import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayedNotes: [],
      inputValue: ''
    }

    this.getNotes();
  }

  getNotes() {
    if (this.props.notes && this.props.notes.length > 0) {
      this.state.displayedNotes = this.props.notes.map((note, index) => {
        return (<li className='note' key={index}>{note}</li>);
      });
    }
    return this.state.displayedNotes;
  }

  addNote(value) {
    const note = (<li className='note' key={this.state.displayedNotes.length}>{value}</li>);
    this.setState({displayedNotes: [...this.state.displayedNotes, note]});
  }

  onInputChange(e) {
    this.state.inputValue = e.target.value;
  }

  onButtonClick(e) {
    this.addNote(this.state.inputValue);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        <div>
          <input onChange={this.onInputChange.bind(this)} className='newNote'></input>
          <button
            onClick={this.onButtonClick.bind(this)} 
            className='addButton'
          >
            Add
          </button>
        </div>

        <ul ref="noteList">
          {this.state.displayedNotes}
        </ul>
      </div>
    );
  }
}

export default App;

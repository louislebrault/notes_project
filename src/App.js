import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NotesContainer from './notes/notesContainer.js';

class App extends Component {
  notes = [];
  
  constructor(props) {
    super(props);

    this.notes = this.props.notes || [];
  
    this.state = {
      notesContainer: <NotesContainer notes={this.props.notes}></NotesContainer>,
      inputValue: ''
    }
  }

  addNote(value) {
    this.notes.push(value);
    this.setState({notesContainer: <NotesContainer notes={this.notes}></NotesContainer>});
  }

  onInputChange(e) {
    this.setState({inputValue: e.target.value});
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

        {this.state.notesContainer}
      </div>
    );
  }
}

export default App;

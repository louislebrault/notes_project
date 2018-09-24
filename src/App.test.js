import React from 'react';
import ReactDOM from 'react-dom';
import {
  scryRenderedDOMComponentsWithClass,
  findRenderedDOMComponentWithClass,
  Simulate } from 'react-dom/test-utils';

import App from './App';

let container;
let app;

beforeEach(() => {
  container = document.createElement('div');
  app = ReactDOM.render(<App />, container);
});

it('renders without crashing', () => {
  ReactDOM.unmountComponentAtNode(container);
});

it('display given notes', () => {
  ReactDOM.unmountComponentAtNode(container);
  
  const notes = ['note 1', 'note 2'];
  app = ReactDOM.render(<App notes={notes}/>, container);

  const result = scryRenderedDOMComponentsWithClass(app, 'note');
  expect(result.length).toBe(notes.length)
});

it('display an input field to add notes', () => {
  const result = findRenderedDOMComponentWithClass(app, 'newNote');
  expect(result).toBeTruthy();
});

it('add a note when clicking on button if input is not empty', () => {
  const input = findRenderedDOMComponentWithClass(app, 'newNote');
  const button = findRenderedDOMComponentWithClass(app, 'addButton');

  simulateUserInput('change', input, 'a');
  simulateUserInput('click', button);

  findRenderedDOMComponentWithClass(app, 'note');
});

it('can move the input under an existing note to add one as a child', () => {
  const notes = ['note 1'];
  app = ReactDOM.render(<App notes={notes}/>, container);
  const note = findRenderedDOMComponentWithClass(app, 'note');
  simulateUserInput('click', note);
  simulateUserInput('keydown', note, "Enter");
  // verifier qu'on a un input sous la note sur laqulle on a clické
})

function simulateUserInput(event, target, value) {
  if (event === 'click') {
    Simulate.click(target);
  } else if (event === 'change') {
    Simulate.change(target, { target: { value }});
  } else if (event === 'keyDown') {
    // Simulate.keyDown(node, {key: "Enter", keyCode: 13, which: 13});
    // est ce que ca marche sans keycode ?
    Simulate.keyDown(target, {key: value});
  } else {
    throw new Error ('simulateUserInput :: unknown event :' + event);
  }
}

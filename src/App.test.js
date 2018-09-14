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

function simulateUserInput(event, target, value) {
  if (event === 'click') {
    Simulate.click(target);
  } else if (event === 'change') {
    Simulate.change(target, { target: { value }});
  } else {
    throw new Error ('simulateUserInput :: unknown event :' + event);
  }
}

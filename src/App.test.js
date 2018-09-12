import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('display given notes', () => {
  const notes = ['note 1', 'note 2'];

  const div = document.createElement('div');
  const app = ReactDOM.render(<App notes={notes}/>, div);

  const result = ReactTestUtils.scryRenderedDOMComponentsWithClass(app, 'note');
  expect(result.length).toBe(notes.length)
});

import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('display saved notes', () => {
  const notes = ['note 1', 'note 2'];

  const div = document.createElement('div');
  const test = ReactDOM.render(<App />, div);

  ReactTestUtils.findRenderedDOMComponentWithClass(test, 'note')
})

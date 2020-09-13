import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/=/i);
  expect(linkElement).toBeInTheDocument();
});

it('renders ithout crashing', ()=>{
  const div = document.createElement('div')
  ReactDOM.render(<App></App>, div)
})

it('check summ result', ()=>{
  
})
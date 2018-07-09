import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';


describe('the App in and its state')
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should have a landing page', () => {

  })

  it('should have a scroller page', () => {

  })

  it('should have an empty array in state', () => {

  })

  it('should test the fetch')

});
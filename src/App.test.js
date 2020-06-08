import React from 'react';
// import { render } from '@testing-library/react';
import { mount } from 'enzyme';
import App from './App';
// import Header from './Components/Header';
import Input from './Components/Input';



describe('App component', () => {
let component
beforeEach(() => {
  component = mount(<App />)
})

  it('should have 1 header subcomponent', () => {
    expect(component.find(Input)).toHaveLength(1)
  })

})









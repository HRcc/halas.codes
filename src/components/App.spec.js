import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

it('renders without crashing', () => {
  shallow(<App/>)
})

it('displays halas.codes', () => {
  const wrapper = shallow(<App />)

  expect(wrapper.text()).toContain('halas.codes')
})

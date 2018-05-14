import React from 'react'
import { shallow } from 'enzyme'
import Home from './Home'

it('renders without crashing', () => {
  shallow(<Home />)
})

it('displays a tagline', () => {
  const wrapper = shallow(<Home />)

  expect(wrapper.text()).toContain('I am Rudolf Halás')
})

it('displays navbar', () => {
  const wrapper = shallow(<Home />)

  expect(wrapper.find('Navbar')).toHaveLength(1)
})

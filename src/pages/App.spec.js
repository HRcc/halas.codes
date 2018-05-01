import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter, Route } from 'react-router-dom'
import App from './App'
import Home from './Home'

it('renders without crashing', () => {
  mount(<App/>)
})

it('routes to the home page by default', () => {
  const wrapper = mount(
    <MemoryRouter>
      <Route component={App} />
    </MemoryRouter>
  )

  expect(wrapper.find(App).props().location.pathname).toBe('/')
  expect(wrapper.find(Home)).toHaveLength(1)
})

it('redirects unmatched url to the home page', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/totally-not-found']}>
      <Route component={App} />
    </MemoryRouter>
  )

  expect(wrapper.find(Home)).toHaveLength(1)
})

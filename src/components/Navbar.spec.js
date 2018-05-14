import React from 'react'
import { shallow } from 'enzyme'
import Navbar from './Navbar'

it('renders navbar without links', () => {
  const wrapper = shallow(<Navbar />)

  expect(wrapper).toMatchSnapshot()
})

it('renders navbar with links and icons', () => {
  const links = [
    {
      href: 'github.url',
      icon: 'fab fa-github',
      label: 'Github'
    },
    {
      href: 'linkedin.url',
      icon: 'fab fa-linkedin',
      label: 'LinkedIn'
    }
  ]
  const wrapper = shallow(<Navbar links={links}/>)

  expect(wrapper).toMatchSnapshot()
})

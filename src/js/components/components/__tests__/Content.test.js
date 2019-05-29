/* REACT */
import React from 'react'

/* ENZYME */
import { shallow } from 'enzyme'

/* COMPONENTS */
import Content from '../Content'
import Main from '../../routes/Main'
import Album from '../../routes/Album'
import { Switch, Route } from 'react-router-dom'

describe('<Content />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Content />)
  })

  it('Should render <Content />', () => {
    shallow(<Content />)
  })

  it('Should render the Switch component', () => {
    const routerSwitch = wrapper.find(Switch)
    expect(routerSwitch.length).toBe(1)
  })

  it("Should render the Route's components", () => {
    const route = wrapper.find(Route)
    expect(route.length).toBe(2)
    expect(wrapper.find({ path: '/' }).length).toBe(1)
  })

  it('Should render a Route to main path that renders the Main component', () => {
    const route = wrapper.find({ path: '/', component: Main })
    expect(route.length).toBe(1)
  })

  it('Should render a Route to "album" path that renders the Album component', () => {
    const route = wrapper.find({ path: '/album', component: Album })
    expect(route.length).toBe(1)
  })
})

/* REACT */
import React from 'react'

/* ENZYME */
import { shallow } from 'enzyme'

/* COMPONENTS */
import ResultCard from '../ResultCard'

describe('<ResultCard />', () => {
  it('Should render <ResultCard />', () => {
    shallow(<ResultCard img="img.jpg" title="Album 1" artists="Artist 1" />)
  })

  it('Should render an article with children based on props', () => {
    const wrapper = shallow(
      <ResultCard img="img.jpg" title="Album 1" artists="Artist 1" />
    )

    expect(wrapper.find('article').length).toBe(1)
    expect(wrapper.find('img').props().src).toBe('img.jpg')
    expect(wrapper.find('img').props().alt).toBe('Album 1')
    expect(wrapper.find('h2').text()).toBe('Album 1')
    expect(wrapper.find('h3').text()).toBe('Artist 1')
  })
})

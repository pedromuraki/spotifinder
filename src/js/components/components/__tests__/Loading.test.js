/* REACT */
import React from 'react'

/* ENZYME */
import { shallow } from 'enzyme'

/* COMPONENTS */
import { Loading } from '../Loading'

describe('<Button />', () => {
  it('Should render the Loading component', () => {
    shallow(<Loading isLoading={true} />)
  })

  it('Should render a div and a paragraph with text "Loading..." if "isLoading" prop === true', () => {
    const wrapper = shallow(<Loading isLoading={true} />)

    expect(
      wrapper
        .find('div')
        .find('p')
        .text()
    ).toBe('Loading...')
  })

  it('Should not render the child div if "isLoading" prop === false', () => {
    const wrapper = shallow(<Loading isLoading={false} />)

    expect(wrapper.find('div').exists()).toBe(false)
  })
})

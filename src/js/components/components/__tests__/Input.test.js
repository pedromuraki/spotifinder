/* REACT */
import React from 'react'

/* ENZYME */
import { shallow } from 'enzyme'

/* COMPONENTS */
import Input from '../Input'

describe('<Input />', () => {
  it('Should render Input', () => {
    shallow(
      <Input inputName="" inputType="" inputValue="" handleChange={() => {}} />
    )
  })

  it('Should render an input element with attributes based on its props', () => {
    const mockHandleChange = jest.fn()

    const wrapper = shallow(
      <Input
        inputName="search"
        inputType="text"
        inputValue="example value"
        handleChange={mockHandleChange}
        inputPlaceholder="Search..."
        inputIsRequired={true}
      />
    )

    const input = wrapper.find('input')

    expect(input.props().name).toBe('search')
    expect(input.props().type).toBe('text')
    expect(input.props().value).toBe('example value')
    expect(input.props().onChange).toBe(mockHandleChange)
    expect(input.props().placeholder).toBe('Search...')
    expect(input.props().required).toBe(true)
  })
})

/* REACT */
import React from 'react'

/* ENZYME */
import { shallow } from 'enzyme'

/* COMPONENTS */
import Button from '../Button'

describe('<Button />', () => {
  it('Should render Button', () => {
    shallow(<Button btnType="text" btnText="Submit" />)
  })

  it('Should render a button element with "type" attribute passed as "btnType" prop', () => {
    const wrapper = shallow(<Button btnType="button" btnText="Submit" />)
    const button = wrapper.find('button')
    expect(button.props().type).toBe('button')
  })

  it('Should render a button element with the text content passed as "btnText" prop', () => {
    const wrapper = shallow(<Button btnType="text" btnText="Search" />)
    const button = wrapper.find('button')
    expect(button.text()).toBe('Search')
  })

  it('Should call the function passed as "handleClick" prop on button click event', () => {
    const mockHandleClick = jest.fn()

    const wrapper = shallow(
      <Button btnType="text" btnText="Search" handleClick={mockHandleClick} />
    )

    const button = wrapper.find('button')
    button.simulate('click')

    expect(mockHandleClick).toHaveBeenCalledTimes(1)
  })
})

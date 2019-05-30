/* REACT */
import React from 'react'

/* ENZYME */
import { shallow } from 'enzyme'

/* COMPONENTS */
import { Form } from '../Form'
import Button from '../Button'

describe('<Form />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Form />)
  })

  it('Should render Form', () => {
    shallow(<Form />)
  })

  it('Should render a form element', () => {
    const form = wrapper.find('form')
    expect(form.length).toBe(1)
  })

  it('Should render a text input element', () => {
    const input = wrapper.find('form').find('input[type="text"]')
    expect(input.length).toBe(1)
  })

  it('Should render a Button component with type "submit" and "Search" as text content', () => {
    const wrapper = shallow(<Form btnText="Search" />)
    const button = wrapper.find('form').find(Button)
    expect(button.length).toBe(1)
    expect(button.props().type).toBe('submit')
    expect(button.text()).toBe('Search')
  })

  it('Should call "handleFormSubmit" prop on form submit', () => {
    const mockOnSubmit = jest.fn()
    const wrapper = shallow(<Form handleFormSubmit={mockOnSubmit} />)

    const form = wrapper.find('form')
    form.simulate('submit')

    expect(mockOnSubmit).toHaveBeenCalledTimes(1)
  })

  it('Should receive the input value from "inputValue" prop', () => {
    const wrapper = shallow(<Form inputValue="My input value." />)

    const input = wrapper.find('input[type="text"]')

    expect(input.props().value).toBe('My input value.')
  })

  it('Should call "handleInputValueChange" prop on text input change', () => {
    const mockOnChange = jest.fn()
    const wrapper = shallow(<Form handleInputValueChange={mockOnChange} />)

    const input = wrapper.find('input[type="text"]')
    input.simulate('change')

    expect(mockOnChange).toHaveBeenCalledTimes(1)
  })

  it('Should receive the placeholder value from "inputPlaceholder" prop', () => {
    const wrapper = shallow(<Form inputPlaceholder="My placeholder." />)

    const input = wrapper.find('input[type="text"]')

    expect(input.props().placeholder).toBe('My placeholder.')
  })
})

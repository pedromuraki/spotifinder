/* REACT */
import React from 'react'

/* ENZYME */
import { shallow } from 'enzyme'

/* COMPONENTS */
import SearchForm from '../SearchForm'

describe('<SearchForm />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<SearchForm />)
  })

  it('Should render SearchForm', () => {
    shallow(<SearchForm />)
  })

  it('Should render a form element', () => {
    const form = wrapper.find('form')
    expect(form.length).toBe(1)
  })

  it('Should render a text input element', () => {
    const input = wrapper.find('form').find('input[type="text"]')
    expect(input.length).toBe(1)
  })

  it('Should render a submit button element', () => {
    const button = wrapper.find('form').find('button[type="submit"]')
    expect(button.length).toBe(1)
  })

  it('Should call "handleFormSubmit" prop on form submit', () => {
    const mockOnSubmit = jest.fn()
    const wrapper = shallow(<SearchForm handleFormSubmit={mockOnSubmit} />)

    const form = wrapper.find('form')
    form.simulate('submit')

    expect(mockOnSubmit).toHaveBeenCalledTimes(1)
  })

  it('Should call "handleInputValueChange" prop on text input change', () => {
    const mockOnChange = jest.fn()
    const wrapper = shallow(<SearchForm handleInputValueChange={mockOnChange} />)

    const input = wrapper.find('input[type="text"]')
    input.simulate('change')

    expect(mockOnChange).toHaveBeenCalledTimes(1)
  })

  it('Should receive the input value from "inputValue" prop', () => {
    const wrapper = shallow(<SearchForm inputValue="My input value." />)

    const input = wrapper.find('input[type="text"]')

    expect(input.props().value).toBe('My input value.')
  })
})

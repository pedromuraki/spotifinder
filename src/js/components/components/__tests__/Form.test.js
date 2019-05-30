/* REACT */
import React from 'react'

/* ENZYME */
import { shallow } from 'enzyme'

/* COMPONENTS */
import Form from '../Form'
import Input from '../Input'
import Button from '../Button'

describe('<Form />', () => {
  let wrapper
  let mockHandleSubmit

  const inputItems = [
    {
      inputName: 'search',
      inputType: 'text',
      inputPlaceholder: 'Search for an album or a track...',
      inputIsRequired: true,
      inputValue: ''
    },
    {
      inputName: 'email',
      inputType: 'email',
      inputPlaceholder: 'Type your e-mail...',
      inputValue: ''
    }
  ]

  beforeEach(() => {
    mockHandleSubmit = jest.fn()

    wrapper = shallow(
      <Form
        handleSubmit={mockHandleSubmit}
        handleChange={() => {}}
        inputs={inputItems}
        btnText="Submit"
      />
    )
  })

  it('Should render Input\'s components based on "inputs" prop length', () => {
    const inputs = wrapper.find(Input)
    expect(inputs.length).toBe(inputItems.length)
  })

  it('Should render Input\'s components with the correct props based on "inputs" prop', () => {
    const inputs = wrapper.find(Input)

    expect(inputs.at(0).props().inputName).toBe('search')
    expect(inputs.at(0).props().inputType).toBe('text')
    expect(inputs.at(0).props().inputPlaceholder).toBe(
      'Search for an album or a track...'
    )
    expect(inputs.at(0).props().inputIsRequired).toBe(true)
    expect(inputs.at(0).props().inputValue).toBe('')
  })

  it('Should render a Button component with "btnText" prop inherited from Form', () => {
    const button = wrapper.find(Button)
    expect(button.length).toBe(1)
    expect(button.props().btnText).toBe('Submit')
  })

  it('Should call the function passed as "handleSubmit" prop on form submit', () => {
    const form = wrapper.find('form')
    form.simulate('submit')

    expect(mockHandleSubmit).toHaveBeenCalledTimes(1)
  })
})

/* REACT */
import React from 'react'

/* ENZYME */
import { shallow } from 'enzyme'

/* COMPONENTS */
import FormContainer from '../FormContainer'
import Form from '../../components/Form'

describe('<FormContainer />', () => {
  let wrapper
  let mockHandleSubmit

  beforeEach(() => {
    mockHandleSubmit = jest.fn()

    wrapper = shallow(
      <FormContainer
        handleSubmit={mockHandleSubmit}
        inputs={[{ inputName: 'email' }, { inputName: 'phone' }]}
        btnText="Submit"
      />
    )
  })

  it('It should set the "values" state based on "inputs" prop', () => {
    expect(wrapper.state().values).toStrictEqual({ email: '', phone: '' })
  })

  it('Test method "setInitialValues": It should return an object with values based on inputs param', () => {
    const instance = wrapper.instance()

    const inputs = [{ inputName: 'email' }, { inputName: 'phone' }]
    const expected = { email: '', phone: '' }

    expect(instance.setInitialValues(inputs)).toStrictEqual(expected)
  })

  it('Test method "handleChange": It should modify state based on event target', () => {
    const instance = wrapper.instance()

    const e = {
      target: {
        name: 'email',
        value: 'my.email@gmail.com'
      }
    }

    instance.handleChange(e)

    expect(wrapper.state().values).toStrictEqual({
      email: 'my.email@gmail.com',
      phone: ''
    })
  })

  it('Test method "handleSubmit": It should call the method passed as "handleSubmit" prop with "values" state as param', () => {
    const instance = wrapper.instance()

    const e = { preventDefault: jest.fn() }
    instance.handleSubmit(e)

    expect(e.preventDefault).toHaveBeenCalledTimes(1)
    expect(mockHandleSubmit).toHaveBeenCalledTimes(1)
    expect(mockHandleSubmit).toHaveBeenCalledWith({ email: '', phone: '' })
  })

  it('Test method "handleSubmit": It should reset the "values" state', () => {
    const instance = wrapper.instance()

    const e = { preventDefault: jest.fn() }
    instance.handleSubmit(e)

    expect(wrapper.state().values).toStrictEqual({
      email: '',
      phone: ''
    })
  })

  it('Should render a Form component with the correct props based on FormContainer props, state, and methods', () => {
    wrapper = shallow(
      <FormContainer
        handleSubmit={() => {}}
        handleChange={() => {}}
        inputs={[{ inputName: 'search' }, { inputName: 'name' }]}
        btnText="Search"
      />
    )

    const form = wrapper.find(Form)

    expect(form.length).toBe(1)

    expect(form.props().handleSubmit).toBe(wrapper.instance().handleSubmit)
    expect(form.props().handleChange).toBe(wrapper.instance().handleChange)

    expect(form.props().inputs).toStrictEqual([
      { inputName: 'search' },
      { inputName: 'name' }
    ])
    expect(form.props().values).toStrictEqual({
      search: '',
      name: ''
    })

    expect(form.props().btnText).toBe('Search')
  })
})

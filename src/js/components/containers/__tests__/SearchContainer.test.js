/* REACT */
import React from 'react'

/* ENZYME */
import { shallow } from 'enzyme'

/* COMPONENTS */
import { SearchContainer } from '../SearchContainer'
import FormContainer from '../FormContainer'
import ResultsList from '../../components/ResultsList'

describe('<SearchContainer />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<SearchContainer />)
  })

  it('Should render <SearchContainer />', () => {
    shallow(<SearchContainer />)
  })

  it('Should render a <FormContainer /> and a <ResultsList />', () => {
    const formContainer = wrapper.find(FormContainer)
    expect(formContainer.length).toBe(1)

    const resultsLists = wrapper.find(ResultsList)
    expect(resultsLists.length).toBe(1)
  })

  it('Should have a "handleSubmit" method, that is passed to FormContainer as a prop', () => {
    expect(wrapper.instance().handleSubmit.length).toBe(1)

    const formContainer = wrapper.find(FormContainer)
    expect(formContainer.props().handleSubmit).toBe(
      wrapper.instance().handleSubmit
    )
  })

  it('handleSubmit should call "search" method passed as prop with the correct params', () => {
    const mockSearch = jest.fn()
    wrapper = shallow(<SearchContainer token="12345" search={mockSearch} />)

    wrapper.instance().handleSubmit({ searchQuery: 'example' })
    expect(mockSearch).toHaveBeenCalledWith('example', '12345')
  })

  it('Should have a prop "inputs" that is passed to FormContainer as a prop', () => {
    const formContainer = wrapper.find(FormContainer)
    expect(formContainer.props().inputs).toBe(wrapper.instance().inputs)
  })
})

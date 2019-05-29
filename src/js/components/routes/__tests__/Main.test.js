/* REACT */
import React from 'react'

/* ENZYME */
import { shallow } from 'enzyme'

/* COMPONENTS */
import Main from '../Main'
import SearchFormContainer from '../../containers/SearchFormContainer'
import ResultsContainer from '../../containers/ResultsContainer'

describe('<Main />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Main />)
  })

  it('Should render <Main />', () => {
    shallow(<Main />)
  })

  it('Should render the SearchFormContainer component', () => {
    const searchFormContainer = wrapper.find(SearchFormContainer)
    expect(searchFormContainer.length).toBe(1)
  })

  it('Should render the ResultsContainer component', () => {
    const resultsContainer = wrapper.find(ResultsContainer)
    expect(resultsContainer.length).toBe(1)
  })
})

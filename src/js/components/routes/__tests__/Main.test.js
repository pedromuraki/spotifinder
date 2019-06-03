/* REACT */
import React from 'react'

/* ENZYME */
import { shallow } from 'enzyme'

/* COMPONENTS */
import Main from '../Main'
// import SearchContainer from '../../containers/SearchContainer'
// import ResultsContainer from '../../containers/ResultsContainer'

describe('<Main />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Main />)
  })

  it('Should render <Main />', () => {
    shallow(<Main />)
  })

  // it('Should render the Search component', () => {
  //   const search = wrapper.find(Search)
  //   expect(search.length).toBe(1)
  // })

  // it('Should render the ResultsContainer component', () => {
  //   const resultsContainer = wrapper.find(ResultsContainer)
  //   expect(resultsContainer.length).toBe(1)
  // })
})

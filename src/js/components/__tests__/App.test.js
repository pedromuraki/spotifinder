/* REACT */
import React from 'react'

/* ENZYME */
import { shallow, mount } from 'enzyme'

/* COMPONENTS */
import App from '../App'
import Header from '../components/Header'
import Content from '../components/Content'
import Footer from '../components/Footer'

describe('<App />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('Should render <App />', () => {
    shallow(<App />)
  })

  it('Should render the Header component', () => {
    const header = wrapper.find(Header)
    expect(header.length).toBe(1)
  })

  it('Should render the Content component', () => {
    const content = wrapper.find(Content)
    expect(content.length).toBe(1)
  })

  it('Should render the Footer component', () => {
    const footer = wrapper.find(Footer)
    expect(footer.length).toBe(1)
  })
})

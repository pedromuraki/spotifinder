/* REACT */
import React from 'react'

/* ENZYME */
import { shallow } from 'enzyme'

/* COMPONENTS */
import { App } from '../App'
import Header from '../components/Header'
import Content from '../components/Content'
import Footer from '../components/Footer'
import Loading from '../components/Loading'

/* ROUTER */
import history from '../../router/history'

describe('<App />', () => {
  it('Should render <App />', () => {
    shallow(<App token="12345" />)
  })

  describe('Children components', () => {
    let wrapper

    beforeEach(() => {
      wrapper = shallow(<App token="12345" />)
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

    it('Should render the Loading component', () => {
      const loading = wrapper.find(Loading)
      expect(loading.length).toBe(1)
    })
  })

  describe('componentDidMount', () => {
    let wrapper

    it('Should send user to auth url if not coming from it and token does not exist', () => {
      delete window.location
      window.location = { assign: jest.fn() }

      wrapper = shallow(<App token={null} />)

      expect(location.assign).toHaveBeenCalledWith(
        'https://accounts.spotify.com/authorize?client_id=6c1d012c158b4f0497d3d8c9099d2992&redirect_uri=http://0.0.0.0:8080/&response_type=token'
      )
    })

    it('Should call "setToken" if coming from auth url', () => {
      history.location.hash =
        '#access_token=99999&token_type=Bearer&expires_in=3600'

      const mockSetToken = jest.fn()
      wrapper = shallow(<App token={null} setToken={mockSetToken} />)

      expect(mockSetToken).toHaveBeenCalledWith('99999')
    })

    it('Should call "localStorage.setItem" if coming from auth url', () => {
      history.location.hash =
        '#access_token=99999&token_type=Bearer&expires_in=3600'

      delete window.localStorage
      window.localStorage = { setItem: jest.fn() }
      wrapper = shallow(<App token={null} setToken={() => {}} />)

      expect(localStorage.setItem).toHaveBeenCalledWith('token', '99999')
    })

    it('Should call "history.push" if coming from auth url', () => {
      history.location.hash =
        '#access_token=99999&token_type=Bearer&expires_in=3600'

      history.push = jest.fn()
      wrapper = shallow(<App token={null} setToken={() => {}} />)

      expect(history.push).toHaveBeenCalledWith('/')
    })
  })
})

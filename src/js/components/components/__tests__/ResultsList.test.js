/* REACT */
import React from 'react'

/* ENZYME */
import { shallow } from 'enzyme'

/* COMPONENTS */
import { ResultsList } from '../ResultsList'
import ResultCard from '../ResultCard'
import Button from '../Button'

const sampleAlbums = {
  items: [
    {
      name: 'Album 1',
      images: [{ url: 'album_1.jpg' }],
      artists: [{ name: 'Artist 1' }],
      id: '1'
    },
    {
      name: 'Album 2',
      images: [{ url: 'album_2.jpg' }],
      artists: [{ name: 'Artist 2' }],
      id: '2'
    },
    {
      name: 'Album 3',
      images: [{ url: 'album_3.jpg' }],
      artists: [{ name: 'Artist 3' }],
      id: '3'
    }
  ],
  next: 'http://example.com/'
}

const sampleTracks = {
  items: [
    {
      name: 'Album 1',
      album: {
        images: [{ url: 'album_1.jpg' }]
      },
      artists: [{ name: 'Artist 1' }],
      id: '1'
    },
    {
      name: 'Album 2',
      album: {
        images: [{ url: 'album_2.jpg' }]
      },
      artists: [{ name: 'Artist 2' }],
      id: '2'
    },
    {
      name: 'Album 3',
      album: {
        images: [{ url: 'album_3.jpg' }]
      },
      artists: [{ name: 'Artist 3' }],
      id: '3'
    }
  ]
}

describe('<ResultsList />', () => {
  it('Should render <ResultsList />', () => {
    shallow(
      <ResultsList
        albums={{}}
        tracks={{}}
        loadNext={() => {}}
        isLoading={false}
      />
    )
  })

  it('Should render a h1 tag with the text content based on "query" prop and "label"', () => {
    let wrapper
    let text

    // If "query" exists
    wrapper = shallow(
      <ResultsList
        albums={{}}
        tracks={{}}
        loadNext={() => {}}
        isLoading={false}
        query="nirvana"
      />
    )

    text = wrapper
      .find('section')
      .at(0)
      .find('h1')
      .text()

    expect(text).toBe('Results for "nirvana" in Albums')

    text = wrapper
      .find('section')
      .at(1)
      .find('h1')
      .text()

    expect(text).toBe('Results for "nirvana" in Tracks')

    // If "query" is null
    wrapper = shallow(
      <ResultsList
        albums={{}}
        tracks={{}}
        loadNext={() => {}}
        isLoading={false}
        query={null}
      />
    )

    text = wrapper
      .find('section')
      .at(0)
      .find('h1')
      .text()

    expect(text).toBe('Results in Albums')

    text = wrapper
      .find('section')
      .at(1)
      .find('h1')
      .text()

    expect(text).toBe('Results in Tracks')
  })

  it('Should render a <ResultCard /> for each item in "albums"', () => {
    const wrapper = shallow(
      <ResultsList
        albums={sampleAlbums}
        tracks={{}}
        loadNext={() => {}}
        isLoading={false}
      />
    )

    const rCard = wrapper
      .find('section')
      .at(0)
      .find(ResultCard)

    expect(rCard.length).toBe(3)
  })

  it('Should render a <ResultCard /> for each item in "tracks"', () => {
    const wrapper = shallow(
      <ResultsList
        albums={{}}
        tracks={sampleTracks}
        loadNext={() => {}}
        isLoading={false}
      />
    )

    const rCard = wrapper
      .find('section')
      .at(1)
      .find(ResultCard)

    expect(rCard.length).toBe(3)
  })

  it('Should render each <ResultCard /> with correct props based on "albums" items', () => {
    const wrapper = shallow(
      <ResultsList
        albums={sampleAlbums}
        tracks={{}}
        loadNext={() => {}}
        isLoading={false}
      />
    )

    const props = wrapper
      .find('section')
      .at(0)
      .find(ResultCard)
      .at(0)
      .props()

    expect(props).toStrictEqual({
      img: 'album_1.jpg',
      title: 'Album 1',
      artists: 'Artist 1'
    })
  })

  it('Should render each <ResultCard /> with correct props based on "tracks" items', () => {
    const wrapper = shallow(
      <ResultsList
        albums={{}}
        tracks={sampleTracks}
        loadNext={() => {}}
        isLoading={false}
      />
    )

    const props = wrapper
      .find('section')
      .at(1)
      .find(ResultCard)
      .at(2)
      .props()

    expect(props).toStrictEqual({
      img: 'album_3.jpg',
      title: 'Album 3',
      artists: 'Artist 3'
    })
  })

  it('Should render a paragraph with text content "No results to show." if "items" in "album" or "tracks" is empty and isLoading === false', () => {
    const wrapper = shallow(
      <ResultsList
        albums={{}}
        tracks={sampleTracks}
        loadNext={() => {}}
        isLoading={false}
      />
    )

    // paragraph at Albums results
    const pText = wrapper
      .find('section')
      .at(0)
      .find('p')
      .text()

    expect(pText).toBe('No results to show.')

    // paragraph at Tracks results
    const p = wrapper
      .find('section')
      .at(1)
      .find('p')

    expect(p.exists()).toBe(false)
  })

  it('Should render a <Button /> if "next" prop exists in "albums" or "tracks" object', () => {
    const wrapper = shallow(
      <ResultsList
        albums={sampleAlbums}
        tracks={{}}
        loadNext={() => {}}
        isLoading={false}
      />
    )

    const btn = wrapper
      .find('section')
      .at(0)
      .find(Button)

    expect(btn.length).toBe(1)
  })
})

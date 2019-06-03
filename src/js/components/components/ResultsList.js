/* REACT */
import React from 'react'
import PropTypes from 'prop-types'

/* REDUX */
import { connect } from 'react-redux'

/* COMPONENTS */
import ResultCard from './ResultCard'
import Button from './Button'

/* ACTION CREATORS */
import { loadNext } from '../../reducers/results/action-creators'

export const ResultsList = ({
  albums,
  tracks,
  loadNext,
  token,
  query,
  isLoading
}) => {
  const resultsByCat = (cat, label) => {
    const hasItems = cat.items && cat.items.length > 0
    return (
      <section>
        <h1>
          {query ? `Results for "${query}" in ${label}` : `Results in ${label}`}
        </h1>

        {hasItems &&
          cat.items.map(item => (
            <ResultCard
              img={item.album ? item.album.images[0].url : item.images[0].url}
              title={item.name}
              artists={item.artists[0].name}
              key={item.id}
            />
          ))}

        {!hasItems && !isLoading && <p>No results to show.</p>}

        {cat.next ? (
          <Button
            btnType="button"
            btnText="Show more..."
            handleClick={() => loadNext(cat.next, token)}
          />
        ) : null}
      </section>
    )
  }

  return (
    <>
      {resultsByCat(albums, 'Albums')}
      {resultsByCat(tracks, 'Tracks')}
    </>
  )
}

ResultsList.propTypes = {
  loadNext: PropTypes.func.isRequired,
  albums: PropTypes.object.isRequired,
  tracks: PropTypes.object.isRequired,
  token: PropTypes.string,
  query: PropTypes.string,
  isLoading: PropTypes.bool.isRequired
}

export default connect(
  state => {
    return {
      query: state.results.query,
      albums: state.results.albums,
      tracks: state.results.tracks,
      isLoading: state.results.isLoading,
      token: state.token
    }
  },
  { loadNext }
)(ResultsList)

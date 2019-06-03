/* REACT */
import React from 'react'
import PropTypes from 'prop-types'

/* REDUX */
import { connect } from 'react-redux'

/* ACTION CREATORS */
import { loadNext } from '../../reducers/results/action-creators'

/* COMPONENTS */
import ResultsList from './ResultsList'

const Results = ({ albums, tracks, query, token, isLoading, loadNext }) => {
  const defaultProps = {
    query,
    token,
    isLoading,
    loadNext
  }

  return (
    <>
      <ResultsList results={albums} label="Albums" {...defaultProps} />
      <ResultsList results={tracks} label="Tracks" {...defaultProps} />
    </>
  )
}

ResultsList.propTypes = {
  albums: PropTypes.object,
  tracks: PropTypes.object,
  query: PropTypes.string,
  token: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  loadNext: PropTypes.func.isRequired
}

export default connect(
  state => {
    return {
      albums: state.results.albums,
      tracks: state.results.tracks,
      query: state.results.query,
      token: state.token,
      isLoading: state.results.isLoading
    }
  },
  { loadNext }
)(Results)

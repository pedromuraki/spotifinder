/* REACT */
import React from 'react'
import PropTypes from 'prop-types'

/* COMPONENTS */
import ResultCard from './ResultCard'

const ResultsList = ({ results }) => {
  return (
    <>
      {results.map(result => {
        const { img, title, artist } = result
        return <ResultCard img={img} title={title} artist={artist} />
      })}
    </>
  )
}

ResultsList.propTypes = {
  results: PropTypes.array
}

export default ResultsList

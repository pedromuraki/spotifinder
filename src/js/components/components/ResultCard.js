/* REACT */
import React from 'react'
import PropTypes from 'prop-types'

const ResultCard = ({ img, title, artist }) => {
  return (
    <article>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h3>{artist}</h3>
    </article>
  )
}

ResultCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired
}

export default ResultCard

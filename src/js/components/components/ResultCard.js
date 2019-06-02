/* REACT */
import React from 'react'
import PropTypes from 'prop-types'

const ResultCard = ({ img, title, artists }) => {
  return (
    <article>
      <img src={img} alt={title} width="100" height="100" />
      <h2>{title}</h2>
      <h3>{artists}</h3>
    </article>
  )
}

ResultCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  artists: PropTypes.string.isRequired
}

export default ResultCard

/* REACT */
import React from 'react'
import PropTypes from 'prop-types'

/* COMPONENTS */
import ResultCard from './ResultCard'
import Button from './Button'

const ResultsList = props => {
  const { results, label, token, query, isLoading, loadNext } = props

  const hasItems = results.items && results.items.length > 0

  return (
    <>
      <section>
        <h1>
          {query ? `Results for "${query}" in ${label}` : `Results in ${label}`}
        </h1>

        {hasItems &&
          results.items.map(item => (
            <ResultCard
              img={item.album ? item.album.images[0].url : item.images[0].url}
              title={item.name}
              artists={item.artists[0].name}
              key={item.id}
            />
          ))}

        {!hasItems && !isLoading && <p>No results to show.</p>}

        {results.next ? (
          <Button
            btnType="button"
            btnText="Show more..."
            handleClick={() => loadNext(results.next, token)}
          />
        ) : null}
      </section>
    </>
  )
}

ResultsList.propTypes = {
  results: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  query: PropTypes.string,
  token: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  loadNext: PropTypes.func.isRequired
}

export default ResultsList

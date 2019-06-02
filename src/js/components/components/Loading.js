/* REACT */
import React from 'react'
import PropTypes from 'prop-types'

/* REDUX */
import { connect } from 'react-redux'

const Loading = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <div
          style={{
            position: 'fixed',
            left: '0',
            top: '0',
            width: '100%',
            height: '100vh',
            background: 'rgba(0,0,0,0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '40px',
            color: '#FFF'
          }}
        >
          <p>Loading...</p>
        </div>
      )}
    </>
  )
}

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired
}

export default connect(state => {
  return {
    isLoading: state.results.isLoading
  }
})(Loading)

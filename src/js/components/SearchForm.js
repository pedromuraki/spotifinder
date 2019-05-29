/* REACT */
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

/* COMPONENTS */
import Button from './Button'

const SearchForm = props => {
  return (
    <form onSubmit={props.handleFormSubmit} className={props.className}>
      <input
        type="text"
        placeholder="Search for..."
        value={props.inputValue}
        onChange={props.handleInputValueChange}
      />
      <Button primary type="submit">Search</Button>
    </form>
  )
}

const StyledSearchForm = styled(SearchForm)`
  input {
    border: 2px solid #000;
    border-radius: 5px;
  }
`

SearchForm.propTypes = {
  handleFormSubmit: PropTypes.func,
  className: PropTypes.string,
  inputValue: PropTypes.string,
  handleInputValueChange: PropTypes.func
}
// https://www.npmjs.com/package/prop-types

export default StyledSearchForm

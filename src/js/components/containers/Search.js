/* REACT */
import React from 'react'

/* CONTAINERS */
import FormContainer from './FormContainer'

const Search = () => {
  const inputs = [
    {
      inputName: 'search',
      inputType: 'text',
      inputPlaceholder: 'Search for an album or a track...',
      inputIsRequired: true
    }
  ]

  const handleSubmit = values => {
    console.log(values)
  }

  return (
    <FormContainer
      inputs={inputs}
      handleSubmit={handleSubmit}
      btnText="Search"
    />
  )
}

export default Search

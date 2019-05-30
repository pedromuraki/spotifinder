/* REACT */
import React from 'react'

/* CONTAINERS */
import FormContainer from '../containers/FormContainer'

const Search = () => {
  const inputs = [
    {
      inputName: 'search',
      inputType: 'text',
      inputPlaceholder: 'Search for an album or a track...'
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

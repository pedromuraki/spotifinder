import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import SearchForm from '../src/js/components/SearchForm'

storiesOf('SearchForm', module)
  .add('Basic', () => (
    <SearchForm
      handleFormSubmit={(e) => {
        e.preventDefault()
        e.persist()
        action('Submitted ' + e.target.children[0].value)(e)
      }}
      handleInputValueChange={action('Changed.')}
      className='form'
    />
  ))

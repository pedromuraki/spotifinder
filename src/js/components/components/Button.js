/* REACT */
import React from 'react'
import PropTypes from 'prop-types'

/* STYLES */
import styled from 'styled-components'
import fonts from '../../styles/constants/fonts'
import colors from '../../styles/constants/colors'

const Button = ({ btnType, btnText, children, handleClick, className }) => (
  <button type={btnType} onClick={handleClick} className={className}>
    {btnText || children}
  </button>
)

const StyledButton = styled(Button)`
  ${fonts.msBlack}
  background-color: ${colors.green};
  color: #fff;
  border-radius: 5px;

  ${props => {
    switch (props.size) {
      case 'sm':
        return `
          padding: 0 10px;
          height: 28px;
          line-height: 28px;
        `

      case 'md':
        return `
          padding: 0 20px;
          height: 38px;
          line-height: 38px;
        `

      case 'lg':
        return `
          padding: 0 30px;
          height: 48px;
          line-height: 48px;
        `

      default:
        return `
          padding: 0 20px;
          height: 38px;
          line-height: 38px;
        `
    }
  }}

  &:hover {
    background-color: ${colors.greenHover};
    transition: all 0.3s;
  }
`

Button.propTypes = {
  btnType: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  handleClick: PropTypes.func
}

export default StyledButton

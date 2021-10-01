import styled from 'styled-components'
import { Colors } from '../../@types'

const Button = styled.button`
  display: block;
  position: relative;
  cursor: pointer;
  border: 2px solid ${Colors.primary};
  background-color: ${Colors.primary};
  color: white;
  box-shadow: none;
  font-size: 14px;
  border-radius: 5px;
  padding: 12px 20px;
  transition: all 0.1s ease;
  outline: none;
  &:hover {
    background-color: ${Colors.primaryAccent};
    border-color: ${Colors.primaryAccent};
  }
  &:active {
    background-color: ${Colors.primary};
  }
  &:focus {
    border-color: ${Colors.dark};
  }
`

export default Button

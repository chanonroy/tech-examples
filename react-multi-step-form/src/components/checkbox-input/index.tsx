import React from 'react'
import styled from 'styled-components'
import { Colors } from '../../@types'

const CheckboxContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  outline: none;
  background-color: transparent;
  border: none;
  padding: 0;
`

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`

const StyledCheckbox = styled.div<{ checked?: boolean }>`
  display: inline-block;
  width: 18px;
  height: 18px;
  border: 1px solid;
  border-radius: 3px;
  background: ${({ checked }) => (checked ? `${Colors.primary}` : 'white')};
  border-color: ${({ checked }) =>
    checked ? `${Colors.primary}` : 'lightgrey'};
  transition: all 150ms;

  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`

const CheckboxInput = ({
  checked,
  onChange,
  label,
}: {
  checked: boolean
  onChange: (newValue: boolean) => void
  label: string
}) => (
  <CheckboxContainer onClick={() => onChange(!checked)}>
    <div>
      <StyledCheckbox checked={checked}>
        <Icon viewBox='0 0 24 24'>
          <polyline points='20 6 9 17 4 12' />
        </Icon>
      </StyledCheckbox>
    </div>
    <div
      style={{
        marginLeft: 12,
        textAlign: 'left',
        color: !checked ? `${Colors.dark}` : Colors.primary,
      }}
    >
      {label}
    </div>
  </CheckboxContainer>
)

export default CheckboxInput

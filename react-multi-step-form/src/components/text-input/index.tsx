import React, { InputHTMLAttributes } from 'react'
import styled from 'styled-components'
import { Colors } from '../../@types'

const StyledInput = styled.input<{ error?: boolean }>`
  display: block;
  border-radius: 4px;
  border: 1px solid;
  line-height: 20px;
  font-size: 14px;
  width: 100%;
  padding: 12px 15px;
  outline: none;
  user-select: none;
  box-sizing: border-box;
  border-color: ${({ error }) => (error ? Colors.danger : '#dcdfe6')};
  &:hover {
    border: 1px solid lightgrey;
  }
  &:focus {
    border: 1px solid ${Colors.primary};
  }
  &::placeholder {
    color: lightgrey;
  }
`

export default function TextInput({
  onEnterKey,
  ...props
}: {
  error?: boolean
  onEnterKey?: () => void
} & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <StyledInput
      onKeyUp={({ key }) => {
        if (key === 'Enter') {
          if (onEnterKey) onEnterKey()
        }
      }}
      {...props}
    />
  )
}

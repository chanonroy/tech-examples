import styled from 'styled-components'
import { Colors } from '../../@types'

export const StatusItemContainer = styled.div`
  display: flex;
  background-color: white;
  margin-bottom: 30px;
  box-shadow: 0px 5px 15px rgb(59 59 59 / 5%);
  border-radius: 10px;
`

export const StatusItem = styled.div<{ active?: boolean }>`
  display: flex;
  justify-content: center;
  flex: 1;
  font-size: 14px;
  background-color: ${({ active }) =>
    active ? `${Colors.primary}` : 'transparent'};
  color: ${({ active }) => (active ? 'white' : `${Colors.dark}`)};
  padding: 20px 30px;

  &:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  &:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`

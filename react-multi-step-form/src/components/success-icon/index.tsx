import styled from 'styled-components'
import { Colors } from '../../@types'

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`

export default function SuccessIcon({ size = 40 }: { size?: number }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: size,
        width: size,
        backgroundColor: Colors.success,
        borderRadius: '50%',
      }}
    >
      <Icon height={size / 2} viewBox='0 0 24 24'>
        <polyline points='20 6 9 17 4 12' />
      </Icon>
    </div>
  )
}

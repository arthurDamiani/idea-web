import styled from 'styled-components'
import { t } from 'i18next'

const Title = styled.h1`
  color: ${(p) => p.theme.primary};
  font-size: 50px;
`

export default function Login() {
  return (
    <button onClick={() => sessionStorage.setItem('token',  'oi')}>oi</button>
  )
}
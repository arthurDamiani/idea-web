import styled from 'styled-components'

export const Container = styled.div`
  width: 350px;
  height: 300px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.secondary};
  border-radius: 8px;
  margin: calc(50vh - 300px) auto;
`

export const LoginForm = styled.form`
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h2`
  color: ${({ theme }) => theme.primary};
`

export const Input = styled.input`
  height: 25px;
  padding: 5px;
`

export const Button = styled.button`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};
  padding: 5px;
  border-radius: 8px;
`
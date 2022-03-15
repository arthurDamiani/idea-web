import styled from 'styled-components'
import { t } from 'i18next'

const Container = styled.div`
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

const LoginForm = styled.form`
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.h2`
  color: ${({ theme }) => theme.primary};
`

const Input = styled.input`
  height: 25px;
  padding: 5px;
`

const Button = styled.button`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};
  padding: 5px;
  border-radius: 8px;
`

const LoginBox = () => {
  return (
    <Container>
      <Title>{t('login.title')}</Title>
      <LoginForm onSubmit={() => alert('oi')}>
        <Input 
          placeholder={t('login.email')} 
          type='email'
          required 
        />
        <Input 
          placeholder={t('login.password')} 
          required 
        />
        <Button type='submit'>{t('login.title')}</Button>
      </LoginForm>
      <p>{t('login.notRegistered')}<a href='/'>{t('login.signup')}</a></p>
    </Container>
  )
}

export default LoginBox

import { useState } from 'react'
import * as LB from './LoginBox'
import { useRouter } from 'next/router'
import { t } from 'i18next'

const LoginBox = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();

  const onSubmit = () => {
    sessionStorage.setItem('token', 'blz')
    router.reload();
  }

  return (
    <LB.Container>
      <LB.Title>{t('login.title')}</LB.Title>  
      <LB.LoginForm onSubmit={onSubmit}>
        <LB.Input 
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder={t('login.email')} 
          type='email'
          required 
        />
        <LB.Input 
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder={t('login.password')} 
          required 
        />
        <LB.Button type='submit'>{t('login.title')}</LB.Button>
      </LB.LoginForm>
      <p>{t('login.notRegistered')}<a href='/signup'>{t('login.signup')}</a></p>
    </LB.Container>
  )
}

export default LoginBox

import type { AppProps } from 'next/app'
import load from '../utils/loadLocale'
import i18n from 'i18next'

i18n.init({
  lng: 'pt-BR',
  debug: false,
  fallbackLng: 'pt-BR',
  resources: {
    'pt-BR': {
      translation: load('pt-BR')
    }
  }
})

const MyApp = ({ Component, pageProps }: AppProps) => {

  return (
    <Component {...pageProps} />
  );
}

export default MyApp;
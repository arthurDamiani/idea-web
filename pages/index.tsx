import withAuth from '@components/withAuth'
import { t } from 'i18next'

const Home = () => {
  return (
    <div>
      <p>{t('title')}</p>
      <p>feuibbebeh</p>
    </div>
  )
}

export default withAuth(Home)

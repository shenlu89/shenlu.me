import 'styles/globals.css'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Layout from 'components/Layout'

const App: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
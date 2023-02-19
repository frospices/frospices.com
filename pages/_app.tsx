import type { AppProps } from 'next/app'

import ThemeProvider from '../components/ThemeProvider'
import Body from '../components/Body'
import Header from '../components/Header'
import Footer  from '../components/Footer'
import WaitingList from '../components/WaitingList'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider>
        <Header />
        <Body>
          <Component {...pageProps} />
        </Body>
        <WaitingList />
        <Footer />
      </ThemeProvider>
    </>
  )
}
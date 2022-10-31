import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import splitbee from '@splitbee/web'

splitbee.init()

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

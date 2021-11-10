import '../styles/globals.css'
import type { AppContext, AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  console.log(pageProps)
  return <Component {...pageProps} />
}

MyApp.getInitialProps = () => {
  return {
    pageProps: {
      test: 100,
    },
  }
}

export default MyApp

import '../styles/globals.css';
import '../styles/tailwind.css';
import { GlobalStyles } from 'twin.macro';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

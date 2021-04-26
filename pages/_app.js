import { AppProvider } from 'hooks/use-provider'

import '../styles/globals.css'
import '../styles/font.css'
import '../styles/button.css'
import '../styles/span.css'
import '../styles/paginate.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp

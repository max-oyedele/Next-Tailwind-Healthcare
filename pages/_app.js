import { AppProvider } from 'hooks/use-provider'

import '../styles/globals.css'
import '../styles/button.css'
import '../styles/paginate.css'

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp

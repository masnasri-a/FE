import '../styles/globals.css'
import '../styles/styles.scss'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css'
import { Poppins } from '@next/font/google'

const poppins = Poppins({ weight: "400" })

export default function App({ Component, pageProps }: AppProps) {
  return(
    <main className={poppins.className}>
      <Component {...pageProps} />
    </main>
  )

}

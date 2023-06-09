import Layout from '@/layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

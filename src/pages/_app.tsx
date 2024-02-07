import { NextPage } from "next"
import type { AppProps } from "next/app"

import Providers from "@/providers"

import ErrorBoundary from "@/components/error-boundary"
import Layout from "@/components/layout"

import "@/styles/globals.css"
import Navbar from "@/components/Navbar/Navbar"

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <ErrorBoundary>
      <Providers>
        <Layout>
         <Navbar />
          <Component {...pageProps} />
          
        </Layout>
      </Providers>
    </ErrorBoundary>
  )
}

export default App

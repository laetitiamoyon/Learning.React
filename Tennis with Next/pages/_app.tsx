import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {QueryClient, QueryClientProvider} from "react-query";

function MyApp({ Component, pageProps }: AppProps)
{
  const queryClient = new QueryClient()
  // @ts-ignore
  return <QueryClientProvider client={queryClient}>
    <Component {...pageProps} />
  </QueryClientProvider>
}

export default MyApp

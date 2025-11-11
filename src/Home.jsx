import React, { lazy, Suspense } from 'react'
import App from './App'

const FetchComponent = lazy(()=> import('./Fetch'))

function Home() {
  return (
    <Suspense fallback={<App/>}>
      <FetchComponent/>
    </Suspense>
  )
}

export default Home
import type { NextPage } from 'next'
import Head from 'next/head'
import { NextRequest } from 'next/server'
import styles from '../styles/Home.module.css'

const ViewMovement: NextPage = (req: any) => {
  return (
    <div>
      <Head>
          <title>Movimento Singolo</title>
          <meta name="description" content="Movimento singolo" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        Hai scelto {Object.keys(req).length}
      </div>
    </div>
  )
}

export default ViewMovement

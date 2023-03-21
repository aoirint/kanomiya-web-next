import Navbar from '@/components/Navbar'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>かのみや</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <section className='section'>
        <div className='container'>
          <div className='columns is-vcentered is-mobile'>
            <div className='column is-narrow'>
              <Image
                src="/images/icon.png"
                alt="Logo image"
                className='image is-96x96'
                width="96"
                height="96"
              />
            </div>
            <div className='column'>
              <h1 className='title is-2'>
                かのみや
              </h1>
              <p className='subtitle is-6 pt-1'>
                ニコニコ・ボイロ・ゲーム
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

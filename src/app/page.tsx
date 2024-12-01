import Navbar from '@/components/Navbar'
import Head from 'next/head'
import Image from 'next/image'

import { z } from 'zod'
import { readFile } from 'fs/promises'
import LiveInfoSection from '@/components/LiveInfoSection'

const VideoSchema = z.object({
  title: z.string(),
  date: z.string(),
  thumbnailUrl: z.string(),
  youtubeUrl: z.string().nullable(),
  nicovideoUrl: z.string().nullable(),
})

export type Video = z.infer<typeof VideoSchema>

const VideoListContainerSchema = z.object({
  videos: z.array(VideoSchema),
})

export type VideoListContainer = z.infer<typeof VideoListContainerSchema>

export default async function Home() {
  const videoListContainerFile = 'public/videos/list.json'

  let videoListContainer = null
  try {
    const videoListContainerString = await readFile(videoListContainerFile, 'utf-8')
    const videoListContainerObject = JSON.parse(videoListContainerString)
    videoListContainer = await VideoListContainerSchema.parseAsync(videoListContainerObject)
  } catch (error) {
    console.error(error)
  }

  const videos = videoListContainer?.videos ?? []

  return (
    <>
      <Head>
        <title>かのみや</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <section className='section'>
        <div className='container'>
          <div className='columns is-vcentered is-mobile'>
            <div className='column is-narrow'>
              <Image
                src='/images/icon.png'
                alt='Logo image'
                className='image is-96x96'
                width='96'
                height='96'
              />
            </div>
            <div className='column'>
              <h1 className='title is-2'>かのみや</h1>
              <p className='subtitle is-6 pt-1'>ニコニコ・ボイロ・ゲーム</p>
            </div>
          </div>
          <LiveInfoSection />
          <h2 className='title is-4 mt-5'>動画</h2>
          <p className='subtitle is-6 mb-5'>合成音声キャラクターを使った動画を投稿しています。</p>
          <div className='columns is-desktop is-vcentered is-multiline'>
            {videos.map((video, videoIndex) => (
              <div key={videoIndex} className='column is-half-desktop'>
                <article className='media'>
                  <figure className='media-left'>
                    <p className='image is-128x128'>
                      <Image
                        src={video.thumbnailUrl}
                        alt='Thumbnail image'
                        width='1920'
                        height='1080'
                      />
                    </p>
                  </figure>
                  <div className='media-content'>
                    <h2 className='title is-5'>{video.title}</h2>
                    <h3 className='subtitle is-6 mb-3'>{video.date}</h3>
                    <div>
                      {video.nicovideoUrl != null ? (
                        <a className='button pl-2 mr-2' href={video.nicovideoUrl}>
                          <figure className='image is-32x32'>
                            <Image
                              src='/videos/images/niconico_icon_black.png'
                              className='visible-if-light'
                              alt='Niconico icon'
                              width='302'
                              height='302'
                            />
                            <Image
                              src='/videos/images/niconico_icon_white.png'
                              className='visible-if-dark'
                              alt='Niconico icon'
                              width='302'
                              height='302'
                            />
                          </figure>
                          ニコニコ動画
                        </a>
                      ) : (
                        ''
                      )}
                      {video.youtubeUrl != null ? (
                        <a className='button pl-2 mr-2' href={video.youtubeUrl}>
                          <figure className='image is-32x32'>
                            <Image
                              src='/videos/images/youtube_icon.png'
                              alt='YouTube icon'
                              width='1300'
                              height='1300'
                            />
                          </figure>
                          YouTube
                        </a>
                      ) : (
                        ''
                      )}
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

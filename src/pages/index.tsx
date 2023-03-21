import useLiveinfoApiMiddlewareNicolive from '@/api/useLiveinfoApiMiddlewareNicolive'
import useLiveinfoApiMiddlewareYtlive from '@/api/useLiveinfoApiMiddlewareYtlive'
import Navbar from '@/components/Navbar'
import NicoliveCard from '@/components/NicoliveCard'
import YtliveCard from '@/components/YtliveCard'
import Head from 'next/head'
import Image from 'next/image'

interface Video {
  title: string
  date: string
  thumbnailUrl: string
  youtubeUrl: string | null
  nicovideoUrl: string | null
}

const videos: Video[] = [
  {
    title: "【ずんだもんうぉーず】クイーン！　バクダン祭りで地雷除去 #1【Among Us】",
    date: "2022-08-13",
    thumbnailUrl: "/videos/thumbnails/zundamonwars_amongus_1.png",
    youtubeUrl: "https://www.youtube.com/watch?v=T7fmoCUc8Q0",
    nicovideoUrl: "https://www.nicovideo.jp/watch/sm40894795",
  },
  {
    title: "【シルシランドずんだもん視点】シルシランドレポート【Fall Guys】",
    date: "2022-04-23",
    thumbnailUrl: "/videos/thumbnails/sirusiland_1.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=CG0TROESjwM",
    nicovideoUrl: "https://www.nicovideo.jp/watch/sm40364332",
  },
]

export default function Home() {
  const { nicoliveData } = useLiveinfoApiMiddlewareNicolive();
  const { ytliveData } = useLiveinfoApiMiddlewareYtlive();

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
          {nicoliveData != null && nicoliveData.program.isOnair ? (
            <NicoliveCard
              programUrl={nicoliveData.program.url}
              programTitle={nicoliveData.program.title}
              communityUrl={nicoliveData.community.url}
              communityName={nicoliveData.community.name}
              userUrl={nicoliveData.user.url}
              userName={nicoliveData.user.name}
              thumbnailUrl={nicoliveData.program.thumbnails[0] ?? null}
            />
          ) : ''}
          {ytliveData != null && ytliveData.program.isOnair ? (
            <YtliveCard
              programUrl={ytliveData.program.url}
              programTitle={ytliveData.program.title}
              channelUrl={ytliveData.channel.url}
              channelName={ytliveData.channel.name}
              thumbnailUrl={ytliveData.program.thumbnails.standard?.url ?? null}
            />
          ) : ''}
          <h2 className='title is-4 mt-5'>
            動画
          </h2>
          <p className='subtitle is-6 mb-5'>
            合成音声キャラクターを使った動画を投稿しています。
          </p>
          <div className='columns is-vcentered'>
            {videos.map((video, videoIndex) => (
              <div key={videoIndex} className='column'>
                <article className="media">
                  <figure className="media-left">
                    <p className="image is-128x128">
                      <Image
                        src={video.thumbnailUrl}
                        alt="Thumbnail image"
                        width="1920"
                        height="1080"
                      />
                    </p>
                  </figure>
                  <div className="media-content">
                    <h2 className='title is-5'>{video.title}</h2>
                    <h3 className='subtitle is-6 mb-3'>{video.date}</h3>
                    <div>
                      {video.nicovideoUrl != null ? (
                        <a className='button pl-2 mr-2' href={video.nicovideoUrl}>
                          <figure className="image is-32x32">
                            <Image
                              src="/videos/images/niconico_icon.png"
                              alt="Niconico icon"
                              width="302"
                              height="302"
                            />
                          </figure>
                          ニコニコ動画
                        </a>
                      ) : ''}
                      {video.youtubeUrl != null ? (
                        <a className='button pl-2 mr-2' href={video.youtubeUrl}>
                          <figure className="image is-32x32">
                            <Image
                              src="/videos/images/youtube_icon.png"
                              alt="YouTube icon"
                              width="1300"
                              height="1300"
                            />
                          </figure>
                          YouTube
                        </a>
                      ) : ''}
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

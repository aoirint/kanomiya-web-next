import Image from 'next/image'

export default function VideoCard(props: {
  title: string
  date: string
  thumbnailUrl: string
  nicovideoUrl: string | null | undefined
  youtubeUrl: string | null | undefined
}) {
  const { title, date, thumbnailUrl, nicovideoUrl, youtubeUrl } = props

  return (
    <>
      <div className='column is-half-desktop'>
        <article className='media'>
          <figure className='media-left'>
            <p className='image is-128x128'>
              <Image src={thumbnailUrl} alt='Thumbnail image' width='1920' height='1080' />
            </p>
          </figure>
          <div className='media-content'>
            <h2 className='title is-5'>{title}</h2>
            <h3 className='subtitle is-6 mb-3'>{date}</h3>
            <div>
              {nicovideoUrl != null ? (
                <a className='button mr-2' href={nicovideoUrl}>
                  ニコニコ動画
                </a>
              ) : (
                ''
              )}
              {youtubeUrl != null ? (
                <a className='button mr-2' href={youtubeUrl}>
                  YouTube
                </a>
              ) : (
                ''
              )}
            </div>
          </div>
        </article>
      </div>
    </>
  )
}

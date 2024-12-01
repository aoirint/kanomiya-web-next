import { z } from 'zod'
import { readFile } from 'fs/promises'

import VideoCard from '@/components/VideoCard'

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

export default async function VideoInfoSection() {
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
      <h2 className='title is-4 mt-5'>動画</h2>
      <p className='subtitle is-6 mb-5'>合成音声キャラクターを使った動画を投稿しています。</p>
      <div className='columns is-desktop is-vcentered is-multiline'>
        {videos.map((video, videoIndex) => (
          <VideoCard
            key={videoIndex}
            title={video.title}
            date={video.date}
            thumbnailUrl={video.thumbnailUrl}
            nicovideoUrl={video.nicovideoUrl}
            youtubeUrl={video.youtubeUrl}
          />
        ))}
      </div>
    </>
  )
}

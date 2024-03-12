'use client'

import React from 'react'

interface YtliveCardProps {
  programUrl: string
  programTitle: string
  channelUrl: string
  channelName: string
  thumbnailUrl: string | null
}

const YtliveCard: React.FC<YtliveCardProps> = ({
  programUrl,
  programTitle,
  channelUrl,
  channelName,
  thumbnailUrl,
}) => {
  return (
    <>
      <div
        className='card mb-4'
        style={
          thumbnailUrl != null
            ? {
                backgroundImage: `url(${thumbnailUrl})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundColor: 'whitesmoke',
              }
            : {}
        }
      >
        <div
          className='card-content py-4'
          style={
            thumbnailUrl != null
              ? {
                  backgroundColor: 'rgba(255, 255, 255, 0.75)',
                }
              : {}
          }
        >
          <div className='media'>
            <div className='media-content'>
              <p className='title is-5'>
                <a href={programUrl} style={{ color: 'inherit' }}>
                  {programTitle}
                </a>
              </p>
              <p className='subtitle is-7 mb-2'>
                <a href={channelUrl} style={{ color: 'inherit' }}>
                  {channelName}
                </a>
              </p>
              <p className='is-size-7 has-text-right has-text-grey'>
                Powered by{' '}
                <a href='https://www.youtube.com/channel/UC7OazbQ3Eo9vrkcReXGIZkQ'>
                  YouTube Data API
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default YtliveCard

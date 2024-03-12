import React from 'react'

interface NicoliveCardProps {
  programUrl: string
  programTitle: string
  communityUrl: string
  communityName: string
  userUrl: string
  userName: string
  thumbnailUrl: string | null
}

const NicoliveCard: React.FC<NicoliveCardProps> = ({
  programUrl,
  programTitle,
  communityUrl,
  communityName,
  userUrl,
  userName,
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
              <>
                <p className='title is-5'>
                  <a href={programUrl} style={{ color: 'inherit' }}>
                    {programTitle}
                  </a>
                </p>
                <p className='subtitle is-7 mb-2'>
                  <a href={communityUrl} style={{ color: 'inherit' }}>
                    {communityName}
                  </a>
                  {' - '}
                  <a href={userUrl} style={{ color: 'inherit' }}>
                    {userName}
                  </a>
                </p>
              </>
              <p className='is-size-7 has-text-right has-text-grey'>
                Powered by <a href='https://com.nicovideo.jp/community/co5633084'>ニコニコ生放送</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NicoliveCard

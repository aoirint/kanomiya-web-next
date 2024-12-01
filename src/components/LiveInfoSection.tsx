'use client'

import useLiveinfoApiMiddlewareNicolive from '@/hooks/useLiveinfoApiMiddlewareNicolive'
import useLiveinfoApiMiddlewareYtlive from '@/hooks/useLiveinfoApiMiddlewareYtlive'

import NicoliveCard from '@/components/NicoliveCard'
import YtliveCard from '@/components/YtliveCard'

export default function LiveInfoSection() {
  const { nicoliveData } = useLiveinfoApiMiddlewareNicolive()
  const { ytliveData } = useLiveinfoApiMiddlewareYtlive()
  const nicoliveCardVisible = nicoliveData != null && nicoliveData.program.isOnair
  const ytliveCardVisible = ytliveData != null && ytliveData.program.isOnair

  return (
    <>
      {nicoliveCardVisible || ytliveCardVisible ? (
        <>
          <h2 className='title is-4 mt-5'>ライブ配信中</h2>
          {nicoliveCardVisible ? (
            <NicoliveCard
              programUrl={nicoliveData.program.url}
              programTitle={nicoliveData.program.title}
              communityUrl={nicoliveData.community.url}
              communityName={nicoliveData.community.name}
              userUrl={nicoliveData.user.url}
              userName={nicoliveData.user.name}
              thumbnailUrl={nicoliveData.program.thumbnails[0] ?? null}
            />
          ) : (
            ''
          )}
          {ytliveCardVisible ? (
            <YtliveCard
              programUrl={ytliveData.program.url}
              programTitle={ytliveData.program.title}
              channelUrl={ytliveData.channel.url}
              channelName={ytliveData.channel.name}
              thumbnailUrl={ytliveData.program.thumbnails.standard?.url ?? null}
            />
          ) : (
            ''
          )}
        </>
      ) : (
        ''
      )}
    </>
  )
}

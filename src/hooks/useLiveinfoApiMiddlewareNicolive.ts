import React from 'react'

interface LiveinfoApiMiddlewareV1NicoliveResponse {
  program: {
    id: string
    title: string
    description: string
    url: string
    thumbnails: string[]
    startTime: string
    endTime: string
    isOnair: boolean
  }
  community: {
    name: string
    url: string
    iconUrl: string
  }
  user: {
    name: string
    url: string
    iconUrl: string
  }
}

const useLiveinfoApiMiddlewareNicolive = () => {
  const [loading, setLoading] = React.useState<boolean>(true)
  const [nicoliveData, setNicoliveData] =
    React.useState<LiveinfoApiMiddlewareV1NicoliveResponse | null>(null)

  React.useEffect(() => {
    if (nicoliveData === null) {
      fetch('https://liveinfo-api-middleware.aoirint.com/v1/nicolive')
        .then((data) => data.json())
        .then((data: LiveinfoApiMiddlewareV1NicoliveResponse) => {
          setLoading(false)
          setNicoliveData(data)
        })
        .catch((error: unknown) => {
          console.error(error)
        })
    }
  }, [loading, nicoliveData])

  return {
    loading,
    nicoliveData,
  }
}

export default useLiveinfoApiMiddlewareNicolive

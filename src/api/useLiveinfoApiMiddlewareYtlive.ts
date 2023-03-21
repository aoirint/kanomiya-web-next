import React from 'react'

interface LiveinfoApiMiddlewareV1YtliveResponse {
  program: {
    id: string
    title: string
    description: string
    url: string
    thumbnails: Record<string, {
      url: string
      width: number
      height: number
    }>
    startTime: string
    endTime: string
    isOnair: boolean
  }
  channel: {
    name: string
    url: string
    thumbnails: Record<string, {
      url: string
      width: number
      height: number
    }>
  }
}

const useLiveinfoApiMiddlewareYtlive = () => {
  const [loading, setLoading] = React.useState<boolean>(true)
  const [ytliveData, setYtliveData] = React.useState<LiveinfoApiMiddlewareV1YtliveResponse | null>(null)

  React.useEffect(() => {
    if (ytliveData === null) {
      fetch('https://liveinfo-api-middleware.aoirint.com/v1/ytlive')
        .then((data) => data.json())
        .then((data: LiveinfoApiMiddlewareV1YtliveResponse) => {
          setLoading(false)
          setYtliveData(data)
        })
        .catch((error: unknown) => {
          console.error(error)
        })
    }
  }, [loading, ytliveData])

  return {
    loading,
    ytliveData,
  }
}

export default useLiveinfoApiMiddlewareYtlive

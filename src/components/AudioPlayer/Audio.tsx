import React, { useEffect, useRef } from 'react'

type AudioProps = {
  src: string,
  isPlaying: boolean
}

const Audio: React.FC<AudioProps> = ({ src, isPlaying }) => {
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play()
    } else {
      audioRef.current?.pause()
    }
  }, [isPlaying])

  return (
    <audio ref={audioRef} src={src} loop/>
  )
}

export default Audio

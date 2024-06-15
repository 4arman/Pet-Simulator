import styled from "styled-components"
import { useState } from "react"
import { atom, useAtom } from "jotai"

import Audio from './Audio'
import MusicCat from '../../assets/Music/Cat/cat.mp3'
import MusicCatHunger from '../../assets/Music/Cat/hungerCat.mp3'

export const MusicAtom = atom(MusicCat)
export const MusicDefaultAtom = atom(MusicCat)
export const MusicHungerAtom = atom(MusicCatHunger)

const AudioPlayerContainer = styled.div`
  display: flex;
  margin-top: 20px;
`

export default function AudioPlayer() {

  const [isPlaying, setIsPlaying] = useState(false)
  const [musicTextDisplay, setMusicTextDisplay] = useState('none')
  const [music] = useAtom(MusicAtom)
  const [] = useAtom(MusicDefaultAtom)
  const [] = useAtom(MusicHungerAtom)

  const togglePlay = () => {
    setIsPlaying(prevState => !prevState)
    setMusicTextDisplay('block')
  }

  return (
    <AudioPlayerContainer>
    <Audio src={music} isPlaying={isPlaying} />
    <button onClick={togglePlay}>
      {isPlaying ? 'Pause Music' : 'Play Music'}
    </button>
    <span style={{display: musicTextDisplay}}>- ALPHA (Press 2 times to button if music will dissapear)</span>
    </AudioPlayerContainer>
  )
}

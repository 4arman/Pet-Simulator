import styled from 'styled-components'
import React, { useEffect } from 'react'
import { atom, useAtom } from 'jotai'
import { HungerBarAtom } from './HungerBar'
import { PetImgAtom } from '../Pet'
import PetHungryImage from '../../assets/images/Pets/Cat/hungerCat.gif'
import PetDefaultImage from '../../assets/images/Pets/Cat/default.gif'

import { MusicAtom } from '../AudioPlayer/AudioPlayer'
import { MusicDefaultAtom } from '../AudioPlayer/AudioPlayer'
import { MusicHungerAtom } from '../AudioPlayer/AudioPlayer'

export let PetDefaultImgAtom = atom(PetDefaultImage)
export let PetHungerImgAtom = atom(PetHungryImage)

export const HealthBarAtom = atom(400)
const HealthCountAtom = atom((get) => {
  const healthBar = get(HealthBarAtom)
  return Math.min((healthBar / 400) * 100, 100)
})

const HealthBarContainer = styled.div`
  width: 400px;
  height: 73px;
  background: #ff8686;
  position: relative;
`

const HealthText = styled.div`
  font-size: 20px;
`

const HealthBarItemContainer = styled.div`
  width: 100%;
  height: 50px;
  background: #777;
`

const HealthBarItem = styled.div`
  max-width: 400px;
  height: 100%;
  background: #800000;
`

const HealthBarCount = styled.div`
  color: #ffffff;
  font-size: 40px;
  position: absolute;
  left: 50%;
  top: 68%;
  transform: translate(-50%, -50%);
`

const HealthBar: React.FC = () => {

  const [healthBar, setHealthBar] = useAtom(HealthBarAtom)
  const [healthCount] = useAtom(HealthCountAtom)
  const [hungerBar] = useAtom(HungerBarAtom)
  const [, setPetImg] = useAtom(PetImgAtom)

  const [petDefaultImg] = useAtom(PetDefaultImgAtom)
  const [petHungerImg] = useAtom(PetHungerImgAtom)

  const [music, setMusic] = useAtom(MusicAtom)
  const [musicDefault] = useAtom(MusicDefaultAtom)
  const [musicHunger] = useAtom(MusicHungerAtom)

  useEffect(() => {
    if (hungerBar === 0) {
      const interval = setInterval(() => {
        setHealthBar(prev => Math.max(Math.min(prev - 3, 400), 0))
      }, 800)
      setPetImg(petHungerImg)
      setMusic(musicHunger)
      return () => clearInterval(interval)
    }
    else {
      setPetImg(petDefaultImg)
      setMusic(musicDefault)
    }
  }, [hungerBar, setHealthBar, setPetImg, setMusic, music, musicHunger, petHungerImg, petDefaultImg])

  return (
    <HealthBarContainer>
        
      <HealthText>Health:</HealthText>

      <HealthBarItemContainer>
        <HealthBarItem style={{
          width: `${healthBar}px`
        }} />
      </HealthBarItemContainer>

      <HealthBarCount>
        {Math.round(healthCount)}%
      </HealthBarCount>

    </HealthBarContainer>
  )
}

export default HealthBar

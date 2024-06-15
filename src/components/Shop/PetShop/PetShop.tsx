import styled from 'styled-components'
import ShopItem from '../ShopItem/ShopItem'
import { atom, useAtom } from 'jotai'
import { useState } from 'react'
import { PetDefaultImgAtom } from '../../Bars/HealthBar'
import { PetHungerImgAtom } from '../../Bars/HealthBar'

import CatImg from '../../../assets/images/Pets/Cat/default.gif'
import CatHungerImg from '../../../assets/images/Pets/Cat/hungerCat.gif'
import DogImg from '../../../assets/images/Pets/Dog/dog.gif'
import DogHungerImg from '../../../assets/images/Pets/Dog/hungerDog.gif'
import NagiImg from '../../../assets/images/Pets/Nagi/nagi.gif'
import NagiHungerImg from '../../../assets/images/Pets/Nagi/hungerNagi.gif'
import GoatImg from '../../../assets/images/Pets/Goat/goat.gif'
import GoatHungerImg from '../../../assets/images/Pets/Goat/hungerGoat.gif'

import { FinalUpgradeAtom } from '../UpgradeShop/UpgradeShop'
import { FinalUpgradeTextAtom } from '../UpgradeShop/UpgradeShop'

import { MusicDefaultAtom } from '../../AudioPlayer/AudioPlayer'
import { MusicHungerAtom } from '../../AudioPlayer/AudioPlayer'
import MusicCat from '../../../assets/Music/Cat/cat.mp3'
import MusicCatHunger from '../../../assets/Music/Cat/hungerCat.mp3'
import MusicDog from '../../../assets/Music/Dog/dog.mp3'
import MusicDogHunger from '../../../assets/Music/Dog/hungerDog.wav'
import MusicGoat from '../../../assets/Music/Goat/goat.mp3'
import MusicGoatHunger from '../../../assets/Music/Goat/hungerGoat.mp3'

export const PetShopAtom = atom('none')

const PetShopContainer = styled.div`
  width: 80%;
  height: 500px;
  background: blueviolet;
  position: absolute;
  top: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 90%;
`

export default function PetShop() {

  const [shopDisplay] = useAtom(PetShopAtom)
  const [, setPetDefaultImg] = useAtom(PetDefaultImgAtom)
  const [, setPetHungerImg] = useAtom(PetHungerImgAtom)
  const [priceDog, setPriceDog] = useState(20)
  const [priceNagi, setPriceNagi] = useState(50)
  const [priceGoat, setPriceGoat] = useState(250)
  const [, setFinalUpgradeText] = useAtom(FinalUpgradeTextAtom)
  const [, setFinalUpgradeDisplay] = useAtom(FinalUpgradeAtom)
  const [, setDefaultMusic] = useAtom(MusicDefaultAtom)
  const [, setHungerMusic] = useAtom(MusicHungerAtom)

  return (
    <PetShopContainer style={{ display: shopDisplay }}>
      <ShopItem 
      title="Cat" 
      price={0}
      description='Default Cat'
      onPurchase={() => {
        setPetDefaultImg(CatImg)
        setPetHungerImg(CatHungerImg)
        setDefaultMusic(MusicCat)
        setHungerMusic(MusicCatHunger)
      }} />
      <ShopItem 
      title="Dog" 
      price={priceDog}
      description='Cute dog :^'
      onPurchase={() => {
        setPetDefaultImg(DogImg)
        setPetHungerImg(DogHungerImg)
        setPriceDog(0)
        setDefaultMusic(MusicDog)
        setHungerMusic(MusicDogHunger)
      }}
      />
      <ShopItem 
      title="Lazy" 
      price={priceNagi}
      description='WTF IS HIM?'
      onPurchase={() => {
        setPetDefaultImg(NagiImg)
        setPetHungerImg(NagiHungerImg)
        setPriceNagi(0)
      }}
      />
      <ShopItem 
      title="THE GOAT!!!" 
      price={priceGoat}
      description='THE REAL GOAT'
      onPurchase={() => {
        setPetDefaultImg(GoatImg)
        setPetHungerImg(GoatHungerImg)
        setPriceGoat(0)
        setFinalUpgradeText('none')
        setFinalUpgradeDisplay('block')
        setDefaultMusic(MusicGoat)
        setHungerMusic(MusicGoatHunger)
      }}
      />
    </PetShopContainer>
  )
}

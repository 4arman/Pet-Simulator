import styled from 'styled-components'
import ShopItem from '../ShopItem/ShopItem'
import { useState } from 'react'
import { atom, useAtom } from 'jotai'
import { PointsPerSecondAtom } from '../../Points'
import { HungerPerSecondAtom } from '../../Bars/HungerBar'
import { FinishScreedDisplayAtom } from '../../Screens/FinishScreen'

export const UpgradeShopAtom = atom('none')
export const FinalUpgradeTextAtom = atom('block')
export const FinalUpgradeAtom = atom('none')

const UpgradeShopContainer = styled.div`
  width: 80%;
  height: 500px;
  background: #939393;
  position: absolute;
  top: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 90%;
`

const FinalUpgradeContainer = styled.div`
  width: 100%;
`

const FinalUpgradeText = styled.div`
  color: #ad0000;
  font-size: 25px;
  font-weight: 600;
  text-align: center;
  margin-top: 30px;
  cursor: default;
`

const FinalUpgradeItem = styled.div`
  width: 100%;
  height: 100%;
`

export default function UpgradeShop() {

  const [shopDisplay] = useAtom(UpgradeShopAtom)
  const [, setPointsPerSecond] = useAtom(PointsPerSecondAtom)
  const [, setHungerPerSecond] = useAtom(HungerPerSecondAtom)
  const [price1, setPrice1] = useState(100)
  const [price2, setPrice2] = useState(140)
  const [price3, setPrice3] = useState(30)
  const [, setFinishScreenDisplay] = useAtom(FinishScreedDisplayAtom)
  const [finalUpgradeText] = useAtom(FinalUpgradeTextAtom)
  const [finalUpgradeDisplay] = useAtom(FinalUpgradeAtom)

  return (
    <UpgradeShopContainer style={{ display: shopDisplay }}>
      <ShopItem 
      title="Upgrade 1" 
      price={price1}
      description='+3 points per second'
      onPurchase={() => {
        setPointsPerSecond(3)
        setPrice1(0)
      }} 
      />
      <ShopItem 
      title="Upgrade 2" 
      price={price2}
      description='+4 points per second'
      onPurchase={() => {
        setPointsPerSecond(4)
        setPrice2(0)
      }} 
      />
      <ShopItem 
      title="Upgrade 3" 
      price={price3}
      description='Hunger per second -1-2%'
      onPurchase={() => {
        setHungerPerSecond(5)
        setPrice3(0)
      }}
      />

      <FinalUpgradeContainer>
        <FinalUpgradeText style={{display: finalUpgradeText}}>
          BUY 'THE GOAT' PET, TO UNLOCK THE FINAL UPGRADE
        </FinalUpgradeText>
      <FinalUpgradeItem style={{display: finalUpgradeDisplay}}>
        <ShopItem 
        title="Final Upgrade" 
        price={500}
        description='IMMORTAL PET.'
        onPurchase={() => {
          setHungerPerSecond(5)
          setFinishScreenDisplay('block')
        }}
        />
      </FinalUpgradeItem>
      </FinalUpgradeContainer>
      
    </UpgradeShopContainer>
  )
}

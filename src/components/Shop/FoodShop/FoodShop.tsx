import styled from 'styled-components'
import { atom, useAtom } from 'jotai'
import ShopItem from '../ShopItem/ShopItem'
import { HungerBarAtom } from '../../Bars/HungerBar'
import { HealthBarAtom } from '../../Bars/HealthBar'

export const FoodShopAtom = atom('none')

const FoodShopContainer = styled.div`
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

export default function FoodShop() {

  const [shopDisplay] = useAtom(FoodShopAtom)
  const [, setHungerBar] = useAtom(HungerBarAtom)
  const [, setHealthBar] = useAtom(HealthBarAtom)

  return (
    <FoodShopContainer style={{ display: shopDisplay }}>
      <ShopItem 
      title="Bread" 
      price={15} 
      description='+8% Hunger'
      onPurchase={() => setHungerBar(pv => pv + 30)}
      />
      <ShopItem 
      title="Meat" 
      price={40} 
      description='+25% Hunger'
      onPurchase={() => setHungerBar(pv => pv + 100)}
      />
      <ShopItem 
      title="Bandage" 
      price={40} 
      description='+20% Health'
      onPurchase={() => setHealthBar(pv => pv + 50)}
      />
      <ShopItem 
      title="Heal" 
      price={100}
      description='+50% Health'
      onPurchase={() => setHealthBar(pv => pv + 50)}
      />
    </FoodShopContainer>
  )
}

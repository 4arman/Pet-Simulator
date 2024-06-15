import React, { useEffect } from 'react'
import styled from 'styled-components'
import PurchaseBtn from './PurchaseBtn'
import { atom, useSetAtom } from 'jotai'

export const createPriceAtom = (initialPrice: number) => atom(initialPrice)

const Item = styled.div`
  width: 100%;
  height: 130px;
  background: green;
  border: 3px solid #111;
  padding: 5px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: default;
`

interface ShopItemProps {
  title: string,
  price: number,
  description: string,
  onPurchase: any
}

const ShopItem: React.FC<ShopItemProps> = ({ 
  title, price, description, onPurchase
}) => {
  
  const priceAtom = createPriceAtom(price)
  const setPrice = useSetAtom(priceAtom)

  useEffect(() => setPrice(price), [price, setPrice])

  return (
    <Item>
      <div>{title}</div>
      <div>Price: {price} points</div>
      <div>Description: {description}</div>

      <PurchaseBtn 
      priceAtom={priceAtom} 
      onPurchase={onPurchase} 
      />
    </Item>
  )
}

export default ShopItem

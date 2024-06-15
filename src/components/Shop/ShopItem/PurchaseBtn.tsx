import React from 'react'
import styled from 'styled-components'
import { useAtom, useAtomValue } from 'jotai'
import { PointsAtom } from '../../Points'
import { PointsColorAtom } from '../../Points'

const PurchaseBtnItem = styled.div`
  width: 50%;
  height: 30px;
  background: #999;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: #888;
  }
  &:active {
    background: #777
  }
`

interface PurchaseBtnProps {
  onPurchase: any,
  priceAtom: any
}

const PurchaseBtn: React.FC<PurchaseBtnProps> = ({ onPurchase, priceAtom }) => {
  
  const [points, setPoints] = useAtom(PointsAtom)
  const [, setPointsColor] = useAtom(PointsColorAtom)
  const itemPrice = useAtomValue(priceAtom) as number

  return (
    <PurchaseBtnItem
      onClick={() => {
        if (points >= itemPrice) {
          setPoints(pv => pv - itemPrice)
          onPurchase()
        }
        else {
          setPointsColor('red')
          setTimeout(() => setPointsColor('#000'), 300)
        }
      }}
    >
      Purchase
    </PurchaseBtnItem>
  )
}

export default PurchaseBtn

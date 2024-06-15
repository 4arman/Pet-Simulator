import React, { useEffect } from 'react'
import styled from 'styled-components'
import { atom, useAtom } from 'jotai'

export const HungerBarAtom = atom(400)
export const HungerPerSecondAtom = atom(10)
const HungerCountAtom = atom((get) => {
  const hungerBar = get(HungerBarAtom)
  return Math.min((hungerBar / 400) * 100, 100)
})

const HungerBarContainer = styled.div`
  width: 400px;
  height: 73px;
  background: #86ff86;
  position: relative;
`

const HungerText = styled.div`
  font-size: 20px;
`

const HungerBarItemContainer = styled.div`
  width: 100%;
  height: 50px;
  background: #777;
`

const HungerBarItem = styled.div`
  max-width: 400px;
  height: 100%;
  background: green;
`

const HungerBarCount = styled.div`
  color: #ffffff;
  font-size: 40px;
  position: absolute;
  left: 50%;
  top: 68%;
  transform: translate(-50%, -50%);
`

const HungerBar: React.FC = () => {

  const [hungerBar, setHungerBar] = useAtom(HungerBarAtom)
  const [hungerCount] = useAtom(HungerCountAtom)
  const [hungerPerSecond] = useAtom(HungerPerSecondAtom)

  useEffect(() => {
    const interval = setInterval(() => {
      setHungerBar(prev => Math.max(Math.min(prev - hungerPerSecond, 400), 0))
    }, 1000)

    return () => clearInterval(interval)
  }, [hungerPerSecond, setHungerBar])

  return (
    <HungerBarContainer>
        
      <HungerText>Hunger:</HungerText>

      <HungerBarItemContainer>
        <HungerBarItem style={{
          width: `${hungerBar}px`
        }} />
      </HungerBarItemContainer>

      <HungerBarCount>
        {Math.round(hungerCount)}%
      </HungerBarCount>

    </HungerBarContainer>
  )
}

export default HungerBar

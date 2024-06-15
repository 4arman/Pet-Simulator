import { useEffect } from "react"
import styled from "styled-components"
import { atom, useAtom } from "jotai"

export const PointsAtom = atom(10)
export const PointsColorAtom = atom('#000')
export const PointsPerSecondAtom = atom(1)

const PointsItem = styled.div`
  width: 400px;
  font-size: 25px;
  margin-bottom: 20px;
  cursor: default;
`

export default function Points() {

  const [points, setPoints] = useAtom(PointsAtom)
  const [pointsColor] = useAtom(PointsColorAtom)
  const [pointsPerSecond] = useAtom(PointsPerSecondAtom)

  useEffect(() => {
    const pointsInterval = setInterval(() => {
      setPoints(pv => pv + pointsPerSecond)
    }, 1000)
    
    return () => clearInterval(pointsInterval)
  }, [pointsPerSecond, setPoints])

  return (
    <PointsItem 
    style={{color: pointsColor}}>
      Points: {points}
    </PointsItem>
  )
}

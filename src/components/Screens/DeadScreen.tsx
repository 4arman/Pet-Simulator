import styled from "styled-components"
import { useEffect, useState } from "react"
import { useAtom } from "jotai"
import { HealthBarAtom } from "../Bars/HealthBar"

const DeadScreenItem = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  background: red;
  z-index: 100;
`

const DeadScreenText = styled.div`
  font-size: 50px;
  color: #ffffff;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export default function DeadScreen() {

  const [deadScreenDisplay, setDeadScreenDisplay] = useState('none')
  const [healthBar] = useAtom(HealthBarAtom)

  useEffect(() => {
    if (healthBar <= 0) {
      setDeadScreenDisplay('block')
    }
  }, [healthBar, setDeadScreenDisplay])

  return (
    <DeadScreenItem
    style={{display: deadScreenDisplay}}
    >
      <DeadScreenText>
        Your pet is dead :( <p>prees F5 to restart</p>
      </DeadScreenText>
    </DeadScreenItem>
  )
}

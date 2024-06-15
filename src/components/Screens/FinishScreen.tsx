import styled from "styled-components"
import { atom, useAtom } from "jotai"

export const FinishScreedDisplayAtom = atom('none')

const FinishScreenItem = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  background: green;
  z-index: 1000;
`

const FinishScreenText = styled.div`
  font-size: 40px;
  color: #ffffff;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export default function FinishScreen() {

  const [finishScreenDisplay] = useAtom(FinishScreedDisplayAtom)

  return (
    <FinishScreenItem
    style={{display: finishScreenDisplay}}
    >
      <FinishScreenText>
        Congratulations! Your pet became Immortal!
        <p>Now he doesn't need your concern</p>
        <p>prees F5 to restart</p>
      </FinishScreenText>
    </FinishScreenItem>
  )
}

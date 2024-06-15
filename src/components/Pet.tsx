import styled from 'styled-components'
import PetDefaultImage from '../assets/images/Pets/Cat/default.gif'
import { atom, useAtom } from 'jotai'

export const PetImgAtom = atom(PetDefaultImage)

const PetContainer = styled.div`
  width: 330px;
  height: 300px;
  cursor: pointer;
`

const PetItem = styled.img`
  width: 100%;
  height: 100%;
`

export default function Pet() {

  const [petImg] = useAtom(PetImgAtom)

  return (
    <PetContainer>
        <PetItem src={petImg} alt="Pet" />
    </PetContainer>
  )
}

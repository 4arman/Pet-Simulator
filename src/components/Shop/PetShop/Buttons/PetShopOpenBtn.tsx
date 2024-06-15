import styled from "styled-components";
import { MdPets } from "react-icons/md";
import { atom, useAtom } from "jotai";
import { PetShopAtom } from "../PetShop";
import { PetShopCloseBtnAtom } from "./PetShopCloseBtn";
import { FoodShopOpenBtnAtom } from "../../FoodShop/Buttons/FoodShopOpenBtn";
import { UpgradeShopOpenBtnAtom } from "../../UpgradeShop/Buttons/UpgradeShopOpenBtn";

export const PetShopOpenBtnAtom = atom('block')

const ShopOpenBtnItem = styled(MdPets)`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 40px;
  right: 130px;
  color: green;
  cursor: pointer;
`

export default function PetShopOpenBtn() {

  const [, setShopDisplay] = useAtom(PetShopAtom)  
  const [openBtnDisplay, setPetOpenBtnDisplay] = useAtom(PetShopOpenBtnAtom)
  const [, setPetCloseBtnDisplay] = useAtom(PetShopCloseBtnAtom)
  const [, setFoodOpenBtnDisplay] = useAtom(FoodShopOpenBtnAtom)
  const [, setUpgradeOpenBtnDisplay] = useAtom(UpgradeShopOpenBtnAtom)

  return (
    <ShopOpenBtnItem
    title="Pets"
    style={{display: openBtnDisplay}}
    onClick={() => {
      setShopDisplay('block')
      setPetCloseBtnDisplay('block')
      setPetOpenBtnDisplay('none')
      setFoodOpenBtnDisplay('none')
      setUpgradeOpenBtnDisplay('none')
    }}/>
  )
}

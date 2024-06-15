import styled from "styled-components";
import { MdPets } from "react-icons/md";
import { atom, useAtom } from "jotai";
import { PetShopAtom } from "../PetShop";
import { PetShopOpenBtnAtom } from "./PetShopOpenBtn";
import { FoodShopOpenBtnAtom } from "../../FoodShop/Buttons/FoodShopOpenBtn";
import { UpgradeShopOpenBtnAtom } from "../../UpgradeShop/Buttons/UpgradeShopOpenBtn";

export const PetShopCloseBtnAtom = atom('none')

const ShopCloseBtnItem = styled(MdPets)`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 20px;
  right: 130px;
  color: #000000;
  cursor: pointer;
`

export default function PetShopCloseBtn() {

  const [, setShopDisplay] = useAtom(PetShopAtom)  
  const [closeBtnDisplay, setPetCloseBtnDisplay] = useAtom(PetShopCloseBtnAtom)
  const [, setPetOpenBtnDisplay] = useAtom(PetShopOpenBtnAtom)
  const [, setFoodOpenBtnDisplay] = useAtom(FoodShopOpenBtnAtom)
  const [, setUpgradeOpenBtnDisplay] = useAtom(UpgradeShopOpenBtnAtom)

  return (
    <ShopCloseBtnItem
    title="Close"
    style={{display: closeBtnDisplay}}
    onClick={() => {
      setShopDisplay('none')
      setPetCloseBtnDisplay('none')
      setPetOpenBtnDisplay('block')
      setFoodOpenBtnDisplay('block')
      setUpgradeOpenBtnDisplay('block')
    }}/>
  )
}

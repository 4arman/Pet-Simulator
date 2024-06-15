import styled from "styled-components";
import { GiMeat } from "react-icons/gi";
import { atom, useAtom } from "jotai";
import { FoodShopAtom } from "../FoodShop";
import { FoodShopOpenBtnAtom } from "./FoodShopOpenBtn";
import { PetShopOpenBtnAtom } from "../../PetShop/Buttons/PetShopOpenBtn";
import { UpgradeShopOpenBtnAtom } from "../../UpgradeShop/Buttons/UpgradeShopOpenBtn";

export const FoodShopCloseBtnAtom = atom('none')

const ShopCloseBtnItem = styled(GiMeat)`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 20px;
  right: 50px;
  color: #000000;
  cursor: pointer;
`

export default function FoodShopCloseBtn() {

  const [, setShopDisplay] = useAtom(FoodShopAtom)  
  const [closeBtnDisplay, setFoodCloseBtnDisplay] = useAtom(FoodShopCloseBtnAtom)
  const [, setFoodOpenBtnDisplay] = useAtom(FoodShopOpenBtnAtom)
  const [, setPetOpenBtnDisplay] = useAtom(PetShopOpenBtnAtom)
  const [, setUpgradeOpenBtnDisplay] = useAtom(UpgradeShopOpenBtnAtom)

  return (
    <ShopCloseBtnItem
    title="Close"
    style={{display: closeBtnDisplay}}
    onClick={() => {
      setShopDisplay('none')
      setFoodCloseBtnDisplay('none')
      setFoodOpenBtnDisplay('block')
      setPetOpenBtnDisplay('block')
      setUpgradeOpenBtnDisplay('block')
    }}/>
  )
}

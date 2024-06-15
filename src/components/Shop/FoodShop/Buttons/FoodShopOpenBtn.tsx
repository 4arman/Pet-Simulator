import styled from "styled-components";
import { GiMeat } from "react-icons/gi";
import { atom, useAtom } from "jotai";
import { FoodShopAtom } from "../FoodShop";
import { FoodShopCloseBtnAtom } from "./FoodShopCloseBtn";
import { PetShopOpenBtnAtom } from "../../PetShop/Buttons/PetShopOpenBtn";
import { UpgradeShopOpenBtnAtom } from "../../UpgradeShop/Buttons/UpgradeShopOpenBtn";

export const FoodShopOpenBtnAtom = atom('block')

const ShopOpenBtnItem = styled(GiMeat)`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 40px;
  right: 50px;
  color: red;
  cursor: pointer;
`

export default function FoodShopOpenBtn() {

  const [, setShopDisplay] = useAtom(FoodShopAtom)  
  const [openBtnDisplay, setFoodOpenBtnDisplay] = useAtom(FoodShopOpenBtnAtom)
  const [, setFoodCloseBtnDisplay] = useAtom(FoodShopCloseBtnAtom)
  const [, setPetOpenBtnDisplay] = useAtom(PetShopOpenBtnAtom)
  const [, setUpgradeOpenBtnDisplay] = useAtom(UpgradeShopOpenBtnAtom)

  return (
    <ShopOpenBtnItem
    title="Foods"
    style={{display: openBtnDisplay}}
    onClick={() => {
      setShopDisplay('block')
      setFoodCloseBtnDisplay('block')
      setFoodOpenBtnDisplay('none')
      setPetOpenBtnDisplay('none')
      setUpgradeOpenBtnDisplay('none')
    }}/>
  )
}

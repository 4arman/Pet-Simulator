import styled from "styled-components";
import { GiArmorUpgrade } from "react-icons/gi";
import { atom, useAtom } from "jotai";
import { UpgradeShopAtom } from "../UpgradeShop";
import { UpgradeShopOpenBtnAtom } from "./UpgradeShopOpenBtn";
import { FoodShopOpenBtnAtom } from "../../FoodShop/Buttons/FoodShopOpenBtn";
import { PetShopOpenBtnAtom } from "../../PetShop/Buttons/PetShopOpenBtn";

export const UpgradeShopCloseBtnAtom = atom('none')

const ShopCloseBtnItem = styled(GiArmorUpgrade)`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 20px;
  right: 215px;
  color: #000000;
  cursor: pointer;
`

export default function UpgradeShopCloseBtn() {

  const [, setShopDisplay] = useAtom(UpgradeShopAtom)  
  const [closeBtnDisplay, setUpgradeCloseBtnDisplay] = useAtom(UpgradeShopCloseBtnAtom)
  const [, setUpgradeOpenBtnDisplay] = useAtom(UpgradeShopOpenBtnAtom)
  const [, setFoodOpenBtnDisplay] = useAtom(FoodShopOpenBtnAtom)
  const [, setPetOpenBtnDisplay] = useAtom(PetShopOpenBtnAtom)

  return (
    <ShopCloseBtnItem
    title="Close"
    style={{display: closeBtnDisplay}}
    onClick={() => {
      setShopDisplay('none')
      setUpgradeCloseBtnDisplay('none')
      setUpgradeOpenBtnDisplay('block')
      setFoodOpenBtnDisplay('block')
      setPetOpenBtnDisplay('block')
    }}/>
  )
}

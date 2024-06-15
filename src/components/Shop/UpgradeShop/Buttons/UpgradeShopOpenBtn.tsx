import styled from "styled-components";
import { GiArmorUpgrade } from "react-icons/gi";
import { atom, useAtom } from "jotai";
import { UpgradeShopAtom } from "../UpgradeShop";
import { UpgradeShopCloseBtnAtom } from "./UpgradeShopCloseBtn";
import { FoodShopOpenBtnAtom } from "../../FoodShop/Buttons/FoodShopOpenBtn";
import { PetShopOpenBtnAtom } from "../../PetShop/Buttons/PetShopOpenBtn";

export const UpgradeShopOpenBtnAtom = atom('block')

const ShopOpenBtnItem = styled(GiArmorUpgrade)`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 40px;
  right: 215px;
  color: #009ba9;
  cursor: pointer;
`

export default function UpgradeShopOpenBtn() {

  const [, setShopDisplay] = useAtom(UpgradeShopAtom)  
  const [openBtnDisplay, setUpgradeOpenBtnDisplay] = useAtom(UpgradeShopOpenBtnAtom)
  const [, setUpgradeCloseBtnDisplay] = useAtom(UpgradeShopCloseBtnAtom)
  const [, setFoodOpenBtnDisplay] = useAtom(FoodShopOpenBtnAtom)
  const [, setPetOpenBtnDisplay] = useAtom(PetShopOpenBtnAtom)

  return (
    <ShopOpenBtnItem
    title="Upgrades"
    style={{display: openBtnDisplay}}
    onClick={() => {
      setShopDisplay('block')
      setUpgradeCloseBtnDisplay('block')
      setUpgradeOpenBtnDisplay('none')
      setFoodOpenBtnDisplay('none')
      setPetOpenBtnDisplay('none')
    }}/>
  )
}

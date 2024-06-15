import styled from 'styled-components'
import Points from './components/Points'
import Pet from './components/Pet'
import HungerBar from './components/Bars/HungerBar'
import HealthBar from './components/Bars/HealthBar'
import DeadScreen from './components/Screens/DeadScreen'
import FinishScreen from './components/Screens/FinishScreen'
import FoodShop from './components/Shop/FoodShop/FoodShop'
import FoodShopOpenBtn from './components/Shop/FoodShop/Buttons/FoodShopOpenBtn'
import FoodShopCloseBtn from './components/Shop/FoodShop/Buttons/FoodShopCloseBtn'
import PetShop from './components/Shop/PetShop/PetShop'
import PetShopOpenBtn from './components/Shop/PetShop/Buttons/PetShopOpenBtn'
import PetShopCloseBtn from './components/Shop/PetShop/Buttons/PetShopCloseBtn'
import UpgradeShop from './components/Shop/UpgradeShop/UpgradeShop'
import UpgradeShopOpenBtn from './components/Shop/UpgradeShop/Buttons/UpgradeShopOpenBtn'
import UpgradeShopCloseBtn from './components/Shop/UpgradeShop/Buttons/UpgradeShopCloseBtn'
import AudioPlayer from './components/AudioPlayer/AudioPlayer'

const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export default function App() {
  return (
    <Container>
      <Points />
      <Pet />
      <HungerBar />
      <HealthBar />

      <FoodShopOpenBtn />
      <FoodShopCloseBtn />
      <FoodShop />

      <PetShopOpenBtn />
      <PetShopCloseBtn />
      <PetShop />

      <UpgradeShopOpenBtn />
      <UpgradeShopCloseBtn />
      <UpgradeShop />

      <DeadScreen />
      <FinishScreen />

      <AudioPlayer />
    </Container>
  )
}

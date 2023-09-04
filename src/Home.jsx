
import {Header} from './component/Header';
import {Ad} from './component/Ad';
import {GroupOfNewProduct} from './component/GroupOfNewProduct';
import {News} from './component/News';
import {RecProduct} from './component/RecProduct';
import {Tail} from './component/Tail';
import NewHeader from './New Component/HeaderNotLoggedIn';
import Advert from './New Component/Advert';
import Article from './New Component/Article';
import Slider1 from './New Component/Slider1';
import Slider2 from './New Component/Slider2';
import Slider3 from './New Component/Slider3';
import ShopBrand from './New Component/ShopBrand'
import Footer from './New Component/NewFooter';
import CardItemHasSale from './New Component/CardItemHasSale';
import CardItemNotSale from './New Component/CardItemNotSale';
import { Card, CardHeader, CardBody, CardFooter, Text } from '@chakra-ui/react'

const App =()=> {
  return (

    <div>
      <NewHeader/>
      <Advert/>
      <Slider3/>
      <ShopBrand/>
      <Article/>
      <Slider1/>
      <Slider2/>
      <Footer/>
      
      {/* <Header/>
      <Ad/>
      <GroupOfNewProduct/>
      <News/>
      <RecProduct/>
      <Tail/> */}
    </div>

  );
}

export default App;

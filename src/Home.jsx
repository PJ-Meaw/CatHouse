import { Header } from './component/Header';
import { Ad } from './component/Ad';
import { GroupOfNewProduct } from './component/GroupOfNewProduct';
import { News } from './component/News';
import { RecProduct } from './component/RecProduct';
import { Tail } from './component/Tail';
import HeaderNotLoggedIn from './New Component/HeaderNotLoggedIn';
import Advert from './New Component/Advert';
import Article from './New Component/Article';
import Slider1 from './New Component/Slider1';
import Slider2 from './New Component/Slider2';
import Slider3 from './New Component/Slider3';
import ShopBrand from './New Component/ShopBrand';
import Footer from './New Component/NewFooter';
import CardItemHasSale from './New Component/CardItemHasSale';
import CardItemNotSale from './New Component/CardItemNotSale';
import { Card, CardHeader, CardBody, CardFooter, Text } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import { Context } from './context/context';
import Cookies from 'js-cookie';
import axios from 'axios';
import { setObjUserData } from './helper/setobjData';
import { getBestSeller, getNewestProduct, getSuggestProduct } from './helper/fetchData';
const App =()=> {
    const {userData, setUserData} = useContext(Context)
    const [bestSellerData, setBestSellerData] = useState([]);
    const [suggestProductData, setSuggestProduct] = useState([]);
    const [newProductData, setNewProductData] = useState([]);
    
    useEffect(()=>{
        Promise.all([getBestSeller(),getSuggestProduct(), getNewestProduct() ])
        .then(([resBestSeller, resSuggestProduct, resNewProduct])=>{
            if(resBestSeller.data.status && resSuggestProduct.data.status && resNewProduct.data.status){
                setBestSellerData(resBestSeller.data.bestSellerProduct);
                setSuggestProduct(resSuggestProduct.data.randomProduct);
                setNewProductData(resNewProduct.data.newestProduct);
            }else{
                console.warn("fetch error");
            }
        })
    },[])
  return (
    <div>
      {/* {userData?.email} */}
      <HeaderNotLoggedIn />
      <Advert />
      <Slider3 newProductData={newProductData} />
      <ShopBrand />
      <Article />
      <Slider1 bestSellerData={bestSellerData} />
      <Slider2 suggestProductData={suggestProductData} />
      <Footer />

      {/* <Header/>
      <Ad/>
      <GroupOfNewProduct/>
      <News/>
      <RecProduct/>
      <Tail/> */}
    </div>
  );
};

export default App;


import {Header} from './component/Header';
import {Ad} from './component/Ad';
import {GroupOfNewProduct} from './component/GroupOfNewProduct';
import {News} from './component/News';
import {RecProduct} from './component/RecProduct';
import {Tail} from './component/Tail';
import HeaderNotLoggedIn from './New Component/HeaderNotLoggedIn';
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
import { useContext, useEffect, useState } from 'react';
import { Context } from './context/context'
import Cookies from 'js-cookie';
import axios from 'axios';
import { setObjUserData } from './helper/setobjData';
import { fetchUserData_API, getBestSeller } from './helper/fetchData';
const App =()=> {
    const {userData, setUserData} = useContext(Context)
    Cookies.set('email',"pathinya@gmail.com");
    const [bestSellerData, setBestSellerData] = useState([]);
    
    useEffect(()=>{
        Promise.all([fetchUserData_API(), getBestSeller()])
        .then(([resUserData,resBestSeller])=>{
            if(resUserData.data.status && resBestSeller.data.status){
                const objUserData = setObjUserData(resUserData.data.user);
                const json = JSON.stringify(objUserData);
                Cookies.set('userData', json);
                setUserData(objUserData);
                setBestSellerData(resBestSeller.data.bestSellerProduct);
                // console.log(resBestSeller.data);
            }else{
                console.warn("fetch error");
            }
        })
    },[])
  return (

    <div>
      {/* {userData?.email} */}
      <HeaderNotLoggedIn/>
      <Advert/>
      <Slider3/>
      <ShopBrand/>
      <Article/>
      <Slider1 bestSellerData = {bestSellerData}/>
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

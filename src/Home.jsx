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
import { useContext, useEffect } from 'react';
import { Context } from './context/context';
import Cookies from 'js-cookie';
import axios from 'axios';

const App = () => {
  const { userData, setUserData } = useContext(Context);
  // Cookies.set('email',"pathinya@gmail.com");
  useEffect(() => {
    console.log(userData);
    axios
      .post(`${process.env.REACT_APP_URL_API}user/get_user`, {
        email: Cookies.get('email'),
      })
      .then((res) => {
        if (res.data.status) {
          const objData = {
            _id: res.data.user._id,
            email: res.data.user.email,
            telNo: res.data.user.telNo,
            address: res.data.user.address,
            role: res.data.user.role,
            likeProduct: res.data.user.likeProduct,
            cart: res.data.user.cart,
            waitingPayment: res.data.user.waitingPayment,
            transportDetail: res.data.user.transportDetail,
            hashedCode: res.data.user.hashedCode,
          };
          const json = JSON.stringify(objData);
          Cookies.set('userData', json);
          setUserData(objData);
          console.log(userData?.email);
        } else {
          console.warn(res.status);
        }
      });
  }, []);

  return (
    <div>
      {/* {userData?.email} */}
      <HeaderNotLoggedIn />
      <Advert />
      <Slider3 />
      <ShopBrand />
      <Article />
      <Slider1 />
      <Slider2 />
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

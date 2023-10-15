import { Flex } from '@chakra-ui/react';
import HeaderNotLoggedIn from './New Component/HeaderNotLoggedIn';
import OrderList from './New Component/Orderlist';
import Footer from './New Component/NewFooter';
import { useState, useEffect } from 'react';
import AddOrderlist from './New Component/AddOrderlist';
import api from './service/userService';
import Cookies from 'js-cookie';

const MyAccount = () => {
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    const user = JSON.parse(Cookies.get('userData'));

    const dataReq = {
      email: user.email,
    };

    api.getOrderOfUser(dataReq).then((res) => {
      if (res.data.status) {
        setOrderList(res.data.userOrderList);
      }
    });
  }, []);

  return (
    <div>
      <HeaderNotLoggedIn />
      {orderList ? (
        <AddOrderlist orderList={orderList} />
      ) : (
        <OrderList orderList={orderList} />
      )}
      <Footer />
    </div>
  );
};

export default MyAccount;

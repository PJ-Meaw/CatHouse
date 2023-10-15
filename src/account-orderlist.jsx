import { Flex } from '@chakra-ui/react';
import HeaderNotLoggedIn from './New Component/HeaderNotLoggedIn';
import OrderList from './New Component/Orderlist';
import Footer from './New Component/NewFooter';
const MyAccount = () => {
  
  return (
    <div>
      <HeaderNotLoggedIn/>
      <OrderList/>
      <Footer/>
      

    </div>
    
    
  );
};

export default MyAccount;
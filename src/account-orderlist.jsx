import { Flex } from '@chakra-ui/react';
import HeaderLoggedIn from './New Component/HeaderLoggedIn';
import OrderList from './New Component/Orderlist';
import Footer from './New Component/NewFooter';
const MyAccount = () => {
  
  return (
    <div>
      <HeaderLoggedIn/>
      <OrderList/>
      <Footer/>
      

    </div>
    
    
  );
};

export default MyAccount;
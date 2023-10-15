import { Flex } from '@chakra-ui/react';
import HeaderNotLoggedIn from './New Component/HeaderNotLoggedIn';
import DeliveryAddress from './New Component/DeliveryAddress';
import Footer from './New Component/NewFooter';
const MyAccount = () => {
  
  return (
    <div>
      <HeaderNotLoggedIn/>
      <DeliveryAddress/>
      <Footer/>
      

    </div>
    
    
  );
};

export default MyAccount;
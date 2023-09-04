import { Flex } from '@chakra-ui/react';
import HeaderLoggedIn from './New Component/HeaderLoggedIn';
import DeliveryAddress from './New Component/DeliveryAddress';
import Footer from './New Component/NewFooter';
const MyAccount = () => {
  
  return (
    <div>
      <HeaderLoggedIn/>
      <DeliveryAddress/>
      <Footer/>
      

    </div>
    
    
  );
};

export default MyAccount;
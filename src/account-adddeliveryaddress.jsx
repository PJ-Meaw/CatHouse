import { Flex } from '@chakra-ui/react';
import HeaderNotLoggedIn from './New Component/HeaderNotLoggedIn';
import AddDeliveryAddress from './New Component/AddDeliveryAddress';
import Footer from './New Component/NewFooter';
const MyAccount = () => {
  
  return (
    <div>
      <HeaderNotLoggedIn/>
      <AddDeliveryAddress/>
      <Footer/>
      

    </div>
    
    
  );
};

export default MyAccount;
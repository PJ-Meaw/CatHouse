import { Flex } from '@chakra-ui/react';
import HeaderLoggedIn from './New Component/HeaderLoggedIn';
import AddDeliveryAddress from './New Component/AddDeliveryAddress';
import Footer from './New Component/NewFooter';
const MyAccount = () => {
  
  return (
    <div>
      <HeaderLoggedIn/>
      <AddDeliveryAddress/>
      <Footer/>
      

    </div>
    
    
  );
};

export default MyAccount;
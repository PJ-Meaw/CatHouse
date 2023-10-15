import { Flex } from '@chakra-ui/react';
import HeaderNotLoggedIn from './New Component/HeaderNotLoggedIn';
import AddWishlist from './New Component/AddWishlist';
import Footer from './New Component/NewFooter';
const MyAccount = () => {
  
  return (
    <div>
      <HeaderNotLoggedIn/>
      <AddWishlist/>
      <Footer/>
      

    </div>
    
    
  );
};

export default MyAccount;
import { Flex } from '@chakra-ui/react';
import HeaderNotLoggedIn from './New Component/HeaderNotLoggedIn';
import DeliveryAddress from './New Component/DeliveryAddress';
import Footer from './New Component/NewFooter';
import { useState } from 'react';
import { useEffect } from 'react';
import AddDeliveryAddress from './New Component/AddDeliveryAddress';
import Cookies from 'js-cookie';

const MyAccount = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(JSON.parse(Cookies.get('userData')));
  }, []);

  return (
    <div>
      <HeaderNotLoggedIn />
      {user?.address.length == 0 ? (
        <DeliveryAddress setUser={setUser} user={user} />
      ) : (
        <AddDeliveryAddress setUser={setUser} user={user} />
      )}
      <Footer />
    </div>
  );
};

export default MyAccount;

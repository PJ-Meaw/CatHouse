
import NewHeader from '../HeaderNotLoggedIn';
import Paymentinformation from './paymentinformation'
import Footer from '../NewFooter';
import { useContext, useEffect } from 'react';
import { Context } from '../../context/context'
import { useLocation } from 'react-router-dom'

const Paymentpage = () => {
    const {userData, setUserData} = useContext(Context)
    let { totalPrice } = useLocation().state;
  return (
    <div>
      <NewHeader/>
      <Paymentinformation/>
      <Footer/>
      
    </div>

  );
}

export default Paymentpage;

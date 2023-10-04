
import NewHeader from '../HeaderNotLoggedIn';
import Stript from './paymentinformation'
import Footer from '../NewFooter';
import { useContext, useEffect } from 'react';
import { Context } from '../../context/context'

const Paymentpage = () => {
    const {userData, setUserData} = useContext(Context)
    console.log(userData)
  return (
    <div>
        {userData?.username}
      <NewHeader/>
        <Stript/>
      <Footer/>
      
    </div>

  );
}

export default Paymentpage;

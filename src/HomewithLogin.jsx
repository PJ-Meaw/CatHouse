import HeaderLoggedIn from './New Component/HeaderLoggedIn';
import Advert from './New Component/Advert';
import Article from './New Component/Article';
import Slider1 from './New Component/Slider1';
import Slider2 from './New Component/Slider2';
import Slider3 from './New Component/Slider3';
import ShopBrand from './New Component/ShopBrand'
import Footer from './New Component/NewFooter';

const HomewithLogin=()=>{
    return(
        <div>
            <HeaderLoggedIn/>
            <Advert/>
            <Slider3/>
            <ShopBrand/>
            <Article/>
            <Slider1/>
            <Slider2/>
            <Footer/>
        </div>
    )
}
export default HomewithLogin;
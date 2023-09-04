import * as react from "react";
import './GroupOfNewProduct.css';
import {CardItem} from '../component/CardItem';
import RightVector from '../assets/RightVector.png'

export const GroupOfNewProduct =() =>{
    react.useEffect(()=>{
    },[])
  return (
    <div className="groupnewproduct">

        <div className='NewProduct'>
            <p>สินค้ามาใหม่</p>
        </div>

        <div className="groupproduct">
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
        </div>

        <div className='Frame1'>
            <button className="FrameText1">ดู สินค้ามาใหม่ ทั้งหมด</button>
        </div>
    </div>
  );
}

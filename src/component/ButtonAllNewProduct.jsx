import * as react from "react";
import './ButtonAllNewProduct.css';
import RightVector from '../assets/RightVector.png'

export const ButtonAllNewProduct =() =>{
    react.useEffect(()=>{

    },[])
  return (
    <div>
      <div className='FrameOfAllNewProduct'>
        <div className='TextAllOfNewProduct'>
          ดู สินค้ามาใหม่ ทั้งหมด
        </div>
        <img className="RightVector" src={RightVector}/>
      </div>
    </div>
  );
}

import * as react from "react";
import './Ad.css';
import Left from '../assets/Left.png'
import Right from '../assets/Right.png'
import Circle from '../assets/circle.png'
import Circle2 from '../assets/circle2.png'


export const Ad =() =>{
    react.useEffect(()=>{

    },[])
  return (
    <div className="Ad">
        <button className='Left' ><img src={Left}/></button>
        <div className="Text" >
            <p>พื้นที่โฆษณา/โปรโมชั่น</p>
        </div>
        <button className='Right' ><img src={Right}/></button>
            <img className='c2' src={Circle2}/>
            <img className='c1' src={Circle}/>
            <img className='c3' src={Circle2}/>
    </div>


  );
}

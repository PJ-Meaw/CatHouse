import * as react from "react";
import './RecProduct.css';
import {CardItem} from '../component/CardItem';

export const RecProduct =() =>{
    react.useEffect(()=>{
    },[])
return (
    <div className="group">
        <p className="Blank"></p>
        <span className="s">สินค้าแนะนำ</span>
        <div className="kk">
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
        </div>
        <div className="kk">
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
        </div>
        <div className="kk">
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
        </div>
    </div>
  );
}
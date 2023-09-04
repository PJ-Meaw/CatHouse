import * as react from "react";
import './Header.css';
import vector from '../assets/Vector.png'
import cathouseitlogo from '../assets/cathouseit-01 1.png'
import search from '../assets/search.png'
import cartlogo from '../assets/cart.png'
import loginlogo from '../assets/login.png'
import { Link } from "react-router-dom";

export const Header =() =>{
  const [searchInput,setSearchInput]=react.useState('')
    react.useEffect(()=>{

    },[])
  return (
    <div className="header">
        <div className="com1">
          <img className='vector' src={vector}/>
          
          <img className='cathouseitlogo' src={cathouseitlogo}/>
        </div>

        <input type="text" name="searchbar" value={searchInput} onChange={(v)=>setSearchInput(v.target.value)} class="searchbar" placeholder="ค้นหาสินค้า..." />
        <img className='search' src={search}/>

        <div className="line"></div>

        
        
        <div className="menu">
          <button class="mainpage">หน้าหลัก</button>
          <button class="product">หมวดหมู่สินค้า</button>
          <button class="monthlypromotion">โปรโมชั่นประจำเดือน</button>
          <button class="Sale">สินค้าลดราคา</button>
          <button class="popularbrands">แบรนด์ยอดนิยม</button>
          <button class="featuredarticle">บทความแนะนำ</button>
        </div>

        <button class="login"><img className='loginlogo' src={loginlogo}/>
        <Link to={'Login'} style={{textDecoration:'none',color:'#000000'}}>เข้าสู่ระบบ</Link></button>
        <button class="cart"><img className='cartlogo' src={cartlogo}/></button>

    </div>
    

  );
}

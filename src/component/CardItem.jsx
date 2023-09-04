import './CardItem.css';
import logoasus1 from '../assets/logo-asus-png-515319 1.png';
import logoasus2 from '../assets/lap1.png';
import {useState } from 'react'

export const CardItem =() =>{
  return (
    <div className='carditem'>
      <div className='block'>
        <img className='logoasus' src={logoasus1}/>
        <img className='pictureasus' src={logoasus2}/>
        <p className="detailsasus">
        <span class="b">โน๊ตบุ๊ค </span>Asus TUF A15 FA506IC-
          <br />
          HN011T Gaming Notebook
        </p>
        <div className='container'>
          <div className='priceasus'>
            31,990
            <span  className='b'> บาท</span>
          </div>
        </div>
      </div>
    </div>
  );
}

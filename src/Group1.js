import './App.css';
import logo1 from'./public/logo-asus-png-515319 1.png';
import logo2 from'./public/lap 1.png';
import {useState } from 'react'

function App() {
  const [data,setData]= useState([{
   text1:'โน๊ตบุ๊ค Asus TUF A15 ',
   text2:'FA506IC-HN011T Gaming Notebook' 
  }])

  return (
    <div className='group-14'>
      <div className='flex-col'>
        <img className='logo' src={logo1}/>
        <img className='pic1' src={logo2}/>
        <p className="Notebook1">
          {data[0].text1}
          <br />
          {data[0].text2}
        </p>
        <div className='text-contaoner'>
          <div className='price1'>
            31,990
          </div>
          <div className='currency1'>
            บาท
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

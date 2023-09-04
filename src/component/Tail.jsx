import * as react from "react";
import logopayment from '../assets/payment.png';
import './Tail.css';

export const Tail =() =>{
    const [searchInput,setSearchInput]=react.useState('')
    react.useEffect(()=>{

    },[])
  return (
    <div className="ggg">
        <div className="frame-58">
            <div className="frame-5">
                <div className="text1">
                    CatHouse.com
                </div>
                <div className="text2">
                    เกี่ยวกับCatHouse.com
                </div>
                <div className="text3">
                    เราคือตัวแทนจำหน่าย
                </div>
                <div className="text4">
                    ข้อตกลงและเงื่อนไข
                </div>
                <div className="text5">
                    นโยบายความเป็นส่วนตัว
                </div>
                <div className="text6">
                    แบนร์ที่เรามี
                </div>
            </div>

            <div className="frame-5">
                <div className="text7">
                    แผนกบริการลูกค้า
                </div>
                <div className="text8">
                    ติดต่อเรา
                </div>
                <div className="text9">
                    การสมัครสมาชิก
                </div>
                <div className="text10">
                    วิธีการซื้อสินค้า
                </div>
                <div className="text11">
                    รายละเอียดประกันสินค้า
                </div>
                <div className="text12">
                    คำถามที่พบบ่อย
                </div>
            </div>

            <div className="frame-5">
                <div className="text13">
                    รีวิวและบทความ
                </div>
                <div className="text14">
                    บทความทั้งหมด
                </div>
                <div className="text15">
                    วิธีการสั่งซื้อ
                </div>
                <div className="text16">
                    รีวิวสินค้า
                </div>
                <div className="text17">
                    เปรียบเทียบสินค้า
                </div>
                <div className="text18">
                    Best of CatHouseIT
                </div>
            </div>

            <div className="frame-5">
                <div className="text19">
                    Online Page
                </div>
                <div className="text20">
                    Facebook
                </div>
                <div className="text21">
                    Line
                </div>
                <div className="text23">
                    Instagram
                </div>
            </div>
        </div>

        <span class="textPayment">Payment Method</span>
        <img className='logopayment' src={logopayment}/>
        
    </div>
  );
}


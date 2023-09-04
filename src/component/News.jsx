import * as react from "react";
import './News.css';
import RightVector from '../assets/RightVector.png'

export const News =() =>{
    react.useEffect(()=>{

    },[])
  return (
    <div id="row" className='content'>
      <div id="col" className="box">
        <div className="box red">
          <span className="SaleItems">สินค้าลดราคา</span>
        </div>

        <div id="row2" className='box'>
          <div class="box violet">
            <p className="Title">แนะนำ 5 Keyboard Hot Swap มันคืออะไร มีตัวไหนน่าสนใจ...</p>
            <p className="Details">Keyboard Hot Swap คืออะไร หลาย <br/>คนคงเคยเห็นคำนี้ผ่านตามาบ้างหา...</p>
            <div className='Frame'>
              <div className='TextF'>
                อ่านบทความ
              </div>
              <img className="RightVector" src={RightVector}/>
            </div>
          </div>
          
          <div class="box violet">
            <p className="Title">แนะนำ 5 Keyboard Hot Swap มันคืออะไร มีตัวไหนน่าสนใจ...</p>
            <p className="Details">Keyboard Hot Swap คืออะไร หลาย <br/>คนคงเคยเห็นคำนี้ผ่านตามาบ้างหา...</p>
            <div className='Frame'>
              <div className='TextF'>
                อ่านบทความ
              </div>
              <img className="RightVector" src={RightVector}/>
            </div>
          </div>
        </div>
      </div>

      <div id="col2" className="box">
        <div class="box yellow">
          <p className="MonthlyPromotion">โปรโมชั่นประจำเดือน</p>
        </div>
        <div class="box blue">
          <p className="PopularBrands">แบรนด์ยอดนิยม</p>
        </div>
        <div class="box green">
          <p className="RecommendedArticles">บทความแนะนำ</p>
        </div>
      </div>
    </div>
  );
}

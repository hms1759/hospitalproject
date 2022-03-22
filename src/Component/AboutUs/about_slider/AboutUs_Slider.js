import React, { Component } from 'react';
import { Items } from './items';

export default function AboutUs_Slider() {
  
// export default class AboutUs_Slider extends Component {
// render (){
  return (
    <div>
         {Items.map((item, index)=> {
                  return(
                    <div className='about_rowBlock'>
<div className={item.cName}>
        <div className=" row_img">
          
          <img src={item.url} />
        </div>
        <div className=" row_text">
          <div className="about_title {}">
            <h2>{item.title}</h2>
          </div>
          <div className="about_body">{item.body}</div>
        </div>
        </div>
        </div>
                  );
              
                })
                }  
   
    </div>
  );
}
// }

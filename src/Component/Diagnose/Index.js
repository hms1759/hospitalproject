import React from 'react';
import './Diagnose.css'

export default function IndexDiagnose() {
 
  return (
    <div className='diagnose_container'>
   
      <div className='sub_container center'>
        <div className='question_container'>

   
        <div className='instruct test '>

        Which of these are you experiencing often

        </div>
        <div className='ans_selection '>
          
          <div className='ans_row'>

            <a href="/temperature"  className='dia_ans dia'>High Temperature</a>
            <a href="/eyes" className='dia_ans dia'> Eyes irritation </a> 
          </div>

          <div className='ans_row'>
            <a href="/vomits"  className='dia_ans dia'>Constant Vomiting</a>
            <a href="/pelvic" className='dia_ans dia'>Persist Pelvic Pain </a> 
          </div>
        <div className='none dia'>
        <a href="/ContactUs" className=' non'>
             None of the above
          </a> 
        </div>
          
        </div>  
        
        </div>
  
      </div>
     
    </div>
  )
}